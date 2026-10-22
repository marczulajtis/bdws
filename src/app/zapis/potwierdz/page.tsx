import type { Metadata } from "next";
import Link from "next/link";
import { confirmSubscription } from "../actions";

export const metadata: Metadata = { title: "Potwierdzenie zapisu", robots: { index: false } };

type SP = Promise<{ t?: string; stan?: string }>;

export default async function ConfirmPage({ searchParams }: { searchParams: SP }) {
  const { t, stan } = await searchParams;
  return (
    <section className="wrap">
      <div className="article">
        {stan === "ok" ? (
          <>
            <h1>Gotowe, jesteś na liście</h1>
            <p className="lead">
              Dziękujemy. Wysłaliśmy krótkie potwierdzenie na Twój adres. Napiszemy, gdy materiały dla szkół będą gotowe.
            </p>
            <Link href="/" className="btn btn-teal">Wróć na bloga <span className="arr" /></Link>
          </>
        ) : stan === "blad" || !t ? (
          <>
            <h1>Ten link już nie działa</h1>
            <p className="lead">
              Link mógł wygasnąć (niepotwierdzone zapisy usuwamy po 30 dniach) albo został skopiowany niecały. Zapisz się
              jeszcze raz, a wyślemy nowy.
            </p>
            <Link href="/dla-szkol#zapis" className="btn btn-teal">Zapisz się ponownie <span className="arr" /></Link>
          </>
        ) : (
          <>
            <h1>Potwierdź zapis</h1>
            <p className="lead">
              Kliknij przycisk, żeby potwierdzić, że chcesz dostawać informacje o materiałach dla szkół i placówek
              oświatowych.
            </p>
            {/* Potwierdzenie przyciskiem, a nie samym wejściem w link: skanery poczty otwierają linki automatycznie. */}
            <form action={confirmSubscription}>
              <input type="hidden" name="t" value={t} />
              <button className="btn btn-teal" type="submit">Potwierdzam zapis <span className="arr" /></button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
