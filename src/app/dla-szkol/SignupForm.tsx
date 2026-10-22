"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { CONSENT_TEXT, ROLES } from "@/lib/subscribers";
import { subscribe, type SignupState } from "../zapis/actions";

export function SignupForm() {
  const [state, action, pending] = useActionState<SignupState, FormData>(subscribe, {});
  const [started, setStarted] = useState(0);
  useEffect(() => setStarted(Date.now()), []);

  if (state.ok) {
    return (
      <div className="panel signup signup-done" role="status">
        <h3>Sprawdź skrzynkę</h3>
        <p>
          {state.email ? <>Wysłaliśmy link na <b>{state.email}</b>.</> : <>Wysłaliśmy link na podany adres.</>} Kliknij go,
          żeby potwierdzić zapis. Bez potwierdzenia nie wyślemy nic więcej.
        </p>
        <p className="hint">Nie widzisz wiadomości? Zajrzyj do spamu albo zakładki „Oferty”. Link przychodzi w ciągu kilku minut.</p>
      </div>
    );
  }

  return (
    <form action={action} className="panel signup">
      <input type="hidden" name="t" value={started} />
      {/* pułapka na boty: ludzie tego pola nie widzą */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Nie wypełniaj</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="signup-email">Adres e-mail</label>
        <input id="signup-email" name="email" type="email" autoComplete="email" inputMode="email" required
          placeholder="np. imie.nazwisko@szkola.edu.pl" />
      </div>

      <div className="field">
        <label htmlFor="signup-role">Kim jesteś? (opcjonalnie)</label>
        <select id="signup-role" name="role" defaultValue="">
          <option value="">Wolę nie mówić</option>
          {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
        <p className="hint">Pomoże nam to dopasować materiały. Nie pytamy o nazwę szkoły.</p>
      </div>

      <label className="consent">
        <input type="checkbox" name="zgoda" required />
        <span>{CONSENT_TEXT}</span>
      </label>

      {state.error && <p className="error" role="alert">{state.error}</p>}

      <div>
        <button className="btn btn-teal" type="submit" disabled={pending}>
          {pending ? "Zapisywanie…" : "Powiadom mnie"} <span className="arr" />
        </button>
      </div>

      <p className="hint">
        Wyślemy e-mail z linkiem do potwierdzenia. Administratorem danych jest zespół Bezpieczne Dzieci w Sieci. Adres
        przechowujemy do wypisania się. Szczegóły i Twoje prawa: <Link href="/polityka-prywatnosci#zapisy">polityka prywatności</Link>.
      </p>
    </form>
  );
}
