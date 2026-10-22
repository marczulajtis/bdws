-- Bezpieczne Dzieci w Sieci: 8 instrukcji krok po kroku ze zrzutami ekranu (szkice).
-- Uruchom w Supabase: SQL Editor → New query → wklej całość → Run.
--
-- Co robi skrypt:
--   • nowe wpisy (Fortnite, TikTok, YouTube) dodaje jako SZKICE,
--   • wpisy, które już są w bazie jako SZKICE (Roblox, Family Link, iPhone, Konsole, Discord),
--     podmienia na wersję z instrukcją. Wstęp i zakończenie starej wersji zostały w treści,
--   • wpisów już OPUBLIKOWANYCH nie rusza (warunek where status = 'draft').
-- Można uruchomić ponownie: nadpisze tylko szkice.
--
-- Zdjęcia: w panelu otwórz szkic, kliknij „Przejdź do następnego” przy licznikach zrzutów,
-- a potem „Zdjęcie” (jeden zrzut) albo „Galeria” (kilka obok siebie). Linijki [ZRZUT …] widać tylko w panelu.
-- Tekst w nawiasie w linijce [ZRZUT …] to wskazówka dla Was (co zaznaczyć, co zamazać). Nie trafia do podpisu.
--
-- Plan publikacji (piątki):
--   23.10.2026  Roblox: przewodnik dla rodziców  (/wpis/roblox-przewodnik-dla-rodzicow, zrzutów: 8, było w bazie)
--   30.10.2026  Family Link na Androidzie: konfiguracja w 20 minut  (/wpis/family-link-krok-po-kroku, zrzutów: 8, było w bazie)
--   01.12.2026  Fortnite: PIN, czat, zakupy i limit czasu w 10 minut  (/wpis/fortnite-kontrola-rodzicielska, zrzutów: 7, nowy)
--   04.12.2026  Konsola pod choinkę: Switch, PlayStation i Xbox krok po kroku  (/wpis/konsole-kontrola-rodzicielska-switch-xbox-playstation, zrzutów: 8, było w bazie)
--   08.01.2027  iPhone i iPad: Czas przed ekranem dla dziecka  (/wpis/nowy-iphone-dziecka-czas-przed-ekranem, zrzutów: 8, było w bazie)
--   01.02.2027  TikTok: Połączenie rodzinne krok po kroku  (/wpis/tiktok-polaczenie-rodzinne, zrzutów: 6, nowy)
--   03.02.2027  YouTube: konto nadzorowane czy YouTube Kids? Konfiguracja krok po kroku  (/wpis/youtube-kids-czy-konto-nadzorowane, zrzutów: 5, nowy)
--   12.02.2027  Discord: co musi wiedzieć rodzic  (/wpis/discord-co-musi-wiedziec-rodzic, zrzutów: 5, było w bazie)
--
-- Do sprawdzenia przy robieniu zrzutów (tego nie ma w tekście dla czytelników):
--   • nazwy przycisków i menu zmieniają się po aktualizacjach. Jeśli na Waszym ekranie są inne, poprawcie tekst,
--   • PlayStation i Xbox mają menu często po angielsku, Roblox/TikTok/YouTube: sprawdźcie polskie nazwy,
--   • iPhone: zrzuty na iOS 27,
--   • Konsole: wpis można podzielić na trzy osobne (Switch, PlayStation, Xbox), jeśli wolicie krótsze.

insert into public.posts (slug, title, excerpt, category, ages, body, featured, status, published_at)
values

