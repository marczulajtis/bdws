-- Bezpieczne Dzieci w Sieci: wpisy na blog od października 2026 do marca 2027 (23 wpisy).
-- Wszystkie trafiają do panelu jako SZKICE. Publikujesz je w piątki w panelu admina (data ustawi się przy publikacji).
-- Uruchom w Supabase: SQL Editor → New query → wklej całość → Run.
-- Bezpieczne do ponownego uruchomienia: wpisy, które już są w bazie (ten sam slug), zostaną pominięte.
--
-- Październik–listopad (6 poradników, jeśli dodałaś je wcześniej, zostaną pominięte):
--   23.10 Roblox · 30.10 Family Link · 6.11 Od ilu lat · 13.11 Słowniczek · 20.11 Czas przed ekranem · 27.11 Prezent pod choinkę
-- Grudzień–marzec (17 nowych):
--   04.12 PEGI: jak czytać oznaczenia gier (i czego nie mówią)
--   11.12 Pierwszy telefon czy smartwatch? Pytania przed zakupem
--   18.12 Oszustwa w grach: darmowe Robuxy, kody z kart i przejęte konta
--   25.12 5 gier na święta do wspólnego grania na jednej kanapie
--   01.01 5 cyfrowych postanowień dla całej rodziny na 2027
--   08.01 Nowy iPhone dziecka: Czas przed ekranem krok po kroku
--   15.01 Grooming w grach: jak obcy zdobywa zaufanie dziecka i jakie są sygnały
--   22.01 Snapchat: co musi wiedzieć rodzic
--   29.01 Instagram i TikTok dla nastolatka: co działa samo, a co trzeba ustawić
--   05.02 Wyzwanie 7 dni na Dzień Bezpiecznego Internetu
--   12.02 Discord: co musi wiedzieć rodzic
--   19.02 Sextortion: co zrobić w pierwszej godzinie
--   26.02 Cyberprzemoc w klasowej grupie: jak ją rozpoznać i co zrobić
--   05.03 Czat w grach: czat w grze, czat konsoli i Discord
--   12.03 Fortnite, Roblox, Minecraft i Brawl Stars: ustawienia czatu krok po kroku
--   19.03 Konsole: kontrola rodzicielska w Switchu, Xboksie i PlayStation
--   26.03 „Przyjaciel” AI: chatboty w życiu dziecka

-- ================================================================ październik–listopad
insert into public.posts (slug, title, excerpt, category, ages, body, featured, status, published_at)
values

-- ---------------------------------------------------------------- 23.10
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

## Konto zależne od wieku

W 2026 roku Roblox mocno zmienił zasady dla młodszych graczy i wprowadza je stopniowo na całym świecie. Konta są dzielone według wieku:

- **5–8 lat:** czat jest domyślnie wyłączony i może go włączyć tylko połączony rodzic. Dziecko widzi wyłącznie gry z najłagodniejszymi oznaczeniami.
- **9–15 lat:** więcej gier, a czat głównie z rówieśnikami i z osobami dodanymi jako zaufani znajomi.
- **od 16 lat:** pełny dostęp, z wyjątkiem gier oznaczonych jako tylko dla dorosłych.

Żeby korzystać z czatu, trzeba przejść weryfikację wieku: szacowanie wieku na podstawie zdjęcia twarzy albo dokument. Bez niej czat nie działa, niezależnie od wieku.

Zasady Robloxa zmieniają się często i mogą się różnić między krajami. Aktualny opis znajdziesz w Centrum bezpieczeństwa Roblox (Safety Center).

## Krok 1: prawdziwa data urodzenia

Od daty urodzenia zależy, jakie gry i funkcje widzi dziecko. Jeśli konto zakładało samo, sprawdź, czy nie dodało sobie kilku lat. To częstsze, niż się wydaje. Połączony rodzic może poprawić datę urodzenia.

## Krok 2: połącz swoje konto

Załóż własne konto Roblox i połącz je z kontem dziecka w ustawieniach, w sekcji kontroli rodzicielskiej (Parental Controls). Po połączeniu zobaczysz:

- w jakie gry dziecko gra i ile czasu w nich spędza,
- listę znajomych dziecka,
- ustawienia czatu, wydatków i czasu gry.

Możesz też zablokować konkretne gry albo konkretne osoby.

## Krok 3: czat i kontakty

Dla dzieci w wieku wczesnoszkolnym najbezpieczniej jest zostawić czat wyłączony. Starszym możesz ograniczyć czat do znajomych, których znają z prawdziwego życia.

Raz na jakiś czas przejrzyjcie razem listę znajomych. Zapytaj o każdą osobę: „Skąd ją znasz?”. Bez przesłuchania, z ciekawością.

## Krok 4: Robuxy i limit wydatków

Robux to waluta w Robloxie. Kupuje się ją za prawdziwe pieniądze, a potem wydaje na ubrania dla postaci, dodatki i przepustki w grach. Przelicznik nie jest oczywisty, więc dzieci łatwo tracą poczucie, ile wydają.

- Ustaw miesięczny limit wydatków w kontroli rodzicielskiej.
- Włącz powiadomienia o zakupach.
- Zamiast podpinać kartę płatniczą, kupuj karty podarunkowe na konkretną kwotę.

Uważajcie na strony i filmy obiecujące „darmowe Robuxy”. To prawie zawsze próba wyłudzenia hasła albo danych.

## Krok 5: limit czasu

Dzienny limit czasu ustawisz w kontroli rodzicielskiej Robloxa albo na poziomie całego urządzenia: w Family Link na Androidzie lub w Czasie przed ekranem na iPhonie.

## Sygnały, które powinny zwrócić uwagę

- Ktoś prosi, żeby przenieść rozmowę na inny komunikator, np. Discord, Snapchat albo WhatsApp.
- Nieznajomy daje prezenty: Robuxy albo przedmioty w grze.
- Ktoś prosi o zdjęcia, numer telefonu albo o zachowanie czegoś w tajemnicy.

Jeśli dziecko o czymś takim powie: zachowaj spokój, podziękuj, że przyszło, zróbcie zrzuty ekranu, a potem zablokujcie i zgłoście konto przyciskiem zgłaszania w grze. Wsparcie znajdziesz pod numerem 116 111 (dla dzieci i młodzieży) oraz 800 100 100 (dla rodziców i nauczycieli).

