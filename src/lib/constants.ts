import { slugify } from "./utils";

export const SITE = {
  name: "Bezpieczne Dzieci w Sieci",
  handle: "@bezpieczne_dzieci_w_sieci",
  tagline: "Cyfrowy świat Twojego dziecka, wytłumaczony po ludzku.",
  audience: "Blog dla rodziców, szkół i opiekunów",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  instagram: "https://www.instagram.com/bezpieczne_dzieci_w_sieci/",
};

/**
 * Dane do stron /kontakt i /polityka-prywatnosci.
 * UZUPEŁNIJ przed wdrożeniem: RODO wymaga, żeby w polityce prywatności było imię i nazwisko
 * (albo nazwa firmy) administratora danych. Puste pole = zdanie zastępcze na stronie.
 */
export const CONTACT = {
  email: "kontakt@bezpiecznedzieciwsieci.pl",
  owner: "", // np. "Marta i Jan Kowalscy" albo nazwa działalności z adresem
  policyUpdated: "19 października 2026",
};

/**
 * Zdjęcia na stronie głównej — darmowe z Unsplash (licencja Unsplash, także do użytku komercyjnego).
 * Żeby użyć własnych: wrzuć plik do /public (np. public/hero.jpg) i wpisz src: "/hero.jpg".
 */
const unsplash = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

type Photo = { src: string; alt: string; credit?: string; page?: string };

export const PHOTOS: Record<"hero" | "approach" | "follow", Photo> = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Dziecięce dłonie trzymają pad do konsoli przed telewizorem z grą",
  },
  approach: {
    src: "/images/kim-jestesmy.jpg",
    alt: "Drewniane kostki z napisem WHO",
  },
  follow: {
    src: "/images/playing.png",
    alt: "Chłopiec gra na telefonie, leżąc na łóżku",
  },
};

export const CATEGORY_INFO: Record<string, string> = {
  "Gry i platformy":
    "Roblox, Minecraft, Fortnite: czaty, zakupy i kto gra po drugiej stronie.",
  "Media społecznościowe":
    "TikTok, Instagram, YouTube. Od ilu lat i jak je ustawić.",
  "Kontrola rodzicielska":
    "Family Link, Czas przed ekranem i ustawienia krok po kroku.",
  "Rozmowa z dzieckiem": "Jak pytać, słuchać i ustalać zasady bez awantur.",
  "Prywatność i dane":
    "Zdjęcia, lokalizacja, hasła. Co dziecko zostawia w sieci.",
  "Dla szkół": "Materiały dla nauczycieli, wychowawców i pedagogów.",
};

export const CATEGORIES = [
  "Gry i platformy",
  "Media społecznościowe",
  "Kontrola rodzicielska",
  "Rozmowa z dzieckiem",
  "Prywatność i dane",
  "Dla szkół",
] as const;

export const AGES = [
  "0–6 lat",
  "7–9 lat",
  "10–12 lat",
  "13–15 lat",
  "16+",
] as const;

export const categoryBySlug = (s?: string) =>
  CATEGORIES.find((c) => slugify(c) === s);
export const ageBySlug = (s?: string) => AGES.find((a) => slugify(a) === s);
