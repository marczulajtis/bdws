-- Poradniki na październik i listopad 2026 (6 wpisów).
-- Wpisy trafiają do panelu jako SZKICE. Publikujesz je w piątki w panelu admina:
--   23.10 Roblox · 30.10 Family Link · 6.11 Od ilu lat · 13.11 Słowniczek · 20.11 Czas przed ekranem · 27.11 Prezent pod choinkę
-- Uruchom w Supabase: SQL Editor → New query → wklej całość → Run.
-- Ponowne uruchomienie niczego nie zdubluje (on conflict do nothing).

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
