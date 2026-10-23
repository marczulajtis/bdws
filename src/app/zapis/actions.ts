"use server";

import { redirect } from "next/navigation";
import { mailConfigured, sendMail } from "@/lib/mail";
import { createServiceClient } from "@/lib/supabase/service";
import { CONTACT } from "@/lib/constants";
import {
  CONSENT_TEXT,
  CONSENT_VERSION,
  LIST,
  PENDING_DAYS,
  ROLES,
  UUID,
  confirmationMail,
  welcomeMail,
} from "@/lib/subscribers";

export type SignupState = { ok?: boolean; email?: string; error?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Nie wysyłamy ponownie linku do tego samego adresu częściej niż co 5 minut. */
const RESEND_MINUTES = 5;
/** Hamulec na wypadek zalewu spamem: maks. tyle nowych zapisów na godzinę. */
const MAX_NEW_PER_HOUR = 60;

export async function subscribe(_: SignupState, formData: FormData): Promise<SignupState> {
  // pułapka na boty: pole niewidoczne dla ludzi i zbyt szybkie wysłanie formularza
  if (String(formData.get("website") ?? "")) return { ok: true };
  const started = Number(formData.get("t") ?? 0);
  if (started && Date.now() - started < 2000) return { ok: true };

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const roleRaw = String(formData.get("role") ?? "");
  const role = ROLES.some((r) => r.value === roleRaw) ? roleRaw : null;

  if (!EMAIL.test(email) || email.length > 254) return { error: "Wpisz poprawny adres e-mail." };
  if (formData.get("zgoda") !== "on") return { error: "Zaznacz zgodę, żebyśmy mogli wysłać Ci powiadomienie." };

  const db = createServiceClient();
  if (!db || !mailConfigured()) {
    return { error: `Zapisy chwilowo nie działają. Napisz do nas na ${CONTACT.email}, a dopiszemy Cię ręcznie.` };
  }

  const now = new Date();
  // sprzątanie: niepotwierdzone zapisy starsze niż 30 dni
  await db
    .from("subscribers")
    .delete()
    .eq("status", "pending")
    .lt("created_at", new Date(now.getTime() - PENDING_DAYS * 86_400_000).toISOString());

  const { data: existing, error: readError } = await db
    .from("subscribers")
    .select("id,status,token,last_sent_at")
    .eq("list", LIST)
    .eq("email", email)
    .maybeSingle();
  if (readError) {
    console.error("[zapis] odczyt subscribers:", readError.code, readError.message);
    return { error: "Nie udało się zapisać. Spróbuj za chwilę." };
  }

  // Ta sama odpowiedź niezależnie od tego, czy adres już jest na liście (nie zdradzamy, kto się zapisał).
  if (existing?.status === "confirmed") return { ok: true, email };
  if (existing?.last_sent_at && now.getTime() - new Date(existing.last_sent_at).getTime() < RESEND_MINUTES * 60_000) {
    return { ok: true, email };
  }

  const consent = `${CONSENT_TEXT} [wersja ${CONSENT_VERSION}]`;
  let token: string;
  if (existing) {
    const { error } = await db
      .from("subscribers")
      .update({ role, consent_text: consent, consent_at: now.toISOString(), last_sent_at: now.toISOString(), updated_at: now.toISOString() })
      .eq("id", existing.id);
    if (error) console.error("[zapis] update subscribers:", error.code, error.message);
    if (error) return { error: "Nie udało się zapisać. Spróbuj za chwilę." };
    token = existing.token;
  } else {
    const { count } = await db
      .from("subscribers")
      .select("id", { count: "exact", head: true })
      .gt("created_at", new Date(now.getTime() - 3_600_000).toISOString());
    if ((count ?? 0) >= MAX_NEW_PER_HOUR) return { error: "Dużo zapisów naraz. Spróbuj za godzinę." };

    const { data, error } = await db
      .from("subscribers")
      .insert({ email, list: LIST, role, consent_text: consent, consent_at: now.toISOString(), last_sent_at: now.toISOString() })
      .select("token")
      .single();
    if (error) console.error("[zapis] insert subscribers:", error.code, error.message);
    if (error || !data) return { error: "Nie udało się zapisać. Spróbuj za chwilę." };
    token = data.token;
  }

  const sent = await sendMail(confirmationMail(email, token));
  if (!sent.ok) {
    await db.from("subscribers").update({ last_sent_at: null }).eq("token", token);
    return { error: `Nie udało się wysłać e-maila z potwierdzeniem. Spróbuj ponownie albo napisz na ${CONTACT.email}.` };
  }
  return { ok: true, email };
}

export async function confirmSubscription(formData: FormData) {
  const token = String(formData.get("t") ?? "");
  const db = createServiceClient();
  if (!db || !UUID.test(token)) redirect("/zapis/potwierdz?stan=blad");

  const { data: row } = await db.from("subscribers").select("email,status").eq("token", token).maybeSingle();
  if (!row) redirect("/zapis/potwierdz?stan=blad");
  if (row.status !== "confirmed") {
    const now = new Date().toISOString();
    await db.from("subscribers").update({ status: "confirmed", confirmed_at: now, updated_at: now }).eq("token", token);
    await sendMail(welcomeMail(row.email, token));
  }
  redirect("/zapis/potwierdz?stan=ok");
}

export async function unsubscribe(formData: FormData) {
  const token = String(formData.get("t") ?? "");
  const db = createServiceClient();
  if (db && UUID.test(token)) await db.from("subscribers").delete().eq("token", token);
  // Zawsze ta sama odpowiedź: adres jest usunięty albo nie było go na liście.
  redirect("/zapis/wypisz?stan=ok");
}
