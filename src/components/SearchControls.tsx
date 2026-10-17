"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AGES } from "@/lib/constants";
import { slugify } from "@/lib/utils";

/** Filtr wieku i wyszukiwarka — aktualizują parametry w adresie (?wiek=…&q=…). */
export function SearchControls() {
  const router = useRouter();
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const push = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `/?${qs}` : "/", { scroll: false });
  };

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return (
    <div className="search">
      <label className="lbl" htmlFor="age">Wiek</label>
      <select id="age" value={params.get("wiek") ?? ""} onChange={(e) => push("wiek", e.target.value)}>
        <option value="">każdy</option>
        {AGES.map((a) => (
          <option key={a} value={slugify(a)}>{a}</option>
        ))}
      </select>
      <input
        id="q"
        type="search"
        placeholder="Szukaj, np. Roblox"
        aria-label="Szukaj we wpisach"
        value={q}
        onChange={(e) => {
          const v = e.target.value;
          setQ(v);
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => push("q", v.trim()), 300);
        }}
      />
    </div>
  );
}
