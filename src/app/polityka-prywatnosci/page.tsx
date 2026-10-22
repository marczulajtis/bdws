import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE } from "@/lib/constants";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Jakie dane zbiera blog Bezpieczne Dzieci w Sieci, po co i jak długo je przechowujemy. Pliki cookie, zgoda na statystyki i zapisy na powiadomienia dla szkół.",
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
          W skrócie: nie mamy reklam ani ciasteczek śledzących. Statystyki odwiedzin włączamy tylko za Twoją zgodą.
          Twój adres e-mail mamy tylko wtedy, gdy sam zapiszesz się na powiadomienia o materiałach dla szkół albo do
          nas napiszesz.
        </p>
        <div className="prose">
          <h2>Kto odpowiada za Twoje dane</h2>
          <p>
            Administratorem danych osobowych jest{" "}
            {CONTACT.owner ? <strong>{CONTACT.owner}</strong> : <>zespół prowadzący blog {SITE.name}</>}. We wszystkich
            sprawach dotyczących danych napisz do nas: {mail}.
          </p>

          <h2 id="cookies">Pliki cookie i podobne technologie</h2>
          <p>
            Przy pierwszej wizycie pytamy o zgodę w okienku na dole strony. Możesz zaakceptować wszystko, odrzucić
            wszystko albo wybrać kategorie. Domyślnie nic poza niezbędnymi elementami nie jest włączone. Swój wybór
            zmienisz lub wycofasz w każdej chwili: przyciskiem z ciasteczkiem w lewym dolnym rogu, linkiem „Ustawienia
            cookies” w stopce albo tutaj: <CookieSettingsLink className="btn btn-line" />. Wycofanie zgody nie wpływa na
            zgodność z prawem tego, co działo się przed nim. O zgodę zapytamy ponownie po 6 miesiącach albo gdy zmienimy
            używane narzędzia.
          </p>
          <ul>
            <li>
              <strong>Niezbędne (zawsze aktywne).</strong> W pamięci przeglądarki (localStorage, klucz{" "}
              <code>bdws-consent</code>) zapisujemy Twój wybór i datę decyzji, żeby nie pytać przy każdej wizycie.
              Przechowujemy go do 6 miesięcy albo do wyczyszczenia danych przeglądarki. W panelu redakcji (
              <code>/admin</code>) po zalogowaniu przeglądarka redaktora dostaje ciasteczko sesji Supabase, bez którego
              logowanie nie działa. Czytelników to nie dotyczy. Podstawa: art. 399 ust. 3 Prawa komunikacji
              elektronicznej (niezbędność do świadczenia usługi).
            </li>
            <li>
              <strong>Statystyki (tylko za zgodą).</strong> Vercel Web Analytics, opisane niżej. Skrypt ładuje się
              dopiero po zaznaczeniu tej kategorii albo kliknięciu „Akceptuję wszystkie”.
            </li>
          </ul>
          <p>Nie używamy ciasteczek reklamowych, marketingowych ani pikseli mediów społecznościowych.</p>

          <h2>Statystyki odwiedzin</h2>
          <p>
            Jeśli się zgodzisz, korzystamy z Vercel Web Analytics, żeby wiedzieć, które wpisy są czytane i skąd
            przychodzą czytelnicy. To narzędzie nie zapisuje ciasteczek i nie tworzy profili użytkowników. Widzimy tylko
            zbiorcze liczby: odsłony, odwiedzane strony, kraj, rodzaj urządzenia i przeglądarki oraz stronę, z której
            przyszedł czytelnik. Odwiedzający są rozróżniani przez skrót generowany z danych zapytania, który zmienia się
            codziennie, więc nie da się na jego podstawie rozpoznać Cię następnego dnia.
          </p>
          <p>Podstawa prawna: Twoja zgoda (art. 6 ust. 1 lit. a RODO i art. 399 ust. 1 Prawa komunikacji elektronicznej).</p>

          <h2>Hosting i logi serwera</h2>
          <p>
            Strona działa na serwerach Vercel Inc., a wpisy i lista zapisów na powiadomienia są przechowywane w bazie
            Supabase. Jak każdy serwer
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
            Czcionki i zdjęcia serwujemy z naszej domeny, więc Twoja przeglądarka nie łączy się przy tym z Google
            Fonts ani innymi serwisami.
          </p>
          <p>
            Link do naszego Instagrama to zwykły odnośnik, a nie wtyczka. Meta dowiaduje się o Tobie dopiero wtedy, gdy
            w niego klikniesz. Na Instagramie obowiązuje{" "}
            <a href="https://privacycenter.instagram.com/policy" {...ext}>polityka prywatności Instagrama</a>.
          </p>

          <h2 id="zapisy">Zapisy na powiadomienia o materiałach dla szkół</h2>
          <p>
            Na stronie <Link href="/dla-szkol">Dla szkół</Link> możesz zostawić adres e-mail, żebyśmy dali znać, gdy
            przygotowywane przez nas materiały pomocowe i szkoleniowe dla szkół i placówek oświatowych będą gotowe.
          </p>
          <ul>
            <li>
              <strong>Jakie dane:</strong> adres e-mail, opcjonalnie informacja, kim jesteś (np. nauczyciel, pedagog,
              rodzic), treść zgody, którą zaznaczyłeś, data zapisu i data potwierdzenia. Nie pytamy o imię, nazwisko
              ani nazwę szkoły.
            </li>
            <li>
              <strong>Po co:</strong> żeby wysłać Ci link do potwierdzenia zapisu, krótkie potwierdzenie, że jesteś na
              liście, a potem informacje o gotowych materiałach i szkoleniach oraz ważne zmiany na ich temat. Nie
              wysyłamy reklam innych firm i nikomu nie sprzedajemy ani nie udostępniamy listy.
            </li>
            <li>
              <strong>Podstawa prawna:</strong> Twoja zgoda (art. 6 ust. 1 lit. a RODO oraz art. 398 Prawa komunikacji
              elektronicznej). Zapis jest dobrowolny. Zgodę możesz wycofać w każdej chwili, bez podawania powodu.
            </li>
            <li>
              <strong>Potwierdzenie zapisu:</strong> po wysłaniu formularza dostajesz e-mail z linkiem. Dopóki go nie
              klikniesz, nie wyślemy nic więcej. Niepotwierdzone adresy usuwamy po 30 dniach.
            </li>
            <li>
              <strong>Jak długo:</strong> do chwili, gdy się wypiszesz. W każdej wiadomości jest link „Wypisz się”. Po
              kliknięciu usuwamy Twój adres z listy od razu. Możesz też napisać na {mail}.
            </li>
            <li>
              <strong>Kto technicznie przetwarza dane:</strong> listę przechowujemy w bazie Supabase (Supabase Inc.), a
              wiadomości wysyłamy przez Resend (Resend, Inc., USA). Obie firmy działają na nasze zlecenie, na podstawie
              umów powierzenia. Jeśli dane trafiają poza Europejski Obszar Gospodarczy, chronią je standardowe klauzule
              umowne zatwierdzone przez Komisję Europejską.
            </li>
            <li>
              <strong>Bez śledzenia:</strong> nie sprawdzamy, czy otwierasz nasze wiadomości ani w co klikasz, i nie
              tworzymy profili odbiorców.
            </li>
          </ul>

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
            <li>wycofać zgodę w dowolnym momencie (np. wypisać się z powiadomień dla szkół),</li>
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
