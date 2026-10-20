import type { Metadata } from "next";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Napisz do nas: pytania o gry, aplikacje i ustawienia, propozycje tematów, współpraca ze szkołami.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <section className="wrap">
      <div className="article">
        <h1>Kontakt</h1>
        <p className="lead">
          Jesteśmy rodzicami, którzy na co dzień pracują w IT. Chętnie odpowiemy na pytanie o grę, aplikację
          albo ustawienie, z którym nie możesz sobie poradzić.
        </p>
        <div className="prose">
          <h2>Napisz do nas</h2>
          <ul>
            <li>
              <strong>E-mail:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">{SITE.handle}</a>{" "}
              (wiadomość prywatna)
            </li>
          </ul>
          <p>Odpisujemy zwykle w ciągu kilku dni. Prowadzimy blog po pracy, więc czasem trwa to dłużej.</p>

          <h2>W jakich sprawach</h2>
          <ul>
            <li>pytania o konkretne gry, aplikacje i ustawienia kontroli rodzicielskiej,</li>
            <li>propozycje tematów, o których mamy napisać,</li>
            <li>błędy i nieaktualne informacje we wpisach (aplikacje zmieniają się szybko),</li>
            <li>materiały i spotkania dla szkół.</li>
          </ul>

          <aside className="tip">
            <b className="tip-label">Gdy potrzebna jest pomoc od razu</b>
            <p>
              Nie jesteśmy telefonem zaufania i nie odpowiadamy na bieżąco. Jeśli dziecku dzieje się krzywda
              w sieci, skorzystaj z pomocy specjalistów:
            </p>
            <ul style={{ margin: "8px 0 0" }}>
              <li><strong>112</strong>: zagrożenie życia lub zdrowia,</li>
              <li><strong>116 111</strong>: bezpłatny telefon zaufania dla dzieci i młodzieży,</li>
              <li><strong>800 100 100</strong>: bezpłatny telefon dla rodziców i nauczycieli,</li>
              <li>
                <a href="https://dyzurnet.pl" target="_blank" rel="noopener noreferrer">Dyżurnet.pl</a>: zgłaszanie
                nielegalnych treści w internecie.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
