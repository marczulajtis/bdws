"use client";

import { useActionState, useState } from "react";
import { sendNews, type SendState } from "./actions";

export function Composer({ confirmed }: { confirmed: number }) {
  const [state, action, pending] = useActionState<SendState, FormData>(sendNews, {});
  const [sure, setSure] = useState(false);

  return (
    <form action={action} className="panel">
      <h2 className="panel-title">Wyślij wiadomość do listy</h2>
      <p className="hint">
        Dostaną ją tylko osoby, które potwierdziły zapis ({confirmed}). Na końcu dodamy podpis i link do wypisania.
        Najpierw wyślij test na swój adres.
      </p>
      <div className="field">
        <label htmlFor="news-subject">Temat</label>
        <input id="news-subject" name="subject" type="text" maxLength={150} required
          placeholder="np. Materiały dla szkół są już gotowe" />
      </div>
      <div className="field">
        <label htmlFor="news-body">Treść</label>
        <textarea id="news-body" name="body" rows={9} required
          placeholder={"Dzień dobry,\n\nakapity oddziel pustą linią. Linki https://… będą klikalne."} />
      </div>
      <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
        <input type="checkbox" name="sure" checked={sure} onChange={(e) => setSure(e.target.checked)} />
        Tak, wysyłam do wszystkich potwierdzonych osób ({confirmed})
      </label>
      {state.error && <p className="error" role="alert">{state.error}</p>}
      {state.ok && <p className="notice" role="status" style={{ margin: 0 }}>{state.ok}</p>}
      <div className="actions">
        <button className="btn btn-line" type="submit" name="mode" value="test" disabled={pending}>
          Wyślij test do mnie
        </button>
        <button className="btn btn-teal" type="submit" name="mode" value="all" disabled={pending || !sure || confirmed === 0}>
          {pending ? "Wysyłanie…" : "Wyślij do listy"} <span className="arr" />
        </button>
      </div>
    </form>
  );
}