-- ---------------------------------------------------------------- 23.10.2026
(
  'roblox-przewodnik-dla-rodzicow',
  'Roblox: przewodnik dla rodziców',
  'Czym jest Roblox, z kim dziecko może tam pisać i jak w kwadrans ustawić konto tak, żeby granie było bezpieczniejsze.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Roblox to jedna z najpopularniejszych platform wśród dzieci w wieku szkolnym. Jeśli Twoje dziecko o nim mówi, warto wiedzieć, jak działa, zanim cokolwiek zakażesz albo na coś pozwolisz.

## Czym jest Roblox

Roblox to nie jedna gra, tylko platforma z milionami gier stworzonych przez użytkowników. Niektóre robią duże studia, inne nastolatki albo dorośli hobbyści. Każda gra ma inne zasady, inną grafikę i innych graczy.

Dlatego pytanie „czy Roblox jest bezpieczny?” nie ma jednej odpowiedzi. Dużo zależy od tego, w co dziecko gra, z kim i jak ustawione jest konto.

!! Czas dla rodzica: ok. 15 min. Zrzuty ekranu pokazują, gdzie kliknąć.

## Czego potrzebujesz

Własne konto Roblox (osobne od dziecka), dowód osobisty albo kartę płatniczą do potwierdzenia, że jesteś dorosły, login do konta dziecka.

## Krok 1. Dodaj rodzica na koncie dziecka

Na koncie dziecka: **Ustawienia** (na telefonie: **Więcej → Ustawienia**) **→ Kontrola rodzicielska → Dodaj rodzica**. Potwierdź swój wiek i wybierz „Zgadzam się”.

Inna droga: dziecko wpisuje Twój e-mail, a Ty klikasz link w wiadomości i logujesz się na swoje konto.

[ZRZUT 1: Ustawienia konta dziecka, zakładka „Kontrola rodzicielska” (zaznacz „Dodaj rodzica”)]

[ZRZUT 2: Ekran potwierdzenia wieku rodzica (zamazać dane)]

## Krok 2. Sprawdź weryfikację wieku

Od stycznia 2026 każdy użytkownik musi przejść sprawdzenie wieku, żeby korzystać z czatu. Grać można bez niego. Domyślnie to szacowanie wieku na podstawie twarzy w aplikacji. Dzieci poniżej 9 lat mają czat wyłączony, dopóki rodzic nie wyrazi zgody w panelu.

[ZRZUT 3: Panel rodzica z informacją o statusie sprawdzenia wieku dziecka]

## Krok 3. Czat

**Ustawienia, którymi zarządzasz → Komunikacja**:

- czat w grach: włączony albo wyłączony,
- czat bezpośredni: włączony albo wyłączony,
- czat z przyjaciółmi: wszyscy znajomi, zaufani znajomi albo nikt.

Dla dzieci do 12 lat: czat bezpośredni wyłączony, czat w grach tylko z zaufanymi znajomymi.

[ZRZUT 4: Sekcja „Komunikacja” z ustawieniami czatu (zaznacz wyłączony czat bezpośredni)]

## Krok 4. Limit wydatków

**Ustawienia, którymi zarządzasz → Ograniczenia wydatków** → ustaw miesięczny limit i powiadomienia o każdej transakcji. Limit odnawia się z początkiem miesiąca.

[ZRZUT 5: Ekran limitu wydatków z wpisaną kwotą i włączonymi powiadomieniami]

## Krok 5. Gry i treści

- **Ograniczenia treści → Dojrzałość treści** → ustaw suwak (dla młodszych: „Minimalne” albo „Łagodne”).
- **Ograniczenia treści → Zablokowane gry** → „+” i wyszukaj grę, której nie chcesz.
- Prośby dziecka o dostęp do gry zobaczysz w panelu jako oczekujące.

[ZRZUT 6: Suwak dojrzałości treści]

[ZRZUT 7: Lista zablokowanych gier z przyciskiem „+”]

## Krok 6. Znajomi

W sekcji **Znajomi → Zarządzaj** przejrzyj listę znajomych dziecka i zablokuj osoby, których nie znacie.

[ZRZUT 8: Lista znajomych z menu trzech kropek przy nazwie (zamazać nazwy)]

## Lista kontrolna

- konto rodzica
- sprawdzenie wieku
- czat
- limit wydatków
- dojrzałość treści
- znajomi

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródła: [Roblox – Parental Controls](https://about.roblox.com/parental-controls), [zasady czatu od stycznia 2026](https://allthings.how/robloxs-new-chat-rules-explained-january-2026/)

## Sygnały, które powinny zwrócić uwagę

- Ktoś prosi, żeby przenieść rozmowę na inny komunikator, np. Discord, Snapchat albo WhatsApp.
- Nieznajomy daje prezenty: Robuxy albo przedmioty w grze.
- Ktoś prosi o zdjęcia, numer telefonu albo o zachowanie czegoś w tajemnicy.

Jeśli dziecko o czymś takim powie: zachowaj spokój, podziękuj, że przyszło, zróbcie zrzuty ekranu, a potem zablokujcie i zgłoście konto przyciskiem zgłaszania w grze. Wsparcie znajdziesz pod numerem 116 111 (dla dzieci i młodzieży) oraz 800 100 100 (dla rodziców i nauczycieli).

!! Zagrajcie razem raz w tygodniu. Poproś dziecko, żeby pokazało Ci swoją ulubioną grę i nauczyło Cię w nią grać. Dowiesz się więcej niż z niejednego ustawienia, a dziecko zobaczy, że interesujesz się jego światem, a nie tylko go pilnujesz.
$md$,
  false,
  'draft',
  null
),
-- ---------------------------------------------------------------- 30.10.2026
(
  'family-link-krok-po-kroku',
  'Family Link na Androidzie: konfiguracja w 20 minut',
  'Family Link to darmowa aplikacja Google. W 20 minut ustawisz limity czasu, zgodę na pobieranie aplikacji i filtr treści na telefonie dziecka.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat'],
  $md$Family Link to darmowa aplikacja Google do zarządzania kontem dziecka. Działa z telefonami i tabletami z Androidem oraz z Chromebookami. Aplikację dla rodzica zainstalujesz na Androidzie albo na iPhonie.

Poniżej przechodzimy przez najważniejsze ustawienia. Nazwy przycisków mogą się nieco różnić w zależności od wersji aplikacji, ale układ jest podobny.

!! Czas dla rodzica: ok. 20 min. Zrzuty ekranu pokazują, gdzie kliknąć.

## Czego potrzebujesz

Telefon dziecka z Androidem, Twój telefon (Android albo iPhone), Twoje konto Google, hasło do konta dziecka (albo 5 minut na założenie nowego).

## Krok 1. Zainstaluj aplikację rodzica

Na swoim telefonie pobierz **Google Family Link** ze Sklepu Play albo App Store i zaloguj się swoim kontem Google.

[ZRZUT 1: Strona aplikacji Family Link w sklepie (zaznacz przycisk „Zainstaluj”)]

## Krok 2. Podłącz telefon dziecka

Na telefonie dziecka otwórz **Ustawienia → Google → Wszystkie usługi → Kontrola rodzicielska**. Dotknij „Zróbmy to”, wybierz konto dziecka i „Nadzoruj konto”. Na koniec zaloguj się swoim kontem jako rodzic.

[ZRZUT 2: Ustawienia telefonu dziecka, ekran „Kontrola rodzicielska” (zaznacz przycisk startowy)]

[ZRZUT 3: Ekran wyboru konta dziecka (zamazać adres e-mail)]

Ważne: wpisz prawdziwą datę urodzenia dziecka. Od niej zależą domyślne ograniczenia.

## Krok 3. Ustaw czas przed ekranem

W aplikacji rodzica otwórz zakładkę **Czas ekranowy**:

- **Limity czasowe** → włącz i ustaw dzienny limit w planie tygodniowym.
- **Harmonogramy → Przestój** → godziny snu, np. 20:30–7:00.
- **Harmonogramy → Czas szkoły** → godziny lekcji.

[ZRZUT 4: Zakładka „Czas ekranowy” z włączonym limitem dziennym (zaznacz przełącznik)]

[ZRZUT 5: Plan tygodniowy przestoju (zaznacz godziny)]

## Krok 4. Zgoda na aplikacje i zakupy

**Sterowniki → Google Play → Zakupy i zatwierdzenia pobierania → Wymaga zatwierdzenia dla**. Dla młodszych dzieci wybierz **Wszelkie treści**.

[ZRZUT 6: Lista poziomów zatwierdzania (zaznacz „Wszelkie treści”)]

Od teraz każda próba pobrania lub zakupu przychodzi do Ciebie jako prośba.

[ZRZUT 7: Powiadomienie z prośbą dziecka o zgodę na Twoim telefonie]

## Krok 5. Filtr treści

- **Sterowniki → Google Play → Ograniczenia treści** → ustaw wiek dla aplikacji i gier.
- **Sterowniki → Google Chrome** → włącz blokowanie stron z treściami dla dorosłych.
- **Sterowniki → Wyszukiwarka Google** → sprawdź, czy filtr jest włączony.

[ZRZUT 8: Ograniczenia treści w Google Play z wybranym wiekiem]

## Czego Family Link nie załatwi

Filtr działa w usługach Google. Czatu w Robloxie czy na Discordzie nie ustawisz tutaj. To robisz w samej grze lub aplikacji (osobne instrukcje niżej).

## Lista kontrolna

- aplikacja rodzica
- konto dziecka z prawdziwą datą
- limit dzienny
- przestój
- zgoda na pobieranie
- filtr treści

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródło ścieżek: [Internet Matters – Google Family Link](https://pl.internetmatters.org/parental-controls/smartphones-and-other-devices/google-family-link/)

## Do kiedy działa nadzór

W Polsce samodzielnie zarządzać kontem Google można od 16 lat. Wtedy dziecko może wyłączyć nadzór. Warto porozmawiać o tym wcześniej i stopniowo luzować ustawienia, żeby w wieku 16 lat zmiana nie była nagła.

!! Zanim cokolwiek włączysz, usiądźcie razem i omówcie, co ustawiasz i dlaczego. Ustalcie też, jak dziecko może poprosić o więcej czasu. Wtedy Family Link staje się częścią waszej umowy, a nie narzędziem kontroli za plecami.
$md$,
  false,
  'draft',
  null
),
-- ---------------------------------------------------------------- 01.12.2026
(
  'fortnite-kontrola-rodzicielska',
  'Fortnite: PIN, czat, zakupy i limit czasu w 10 minut',
  'Kontrola rodzicielska w Fortnite to jeden PIN i kilka przełączników. Ustawisz je w grze albo na stronie Epic Games.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$!! Czas dla rodzica: ok. 10 min. Zrzuty ekranu pokazują, gdzie kliknąć.

## Czego potrzebujesz

Login do konta Epic Games dziecka, swój adres e-mail, 10 minut.

## Krok 1. Otwórz kontrolę rodzicielską

Najwygodniej w przeglądarce: zaloguj się na konto dziecka na **epicgames.com/account/parental-controls** i wybierz **Parental Controls** w menu po lewej.

W grze: ikona gracza (prawy górny róg) → menu (trzy kreski) → **Kontrola rodzicielska**.

[ZRZUT 1: Strona konta Epic z zakładką „Parental Controls” po lewej (zaznacz zakładkę)]

## Krok 2. Ustaw PIN

Podaj swój e-mail jako rodzica i ustaw 6-cyfrowy PIN. PIN blokuje wszystkie ustawienia. Wybierz taki, którego dziecko nie zgadnie.

[ZRZUT 2: Okno ustawiania PIN-u]

## Krok 3. Czat głosowy i tekstowy

Dla głosu i tekstu masz 4 opcje: wszyscy (13+), znajomi i drużyna (10+), tylko znajomi, nikt. Dla młodszych dzieci: **tylko znajomi** albo **nikt**.

Włącz też **PIN przy dodawaniu znajomych**. Wtedy każde nowe zaproszenie przechodzi przez Ciebie.

[ZRZUT 3: Ustawienia czatu głosowego z wybraną opcją „tylko znajomi”]

[ZRZUT 4: Przełącznik PIN-u przy dodawaniu znajomych]

## Krok 4. Zakupy

- Włącz **PIN przy płatnościach Epic Games**.
- Wyłącz **płatne losowe przedmioty** (paid random items).

!! PIN działa tylko dla płatności Epic. Jeśli dziecko gra na konsoli, limit wydatków ustaw też w ustawieniach rodzinnych konsoli (osobny wpis o konsolach na blogu).

[ZRZUT 5: Przełączniki zakupów: PIN włączony, losowe przedmioty wyłączone]

## Krok 5. Czas gry i raporty

- **Limity czasu** → dzienny limit albo okna godzinowe. Zdecyduj, czy dziecko może prosić o więcej czasu.
- **Raporty czasu** → włącz cotygodniowe podsumowanie na e-mail.

Dziecko dostaje ostrzeżenie 30 minut przed końcem limitu.

[ZRZUT 6: Ustawienia limitu czasu z wpisanym dziennym limitem]

[ZRZUT 7: Raport czasu gry z ostatniego tygodnia]

## Lista kontrolna

- PIN
- czat głosowy
- czat tekstowy
- PIN przy znajomych
- PIN przy zakupach
- limit czasu
- raport

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródło ścieżek: [Fortnite Parental Controls – FRVR](https://frvr.com/blog/game-guides/fortnite-parental-controls-pin-limits/).
$md$,
  false,
  'draft',
  null
),
-- ---------------------------------------------------------------- 04.12.2026
(
  'konsole-kontrola-rodzicielska-switch-xbox-playstation',
  'Konsola pod choinkę: Switch, PlayStation i Xbox krok po kroku',
  'Każda konsola ma darmową aplikację dla rodzica. Ustaw ją przed rozpakowaniem prezentu, a pierwszy dzień będzie spokojny.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Wszystkie trzy popularne konsole mają darmowe aplikacje kontroli rodzicielskiej na telefon. Ustawienia są podobne, różnią się nazwami. Pamiętaj: ustawienia konsoli i ustawienia w samej grze to dwie osobne rzeczy.

!! Czas dla rodzica: ok. 15 min na konsolę. Zrzuty ekranu pokazują, gdzie kliknąć.

## Czego potrzebujesz

Smartfon, własne konto u producenta konsoli, prawdziwą datę urodzenia dziecka.

## Nintendo Switch i Switch 2

1. Pobierz aplikację **Nintendo Switch Parental Controls** i zaloguj się kontem Nintendo.
2. Połącz konsolę z aplikacją. Na konsoli: **Ustawienia systemu → Kontrola rodzicielska → Ustawienia kontroli rodzicielskiej**.
3. W aplikacji dotknij **Parental Controls** (prawy dolny róg) i ustaw:

- **limit czasu gry** (do 6 godzin dziennie, można osobno na każdy dzień) i godzinę snu,
- opcję **zatrzymania gry o ustalonej godzinie** zamiast samego powiadomienia,
- **poziom ograniczeń**: Dziecko, Młodsze dziecko albo własny,
- komunikację z innymi graczami.

4. Zapisz czerwonym przyciskiem **Save**. Ustawienia działają po połączeniu konsoli z internetem.
5. Zakupy w eShopie ograniczysz na koncie Nintendo rodzica, w ustawieniach konta dziecka.

[ZRZUT 1: Ekran główny aplikacji Nintendo z przyciskiem Parental Controls]

[ZRZUT 2: Ustawienia limitu czasu gry z godziną snu]

[ZRZUT 3: Wybór poziomu ograniczeń]

## PlayStation 5

1. W aplikacji **PlayStation Family** zaloguj się i wybierz **Set Up Your Family → Create a Child Account**. Wpisz prawdziwą datę urodzenia.
2. Na konsoli: **Dodaj użytkownika**, potem zaloguj dziecko kodem QR.
3. W aplikacji: **Settings → Family Management → dziecko**:

- **Privacy Settings** → ustawienia przez rodzica, wiadomości i zaproszenia: Friends albo No One,
- **Parental Controls → Games and Apps** → wiek gier,
- **Monthly Spending Limit** → kwota miesięczna (0 zł blokuje zakupy),
- **Playtime Settings** → limit dzienny, godziny gry i co się dzieje po limicie.

[ZRZUT 4: Aplikacja PlayStation Family, ekran tworzenia konta dziecka]

[ZRZUT 5: Miesięczny limit wydatków]

[ZRZUT 6: Ustawienia czasu gry]

## Xbox

1. Pobierz aplikację **Xbox Family Settings** i zaloguj się kontem Microsoft.
2. Dodaj dziecko do rodziny. Dziecko musi grać na tym koncie Microsoft, które dodałeś, inaczej ustawienia nie zadziałają.
3. W aplikacji ustaw:

- **czas przed ekranem** – harmonogram na każdy dzień,
- **wydatki** – włącz „Poproś o zakup” (Ask to Buy),
- **znajomi i komunikacja** – zatwierdzaj nowych znajomych i zdecyduj, czy dziecko gra online z innymi.

[ZRZUT 7: Aplikacja Xbox Family Settings, ekran dziecka z czasem przed ekranem]

[ZRZUT 8: Ustawienia znajomych i gry wieloosobowej]

## Lista kontrolna (każda konsola)

- aplikacja rodzica
- konto dziecka z prawdziwą datą
- czas gry
- wiek gier
- wydatki
- czat i znajomi

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródła: [Nintendo – kontrola rodzicielska Switch 2](https://www.nintendo.com/en-gb/Support/Parental-Controls/How-to-Set-Up-Adjust-or-Remove-Parental-Controls-on-Nintendo-Switch-2-2843839.html), [Internet Matters – PlayStation](https://www.internetmatters.org/parental-controls/gaming-consoles/playstation-parental-controls/), [Xbox Family Settings](https://xbox.com/en-US/apps/family-settings-app)

## Kolejność, która działa

1. Konto dziecka z prawdziwą datą urodzenia.
2. Aplikacja rodzica połączona z konsolą.
3. Czas, wiek gier i zakupy.
4. Komunikacja na konsoli.
5. Czat w każdej grze osobno.
6. Rozmowa o zasadach i o tym, co robić, gdy coś niepokoi.

!! Ustawienia sprawdzaj co kilka miesięcy. Konsole dostają aktualizacje, a dziecko rośnie. To, co pasowało ośmiolatkowi, za rok może być za ciasne albo za luźne.
$md$,
  false,
  'draft',
  null
),
-- ---------------------------------------------------------------- 08.01.2027
(
  'nowy-iphone-dziecka-czas-przed-ekranem',
  'iPhone i iPad: Czas przed ekranem dla dziecka',
  'Na iPhonie wszystko ustawisz ze swojego telefonu: czas, aplikacje, kontakty i zakupy. Pokazujemy, gdzie to jest.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Na prośbę obserwujących: odpowiednik naszego poradnika o Family Link, tym razem dla iPhone’a. Wszystkie ustawienia znajdziesz w aplikacji Ustawienia, w sekcji Czas przed ekranem. Nazwy mogą się nieco różnić w zależności od wersji iOS.

!! Czas dla rodzica: ok. 20 min. Zrzuty ekranu pokazują, gdzie kliknąć.

## Czego potrzebujesz

Włączoną Chmurę rodzinną, osobne konto Apple dla dziecka (konto dziecka), Twój iPhone. Ustawiasz z własnego telefonu, nie z telefonu dziecka.

!! Opis dotyczy iOS 27. Nowy układ kontroli rodzicielskiej działa, gdy wszystkie urządzenia w rodzinie mają iOS 27. Na starszym systemie menu wygląda inaczej.

## Krok 1. Otwórz ustawienia dziecka

Na swoim iPhonie: **Ustawienia → Rodzina → imię dziecka → Czas przed ekranem**. Przejdź przez kreator na ekranie.

[ZRZUT 1: Ekran „Rodzina” z listą członków (zaznacz imię dziecka; zamazać imię i zdjęcie)]

[ZRZUT 2: Ekran dziecka z pozycją „Czas przed ekranem” (zaznacz ją)]

## Krok 2. Ustaw kod Czasu przed ekranem

Kod ustawiasz na swoim urządzeniu. Nie podawaj go dziecku i nie używaj kodu do odblokowania telefonu.

[ZRZUT 3: Ekran ustawiania kodu]

## Krok 3. Aplikacje, strony i zakupy

W sekcji aplikacji i stron:

- włącz **Poproś o zakup** – każdy zakup i pobranie czeka na Twoją zgodę,
- sprawdź, czy filtr stron dla dorosłych jest włączony (dla dzieci poniżej 18 lat jest domyślnie).

[ZRZUT 4: Przełącznik „Poproś o zakup” w pozycji włączonej]

## Krok 4. Kontakty

W sekcji dozwolonych kontaktów ustaw, z kim dziecko może pisać, dzwonić i rozmawiać przez FaceTime. Włącz zgodę na nowe kontakty.

[ZRZUT 5: Ustawienia kontaktów z włączoną zgodą na nowe kontakty]

## Krok 5. Czas i harmonogram

Ustaw dzienne limity dla kategorii aplikacji (np. gry, sieć społecznościowe) i harmonogram: osobno dni szkolne i weekend.

[ZRZUT 6: Limit dla kategorii „Gry”]

[ZRZUT 7: Harmonogram dnia szkolnego]

## Krok 6. Ograniczenia treści i bezpieczeństwo komunikacji

- Ustaw wiek dla muzyki, filmów, książek i aplikacji.
- Zablokuj zmianę udostępniania lokalizacji.
- Sprawdź, czy **Bezpieczeństwo komunikacji** jest włączone. Rozmazuje zdjęcia z nagością i przemocą w wiadomościach.

[ZRZUT 8: Ekran ograniczeń treści z ustawionym wiekiem]

## Lista kontrolna

- Chmura rodzinna
- kod
- Poproś o zakup
- kontakty
- limity
- treści

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródło: [Apple – Czas przed ekranem na urządzeniu dziecka](https://support.apple.com/108806)

## Warto wiedzieć

- Funkcja bezpieczeństwa komunikacji może ostrzegać dziecko przed zdjęciami zawierającymi nagość. U młodszych dzieci jest zwykle włączona domyślnie. Sprawdź to w ustawieniach Czasu przed ekranem.
- Limity nie zastąpią rozmowy. Omów z dzieckiem, co ustawiasz i dlaczego.

!! Ustawcie Czas przed ekranem razem z dzieckiem, a nie za jego plecami. Umówcie się, jak może poprosić o więcej czasu. Wtedy limity są częścią waszej umowy, a nie karą.
$md$,
  false,
  'draft',
  null
),
-- ---------------------------------------------------------------- 01.02.2027
(
  'tiktok-polaczenie-rodzinne',
  'TikTok: Połączenie rodzinne krok po kroku',
  'Połączenie rodzinne łączy Twoje konto TikTok z kontem nastolatka. Ustawisz czas, prywatność i filtr treści bez zaglądania w jego wiadomości.',
  'Media społecznościowe',
  array['13–15 lat', '16+'],
  $md$!! Czas dla rodzica: ok. 10 min. Zrzuty ekranu pokazują, gdzie kliknąć.

## Czego potrzebujesz

Własne konto TikTok, telefon nastolatka pod ręką, 10 minut i zgodę nastolatka. Bez jego potwierdzenia konta się nie połączą.

## Krok 1. Zacznij na swoim koncie

**Profil → trzy kreski (prawy górny róg) → Ustawienia i prywatność → Połączenie rodzinne**. Wybierz rolę rodzica. Dostaniesz kod QR albo link.

[ZRZUT 1: Menu „Ustawienia i prywatność” (zaznacz „Połączenie rodzinne”)]

[ZRZUT 2: Ekran z kodem QR (zamazać kod)]

## Krok 2. Połącz konto nastolatka

Na telefonie nastolatka: **Połączenie rodzinne** → zeskanuj kod → **Połącz konta**.

[ZRZUT 3: Ekran potwierdzenia połączenia na telefonie nastolatka]

## Krok 3. Czas

- **Czas przed ekranem → Dzienny czas** → limit (najkrótszy to 40 minut, można inny na każdy dzień).
- **Zaplanuj przerwę** → godziny bez TikToka, np. w czasie lekcji i w nocy.
- **Harmonogram powiadomień** → cisza w godzinach nauki.

[ZRZUT 4: Ustawienie dziennego limitu]

## Krok 4. Prywatność

- włącz **Konto prywatne**,
- wyłącz **Polecaj konto innym**,
- komentarze i wzmianki: **Znajomi** albo **Nikt**.

[ZRZUT 5: Ustawienia prywatności z włączonym kontem prywatnym]

## Krok 5. Treści

Włącz **Tryb ograniczony** i dodaj słowa, które mają być filtrowane. Tryb ograniczony uniemożliwia też wylogowanie się i przełączenie na inne konto.

[ZRZUT 6: Przełącznik „Tryb ograniczony”]

## Co już działa domyślnie

- 13–15 lat: konto prywatne od początku.
- 13–17 lat: domyślny limit 1 godziny dziennie (nastolatek może go zmienić, jeśli nie ustawisz go Ty).
- Powiadomienia wyłączone od 21:00 do 8:00.

## Lista kontrolna

- połączenie
- limit dzienny
- przerwa
- konto prywatne
- tryb ograniczony

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródło: [Internet Matters – TikTok](https://www.internetmatters.org/parental-controls/social-media/tiktok-privacy-and-safety-settings)
$md$,
  false,
  'draft',
  null
),
-- ---------------------------------------------------------------- 03.02.2027
(
  'youtube-kids-czy-konto-nadzorowane',
  'YouTube: konto nadzorowane czy YouTube Kids? Konfiguracja krok po kroku',
  'YouTube ma trzy opcje dla rodzin. Pokazujemy, którą wybrać dla wieku dziecka i jak ją ustawić w 10 minut.',
  'Media społecznościowe',
  array['0–6 lat', '7–9 lat', '10–12 lat', '13–15 lat', '16+'],
  $md$!! Czas dla rodzica: ok. 10 min. Zrzuty ekranu pokazują, gdzie kliknąć.

## Którą opcję wybrać

- **YouTube Kids (osobna aplikacja):** do 12 lat. Poziomy treści: Przedszkolaki (do 4), Młodsze (5–8), Starsze (9–12).
- **Konto nadzorowane dziecka na YouTube:** poniżej 13 lat. Poziomy treści: Odkrywaj, Odkrywaj więcej, Większość YouTube.
- **Konto nadzorowane nastolatka:** 13+. Poziomy treści: bez poziomów, rodzic widzi aktywność.

## Krok 1. Załóż konto nadzorowane

Najprościej z aplikacji YouTube na swoim telefonie: **Ustawienia → Centrum rodzinne → Dodaj konto dziecka**. Dziecko nie potrzebuje własnego konta Google.

Inne drogi: strona **families.youtube.com** albo w Family Link: **dziecko → Sterowniki → YouTube**.

[ZRZUT 1: Ustawienia YouTube z pozycją „Centrum rodzinne” (zaznacz ją)]

[ZRZUT 2: Ekran „Dodaj konto dziecka”]

## Krok 2. Wybierz poziom treści

W trakcie zakładania wybierasz poziom. Dla dzieci 9–12 lat dobry start to „Odkrywaj więcej”. Poziom zmienisz później w Centrum rodzinnym.

[ZRZUT 3: Ekran wyboru poziomu treści z zaznaczonym „Odkrywaj więcej”]

## Krok 3. Czas przed ekranem

Czas dla kont nadzorowanych ustawiasz w Centrum rodzinnym (families.youtube.com). W YouTube Kids – w samej aplikacji albo w Family Link.

[ZRZUT 4: Ustawienie czasu w Centrum rodzinnym]

## Krok 4. Przełączanie kont

Na wspólnym tablecie używaj ekranu „Kto ogląda?” albo „Przełącz konto” w zakładce „Ty”. Dziecko ogląda wtedy na swoim koncie, nie na Twoim.

[ZRZUT 5: Ekran „Kto ogląda?” (zamazać imiona i zdjęcia)]

## Ważne przy transmisjach na żywo

Na transmisjach dziecko może pisać z obcymi na czacie, a „prezenty” dla twórców to prawdziwe pieniądze. Dla młodszych dzieci konto nadzorowane to najprostsza ochrona.

## Lista kontrolna

- właściwa opcja dla wieku
- konto nadzorowane
- poziom treści
- czas
- osobny profil na wspólnym urządzeniu

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródła: [YouTube – opcje dla rodzin](https://support.google.com/youtubekids/answer/10315420), [YouTube – konto nadzorowane dziecka](https://support.google.com/youtube/answer/10314074)
$md$,
  false,
  'draft',
  null
),
-- ---------------------------------------------------------------- 12.02.2027
(
  'discord-co-musi-wiedziec-rodzic',
  'Discord: co musi wiedzieć rodzic',
  'Serwery, kanały i wiadomości prywatne wyjaśnione po ludzku. Plus zmiany z 2026 roku: ustawienia dla nastolatków włączone domyślnie.',
  'Media społecznościowe',
  array['13–15 lat', '16+'],
  $md$„Wbijaj na Discorda” to jedno z najczęstszych zdań w grach online. Discord to komunikator stworzony dla graczy, a dziś także miejsce grup klasowych, fanów seriali i wspólnej nauki. W regulaminie jest od 13 lat.

## Jak działa Discord

- **Serwer** to grupa, np. klasa, drużyna albo fani jednej gry. Może mieć kilka osób albo setki tysięcy.
- **Kanały** to „pokoje” w serwerze: tekstowe albo głosowe.
- **Wiadomości prywatne** to rozmowy jeden na jeden albo w małej grupie.

Do serwera można dołączyć z linku zaproszenia. Wystarczy, że ktoś wyśle go w grze.

## Zmiany z 2026 roku

W lutym 2026 Discord zapowiedział, a od marca 2026 stopniowo wprowadza na całym świecie ustawienia „dla nastolatków” włączone domyślnie:

- treści wrażliwe są rozmyte,
- wiadomości od nieznajomych trafiają do osobnej skrzynki,
- przy zaproszeniach od nieznanych osób pojawiają się ostrzeżenia,
- kanały i serwery z ograniczeniem wiekowym są dostępne tylko dla zweryfikowanych dorosłych.

Żeby wyłączyć te zabezpieczenia, trzeba potwierdzić pełnoletność, np. szacowaniem wieku z nagrania twarzy albo dokumentem.

To dobra zmiana, ale nie wszystko. Dziecko nadal może dołączyć do dużego serwera z linku od obcej osoby.

## Ryzyka i dobre strony

Dobre strony: kontakt ze znajomymi, wspólne zainteresowania, wspólna nauka.

Ryzyka: obcy na dużych serwerach, prywatne wiadomości od osób poznanych w grach, treści dla dorosłych na serwerach, które słabo pilnują zasad.

!! Czas dla rodzica: ok. 10 min. Zrzuty ekranu pokazują, gdzie kliknąć.

## Czego potrzebujesz

Własne konto Discord (wystarczy przeglądarka), nastolatka obok siebie, 10 minut.

## Krok 1. Nastolatek otwiera Centrum rodzinne

Na koncie nastolatka: **Ustawienia użytkownika → Centrum rodzinne → Połącz z opiekunem**. Pojawi się kod QR albo link.

[ZRZUT 1: Zakładka „Centrum rodzinne” na koncie nastolatka z kodem QR (zamazać kod)]

## Krok 2. Ty skanujesz kod

Na telefonie: awatar → **Ustawienia → Centrum rodzinne → Moja rodzina** → zeskanuj kod. Nastolatek akceptuje prośbę.

[ZRZUT 2: Ekran „Moja rodzina” po połączeniu]

## Krok 3. Co zobaczysz

W zakładce **Aktywność** (ostatnie 7 dni): nowi znajomi, z kim pisał i rozmawiał, nowe serwery, czas rozmów głosowych, zakupy. Co tydzień dostaniesz też podsumowanie na e-mail.

Nie zobaczysz treści wiadomości ani pełnej listy znajomych. Powiedz o tym nastolatkowi wprost.

[ZRZUT 3: Zakładka „Aktywność” (zamazać nazwy użytkowników i serwerów)]

## Krok 4. Ustawienia, które zmienisz

- **Treści wrażliwe** → rozmywaj albo blokuj,
- **Zaproszenia do znajomych** → tylko znajomi znajomych,
- **Wiadomości od członków serwerów** → wyłącz,
- **Miesięczny limit wydatków** → może być 0,
- **Limit czasu** → godziny bez Discorda (nastolatek dostaje uprzedzenie 15 minut wcześniej).

[ZRZUT 4: Ustawienia zaproszeń do znajomych]

[ZRZUT 5: Harmonogram przerwy od Discorda]

Nastolatek nie dostaje powiadomienia, gdy zmieniasz ustawienia. Omówcie je razem, zanim je włączysz.

## Lista kontrolna

- połączenie
- treści wrażliwe
- zaproszenia
- wiadomości z serwerów
- limit wydatków
- rozmowa

!! Zapisz tę listę albo zrób zrzut ekranu. Przyda się, gdy będziesz sprawdzać ustawienia za kilka miesięcy.

Źródło: [Discord – Family Center for Parents and Guardians](https://support.discord.com/hc/en-us/articles/14155043715735)

## O czym porozmawiać

1. Na jakich serwerach jesteś? Kto je prowadzi?
2. Kto pisze do ciebie prywatnie?
3. Co zrobisz, gdy ktoś poprosi o zdjęcie albo o przejście na inną aplikację?
$md$,
  false,
  'draft',
  null
)
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  category = excluded.category,
  ages = excluded.ages,
  body = excluded.body,
  updated_at = now()
where public.posts.status = 'draft';

-- Kontrola: lista instrukcji i ich status po uruchomieniu.
select slug, title, status from public.posts where slug in ('roblox-przewodnik-dla-rodzicow', 'family-link-krok-po-kroku', 'fortnite-kontrola-rodzicielska', 'konsole-kontrola-rodzicielska-switch-xbox-playstation', 'nowy-iphone-dziecka-czas-przed-ekranem', 'tiktok-polaczenie-rodzinne', 'youtube-kids-czy-konto-nadzorowane', 'discord-co-musi-wiedziec-rodzic') order by slug;
