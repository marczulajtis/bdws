"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { mailConfigured, sendBatch, sendMail } from "@/lib/mail";
import { LIST, newsMail } from "@/lib/subscribers";

export type SendState = { ok?: string; error?: string };

export async function sendNews(_: SendState, formData: FormData): Promise<SendState> {
  const { supabase, user, isAdmin } = await requireAdmin();
  if (!isAdmin) return { error: "To konto nie ma uprawnień redakcji." };
  if (!mailConfigured()) return { error: "Wysyłka nie jest skonfigurowana: brak RESEND_API_KEY lub MAIL_FROM (README)." };

  const subject = String(formData.get("subject") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const mode = String(formData.get("mode") ?? "test");
  if (!subject || subject.length > 150) return { error: "Dodaj temat (do 150 znaków)." };
  if (body.length < 20) return { error: "Treść jest za krótka." };

  if (mode === "test") {
    if (!user.email) return { error: "Twoje konto nie ma adresu e-mail." };
    const r = await sendMail(newsMail(user.email, null, `[TEST] ${subject}`, body));
    return r.ok ? { ok: `Wysłano test na ${user.email}.` } : { error: `Nie udało się wysłać testu: ${r.error}` };
  }

  if (formData.get("sure") !== "on") return { error: "Zaznacz, że chcesz wysłać wiadomość do całej listy." };

  const { data, error } = await supabase
    .from("subscribers")
    .select("email,token")
    .eq("list", LIST)
    .eq("status", "confirmed");
  if (error) return { error: `Nie udało się pobrać listy: ${error.message}` };
  if (!data?.length) return { error: "Na liście nie ma jeszcze potwierdzonych osób." };

  const result = await sendBatch(data.map((s) => newsMail(s.email, s.token, subject, body)));
  await supabase.from("mailings").insert({ list: LIST, subject, body, recipients: result.sent, sent_by: user.id });
  revalidatePath("/admin/zapisy");

  if (result.error) {
    return { error: `Wysłano do ${result.sent} z ${data.length} osób, potem błąd: ${result.error}` };
  }
  return { ok: `Wysłano do ${result.sent} ${result.sent === 1 ? "osoby" : "osób"}.` };
}

export async function deleteSubscriber(formData: FormData) {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return;
  const id = String(formData.get("id") ?? "");
  await supabase.from("subscribers").delete().eq("id", id);
  revalidatePath("/admin/zapisy");
}
