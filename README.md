# Bezpieczne Dzieci w Sieci — blog

Blog dla rodziców, szkół i opiekunów z panelem admina.
Stack: **Next.js 15 (App Router) + React 19 + TypeScript + Supabase** (baza Postgres, logowanie, przechowywanie okładek).

## Co jest w środku

**Strona publiczna**
- `/dla-szkol` — zapisy na powiadomienia o materiałach dla szkół
- `/` — strona główna z wyróżnionym wpisem, filtrami kategorii (`?kategoria=`), wieku dziecka (`?wiek=`) i wyszukiwarką (`?q=`)
- `/wpis/[slug]` — artykuł z czasem czytania, ramką „Wskazówka dla rodzica” i przyciskiem kopiowania linku
- `sitemap.xml`, `robots.txt`, metadane Open Graph dla każdego wpisu
- jasny i ciemny motyw (według ustawień systemu)

**Panel admina** (`/admin`)
- logowanie e-mailem i hasłem
- lista wpisów z zakładkami: wszystkie / opublikowane / szkice
- edytor z paskiem narzędzi i podglądem na żywo
- szkice, publikacja, cofanie do szkiców, usuwanie (z potwierdzeniem)
- wyróżnienie wpisu na stronie głównej (zawsze tylko jeden)
- okładki: infografika lub zrzut ekranu (Supabase Storage). Bez okładki wpis dostaje kolorowy kafelek z nazwą kategorii.

Dostęp do zapisu pilnuje baza (Row Level Security), nie tylko interfejs: czytelnicy widzą wyłącznie opublikowane wpisy, a zmieniać je mogą tylko konta z tabeli `admins`.

## Uruchomienie krok po kroku