!! Zagrajcie razem raz w tygodniu. Poproś dziecko, żeby pokazało Ci swoją ulubioną grę i nauczyło Cię w nią grać. Dowiesz się więcej niż z niejednego ustawienia, a dziecko zobaczy, że interesujesz się jego światem, a nie tylko go pilnujesz.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 30.10
(
  'family-link-krok-po-kroku',
  'Family Link krok po kroku',
  'Jak połączyć konto dziecka, ustawić zgodę na aplikacje, limity czasu i porę na sen. Plus to, czego Family Link nie zrobi za rodzica.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Family Link to darmowa aplikacja Google do zarządzania kontem dziecka. Działa z telefonami i tabletami z Androidem oraz z Chromebookami. Aplikację dla rodzica zainstalujesz na Androidzie albo na iPhonie.

Poniżej przechodzimy przez najważniejsze ustawienia. Nazwy przycisków mogą się nieco różnić w zależności od wersji aplikacji, ale układ jest podobny.

## Czego potrzebujesz

- swojego telefonu z aplikacją Google Family Link,
- telefonu albo tabletu dziecka z Androidem,
- konta Google dziecka. Jeśli dziecko go nie ma, założysz je z poziomu Family Link.

## Krok 1: połącz konta

Jeśli telefon jest nowy, najprościej zrobić to przy pierwszym uruchomieniu: zaloguj dziecko na jego konto, a system poprosi o zgodę rodzica.

Jeśli dziecko już korzysta z telefonu, otwórz na nim Ustawienia, potem Google, a następnie Kontrola rodzicielska, i postępuj według wskazówek. Po połączeniu w Twojej aplikacji pojawi się profil dziecka.

## Krok 2: zgoda na aplikacje i zakupy

W ustawieniach Google Play włącz wymaganie zgody rodzica na pobieranie aplikacji i na zakupy. Od tej chwili, gdy dziecko spróbuje coś zainstalować, dostaniesz prośbę na swój telefon.

Możesz też ograniczyć aplikacje i gry według oznaczeń wiekowych. W Europie są to oznaczenia PEGI: 3, 7, 12, 16 i 18.

## Krok 3: czas przed ekranem

W zakładce poświęconej czasowi korzystania z urządzenia ustawisz:

- **dzienny limit**, czyli ile czasu dziecko może korzystać z telefonu każdego dnia,
- **porę na sen**, czyli godziny, w których telefon sam się blokuje,
- **czas w szkole**, czyli wyciszenie powiadomień i ograniczenie aplikacji w godzinach lekcji,
- **limity dla konkretnych aplikacji**, np. godzinę dziennie na gry.

Telefon i połączenia z rodzicem działają także wtedy, gdy urządzenie jest zablokowane.

## Krok 4: Chrome i YouTube

W ustawieniach Chrome możesz włączyć filtr stron dla dorosłych albo zezwolić tylko na wybrane strony.

Dla młodszych dzieci lepiej sprawdza się YouTube Kids. Starsze mogą mieć nadzorowane konto YouTube, w którym wybierasz poziom treści.

## Krok 5: kontakty

Na nowszych telefonach z Androidem (od wersji 14) możesz zatwierdzać kontakty, do których dziecko może dzwonić i pisać. Dziecko wysyła prośbę o nowy kontakt, a Ty ją akceptujesz.

## Krok 6: lokalizacja

Family Link pokazuje, gdzie jest telefon dziecka. To przydatne, ale powiedz dziecku, że tę funkcję włączasz i kiedy z niej korzystasz. Sprawdzanie lokalizacji w tajemnicy szybko niszczy zaufanie, a dziecko i tak w końcu się zorientuje.

## Czego Family Link nie zrobi

- Nie czyta wiadomości ani rozmów w grach.
- Nie widzi, z kim dziecko pisze w aplikacjach.
- Nie działa na urządzeniach kolegów ani na komputerze w szkole.
- Nie zastąpi rozmowy o tym, co dziecko robi w sieci.

To narzędzie do ustawienia ram, a nie do pilnowania wszystkiego.

## Do kiedy działa nadzór

W Polsce samodzielnie zarządzać kontem Google można od 16 lat. Wtedy dziecko może wyłączyć nadzór. Warto porozmawiać o tym wcześniej i stopniowo luzować ustawienia, żeby w wieku 16 lat zmiana nie była nagła.

!! Zanim cokolwiek włączysz, usiądźcie razem i omówcie, co ustawiasz i dlaczego. Ustalcie też, jak dziecko może poprosić o więcej czasu. Wtedy Family Link staje się częścią waszej umowy, a nie narzędziem kontroli za plecami.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 6.11
(
  'od-ilu-lat-minimalny-wiek-w-aplikacjach',
  'Od ilu lat? Minimalny wiek w popularnych aplikacjach',
  'TikTok, Instagram, WhatsApp, Snapchat, YouTube i Discord w jednym zestawieniu. Plus pytania, które pomogą ocenić, czy dziecko jest gotowe.',
  'Media społecznościowe',
  array['10–12 lat', '13–15 lat'],
  $md$„Wszyscy w klasie mają TikToka.” Jeśli słyszysz to w domu, warto wiedzieć, co mówią regulaminy aplikacji i skąd w ogóle biorą się limity wieku.

## Minimalny wiek w skrócie

Stan na jesień 2026 roku:

- **TikTok:** 13 lat. Do 16 lat konto jest domyślnie prywatne, a prywatne wiadomości są wyłączone.
- **Instagram:** 13 lat. Do 16 lat działa konto nastolatka z ograniczeniami. Zmiana części ustawień wymaga zgody rodzica.
- **Facebook:** 13 lat.
- **Snapchat:** 13 lat.
- **WhatsApp:** 13 lat. W Unii Europejskiej od 2024 roku, wcześniej było to 16 lat.
- **Discord:** 13 lat.
- **YouTube:** od 13 lat z kontem nadzorowanym przez rodzica. Samodzielne konto Google w Polsce można mieć od 16 lat. Dla młodszych dzieci jest YouTube Kids.
- **Gry:** sprawdzaj oznaczenie PEGI na pudełku albo w sklepie (3, 7, 12, 16, 18). Mówi ono o treściach, ale nie o czacie z innymi graczami.

Regulaminy się zmieniają, dlatego przed założeniem konta zajrzyj do aktualnych zasad aplikacji.

## Skąd biorą się te limity

Większość aplikacji pochodzi z USA, gdzie prawo mocniej chroni dane dzieci poniżej 13 lat. Dlatego 13 lat stało się standardem na całym świecie.

W Unii Europejskiej obowiązuje dodatkowo RODO. W Polsce dziecko może samodzielnie zgodzić się na przetwarzanie swoich danych w usługach internetowych od 16 lat. Stąd na przykład wiek 16 lat dla samodzielnego konta Google.

W Polsce trwają też prace nad przepisami, które mają ograniczyć dostęp do mediów społecznościowych osobom poniżej 15 lat. Według zapowiedzi mogłyby zacząć obowiązywać w 2027 roku.

Ważne: limit wieku to minimum prawne, a nie znak, że dziecko jest gotowe.

## Klasowa grupa na WhatsAppie

Dla wielu dzieci pierwszym kontaktem z komunikatorem jest grupa klasowa. Często zakładają ją rodzice, kiedy dzieci mają 9 albo 10 lat.

Jeśli taka grupa istnieje w klasie Twojego dziecka:

- dowiedz się, kto jest jej administratorem,
- zaproponujcie proste zasady: piszemy do godziny 20, nie wysyłamy zdjęć innych osób bez pytania, nie usuwamy nikogo z grupy za karę,
- powiedz dziecku, że każda wiadomość może trafić dalej jako zrzut ekranu.

## 5 pytań przed pierwszym kontem

1. Czy dziecko wie, co zrobić, gdy ktoś napisze coś przykrego?
2. Czy potrafi zablokować i zgłosić osobę?
3. Czy rozumie, że raz wysłanego zdjęcia nie da się cofnąć?
4. Czy przyjdzie do Ciebie, gdy coś je zaniepokoi?
5. Czy umie odłożyć telefon, gdy skończy się ustalony czas?

Jeśli na większość pytań odpowiedź brzmi „tak”, łatwiej będzie Wam przejść przez pierwsze miesiące.

## Gdy dziecko już ma konto

Bez paniki i bez kasowania konta w złości. Taka reakcja sprawi głównie to, że następne konto będzie ukryte.

- Usiądźcie razem i przejrzyjcie ustawienia prywatności.
- Sprawdźcie, czy w profilu jest prawdziwa data urodzenia. Od niej zależą zabezpieczenia dla nastolatków.
- Ustalcie, kogo dziecko może obserwować i od kogo przyjmować zaproszenia.
- Umówcie się, że wrócicie do tematu za miesiąc.

!! Regulamin mówi, od kiedy wolno. To Ty wiesz, kiedy Twoje dziecko jest gotowe. Jeśli ustalisz inną granicę niż „wszyscy w klasie”, wyjaśnij dlaczego i powiedz, co musiałoby się zmienić, żeby ją przesunąć.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 13.11
(
  'slowniczek-gracza-dla-rodzicow',
  'Słowniczek gracza dla rodziców',
  'Ponad 30 słów, które usłyszysz od dziecka grającego online, wyjaśnionych w jednym zdaniu. Od „GG” po „lootbox”.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Nie musisz znać się na grach, żeby rozumieć, o czym mówi Twoje dziecko. Wystarczy kilkadziesiąt słów. Zebraliśmy te, które słyszymy najczęściej.

## Słowa z czatu

- **GG** (good game): dobra gra. Mówi się na koniec rozgrywki, zwykle życzliwie.
- **GL HF** (good luck, have fun): powodzenia, baw się dobrze. Mówi się na początku.
- **Noob**: nowicjusz. Czasem żartobliwie, czasem złośliwie.
- **AFK** (away from keyboard): odszedłem od komputera.
- **BRB** (be right back): zaraz wracam.
- **DM** (direct message): prywatna wiadomość. Warto wiedzieć, od kogo przychodzą.
- **Toxic**: toksyczny, czyli gracz, który obraża innych.
- **Ragequit**: wyjście z gry ze złości.
- **Sus** (suspicious): podejrzany. Słowo spopularyzowane przez grę Among Us.
- **W i L** (win, loss): wygrana i przegrana. „Take the L” to „pogódź się z porażką”.

## Słowa o pieniądzach

- **Skin**: wygląd postaci albo przedmiotu. Najczęściej płatny.
- **Robux**: waluta w Robloxie, kupowana za prawdziwe pieniądze.
- **V-dolce**: waluta w Fortnite.
- **Battle pass** (w Fortnite: karnet bojowy): płatna przepustka na sezon, która odblokowuje nagrody za granie.
- **Lootbox, skrzynka**: losowa nagroda. Płacisz, a nie wiesz, co dostaniesz.
- **Gacha**: gra albo mechanizm oparty na losowaniu postaci i przedmiotów.
- **Mikropłatności**: drobne zakupy w grze, które razem dają spore kwoty.
- **Trade**: wymiana przedmiotów między graczami. Częste miejsce oszustw.
- **P2W** (pay to win): gra, w której łatwiej wygrać, gdy się płaci.

## Słowa z rozgrywki

- **Lag**: gra się zacina z powodu słabego internetu.
- **Respawn**: odrodzenie postaci po „śmierci”.
- **NPC**: postać sterowana przez grę, a nie przez człowieka.
- **Grind**: wielokrotne powtarzanie tego samego, żeby zdobyć punkty albo przedmioty.
- **Level, lvl**: poziom.
- **OP** (overpowered): zbyt silny.
- **Nerf i buff**: osłabienie i wzmocnienie czegoś w grze przez twórców.
- **PvP i PvE**: walka z innymi graczami i walka z przeciwnikami sterowanymi przez grę.
- **1v1**: pojedynek jeden na jednego.
- **Server, serwer**: miejsce, w którym spotykają się gracze. Na prywatnym serwerze grają tylko zaproszone osoby.

## Słowa ze świata streamerów

- **Streamer**: osoba, która gra na żywo w internecie, np. na Twitchu albo YouTube.
- **Stream, live**: transmisja na żywo.
- **Donate, donejt**: wpłata dla streamera w trakcie transmisji, często z wiadomością odczytywaną na głos.
- **Sub**: płatna subskrypcja kanału.
- **Clip**: krótki fragment transmisji.

## Na co zwrócić uwagę

Większość tych słów to zwykły język graczy. Kilka zwrotów warto jednak wyłapać, bo mogą oznaczać kłopot:

- **„Free Robux”, „darmowe V-dolce”**: prawie zawsze oszustwo, które ma wyłudzić hasło.
- **„Add me on Discord”, „pisz na Snapie”**: prośba o przejście na inny komunikator. Zapytaj, kto to jest.
- **„Don’t tell your parents”, „to nasza tajemnica”**: sygnał alarmowy, niezależnie od tego, kto to pisze.
- **Donejty i suby z karty rodzica**: sprawdź, czy dziecko nie płaci streamerom bez Twojej wiedzy.

!! Poproś dziecko, żeby dopisało do tej listy swoje słowa. Zróbcie z tego zabawę: ono uczy Ciebie słów z gier, Ty uczysz je słów z czasów, gdy grało się na Pegasusie. Taka rozmowa buduje więcej zaufania niż jakakolwiek aplikacja.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 20.11
(
  'czas-przed-ekranem-zalecenia-i-praktyka',
  'Czas przed ekranem: zalecenia i praktyka',
  'Co mówi Światowa Organizacja Zdrowia, dlaczego liczba minut to nie wszystko i jakie małe zmiany w domu działają najlepiej.',
  'Rozmowa z dzieckiem',
  array['0–6 lat', '7–9 lat', '10–12 lat'],
  $md$„Ile mu pozwalasz?” to jedno z najczęstszych pytań między rodzicami. Odpowiedź jest prostsza dla maluchów niż dla starszych dzieci. Zobaczmy, co mówią zalecenia i co działa w prawdziwym domu.

## Zalecenia WHO dla najmłodszych

Światowa Organizacja Zdrowia (WHO) opublikowała zalecenia dla dzieci do 5 lat:

- **do 1 roku:** bez ekranów,
- **1 rok:** czas przed ekranem nie jest zalecany,
- **2 lata:** maksymalnie godzina dziennie, a im mniej, tym lepiej,
- **3–4 lata:** maksymalnie godzina dziennie, a im mniej, tym lepiej.

Zamiast ekranu WHO zaleca ruch, wspólne czytanie, opowiadanie i zabawę. Liczy się też sen: od 10 do 13 godzin na dobę u dzieci w wieku 3–4 lat, licząc z drzemkami.

## Starsze dzieci: jakość, nie tylko minuty

Dla dzieci w wieku szkolnym nie ma jednej liczby. Zalecenia WHO mówią, żeby ograniczać czas spędzany na siedząco przed ekranem w czasie wolnym i zadbać o co najmniej 60 minut ruchu dziennie.

W praktyce ważniejsze od samych minut jest to:

- **co dziecko robi:** film obejrzany razem to coś innego niż godzina przewijania krótkich filmików,
- **kiedy to robi:** ekran przed snem szkodzi bardziej niż ten sam czas po południu,
- **czego nie robi zamiast tego:** czy jest jeszcze czas na ruch, sen, kolegów i nudę.

## Ekran przed snem

Wieczorne granie i oglądanie pobudzają mózg i utrudniają zasypianie. Do tego powiadomienia potrafią budzić w nocy. Dlatego tak dobrze działa zasada, że telefon nocuje poza sypialnią.

Spróbuj godziny bez ekranu przed snem. Na początku będzie opór, ale po kilku tygodniach wieczory zwykle robią się spokojniejsze.

## 5 zasad, które działają w praktyce

1. **Stałe pory bez ekranu**, np. posiłki i droga do szkoły.
2. **Telefon poza sypialnią** w nocy, także telefon rodzica.
3. **Godzina przed snem bez ekranu.**
4. **Wspólne oglądanie i granie** zamiast samotnego przewijania.
5. **Własny przykład.** Dzieci robią to, co widzą, a nie to, co słyszą.

## Jak ustawić limity technicznie

Limity pomagają, gdy są dodatkiem do zasad, a nie ich zamiennikiem.

- **Android:** Family Link pozwala ustawić dzienny limit, porę na sen i limity dla aplikacji.
- **iPhone i iPad:** w Czasie przed ekranem ustawisz przestój, limity aplikacji i aplikacje dostępne zawsze.
- **Konsole:** Xbox, PlayStation i Nintendo mają własne aplikacje dla rodziców z limitem czasu gry.

Uprzedź dziecko kilka minut przed końcem czasu. Gra przerwana w połowie rozgrywki to prosty przepis na awanturę.

!! Nie zaczynaj od wszystkich zasad naraz. Wybierzcie jedną strefę bez ekranu, np. kolację, i trzymajcie się jej przez dwa tygodnie. Gdy wejdzie w nawyk, dodajcie kolejną.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 27.11
(
  'telefon-lub-konsola-pod-choinke-lista-kontrolna',
  'Telefon lub konsola pod choinkę: lista kontrolna',
  'Co ustawić na telefonie, tablecie i konsoli, zanim zapakujesz prezent. Osobno dla Androida, iPhone’a, Xboxa, PlayStation i Nintendo Switch.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Nowy telefon albo konsola to jeden z najbardziej wyczekiwanych prezentów. Najlepszy moment na ustawienia jest przed zapakowaniem, a nie w Wigilię wieczorem, gdy dziecko chce już grać.

## Zanim kupisz

- **Do czego dziecko potrzebuje urządzenia?** Do kontaktu z rodzicami wystarczy prosty telefon albo zegarek z GPS.
- **Czy jest gotowe?** Pomocne pytania znajdziesz w naszym wpisie o minimalnym wieku w aplikacjach.
- **Kto będzie zarządzał kontem?** Ustal to z drugim rodzicem, zanim zaczniesz.

## Telefon lub tablet z Androidem

- Załóż dziecku konto Google z prawdziwą datą urodzenia.
- Połącz je z aplikacją Family Link na swoim telefonie.
- Włącz zgodę rodzica na pobieranie aplikacji i na zakupy w Google Play.
- Ustaw dzienny limit, porę na sen i czas w szkole.
- Włącz filtr stron w Chrome i wybierz YouTube Kids albo nadzorowane konto YouTube.

## iPhone lub iPad

- Utwórz konto dziecka w Chmurze rodzinnej (Ustawienia, Twoje imię, Chmura rodzinna).
- Włącz funkcję Poproś o zakup.
- W Czasie przed ekranem ustaw przestój, limity aplikacji i ograniczenia treści.
- Ogranicz komunikację, czyli to, z kim dziecko może rozmawiać i pisać.
- Ustaw kod Czasu przed ekranem, którego dziecko nie zna.

## Xbox

- Zainstaluj aplikację Xbox Family Settings na swoim telefonie.
- Dodaj dziecko do grupy rodzinnej Microsoft z prawdziwą datą urodzenia.
- Ustaw limit czasu, ograniczenia treści, zgodę na zakupy i ustawienia czatu.

## PlayStation 4 i 5

- Zainstaluj aplikację PlayStation Family na swoim telefonie.
- Utwórz konto dziecka w rodzinie PlayStation.
- Ustaw limit czasu gry, miesięczny limit wydatków w PlayStation Store, filtry wiekowe oraz ustawienia czatu i komunikacji.

## Nintendo Switch i Switch 2

- Zainstaluj aplikację Nintendo Switch Parental Controls i połącz ją z konsolą.
- Ustaw dzienny limit czasu i poziom ograniczeń według wieku.
- W koncie Nintendo dziecka ogranicz zakupy w eShopie i komunikację z innymi graczami.

## Pierwszy dzień z prezentem

Zanim dziecko zacznie grać, porozmawiajcie o zasadach. Spiszcie krótką rodzinną umowę: gdzie urządzenie nocuje, ile czasu dziennie, co z zakupami i co robicie, gdy coś zaniepokoi. Opisaliśmy ją dokładniej we wpisie o pierwszym smartfonie.

Zasady ustalone na początku łatwiej utrzymać. Odebranie czegoś, co już było wolno, prawie zawsze kończy się kłótnią.

## Gdy prezent kupują dziadkowie

Dziadkowie często kupują sprzęt z najlepszą intencją, ale bez ustawień. Poproś, żeby urządzenie trafiło najpierw do Ciebie, albo przyjdź wcześniej i skonfigurujcie je razem. Możesz też po prostu przesłać im tę listę.

## Lista do wydruku

- Konto dziecka z prawdziwą datą urodzenia
- Aplikacja rodzica zainstalowana i połączona
- Zgoda rodzica na pobieranie aplikacji
- Blokada albo zgoda na zakupy
- Dzienny limit czasu
- Pora na sen lub przestój
- Filtr treści według wieku
- Czat tylko ze znajomymi
- Hasło lub kod rodzica, którego dziecko nie zna
- Rodzinna umowa spisana i podpisana

!! Ustaw wszystko kilka dni przed świętami. Każda aplikacja rodzica wymaga aktualizacji, logowania i potwierdzeń, a to zajmuje więcej czasu, niż się wydaje. W Wigilię chcesz już tylko patrzeć na radość dziecka.$md$,
  false, 'draft', null
)

on conflict (slug) do nothing;


-- ================================================================ grudzień–marzec
insert into public.posts (slug, title, excerpt, category, ages, body, featured, status, published_at)
values

-- ---------------------------------------------------------------- 04.12.2026
(
  'pegi-jak-czytac-oznaczenia-gier',
  'PEGI: jak czytać oznaczenia gier (i czego nie mówią)',
  'Co znaczą liczby 3, 7, 12, 16 i 18, co mówią małe obrazki obok i dlaczego PEGI nie powie Ci nic o czacie z innymi graczami.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Przed świętami w sklepach z grami robi się tłoczno, a na pudełkach widać kolorowe kwadraty z liczbami. To oznaczenia PEGI. Warto umieć je czytać, ale też wiedzieć, czego z nich nie wyczytasz.

## Czym jest PEGI

PEGI to europejski system oznaczeń wiekowych gier. Znajdziesz go na pudełku, w sklepach internetowych i w sklepach na konsolach. Oznaczenie mówi, od jakiego wieku treść gry jest odpowiednia. Nie mówi, czy gra jest trudna, mądra ani czy dziecku się spodoba.

## Co znaczą liczby

- **PEGI 3:** treści odpowiednie dla każdego wieku.
- **PEGI 7:** mogą pojawić się sceny lub dźwięki, które przestraszą małe dziecko, albo bardzo łagodna przemoc.
- **PEGI 12:** przemoc wobec postaci fantastycznych albo łagodniejsza przemoc wobec postaci przypominających ludzi, łagodne wulgaryzmy.
- **PEGI 16:** realistyczna przemoc, mocniejszy język, czasem używki.
- **PEGI 18:** treści dla dorosłych, np. bardzo brutalna przemoc.

## Co mówią obrazki obok liczby

Obok liczby często są małe ikonki. Pokazują, **dlaczego** gra dostała taką ocenę: przemoc, wulgarny język, strach, hazard, seks, narkotyki, dyskryminacja. Jest też oznaczenie **zakupów w grze**, czasem z dopiskiem, że można kupować losowe przedmioty. To ważna informacja przed Black Friday i świętami.

## Czego PEGI nie ocenia

Najważniejsza rzecz w tym wpisie: **PEGI nie ocenia czatu i kontaktu z innymi graczami.** Gra z oznaczeniem PEGI 7 może mieć czat, na którym dorośli piszą wulgaryzmy. Gra dla dzieci może pozwalać na wiadomości prywatne od obcych.

Dlatego przy każdej nowej grze zadaj dwa pytania:

1. Jakie ma PEGI i dlaczego?
2. Czy da się w niej rozmawiać z innymi graczami i jak to ustawić?

## Gdzie sprawdzić grę

Na stronie pegi.info wpiszesz tytuł i zobaczysz oznaczenie oraz opis. W sklepach z aplikacjami na telefonie oznaczenia bywają inne, bo każdy sklep ma własny system. Zawsze warto zajrzeć do opisu i do sekcji „zakupy w aplikacji”.

## Gdy dziecko chce grę dla starszych

Zdarza się, że „wszyscy w klasie grają” w grę z oznaczeniem 16 albo 18. Zamiast od razu odmawiać, obejrzyjcie razem kilka minut rozgrywki na YouTubie. Porozmawiajcie, co w niej jest i czy dziecko jest na to gotowe. Twoja decyzja będzie wtedy zrozumiała, nawet jeśli brzmi „jeszcze nie”.

!! Wyślij ten wpis dziadkom albo cioci, jeśli to oni kupują gry na prezent. Jedno zdanie wystarczy: „Sprawdźcie PEGI i zapytajcie mnie o czat”.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 11.12.2026
(
  'pierwszy-telefon-czy-smartwatch-pytania-przed-zakupem',
  'Pierwszy telefon czy smartwatch? Pytania przed zakupem',
  'Nie ma jednego dobrego wieku na smartfon. Jest za to dobra kolejność: cel, zasady, ustawienia. Podpowiadamy, o co zapytać siebie i sprzedawcę.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat'],
  $md$Telefon albo zegarek z GPS to jeden z najczęstszych prezentów pod choinkę. Zanim go kupisz, odpowiedz sobie na kilka pytań. Dzięki nim po świętach będzie mniej kłótni.

## Pytanie 1: do czego jest potrzebny?

Jeśli chodzi głównie o kontakt i bezpieczny powrót ze szkoły, na start może wystarczyć prostszy telefon albo smartwatch dla dzieci. Jeśli dziecko ma korzystać z aplikacji szkolnych, map i komunikatora, potrzebny będzie smartfon.

## Pytanie 2: czy dziecko radzi sobie z zasadami bez telefonu?

Czy wraca o umówionej porze? Czy mówi, gdy coś jest nie tak? Telefon nie nauczy tego za dziecko. Wzmocni to, co już działa, i uwidoczni to, co jeszcze nie działa.

## Pytanie 3: czy umiesz ustawić kontrolę rodzicielską?

Zrób to przed zapakowaniem prezentu. Na Androidzie służy do tego Family Link, na iPhonie Chmura rodzinna i Czas przed ekranem. Opisaliśmy je krok po kroku na blogu.

## Pytanie 4: od jakich aplikacji zaczynacie?

Lepiej zacząć od kilku i dodawać kolejne razem. Każda nowa aplikacja to okazja do rozmowy: do czego jest, kto może do Ciebie pisać, co robisz, gdy ktoś jest niemiły.

## Pytanie 5: jakie zasady obowiązują w domu?

Gdzie telefon nocuje, kiedy odpoczywa, co z grami. Spiszcie to w rodzinnej umowie, zanim telefon trafi do ręki dziecka.

## Smartwatch dla dziecka: 4 rzeczy do sprawdzenia

1. **Lista kontaktów.** Czy dzwonić i pisać mogą tylko numery zatwierdzone przez rodzica?
2. **Lokalizacja.** Kto ją widzi i gdzie producent przechowuje dane? To najczęściej pomijany punkt.
3. **Aplikacja producenta.** Wybieraj znane marki i sprawdź, jakie dane zbiera aplikacja.
4. **Tryb szkolny.** Czy zegarek może sam milknąć w czasie lekcji?

Powiedz dziecku, że widzisz jego lokalizację i kiedy z niej korzystasz. Sprawdzanie w tajemnicy szybko niszczy zaufanie.

!! Nie ma jednego dobrego wieku na pierwszy telefon. Jest dobra kolejność: najpierw cel, potem zasady, na końcu ustawienia.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 18.12.2026
(
  'oszustwa-w-grach-darmowe-robuxy-kody-z-kart',
  'Oszustwa w grach: darmowe Robuxy, kody z kart i przejęte konta',
  'Przed świętami oszustów w grach jest więcej. Pięć najczęstszych sztuczek, jedna prosta zasada dla dziecka i plan działania, gdy konto zostało przejęte.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Grudzień to dobry czas dla oszustów w grach. Dzieci czekają na prezenty, karty podarunkowe leżą pod choinką, a obietnica „darmowej waluty” działa jak magnes. Prawie każde takie oszustwo ma jeden cel: hasło, kod z SMS-a albo kod z karty.

## 5 najczęstszych sztuczek

1. **Strona „generator Robux” albo „darmowe V-dolce”.** Prosi o login i hasło. Efekt: przejęte konto.
2. **„Konkurs” z darmowymi skinami.** Trzeba podać dane i przepisać kod z SMS-a. Efekt: przejęte konto.
3. **Gracz, który obiecuje prezent.** „Daj hasło, dodam ci waluty.” Efekt: przejęte konto.
4. **„Pomyłka”.** Ktoś pisze, że przez przypadek wysłał kod na numer dziecka, i prosi o jego przesłanie. To kod do logowania na konto dziecka.
5. **Film z „trikiem”.** „Pobierz ten program, a dostaniesz darmowe rzeczy.” Efekt: szkodliwy program na komputerze.

## Karty podarunkowe

Karty podarunkowe są wygodnym prezentem i równie wygodną walutą dla oszustów, bo pieniędzy zwykle nie da się odzyskać. Jeśli ktoś prosi dziecko o kod z karty, to zawsze oszustwo. Dotyczy to też szantażu: „zapłać kodem, bo opublikuję twoje zdjęcie”. W takiej sytuacji nie płaćcie, zróbcie zrzuty ekranu i szukajcie pomocy.

Prosta zasada: **kod z karty wpisuje rodzic i tylko w oficjalnym sklepie.**

## Jedno zdanie dla dziecka

„Darmowej waluty nie ma. Kto ją obiecuje, kłamie. Hasło i kody z SMS-a znamy tylko my dwoje.”

## Co zrobić, gdy konto zostało przejęte

1. Zmień hasło z innego urządzenia, jeśli to jeszcze możliwe.
2. Włącz weryfikację dwuetapową.
3. Napisz do pomocy technicznej gry. Podaj datę założenia konta i ostatnie zakupy.
4. Sprawdź, czy to samo hasło nie było używane gdzie indziej. Jeśli tak, zmień je wszędzie.
5. Jeśli w grę wchodziły pieniądze z karty, skontaktuj się z bankiem.

!! Nie krzycz na dziecko, które dało się nabrać. Dorośli też się nabierają. Jeśli po tej przygodzie dziecko nauczy się przychodzić do Ciebie, wyszliście na plus.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 25.12.2026
(
  '5-gier-na-swieta-do-wspolnego-grania',
  '5 gier na święta do wspólnego grania na jednej kanapie',
  'Gry, w które zagrasz z dzieckiem przy jednym telewizorze, bez obcych graczy. Z oznaczeniami PEGI i podpowiedzią, dla kogo są.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Najlepsza kontrola rodzicielska kosztuje kwadrans dziennie: wspólna gra. W święta jest na nią czas. Zebraliśmy gry, w które gra się razem na jednym ekranie, bez czatu z obcymi.

## Mario Kart 8 Deluxe

**PEGI 3 · do 4 osób na jednej konsoli · Nintendo Switch.** Wyścigi, w których czasem wygrywa też babcia. Proste sterowanie i dużo śmiechu.

## Overcooked! 2

**PEGI 3 · 2–4 osoby · wiele konsol i komputer.** Wspólne gotowanie w zabawnym chaosie. Uczy współpracy i podziału zadań, a przy okazji pokazuje, kto w rodzinie najlepiej kroi cebulę.

## Just Dance

**PEGI 3 · cała rodzina · wiele konsol.** Tańczycie przed telewizorem. Dobra gra na zimowe wieczory, kiedy trudniej o ruch na dworze.

## Minecraft na podzielonym ekranie

**PEGI 7 · 2–4 osoby · konsole.** Wspólne budowanie na jednym telewizorze, bez obcych graczy z serwerów. Dobra okazja, żeby dziecko pokazało Ci, co potrafi.

## It Takes Two

**PEGI 12 · 2 osoby · konsole i komputer.** Przygoda, którą da się przejść tylko razem. Dla starszego dziecka i rodzica, który nie boi się pada.

## Zanim zaczniecie

- Oznaczenia PEGI sprawdź na pegi.info. Wersje gier się zmieniają.
- Wyłącz grę online, jeśli gracie tylko lokalnie.
- Pozwól dziecku być nauczycielem. Dzieci rzadko mają okazję uczyć dorosłych i bardzo to lubią.

!! Nie chodzi o to, żeby wygrać. Po partii zapytaj: „W co jeszcze grasz? Pokażesz mi?”. Wspólne granie otwiera rozmowy, których nie zacznie żadne pytanie.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 01.01.2027
(
  'cyfrowe-postanowienia-rodziny-na-2027',
  '5 cyfrowych postanowień dla całej rodziny na 2027',
  'Postanowienia działają, gdy obowiązują wszystkich, nie tylko dzieci. Pięć prostych nawyków i podpowiedź, od którego zacząć.',
  'Rozmowa z dzieckiem',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Nowy rok to dobry moment, żeby ustalić kilka zasad na nowo. Klucz jest jeden: postanowienia dotyczą całej rodziny. Jeśli rodzic przy kolacji przewija telefon, zakaz dla dziecka nie zadziała.

## 1. Telefony śpią w przedpokoju

Wszystkie, także rodziców. Ładowarka poza sypialnią to najprostszy sposób na lepszy sen i mniej nocnego przewijania.

## 2. Przy jedzeniu bez ekranów

Posiłek to często jedyny moment w ciągu dnia, kiedy cała rodzina siedzi razem. Telefony leżą w innym pokoju albo ekranem do stołu.

## 3. Raz w tygodniu gramy razem w grę dziecka

Kwadrans wystarczy. Dowiesz się, co dziecko lubi, z kim gra i jak wygląda czat w tej grze. A dziecko zobaczy, że interesujesz się jego światem.

## 4. Codziennie jedno pytanie

„Z kim dziś grałeś?”, „Co Cię dziś rozśmieszyło w internecie?”. Gdy takie pytania są codziennością, łatwiej o rozmowę, kiedy dzieje się coś trudnego.

## 5. Raz w miesiącu przeglądamy rodzinną umowę

Zasady powinny rosnąć razem z dzieckiem. Co działa? Co trzeba zmienić? Na co dziecko jest już gotowe?

## Od czego zacząć

Nie od wszystkich naraz. Wybierzcie jedno postanowienie, najlepiej to, które dziecko samo wskaże. Po miesiącu dodajcie kolejne.

!! Zapiszcie postanowienia na kartce i powieście na lodówce. Na koniec stycznia sprawdźcie razem, co się udało. Pochwała za jedno dotrzymane postanowienie zrobi więcej niż wyrzuty za cztery pozostałe.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 08.01.2027
(
  'nowy-iphone-dziecka-czas-przed-ekranem',
  'Nowy iPhone dziecka: Czas przed ekranem krok po kroku',
  'Chmura rodzinna, przestój, limity aplikacji, zgoda na zakupy i ograniczenia komunikacji. Ustawisz je w kwadrans, częściowo z własnego telefonu.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Na prośbę obserwujących: odpowiednik naszego poradnika o Family Link, tym razem dla iPhone’a. Wszystkie ustawienia znajdziesz w aplikacji Ustawienia, w sekcji Czas przed ekranem. Nazwy mogą się nieco różnić w zależności od wersji iOS.

## Krok 0: konto dziecka w Chmurze rodzinnej

Zacznij od dodania dziecka do Chmury rodzinnej: Ustawienia, Twoje imię, Chmura rodzinna. Dziecko powinno mieć własne konto Apple z prawdziwą datą urodzenia. Wtedy większość ustawień zmienisz ze swojego telefonu, a część zabezpieczeń dla dzieci włączy się automatycznie.

## Krok 1: przestój

Godziny, w których działają tylko wybrane aplikacje, np. telefon i wiadomości do rodziców. Najczęściej ustawia się go na noc i na czas lekcji.

## Krok 2: limity aplikacji

Dzienny czas dla całych kategorii, np. gier albo mediów społecznościowych, lub dla konkretnych aplikacji. Dziecko może poprosić o więcej czasu, a Ty zgodzisz się albo odmówisz ze swojego telefonu.

## Krok 3: ograniczenia treści i prywatności

Tu ustawisz, jakie aplikacje, filmy i strony są dostępne dla wieku dziecka. Tu też zablokujesz zmiany konta i kodu bez Twojej zgody.

## Krok 4: Poproś o zakup

Każdy zakup i każde pobranie nowej aplikacji wymaga Twojej zgody. Prośba przychodzi na Twój telefon. To najprostszy sposób na uniknięcie niespodzianek na wyciągu z karty.

## Krok 5: ograniczenia komunikacji

Określasz, z kim dziecko może pisać i rozmawiać, także w czasie przestoju. Dla młodszych dzieci warto zostawić tylko kontakty z listy.

## Krok 6: osobny kod Czasu przed ekranem

Ustaw kod inny niż kod do odblokowania telefonu i nie zdradzaj go dziecku. Inaczej wszystkie ustawienia da się zmienić w kilka sekund.

## Warto wiedzieć

- Funkcja bezpieczeństwa komunikacji może ostrzegać dziecko przed zdjęciami zawierającymi nagość. U młodszych dzieci jest zwykle włączona domyślnie. Sprawdź to w ustawieniach Czasu przed ekranem.
- Limity nie zastąpią rozmowy. Omów z dzieckiem, co ustawiasz i dlaczego.

!! Ustawcie Czas przed ekranem razem z dzieckiem, a nie za jego plecami. Umówcie się, jak może poprosić o więcej czasu. Wtedy limity są częścią waszej umowy, a nie karą.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 15.01.2027
(
  'grooming-w-grach-etapy-i-sygnaly',
  'Grooming w grach: jak obcy zdobywa zaufanie dziecka i jakie są sygnały',
  'Sprawcy rzadko zaczynają od czegoś niepokojącego. Opisujemy etapy, sygnały ostrzegawcze i to, co zrobić, gdy coś Cię zaniepokoi.',
  'Rozmowa z dzieckiem',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Grooming to proces, w którym dorosły krok po kroku zdobywa zaufanie dziecka, żeby je potem skrzywdzić. W grach online zaczyna się zwykle niewinnie: od wspólnej gry i pomocy. Dlatego tak trudno to zauważyć. Znając etapy, możesz zareagować wcześnie.

## Jak to zwykle przebiega

1. **Kontakt.** Wspólna gra, pomoc w misji, pochwały.
2. **Zaufanie.** Komplementy, prezenty w grze, poczucie wyjątkowości: „tylko ja cię rozumiem”.
3. **Izolacja.** Propozycja rozmowy w innej aplikacji, gdzie nikt nie widzi.
4. **Tajemnica.** „Nie mów rodzicom, nie zrozumieją.”
5. **Eskalacja.** Prośby o zdjęcia albo spotkanie, a potem presja i groźby.

Najwcześniejszy wyraźny sygnał to etap 3: nowa aplikacja i nowy „przyjaciel”, o którym nic nie wiesz.

## 7 sygnałów, że coś się może dziać

Żaden sygnał osobno nie jest dowodem. Kilka naraz to powód do spokojnej rozmowy.

1. Dziecko ukrywa ekran albo wyłącza grę, gdy wchodzisz.
2. Mówi o „przyjacielu z gry”, którego nikt nie zna.
3. Dostaje prezenty w grach: walutę, skiny, karty podarunkowe.
4. Ma nową aplikację do rozmów, o której nic nie wiesz.
5. Gra albo pisze w nocy.
6. Po graniu jest nerwowe, wycofane albo smutne.
7. Ktoś prosi je o zdjęcia, tajemnicę albo spotkanie. **To już alarm.**

## Co zrobić, gdy coś Cię niepokoi

- Zachowaj spokój. Krzyk sprawi, że dziecko zamknie się w sobie.
- Powiedz: „Dobrze, że mi mówisz. To nie twoja wina.”
- Nie kasuj rozmów. Zrób zrzuty ekranu z nazwą konta i datą.
- Zablokuj i zgłoś konto na platformie.
- Szukaj wsparcia: 800 100 100 to telefon dla rodziców i nauczycieli, 116 111 to telefon zaufania dla dzieci i młodzieży. Niepokojące treści zgłosisz na Dyżurnet.pl. W sytuacji zagrożenia dzwoń pod 112.

## Najważniejsza rozmowa

Powiedz dziecku dziś, zanim cokolwiek się wydarzy: „Jeśli ktoś każe ci coś przede mną ukrywać, przyjdź do mnie. Nie będzie kary. Dobre niespodzianki się kiedyś ujawnia, złe sekrety trzeba zgłaszać.”

!! Dziecko, które boi się utraty telefonu, rzadko przyjdzie po pomoc. Obietnica „bez kary za szczerość” chroni lepiej niż jakakolwiek aplikacja.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 22.01.2027
(
  'snapchat-co-musi-wiedziec-rodzic',
  'Snapchat: co musi wiedzieć rodzic',
  '„Znikające” nie znaczy „bezpieczne”. Wyjaśniamy Snap Mapę, tryb ducha i Centrum rodzinne oraz podpowiadamy, o czym porozmawiać z nastolatkiem.',
  'Media społecznościowe',
  array['10–12 lat', '13–15 lat'],
  $md$Snapchat to aplikacja do wysyłania zdjęć, filmików i wiadomości, które domyślnie znikają po obejrzeniu. W regulaminie jest od 13 lat. Dla wielu nastolatków to główny komunikator ze znajomymi.

## „Znikające” nie znaczy „bezpieczne”

To największe nieporozumienie. Każdy odbiorca może zrobić zrzut ekranu albo nagrać ekran innym telefonem. Snapchat czasem powiadamia o zrzucie, ale nie zawsze to zatrzyma krzywdę. Zasada na rozmowę: „Wysyłaj tylko to, co mogłoby zobaczyć całe osiedle.”

## Snap Mapa i tryb ducha

Snap Mapa to mapa, na której znajomi mogą widzieć, gdzie jest użytkownik. Problem w tym, że „znajomy” na Snapchacie to często ktoś poznany w sieci.

Rozwiązanie zajmuje pół minuty: w ustawieniach mapy włączcie **tryb ducha**. Wtedy lokalizacja nie jest nikomu pokazywana. Przejrzyjcie też razem listę znajomych.

## Centrum rodzinne

To narzędzie Snapchata dla rodziców. Po połączeniu kont zobaczysz m.in. listę znajomych dziecka i to, z kim ostatnio pisało, ale **nie** treść wiadomości. Możesz też zgłaszać niepokojące konta. Centrum rodzinne wymaga zgody nastolatka, więc trzeba o nim porozmawiać.

## O czym porozmawiać

- Kogo dodajemy do znajomych? Tylko osoby znane z prawdziwego życia.
- Co zrobić, gdy ktoś prosi o zdjęcia? Nie wysyłać, zrobić zrzut ekranu, przyjść do rodzica.
- Czym są „serie” (streaki)? Codzienne wysyłanie snapów potrafi wywierać presję. Przerwanie serii to nie koniec świata.

!! Nie musisz mieć Snapchata, żeby o nim rozmawiać. Poproś nastolatka, żeby pokazał Ci aplikację i swoje ustawienia. To on jest tu ekspertem, a Ty uczysz się, zamiast kontrolować.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 29.01.2027
(
  'instagram-i-tiktok-dla-nastolatka-ustawienia',
  'Instagram i TikTok dla nastolatka: co działa samo, a co trzeba ustawić',
  'Konta nastolatków na Instagramie, Połączenie rodzinne w TikToku i krótko o tym, jak działa algorytm, który podsuwa coraz mocniejsze treści.',
  'Media społecznościowe',
  array['13–15 lat'],
  $md$Instagram i TikTok mają dziś osobne zabezpieczenia dla nastolatków. Działają jednak tylko pod jednym warunkiem: dziecko podało przy zakładaniu konta prawdziwą datę urodzenia. To pierwsza rzecz do sprawdzenia.

## Instagram: Konta nastolatków

Młodzi użytkownicy dostają automatycznie dodatkowe zabezpieczenia:

- **Konto prywatne.** Posty widzą tylko zaakceptowani obserwujący.
- **Ograniczone wiadomości.** Piszą głównie osoby, które nastolatek obserwuje albo z którymi już rozmawiał.
- **Mniej treści wrażliwych** w polecanych.
- **Tryb uśpienia.** Brak powiadomień w nocy.

Młodsze nastolatki potrzebują zgody rodzica, żeby złagodzić te ustawienia. Możesz też włączyć nadzór rodzicielski i widzieć m.in. czas spędzany w aplikacji.

## TikTok: Połączenie rodzinne

Łączysz swój TikTok z kontem dziecka przez kod QR w ustawieniach. Potem ze swojego telefonu ustawisz:

1. dzienny limit czasu,
2. tryb ograniczony, czyli mniej treści nieodpowiednich dla wieku,
3. kto może wysyłać dziecku wiadomości,
4. kto może komentować filmy dziecka,
5. konto prywatne.

Dla użytkowników poniżej 16 lat konto jest domyślnie prywatne, a wiadomości prywatne są wyłączone.

## Jak działa algorytm

Strona „Dla Ciebie” na TikToku i „Rolki” na Instagramie pokazują filmy wybrane przez algorytm. Algorytm patrzy głównie na to, przy czym dziecko się zatrzymało, a nie na to, czego szukało. Kilka smutnych albo drastycznych filmów obejrzanych do końca wystarczy, żeby takich treści było coraz więcej.

Co pomaga:

- przycisk „Nie interesuje mnie” przy filmach, których nie chcemy oglądać,
- opcja odświeżenia kanału w ustawieniach TikToka,
- pytanie zadawane bez oceniania: „Co ci ostatnio pokazuje TikTok?”.

## Ustawienia, które warto sprawdzić razem

- Prawdziwa data urodzenia.
- Konto prywatne.
- Kto może pisać i komentować.
- Ukryta lokalizacja w postach i relacjach.

!! Nie zaczynaj od zakazu. Poproś nastolatka, żeby pokazał Ci swój kanał „Dla Ciebie”. Zobaczysz, co ogląda, i będzie okazja, żeby porozmawiać o tym, jak algorytm działa na nas wszystkich, także na dorosłych.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 05.02.2027
(
  'wyzwanie-7-dni-dzien-bezpiecznego-internetu',
  'Wyzwanie 7 dni na Dzień Bezpiecznego Internetu',
  'Dzień Bezpiecznego Internetu przypada we wtorek 9 lutego. Proponujemy tydzień małych kroków: jedno zadanie dziennie, ok. 5 minut.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Dzień Bezpiecznego Internetu w 2027 roku przypada we wtorek 9 lutego. Zamiast jednego wielkiego wykładu proponujemy tydzień małych kroków. Startujemy w poniedziałek 8 lutego. Każde zadanie zajmuje około 5 minut.

## Dzień 1: data urodzenia

Sprawdź, jaką datę urodzenia dziecko podało w swoich grach i aplikacjach. Od niej zależą zabezpieczenia, które platformy włączają automatycznie.

## Dzień 2: z kim gra i pisze

Zapytaj z ciekawością: „Z kim grasz? Z kim rozmawiasz w grach?”. Bez przesłuchania.

## Dzień 3: czat w jednej grze

Ustaw czat w ulubionej grze dziecka. Instrukcje do popularnych gier znajdziesz na blogu i na naszym Instagramie.

## Dzień 4: zakupy tylko za zgodą

Na telefonie: Family Link na Androidzie albo Poproś o zakup na iPhonie. Na konsoli: limit wydatków w aplikacji rodzica.

## Dzień 5: telefon nocą poza sypialnią

Wybierzcie razem miejsce, w którym nocują wszystkie telefony w domu, także rodziców.

## Dzień 6: hasła i weryfikacja dwuetapowa

Sprawdźcie, czy dziecko nie używa wszędzie tego samego hasła. Włączcie weryfikację dwuetapową na najważniejszych kontach.

## Dzień 7: rodzinna umowa

Spiszcie kilka zasad na kartce i podpiszcie ją razem. Wzór i podpowiedzi znajdziesz we wpisie o pierwszym smartfonie.

## Jak to zrobić w praktyce

- Zapisz ten wpis i odhaczaj kolejne dni.
- Zaproś do wyzwania drugiego rodzica albo znajomych z klasowej grupy.
- Opowiedz nam na Instagramie, jak poszło.

!! Nie musisz zrobić wszystkiego w tydzień. Każdy odhaczony punkt to realnie bezpieczniejszy internet w Twoim domu.$md$,
  false, 'draft', null
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

## O czym porozmawiać

1. Na jakich serwerach jesteś? Kto je prowadzi?
2. Kto pisze do ciebie prywatnie?
3. Co zrobisz, gdy ktoś poprosi o zdjęcie albo o przejście na inną aplikację?

## Co możesz ustawić

W ustawieniach prywatności i bezpieczeństwa: kto może wysyłać wiadomości prywatne, kto może zapraszać do znajomych i filtr treści. Discord ma też Centrum rodzinne, w którym rodzic widzi m.in. nowych znajomych i serwery dziecka, ale nie treść rozmów.

!! Nie zakazuj Discorda z dnia na dzień, jeśli działa na nim grupa klasowa. Lepiej ustawić prywatność razem i umówić się, że dziecko powie Ci o każdym nowym dużym serwerze.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 19.02.2027
(
  'sextortion-co-zrobic-w-pierwszej-godzinie',
  'Sextortion: co zrobić w pierwszej godzinie',
  'Szantaż intymnymi zdjęciami zdarza się także nastolatkom. Plan działania krok po kroku i zdanie, które dziecko musi usłyszeć jako pierwsze.',
  'Prywatność i dane',
  array['13–15 lat', '16+'],
  $md$Sextortion to szantaż intymnymi zdjęciami albo nagraniami. Sprawca grozi, że je opublikuje albo wyśle znajomym, jeśli ofiara nie zapłaci albo nie wyśle kolejnych materiałów. Ofiarami są często nastolatki, także chłopcy. Sprawcy działają szybko i wywierają ogromną presję.

Ten wpis warto przeczytać, zanim będzie potrzebny.

## Pierwsze zdanie

Dziecko, które przychodzi z takim problemem, zwykle umiera ze wstydu i strachu. Pierwsze, co musi usłyszeć, to:

> „To nie twoja wina. Dobrze, że mi mówisz. Poradzimy sobie razem.”

## Co zrobić krok po kroku

1. **Nie płaćcie.** Zapłata zwykle nie kończy szantażu, tylko zachęca do kolejnych żądań.
2. **Nie wysyłajcie niczego więcej** i nie negocjujcie ze sprawcą.
3. **Nie kasujcie rozmowy.** Zróbcie zrzuty ekranu z nazwą konta, datą i treścią gróźb.
4. **Zablokujcie i zgłoście konto** na platformie, na której doszło do kontaktu.
5. **Zgłoście sprawę na policję** (w zagrożeniu 112) i do Dyżurnet.pl, czyli zespołu NASK, który przyjmuje zgłoszenia nielegalnych treści.
6. **Skorzystajcie z Take It Down.** To bezpłatne narzędzie, które pomaga usuwać intymne materiały osób niepełnoletnich z platform, które z nim współpracują.

## Wsparcie

- **116 111**: bezpłatny telefon zaufania dla dzieci i młodzieży.
- **800 100 100**: bezpłatny telefon dla rodziców i nauczycieli.

## Rozmowa profilaktyczna

Porozmawiaj z nastolatkiem, zanim cokolwiek się wydarzy:

- Osoby, które proszą o zdjęcia, często udają rówieśników.
- Prośba „wyślij mi zdjęcie” to nie dowód sympatii ani miłości.
- Jeśli coś się stanie, zawsze może przyjść do Ciebie i nie będzie kary.

!! Najważniejsze, co możesz zrobić już dziś: powiedzieć dziecku, że z każdym problemem w sieci może przyjść do Ciebie i że nie stracisz do niego zaufania. Sprawcy liczą na to, że dziecko będzie milczeć.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 26.02.2027
(
  'cyberprzemoc-w-klasowej-grupie',
  'Cyberprzemoc w klasowej grupie: jak ją rozpoznać i co zrobić',
  'Najwięcej przemocy w sieci dzieje się tam, gdzie dziecko jest codziennie: w grupach klasowych. Sygnały, pierwsze kroki i rola szkoły.',
  'Rozmowa z dzieckiem',
  array['10–12 lat', '13–15 lat'],
  $md$Cyberprzemoc rzadko zaczyna się na TikToku. Najczęściej dzieje się w grupach klasowych na Messengerze, WhatsAppie czy Discordzie, czyli tam, gdzie dzieci są codziennie i gdzie dorośli zwykle nie zaglądają.

## Jak wygląda

- wyrzucanie z grupy albo zakładanie grupy „bez tej jednej osoby”,
- wyśmiewanie, przezwiska, naklejki i memy o kimś,
- rozsyłanie zdjęć bez zgody, także przerobionych,
- „ankiety” o kimś, np. „kto jest najbrzydszy”.

Coraz częściej pojawiają się też fałszywe zdjęcia tworzone przez AI. Tworzenie i rozsyłanie fałszywych nagich wizerunków rówieśników krzywdzi i jest zakazane.

## Sygnały, że coś się dzieje

- dziecko unika szkoły albo konkretnych osób,
- nerwowo sprawdza telefon albo przeciwnie, nagle przestaje z niego korzystać,
- kasuje aplikacje, wychodzi z grup,
- jest smutne, rozdrażnione, gorzej śpi.

## Co zrobić

1. **Wysłuchaj i nie bagatelizuj.** „To tylko żarty” to najgorsze, co dziecko może usłyszeć.
2. **Nie zabieraj telefonu za karę.** Dziecko odbierze to jako karę za to, że powiedziało.
3. **Nie usuwaj wiadomości.** Usunięta wiadomość to usunięty dowód. Zrób zrzuty ekranu z treścią, nazwą konta i datą. Dopiero potem blokujcie i zgłaszajcie.
4. **Zgłoś wychowawcy i pedagogowi szkolnemu.** Szkoła ma obowiązek reagować, także na to, co dzieje się w sieci między uczniami.
5. **Zgłoś treści platformie.** Przy treściach nielegalnych, np. intymnych zdjęciach osób niepełnoletnich, zgłoś je na Dyżurnet.pl i na policję.
6. **Szukaj wsparcia.** 116 111 dla dziecka, 800 100 100 dla rodzica.

## Gdy Twoje dziecko jest sprawcą

To trudne, ale ważne. Porozmawiaj o skutkach dla osoby skrzywdzonej i o tym, jak naprawić krzywdę. Kara bez rozmowy rzadko zmienia zachowanie.

## Rola klasowej grupy rodziców

Rodzice mogą dużo zrobić razem: ustalić zasady w grupach dzieci, rozmawiać o nich na zebraniach i reagować spokojnie, bez publicznego oskarżania dzieci.

!! Pierwsza reakcja decyduje, czy dziecko przyjdzie do Ciebie następnym razem. Zacznij od: „Dobrze, że mi mówisz. Zastanowimy się razem, co zrobić.”$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 05.03.2027
(
  'czat-w-grach-czat-w-grze-a-czat-konsoli',
  'Czat w grach: czat w grze, czat konsoli i Discord',
  'Wielu rodziców wyłącza czat w grze i myśli, że temat jest załatwiony. Tymczasem konsola ma własny czat, a obok działa jeszcze Discord.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$W marcu na Instagramie prowadzimy serię „Czat w grach”. Ten wpis zbiera najważniejszą rzecz, od której trzeba zacząć: w grach działają co najmniej dwa różne czaty.

## Trzy miejsca, w których dziecko rozmawia

1. **Czat w grze.** Ustawiasz go w danej grze albo na koncie tej gry, np. w kontroli rodzicielskiej Fortnite czy Robloxa.
2. **Czat konsoli.** Xbox, PlayStation i Nintendo Switch mają własne funkcje rozmów głosowych i wiadomości, niezależne od gry. Ustawiasz je w aplikacji rodzica dla danej konsoli.
3. **Aplikacje obok gry.** Najczęściej Discord. Mają własne ustawienia i własne zasady.

Wyłączenie czatu w jednym miejscu nie wyłącza go w pozostałych.

## Rodzaje czatu w grach

- **Czat ogólny** widzą wszyscy na serwerze, jak rozmowę na zatłoczonym placu.
- **Czat drużyny albo klubu** widzą tylko gracze z jednej grupy.
- **Wiadomości prywatne** to rozmowa tylko dwóch osób, bez świadków.
- **Szybki czat** to gotowe zwroty i emotki. To najbezpieczniejsza forma dla młodszych dzieci.
- **Czat głosowy** to rozmowa przez mikrofon. Słyszysz tylko połowę: głos własnego dziecka.

Najwięcej niepokojących sytuacji zaczyna się wtedy, gdy ktoś przenosi rozmowę z czatu ogólnego do prywatnego albo do innej aplikacji.

## Jak sprawdzić, co jest włączone

1. Zapytaj dziecko, w co gra i na jakim urządzeniu.
2. Sprawdź ustawienia czatu w grze.
3. Sprawdź ustawienia komunikacji na konsoli albo w telefonie.
4. Zapytaj o Discorda i inne komunikatory.

## Ile ustawiać, a ile rozmawiać

Dla młodszych dzieci najlepiej sprawdza się czat tylko ze znajomymi z prawdziwego życia albo szybki czat. Starszym możesz dać więcej swobody, jeśli umówicie się, że powiedzą Ci o każdej dziwnej sytuacji.

!! Prosty test na dziś: poproś dziecko, żeby raz zagrało bez słuchawek, przy Tobie. Bez kontroli, z ciekawości. Usłyszysz, jak brzmi jego drużyna.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 12.03.2027
(
  'ustawienia-czatu-fortnite-roblox-minecraft-brawl-stars',
  'Fortnite, Roblox, Minecraft i Brawl Stars: ustawienia czatu krok po kroku',
  'Gdzie w czterech najpopularniejszych grach ustawić czat, zakupy i kontakty. Ściąga dla rodzica, z której skorzystasz w kwadrans.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Gry często zmieniają menu i zasady. Poniżej opisujemy stan na początek 2027 roku. Przed zmianą ustawień zajrzyj na stronę pomocy danej gry.

## Fortnite

- Jeśli dziecko podało prawdziwą datę urodzenia i jest młodsze niż wiek wymagany w danym kraju, Epic Games włącza konto z ograniczeniami: czat i zakupy są wyłączone, dopóki rodzic się nie zgodzi.
- W grze: menu główne, ikona zębatki, Kontrola rodzicielska. Ustaw 6-cyfrowy PIN.
- Przy czacie głosowym i tekstowym wybierz: nikt, tylko znajomi albo znajomi i drużyna.
- Zakupy V-dolców możesz ograniczyć na koncie Epic i na konsoli.

## Roblox

- Od 2026 roku czat działa dopiero po sprawdzeniu wieku: szacowaniu wieku z nagrania twarzy albo dokumencie. Dzieci rozmawiają głównie z osobami w podobnym wieku.
- Połącz swoje konto rodzica z kontem dziecka w ustawieniach kontroli rodzicielskiej.
- Ustaw czat, miesięczny limit wydatków, ograniczenia treści i dzienny limit czasu.
- Przejrzyjcie razem listę znajomych i zaufanych kontaktów.

## Minecraft

- **Wersja Bedrock** (telefon, tablet, konsola, Windows): czat, gra wieloosobowa i znajomi zależą od ustawień prywatności konta Microsoft. Ustawisz je w aplikacji Xbox Family Settings albo na stronie konta Xbox, gdy dziecko jest w Twojej grupie rodzinnej.
- **Wersja Java** (komputer): w grze Opcje, Ustawienia czatu, Czat: ukryty. W Javie dziecko może wpisać adres dowolnego serwera, więc porozmawiajcie, na jakich gra.
- Minecraft nie ma wbudowanego czatu głosowego, ale serwery często używają Discorda.

## Brawl Stars

- Dzieci rozmawiają na czacie tekstowym klubu, czyli grupy graczy. Czatu głosowego w grze nie ma.
- Czat można wyłączyć w ustawieniach gry, ale nie chroni go PIN, więc dziecko może go włączyć z powrotem.
- Zakupy zablokuj w telefonie: Poproś o zakup na iPhonie albo Family Link na Androidzie.

## Wspólne zasady dla wszystkich gier

1. Prawdziwa data urodzenia na koncie.
2. Czat tylko ze znajomymi albo wyłączony, zależnie od wieku.
3. Zakupy tylko za zgodą rodzica.
4. Rozmowa: „Z kim grasz? Kto do ciebie pisze?”.

!! Ustawiajcie razem z dzieckiem. Gdy wie, dlaczego czat jest ograniczony, rzadziej szuka sposobów, żeby to obejść.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 19.03.2027
(
  'konsole-kontrola-rodzicielska-switch-xbox-playstation',
  'Konsole: kontrola rodzicielska w Switchu, Xboksie i PlayStation',
  'Każda konsola ma darmową aplikację dla rodziców. Pokazujemy, co w niej ustawić: czas gry, wiek gier, komunikację, zakupy i raporty.',
  'Kontrola rodzicielska',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Wszystkie trzy popularne konsole mają darmowe aplikacje kontroli rodzicielskiej na telefon. Ustawienia są podobne, różnią się nazwami. Pamiętaj: ustawienia konsoli i ustawienia w samej grze to dwie osobne rzeczy.

## Nintendo Switch i Switch 2

Aplikacja: **Nintendo Switch Parental Controls**. Łączysz ją z konsolą kodem wyświetlonym na ekranie.

- dzienny limit czasu gry i to, co ma się stać po jego końcu,
- gry tylko do określonego wieku PEGI,
- ograniczenie komunikacji z innymi graczami,
- limit zakupów na koncie Nintendo dziecka,
- codzienny raport: w co i jak długo dziecko grało.

Na Switchu 2 sprawdź też osobno ustawienia **GameChat**, czyli rozmów głosowych i wideo.

## Xbox

Aplikacja: **Xbox Family Settings**. Dziecko musi być w Twojej grupie rodzinnej Microsoft.

- komunikacja: kto może pisać do dziecka i rozmawiać z nim głosowo,
- gra wieloosobowa: zgoda albo blokada,
- czas przed ekranem: dzienny limit i harmonogram,
- filtry treści: gry i aplikacje do wieku dziecka,
- zakupy tylko za Twoją zgodą,
- raport aktywności.

Te same ustawienia konta Microsoft działają też w Minecrafcie na innych urządzeniach.

## PlayStation 4 i 5

Aplikacja: **PlayStation Family** albo ustawienia rodziny w aplikacji PlayStation i na konsoli.

- komunikacja i treści tworzone przez innych graczy: ograniczenie albo wyłączenie,
- czas gry: dzienny limit i godziny,
- gry i aplikacje do wieku dziecka,
- miesięczny limit wydatków w PlayStation Store,
- raporty aktywności.

## Kolejność, która działa

1. Konto dziecka z prawdziwą datą urodzenia.
2. Aplikacja rodzica połączona z konsolą.
3. Czas, wiek gier i zakupy.
4. Komunikacja na konsoli.
5. Czat w każdej grze osobno.
6. Rozmowa o zasadach i o tym, co robić, gdy coś niepokoi.

!! Ustawienia sprawdzaj co kilka miesięcy. Konsole dostają aktualizacje, a dziecko rośnie. To, co pasowało ośmiolatkowi, za rok może być za ciasne albo za luźne.$md$,
  false, 'draft', null
),

-- ---------------------------------------------------------------- 26.03.2027
(
  'przyjaciel-ai-chatboty-w-zyciu-dziecka',
  '„Przyjaciel” AI: chatboty w życiu dziecka',
  'Dzieci rozmawiają z AI nie tylko o lekcjach, ale też o emocjach. Co warto wiedzieć, jakie są ryzyka i jakie trzy pytania zadać dziecku.',
  'Rozmowa z dzieckiem',
  array['10–12 lat', '13–15 lat'],
  $md$Chatbot AI to program, który rozmawia jak człowiek. Dzieci używają go do nauki i zabawy, ale coraz częściej także do rozmów o emocjach. Niektóre aplikacje celowo udają przyjaciela albo partnera.

## Dlaczego dzieci lubią rozmawiać z AI

Chatbot zawsze ma czas, nie ocenia, nie jest zmęczony i odpowiada od razu. Dla dziecka, które wstydzi się zapytać dorosłego, to kuszące.

## Ryzyka

1. **Zawsze przytakuje.** Prawdziwe relacje tak nie działają. Dziecko może uczyć się, że rozmowa to tylko potwierdzanie jego zdania.
2. **Nie każda aplikacja jest dla dzieci.** Nie wszystkie mają filtry wiekowe i bezpieczne odpowiedzi w trudnych tematach. Część jest przeznaczona tylko dla dorosłych.
3. **Dane i zdjęcia.** Dziecko może podawać dane osobowe i wysyłać zdjęcia, nie wiedząc, gdzie trafiają.
4. **Pewne siebie błędy.** AI potrafi podać nieprawdziwe informacje bardzo przekonująco.

## Co sprawdzić

- Z jakich aplikacji AI korzysta dziecko?
- Od ilu lat są przeznaczone według regulaminu?
- Czy aplikacja ma ustawienia dla młodszych użytkowników albo kontrolę rodzicielską?

## 3 pytania do dziecka

1. Do czego używasz AI?
2. Czy AI kiedyś powiedziało ci coś dziwnego albo nieprawdziwego?
3. Z czym wolisz pójść do AI niż do mnie? I dlaczego?

Trzecie pytanie bywa trudne, ale powie Ci najwięcej. Pokazuje, czego dziecku brakuje w rozmowach z dorosłymi.

## Zdanie na koniec rozmowy

„AI może pomóc w lekcjach. Z problemami przychodź do ludzi. Do mnie.”

!! Nie zaczynaj od zakazu. Usiądźcie razem przy chatbocie, z którego korzysta dziecko, i zadajcie mu kilka pytań. Zobaczysz, jak odpowiada, a dziecko zobaczy, że Cię to interesuje.$md$,
  false, 'draft', null
)

on conflict (slug) do nothing;
