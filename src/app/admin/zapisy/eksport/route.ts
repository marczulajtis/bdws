import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { LIST, roleLabel } from "@/lib/subscribers";

export const dynamic = "force-dynamic";

const cell = (v: string | null | undefined) => `"${String(v ?? "").replace(/"/g, '""')}"`;

/** Lista zapisów jako CSV (otwiera się w Excelu i Arkuszach Google). Tylko dla redakcji. */
export async function GET() {
  const { supabase, isAdmin } = await requireAdmin();
  if (!isAdmin) return new NextResponse("Brak uprawnień", { status: 403 });

  const { data } = await supabase
    .from("subscribers")
    .select("email,role,status,consent_at,confirmed_at,consent_text")
    .eq("list", LIST)
    .order("created_at", { ascending: true });

  const head = ["e-mail", "kim jest", "status", "data zgody", "data potwierdzenia", "treść zgody"];
  const lines = (data ?? []).map((r) =>
    [r.email, roleLabel(r.role), r.status === "confirmed" ? "potwierdzony" : "czeka", r.consent_at, r.confirmed_at, r.consent_text]
      .map(cell)
      .join(";")
  );
  const csv = "﻿" + [head.map(cell).join(";"), ...lines].join("\r\n");
  const date = new Date().toISOString().slice(0, 10);
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="zapisy-materialy-dla-szkol-${date}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
