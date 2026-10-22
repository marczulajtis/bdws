import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Materiały dla szkół i placówek oświatowych",
  description:
    "Przygotowujemy materiały pomocowe i szkoleniowe dla nauczycieli, wychowawców i pedagogów. Zostaw e-mail, a damy znać, gdy będą gotowe.",
  alternates: { canonical: "/dla-szkol" },
};

export default function SchoolsPage() {
  return (
    <section className="wrap">
      <div className="article">
        <span className="eyebrow">Dla szkół i placówek oświatowych</span>
        <h1>Pracujemy nad materiałami dla szkół</h1>
        <p className="lead">
          Przygotowujemy materiały pomocowe i szkoleniowe dla nauczycieli, wychowawców, pedagogów i dyrekcji. Jeszcze nie
          są gotowe. Zostaw e-mail, a damy znać, kiedy będzie można z nich skorzystać.
        </p>

        <div className="prose">
          <h2>Nad czym pracujemy</h2>
          <ul>
            <li>materiały do wykorzystania na godzinie wychowawczej i na zebraniu z rodzicami,</li>
            <li>instrukcje ustawień w grach i aplikacjach, które można przekazać rodzicom,</li>
            <li>szkolenia dla nauczycieli i wychowawców oraz spotkania dla rodziców.</li>
          </ul>
          <p>
            Piszemy tak jak na blogu: konkretnie, bez straszenia i bez technicznego żargonu. Jesteśmy rodzicami, którzy
            na co dzień pracują w IT.
          </p>
        </div>

        <div id="zapis" className="signup-wrap">
          <h2>Powiadom mnie, gdy materiały będą gotowe</h2>
          <p className="hint" style={{ marginBottom: 14 }}>
            Bez spamu. Napiszemy, gdy materiały będą gotowe, i z ważnymi informacjami na ich temat. Wypiszesz się
            jednym kliknięciem.
          </p>
          <SignupForm />
        </div>

        <aside className="tip" style={{ marginTop: 28 }}>
          <b className="tip-label">Do tego czasu</b>
          <p>
            Na blogu co tydzień publikujemy poradniki, które możesz przekazać rodzicom uczniów.{" "}
            <Link href="/#wpisy">Zobacz wpisy</Link>.
          </p>
        </aside>
      </div>
    </section>
  );
}
