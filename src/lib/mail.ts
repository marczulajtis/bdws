import { CONTACT, SITE } from "./constants";

/**
 * Wysyłka e-maili przez Resend (resend.com), bez dodatkowych bibliotek.
 * Zmienne środowiskowe (tylko serwer):
 *   RESEND_API_KEY  klucz API z Resend
 *   MAIL_FROM       nadawca z domeny zweryfikowanej w Resend,
 *                   np. "Bezpieczne Dzieci w Sieci <powiadomienia@bezpiecznedzieciwsieci.pl>"
 */
export type Mail = {
  to: string;
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
};

/** MAIL_FROM bez cudzysłowów wklejonych w panelu hostingu ("Nazwa <a@b.pl>" -> Nazwa <a@b.pl>). */
function mailFrom(): string {
  return (process.env.MAIL_FROM ?? "").trim().replace(/^["']+|["']+$/g, "").trim();
}

export const mailConfigured = () => Boolean(process.env.RESEND_API_KEY && process.env.MAIL_FROM);

function payload(m: Mail) {
  return {
    from: mailFrom(),
    to: [m.to],
    reply_to: CONTACT.email,
    subject: m.subject,
    html: m.html,
    text: m.text,
    headers: m.headers,
  };
}

async function post(path: string, body: unknown): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`https://api.resend.com${path}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (res.ok) return { ok: true };
    const err = await res.text();
    console.error("[mail] Resend", res.status, err);
    return { ok: false, error: `${res.status}: ${err.slice(0, 200)}` };
  } catch (e) {
    console.error("[mail]", e);
    return { ok: false, error: e instanceof Error ? e.message : "błąd sieci" };
  }
}

export async function sendMail(m: Mail) {
  if (!mailConfigured()) return { ok: false, error: "Brak RESEND_API_KEY lub MAIL_FROM." };
  return post("/emails", payload(m));
}

/** Wysyła wiele wiadomości (każda do jednej osoby) paczkami po 100. Zwraca liczbę wysłanych. */
export async function sendBatch(mails: Mail[]): Promise<{ sent: number; error?: string }> {
  if (!mailConfigured()) return { sent: 0, error: "Brak RESEND_API_KEY lub MAIL_FROM." };
  let sent = 0;
  for (let i = 0; i < mails.length; i += 100) {
    const chunk = mails.slice(i, i + 100);
    const r = await post("/emails/batch", chunk.map(payload));
    if (!r.ok) return { sent, error: r.error };
    sent += chunk.length;
  }
  return { sent };
}

/* ---------- szablon wiadomości ---------- */

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Zwykły tekst (akapity oddzielone pustą linią) → prosty HTML z klikalnymi linkami. */
export function textToHtml(text: string): string {
  return text
    .replace(/\r/g, "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const html = escapeHtml(p)
        .replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)])/g, '<a href="$1" style="color:#22949a">$1</a>')
        .replace(/\n/g, "<br>");
      return `<p style="margin:0 0 14px">${html}</p>`;
    })
    .join("");
}

export function button(href: string, label: string) {
  return `<p style="margin:22px 0"><a href="${escapeHtml(href)}" style="display:inline-block;background:#22949a;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:999px">${escapeHtml(label)}</a></p>`;
}

/** Ramka w kolorach marki. `footer` to drobny tekst pod treścią (np. link do wypisania). */
export function layout(innerHtml: string, footerHtml: string) {
  return `<!doctype html><html lang="pl"><body style="margin:0;background:#f8f6ef;padding:24px 12px;font-family:Arial,Helvetica,sans-serif;color:#1d3247;font-size:16px;line-height:1.55">
<div style="max-width:560px;margin:0 auto;background:#fffefa;border:1.5px dashed #13395c;border-radius:22px;padding:26px 24px">
<p style="margin:0 0 18px;font-weight:800;letter-spacing:.04em;text-transform:uppercase;font-size:13px;color:#13395c">Bezpieczne <span style="color:#22949a">Dzieci w Sieci</span></p>
${innerHtml}
</div>
<div style="max-width:560px;margin:14px auto 0;font-size:12px;color:#5a6d7b;line-height:1.5;text-align:center">${footerHtml}<br><a href="${SITE.url}" style="color:#5a6d7b">${SITE.url.replace(/^https?:\/\//, "")}</a></div>
</body></html>`;
}
