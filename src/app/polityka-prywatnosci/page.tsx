import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Jakie dane zbiera blog Bezpieczne Dzieci w Sieci, po co i jak długo je przechowujemy. Bez ciasteczek śledzących.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function PrivacyPage() {
  const mail = <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;
  return (
    <section className="wrap">
      <div className="article">
        <h1>Polityka prywatności</h1>
        <p className="lead">
          W skrócie: nie mamy ciasteczek śledzących, reklam ani newslettera. Nie wiemy, kim jesteś, i nie próbujemy
          się tego dowiedzieć.
        </p>
        <div className="prose">
          <h2>Kto odpowiada za Twoje dane</h2>
          <p>
            Administratorem danych osobowych jest{" "}
            {CONTACT.owner ? <strong>{CONTACT.owner}</strong> : <>zespół prowadzący blog {SITE.name}</>}. We wszystkich
            sprawach dotyczących danych napisz do nas: {mail}.
          </p>

          <h2>Ciasteczka (cookies)</h2>
          <p>
            Czytelnikom bloga nie zapisujemy żadnych ciasteczek. Dlatego nie zobaczysz u nas okienka ze zgodą na
            cookies.
          </p>
          <p>
            Wyjątek to panel redakcji (<code>/admin</code>). Po zalogowaniu przeglądarka redaktora dostaje ciasteczko
            sesji, bez którego logowanie nie działa. Czytelników to nie dotyczy.
          </p>

          <h2>Statystyki odwiedzin</h2>
          <p>
            Korzystamy z Vercel Web Analytics, żeby wiedzieć, które wpisy są czytane i skąd przychodzą czytelnicy. To
            narzędzie nie używa ciasteczek i nie tworzy profili użytkowników. Widzimy tylko zbiorcze liczby: odsłony,
            odwiedzane strony, kraj, rodzaj urządzenia i przeglądarki oraz stronę, z której przyszedł czytelnik.
            Odwiedzający są rozróżniani przez skrót generowany z danych zapytania, który zmienia się codziennie, więc nie
            da się na jego podstawie rozpoznać Cię następnego dnia.
          </p>
          <p>
            Podstawa prawna: nasz prawnie uzasadniony interes, czyli rozwój bloga (art. 6 ust. 1 lit. f RODO).
          </p>

          <h2>Hosting i logi serwera</h2>
          <p>
            Strona działa na serwerach Vercel Inc., a wpisy są przechowywane w bazie Supabase. Jak każdy serwer
            internetowy, Vercel technicznie przetwarza adres IP i informacje o przeglądarce, żeby w ogóle wyświetlić
            stronę, a krótkotrwale zapisuje je w logach w celach bezpieczeństwa. Nie używamy tych danych do
            identyfikowania czytelników.
          </p>
          <p>
            Vercel może przetwarzać dane poza Europejskim Obszarem Gospodarczym, m.in. w USA. Opiera się wtedy na
            standardowych klauzulach umownych zatwierdzonych przez Komisję Europejską i na ramach EU-U.S. Data Privacy
            Framework.
          </p>

          <h2>Treści z innych serwisów</h2>
          <p>
            Część elementów strony ładuje się z zewnętrznych serwerów: czcionki z Google Fonts, a niektóre zdjęcia
            z Unsplash. Twoja przeglądarka łączy się wtedy z tymi serwisami i przekazuje im swój adres IP. Szczegóły
            znajdziesz w politykach{" "}
            <a href="https://policies.google.com/privacy?hl=pl" {...ext}>Google</a> i{" "}
            <a href="https://unsplash.com/privacy" {...ext}>Unsplash</a>.
          </p>
          <p>
            Link do naszego Instagrama to zwykły odnośnik, a nie wtyczka. Meta dowiaduje się o Tobie dopiero wtedy, gdy
            w niego klikniesz. Na Instagramie obowiązuje{" "}
            <a href="https://privacycenter.instagram.com/policy" {...ext}>polityka prywatności Instagrama</a>.
          </p>

          <h2>Gdy do nas piszesz</h2>
          <p>
            Jeśli napiszesz e-mail albo wiadomość na Instagramie, przetwarzamy Twój adres, nazwę konta i treść
            wiadomości, żeby odpowiedzieć (art. 6 ust. 1 lit. f RODO). Korespondencję przechowujemy tak długo, jak to
            potrzebne do rozmowy, a potem najwyżej przez rok. Usuniemy ją wcześniej, jeśli poprosisz.
          </p>
          <p>
            Prosimy: nie przesyłaj nam danych ani zdjęć dzieci. Opisz sytuację ogólnie, a my postaramy się pomóc.
          </p>

          <h2>Twoje prawa</h2>
          <p>Masz prawo:</p>
          <ul>
            <li>dowiedzieć się, jakie Twoje dane mamy, i dostać ich kopię,</li>
            <li>poprawić je albo poprosić o ich usunięcie,</li>
            <li>ograniczyć ich przetwarzanie,</li>
            <li>sprzeciwić się przetwarzaniu opartemu na naszym prawnie uzasadnionym interesie,</li>
            <li>
              złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa,{" "}
              <a href="https://uodo.gov.pl" {...ext}>uodo.gov.pl</a>).
            </li>
          </ul>
          <p>Żeby skorzystać z tych praw, napisz na {mail}.</p>

          <h2>Zmiany</h2>
          <p>
            Gdy zmienimy sposób działania strony, zaktualizujemy też ten tekst. Ostatnia aktualizacja:{" "}
            {CONTACT.policyUpdated}.
          </p>
          <p>
            Masz pytanie? Zajrzyj na stronę <Link href="/kontakt">Kontakt</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
