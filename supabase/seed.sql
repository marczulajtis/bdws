-- Dwa startowe wpisy, żeby blog nie był pusty. Możesz je potem edytować albo usunąć w panelu.
insert into public.posts (slug, title, excerpt, category, ages, body, featured, status, published_at)
values
(
  'pierwszy-smartfon-zacznijcie-od-rodzinnej-umowy',
  'Pierwszy smartfon? Zacznijcie od rodzinnej umowy',
  'Zanim dziecko dostanie telefon, ustalcie razem proste zasady. Pokazujemy, co warto w nich zapisać i jak o tym rozmawiać.',
  'Rozmowa z dzieckiem',
  array['7–9 lat', '10–12 lat'],
  $md$Pierwszy telefon to dla dziecka wielka rzecz. Dla rodzica często też wielki stres. Dobra wiadomość: najwięcej daje nie aplikacja, tylko rozmowa i kilka zasad spisanych razem.

## Dlaczego umowa, a nie zakazy

Zasady, które dziecko współtworzy, łatwiej mu zrozumieć i przestrzegać. Umowa pokazuje też, że telefon to zaufanie, które rośnie razem z dzieckiem.

## Co warto w niej zapisać

- Gdzie telefon nocuje (najlepiej poza sypialnią)
- Kiedy telefon odpoczywa: posiłki, odrabianie lekcji, godzina przed snem
- Jakie aplikacje instalujemy razem, a nie w tajemnicy
- Kogo dodajemy do kontaktów i czatów
- Co robimy, gdy coś w sieci nas wystraszy lub zaniepokoi

!! Zapiszcie jedno zdanie, które dziecko zapamięta: „Jeśli coś w sieci cię zaniepokoi, możesz mi powiedzieć i nie stracisz za to telefonu”. To właśnie strach przed karą najczęściej sprawia, że dzieci milczą.

## Jak przeprowadzić rozmowę

1. Zacznij od pytania, do czego dziecko chce używać telefonu
2. Zaproponuj kilka zasad i zapytaj, co ono by dodało
3. Spiszcie umowę na jednej kartce i oboje ją podpiszcie
4. Umówcie się, że wrócicie do niej za miesiąc

## Umowa działa w obie strony

Jeśli przy stole telefon odpoczywa, to dotyczy także dorosłych. Dzieci uczą się najwięcej z tego, co widzą.$md$,
  true, 'published', now()
),
(
  '5-pytan-ktore-warto-zadac-dziecku-o-jego-ulubiona-gre',
  '5 pytań, które warto zadać dziecku o jego ulubioną grę',
  'Nie musisz znać się na grach, żeby wiedzieć, co dzieje się w świecie dziecka. Wystarczy kilka dobrych pytań i ciekawość.',
  'Gry i platformy',
  array['7–9 lat', '10–12 lat', '13–15 lat'],
  $md$Gry to dla wielu dzieci miejsce spotkań z kolegami, a nie tylko zabawa. Zamiast pytać „ile już grasz?”, spróbuj zapytać o sam świat gry.

## Pytania na start

1. **Pokażesz mi, o co chodzi w tej grze?** Daj się oprowadzić. Dziecko jest tu ekspertem.
2. **Z kim najczęściej grasz?** Z kolegami z klasy, czy z osobami, których nie znasz?
3. **Czy w grze można pisać albo rozmawiać na głos?** Czat to miejsce, gdzie najłatwiej o kontakt z obcymi.
4. **Czy w grze da się coś kupić?** Waluty, skrzynki, przepustki: warto wiedzieć, jak to działa.
5. **Co robisz, gdy ktoś jest niemiły?** Sprawdźcie razem, gdzie jest przycisk zgłaszania i blokowania.

!! Najlepszy moment na taką rozmowę to wspólne granie. Kwadrans z padem w ręku powie Ci więcej niż godzina wypytywania.

## Na co zwrócić uwagę

- Prośby o przeniesienie rozmowy do innej aplikacji
- Prezenty od nieznajomych, np. darmowa waluta w grze
- Prośby o zdjęcia albo zachowanie czegoś w tajemnicy

Jeśli coś Cię zaniepokoi, nie zabieraj od razu dostępu do gry. Najpierw porozmawiaj i zabezpiecz konto. Dzięki temu następnym razem dziecko też przyjdzie do Ciebie.$md$,
  false, 'published', now() - interval '1 day'
)
on conflict (slug) do nothing;
