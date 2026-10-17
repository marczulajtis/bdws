# Bezpieczne Dzieci w Sieci — blog

Blog dla rodziców, szkół i opiekunów z panelem admina.
Stack: **Next.js 15 (App Router) + React 19 + TypeScript + Supabase** (baza Postgres, logowanie, przechowywanie okładek).

## Co jest w środku

**Strona publiczna**
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

Treść jest zawsze escapowana, więc wklejony HTML nie wykona się na stronie.

## Dostosowanie

- Kategorie i grupy wiekowe: `src/lib/constants.ts`
- Kolory i typografia: zmienne na początku `src/app/globals.css`
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
