import { slugify } from "./utils";

export const SITE = {
  name: "Bezpieczne Dzieci w Sieci",
  handle: "@bezpiecznedzieciwsieci",
  tagline: "Cyfrowy świat Twojego dziecka, wytłumaczony po ludzku.",
  audience: "Blog dla rodziców, szkół i opiekunów",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export const CATEGORIES = [
  "Gry i platformy",
  "Media społecznościowe",
  "Kontrola rodzicielska",
  "Rozmowa z dzieckiem",
  "Prywatność i dane",
  "Dla szkół",
] as const;

export const AGES = ["0–6 lat", "7–9 lat", "10–12 lat", "13–15 lat", "16+"] as const;

export const categoryBySlug = (s?: string) => CATEGORIES.find((c) => slugify(c) === s);
export const ageBySlug = (s?: string) => AGES.find((a) => slugify(a) === s);
