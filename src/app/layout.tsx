import type { Metadata } from "next";
import { Lexend, Unbounded } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { SITE } from "@/lib/constants";
import "./globals.css";

// Czcionki serwowane z naszej domeny (next/font pobiera je przy budowaniu),
// więc przeglądarka czytelnika nie łączy się z Google Fonts.
const display = Unbounded({ subsets: ["latin", "latin-ext"], weight: ["600", "800"], variable: "--font-display", display: "swap" });
const body = Lexend({ subsets: ["latin", "latin-ext"], weight: ["300", "400", "500", "600"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: `${SITE.tagline} ${SITE.audience}.`,
  openGraph: { siteName: SITE.name, locale: "pl_PL", type: "website" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
