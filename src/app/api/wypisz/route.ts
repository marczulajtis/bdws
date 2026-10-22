import { NextResponse, type NextRequest } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";
import { UUID } from "@/lib/subscribers";

/**
 * Wypisanie jednym kliknięciem (RFC 8058): skrzynki pocztowe wysyłają tu POST,
 * gdy ktoś kliknie „Anuluj subskrypcję” obok nadawcy. Adres jest usuwany z listy.
 */
export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("t") ?? "";
  const db = createServiceClient();
  if (db && UUID.test(token)) await db.from("subscribers").delete().eq("token", token);
  return new NextResponse("Wypisano.", { status: 200 });
}

/** Zwykłe wejście w link przekierowuje na stronę z przyciskiem (bez automatycznego wypisania). */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("t") ?? "";
  const url = request.nextUrl.clone();
  url.pathname = "/zapis/wypisz";
  url.search = UUID.test(token) ? `?t=${token}` : "";
  return NextResponse.redirect(url);
}
