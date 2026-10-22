import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { unsubscribe } from "../actions";

export const metadata: Metadata = { title: "Wypisanie z listy", robots: { index: false } };

type SP = Promise<{ t?: string; stan?: string }>;

export default async function UnsubscribePage({ searchParams }: { searchParams: SP }) {
  const { t, stan } = await searchParams;
  return (
    <section className="wrap">
      <div className="article">
        {stan === "ok" ? (
          <>
            <h1>Wypisano</h1>
            <p className="lead">Twój adres został usunięty z listy. Nie wyślemy już żadnych wiadomości.</p>
            <Link href="/" className="btn btn-teal">Wróć na bloga <span className="arr" /></Link>
          </>
        ) : t ? (
          <>
            <h1>Wypisać się z listy?</h1>
            <p className="lead">
              Usuniemy Twój adres z listy powiadomień o materiałach dla szkół. Jeśli zmienisz zdanie, zapiszesz się
              ponownie na stronie.
            </p>
            <form action={unsubscribe}>
              <input type="hidden" name="t" value={t} />
              <button className="btn btn-teal" type="submit">Tak, wypisz mnie <span className="arr" /></button>
            </form>
          </>
        ) : (
          <>
            <h1>Wypisanie z listy</h1>
            <p className="lead">
              Użyj linku „Wypisz się” z dowolnej naszej wiadomości albo napisz na{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>, a usuniemy adres ręcznie.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