1. **Załóż projekt w Supabase** na [supabase.com](https://supabase.com) (darmowy plan wystarczy).
2. **Utwórz tabele:** Supabase → SQL Editor → wklej `supabase/schema.sql` → Run.
   Opcjonalnie wklej i uruchom też `supabase/seed.sql` (dwa startowe wpisy).
3. **Załóż konto redakcji:** Authentication → Users → Add user → Create new user (e-mail + hasło, zaznacz „Auto Confirm User”).
4. **Nadaj mu uprawnienia** w SQL Editor:
   ```sql
   insert into public.admins (user_id)
   select id from auth.users where email = 'twoj@email.pl';
   ```
   Tak samo dodasz męża albo kolejne osoby z redakcji.
5. **Wyłącz publiczną rejestrację:** Authentication → Sign In / Providers → Email → wyłącz „Allow new users to sign up”. Konta zakładasz wtedy tylko Ty.
6. **Zmienne środowiskowe:**
   ```bash
   cp .env.example .env.local
   ```
   Uzupełnij `NEXT_PUBLIC_SUPABASE_URL` i `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Project Settings → API).
7. **Start:**
   ```bash
   npm install
   npm run dev
   ```
   Blog: http://localhost:3000, panel: http://localhost:3000/admin

## Lista zapisów „Materiały dla szkół” (formularz i e-maile)

Formularz jest na stronie `/dla-szkol` (prowadzi do niego przycisk „Powiadom mnie” na stronie głównej).
Zapis działa z podwójnym potwierdzeniem: po wysłaniu formularza osoba dostaje e-mail z linkiem, a po kliknięciu trafia na listę i dostaje krótkie powitanie. W każdej wiadomości jest link „Wypisz się” (i przycisk „Anuluj subskrypcję” w Gmailu). Listę widzisz w panelu: **/admin/zapisy** (podgląd, usuwanie, eksport CSV, wysyłka wiadomości do wszystkich potwierdzonych, najpierw test na Twój adres).

Jednorazowa konfiguracja:

1. **Tabele:** Supabase → SQL Editor → wklej `supabase/zapisy.sql` → Run.
2. **Klucz serwera Supabase:** Project Settings → API → `service_role` (secret). Wpisz go jako `SUPABASE_SERVICE_ROLE_KEY` w `.env` i w Vercel (Settings → Environment Variables). Nigdy nie dodawaj przedrostka `NEXT_PUBLIC_` i nie wklejaj go do kodu.
3. **Resend (wysyłka e-maili):** na [resend.com](https://resend.com) → Domains → Add domain → `bezpiecznedzieciwsieci.pl`, region EU. Resend pokaże rekordy DNS (TXT/MX dla podomeny `send` i DKIM). Dodaj je w panelu DNS domeny w az.pl. Poczta w az.pl działa dalej bez zmian, bo rekordy dotyczą tylko podomeny wysyłkowej. Po weryfikacji: API Keys → Create (uprawnienie „Sending access”).
4. **Zmienne:**
   ```bash
   SUPABASE_SERVICE_ROLE_KEY=...
   RESEND_API_KEY=re_...
   MAIL_FROM="Bezpieczne Dzieci w Sieci <powiadomienia@bezpiecznedzieciwsieci.pl>"
   ```
   Odpowiedzi na e-maile trafiają na adres z `CONTACT.email` (`src/lib/constants.ts`).
5. Redeploy w Vercel. Zapisz się testowo na `/dla-szkol` i sprawdź, czy przychodzi e-mail.

Darmowy plan Resend: 100 e-maili dziennie i 3000 miesięcznie. Przy większej liście wysyłka z panelu zatrzyma się na limicie (panel pokaże, ilu osobom wysłano).

## Wdrożenie (Vercel)

1. Wrzuć projekt na GitHub.
2. Na [vercel.com](https://vercel.com) → Add New Project → wybierz repozytorium.
3. Dodaj te same zmienne środowiskowe, a `NEXT_PUBLIC_SITE_URL` ustaw na docelową domenę (np. `https://bezpiecznedzieciwsieci.pl`).
4. Deploy. Własną domenę podpinasz w Settings → Domains.

Strony publiczne odświeżają się co 60 sekund, a po zapisie w panelu od razu.

## Jak formatować treść wpisu

| Wpisujesz | Wychodzi |
|---|---|
| `## Tytuł sekcji` | nagłówek |
| `### Podtytuł` | mniejszy nagłówek |
| `**tekst**` / `*tekst*` | pogrubienie / kursywa |
| `- punkt` | lista punktowana |
| `1. krok` | lista numerowana |
| `> cytat` | cytat |
| `!! treść` | ramka „Wskazówka dla rodzica” |
| `[opis](https://…)` | link |
| `---` | linia oddzielająca |
| `![podpis](https://…)` | zdjęcie (przycisk „Zdjęcie”, wklejenie Cmd+V albo przeciągnięcie pliku) |
| `:::galeria` … `:::` | kilka zdjęć obok siebie (przycisk „Galeria”) |
| `[ZRZUT 3: opis (wskazówka)]` | miejsce na zrzut, widoczne tylko w panelu |

Treść jest zawsze escapowana, więc wklejony HTML nie wykona się na stronie.

## Dostosowanie

- Kategorie i grupy wiekowe: `src/lib/constants.ts`
- Kolory i typografia: zmienne na początku `src/app/globals.css`
- Zdjęcia na stronie głównej: `PHOTOS` w `src/lib/constants.ts`. Pliki leżą w `public/images/` (baner `hero.jpg` 2400×1200, sekcja „Kim jesteśmy” `kim-jestesmy.jpg` 1600×1200). Żeby podmienić, nadpisz plik o tej samej nazwie. Zdjęcie w pasie z Instagramem jest z Unsplash; po podmianie na własne usuń z niego pola `credit` i `page`.
- Opisy kategorii w pasie „O czym piszemy”: `CATEGORY_INFO` w `src/lib/constants.ts`
- Logo: `src/components/Logo.tsx` (uproszczony SVG — możesz podmienić na swój plik z Canvy, np. `public/logo.svg`)

## Struktura

```
src/
  app/
    page.tsx              strona główna
    wpis/[slug]/page.tsx  artykuł
    admin/                panel: lista, edytor, logowanie, server actions
    sitemap.ts, robots.ts
  components/             nagłówek, stopka, kafelki, okładki, wyszukiwarka
  lib/                    Supabase, zapytania, parser treści, stałe
  middleware.ts           ochrona /admin
supabase/
  schema.sql              tabele, uprawnienia (RLS), bucket na okładki
  seed.sql                startowe wpisy
```
