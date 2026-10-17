"use client";
import { useState } from "react";

export function CopyLink() {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="btn btn-teal"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        } catch {
          window.prompt("Skopiuj link:", window.location.href);
        }
      }}
    >
      {done ? "Skopiowano" : "Kopiuj link"} <span className="arr" />
    </button>
  );
}
