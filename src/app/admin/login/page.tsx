"use client";
import { useActionState } from "react";
import { login, type FormState } from "../actions";

export default function LoginPage() {
  const [state, action, pending] = useActionState<FormState, FormData>(login, {});
  return (
    <section className="wrap">
      <div className="login">
        <form action={action} className="panel">
          <h1 style={{ fontFamily: "var(--f-display)", fontSize: 22, margin: 0, textTransform: "uppercase" }}>
            Logowanie redakcji
          </h1>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="password">Hasło</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required />
          </div>
          {state.error && <p className="error" role="alert">{state.error}</p>}
          <div className="actions">
            <button className="btn btn-teal" type="submit" disabled={pending}>
              {pending ? "Logowanie…" : "Zaloguj"} <span className="arr" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
