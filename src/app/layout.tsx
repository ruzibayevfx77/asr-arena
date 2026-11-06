import type { Metadata, Viewport } from "next";
import { Exo_2, Manrope } from "next/font/google";
import "./globals.css";

// Sarlavha shrifti (qiyshiq, texnik)
const exo2 = Exo_2({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-exo2",
  display: "swap",
});

// Oddiy matn shrifti
const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASR ARENA | Billiard va stol tennisi zali",
  description:
    "ASR ARENA: Qoraqosh qishlog'idagi billiard va stol tennisi zali. Stolni onlayn band qiling.",
};

export const viewport: Viewport = {
  themeColor: "#070707",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" className={`${exo2.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}