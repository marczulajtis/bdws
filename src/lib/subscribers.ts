import { CONTACT, SITE } from "./constants";
import { button, layout, textToHtml, type Mail } from "./mail";

/** Lista „Materiały dla szkół”. Kolejne listy można dodać w przyszłości tym samym mechanizmem. */
export const LIST = "materialy-dla-szkol";

export const ROLES = [
  { value: "nauczyciel", label: "Nauczyciel / wychowawca" },
  { value: "pedagog", label: "Pedagog / psycholog szkolny" },
  { value: "dyrekcja", label: "Dyrekcja szkoły lub placówki" },
  { value: "rodzic", label: "Rodzic / opiekun" },
  { value: "inna", label: "Inna osoba" },
] as const;

export const roleLabel = (v: string | null | undefined) => ROLES.find((r) => r.value === v)?.label ?? "";

/** Treść zgody zapisywana w bazie razem z datą. Zmieniasz tekst = zmień też wersję. */
export const CONSENT_VERSION = "2026-10-22";
export const CONSENT_TEXT =
  "Chcę dostawać e-mailem informacje o materiałach pomocowych i szkoleniach Bezpieczne Dzieci w Sieci " +
  "dla szkół i placówek oświatowych. Wiem, że mogę wypisać się w każdej chwili linkiem w wiadomości.";

/** Po tylu dniach niepotwierdzony zapis jest usuwany. */
export const PENDING_DAYS = 30;

export const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const confirmUrl = (token: string) => `${SITE.url}/zapis/potwierdz?t=${token}`;
export const unsubscribeUrl = (token: string) => `${SITE.url}/zapis/wypisz?t=${token}`;
const oneClickUrl = (token: string) => `${SITE.url}/api/wypisz?t=${token}`;

/** Nagłówki, dzięki którym Gmail i inne skrzynki pokazują przycisk „Anuluj subskrypcję”. */
export function unsubscribeHeaders(token: string): Record<string, string> {
  return {
    "List-Unsubscribe": `<${oneClickUrl(token)}>, <mailto:${CONTACT.email}?subject=Wypisz%20mnie>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  };
}

const why =
  "Dostajesz tę wiadomość, bo ten adres zapisano na stronie Bezpieczne Dzieci w Sieci na listę powiadomień o materiałach dla szkół.";

export function confirmationMail(email: string, token: string): Mail {
  const url = confirmUrl(token);
  const text = [
    "Dzień dobry,",
    "dziękujemy za zapis na listę powiadomień o materiałach Bezpieczne Dzieci w Sieci dla szkół i placówek oświatowych.",
    `Potwierdź adres, klikając w link:\n${url}`,
    `Jeśli to nie Ty, zignoruj tę wiadomość. Bez potwierdzenia nie wyślemy nic więcej, a adres usuniemy po ${PENDING_DAYS} dniach.`,
    "Pozdrawiamy\nBezpieczne Dzieci w Sieci",
  ].join("\n\n");
  const html = layout(
    `<p style="margin:0 0 14px">Dzień dobry,</p>
<p style="margin:0 0 14px">dziękujemy za zapis na listę powiadomień o materiałach <b>Bezpieczne Dzieci w Sieci</b> dla szkół i placówek oświatowych. Potwierdź, że to Twój adres:</p>
${button(url, "Potwierdzam zapis")}
<p style="margin:0 0 14px;font-size:14px;color:#5a6d7b">Przycisk nie działa? Skopiuj ten adres do przeglądarki:<br><a href="${url}" style="color:#22949a;word-break:break-all">${url}</a></p>
<p style="margin:0 0 14px;font-size:14px;color:#5a6d7b">Jeśli to nie Ty, zignoruj tę wiadomość. Bez potwierdzenia nie wyślemy nic więcej, a adres usuniemy po ${PENDING_DAYS} dniach.</p>
<p style="margin:0">Pozdrawiamy<br>Bezpieczne Dzieci w Sieci</p>`,
    `Wiadomość wysłana na ${email} po zapisie na stronie.`
  );
  return { to: email, subject: "Potwierdź zapis: materiały dla szkół", html, text };
}

export function welcomeMail(email: string, token: string): Mail {
  const out = unsubscribeUrl(token);
  const text = [
    "Dzień dobry,",
    "dziękujemy za potwierdzenie. Jesteś na liście powiadomień o materiałach dla szkół i placówek oświatowych.",
    "Pracujemy nad materiałami pomocowymi i szkoleniowymi dla nauczycieli, wychowawców i pedagogów. Napiszemy, gdy będą gotowe, i od czasu do czasu z ważnymi informacjami na ich temat. Nie będzie tego dużo.",
    `Do tego czasu zajrzyj na bloga: ${SITE.url}`,
    "Pozdrawiamy\nBezpieczne Dzieci w Sieci",
    `${why} Wypisz się: ${out}`,
  ].join("\n\n");
  const html = layout(
    `<p style="margin:0 0 14px">Dzień dobry,</p>
<p style="margin:0 0 14px">dziękujemy za potwierdzenie. <b>Jesteś na liście</b> powiadomień o materiałach dla szkół i placówek oświatowych.</p>
<p style="margin:0 0 14px">Pracujemy nad materiałami pomocowymi i szkoleniowymi dla nauczycieli, wychowawców i pedagogów. Napiszemy, gdy będą gotowe, i od czasu do czasu z ważnymi informacjami na ich temat. Nie będzie tego dużo.</p>
${button(SITE.url, "Zajrzyj na bloga")}
<p style="margin:0">Pozdrawiamy<br>Bezpieczne Dzieci w Sieci</p>`,
    `${why} <a href="${out}" style="color:#5a6d7b">Wypisz się</a>.`
  );
  return { to: email, subject: "Jesteś na liście: materiały dla szkół", html, text, headers: unsubscribeHeaders(token) };
}

/** Wiadomość wysyłana z panelu do wszystkich potwierdzonych osób. */
export function newsMail(email: string, token: string | null, subject: string, body: string): Mail {
  const out = token ? unsubscribeUrl(token) : `${SITE.url}/zapis/wypisz`;
  const text = `${body.trim()}\n\nPozdrawiamy\nBezpieczne Dzieci w Sieci\n\n${why} Wypisz się: ${out}`;
  const html = layout(
    `${textToHtml(body)}<p style="margin:14px 0 0">Pozdrawiamy<br>Bezpieczne Dzieci w Sieci</p>`,
    `${why} <a href="${out}" style="color:#5a6d7b">Wypisz się</a>.`
  );
  return { to: email, subject, html, text, headers: token ? unsubscribeHeaders(token) : undefined };
}
