import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASR ARENA | Billiard va stol tennisi zali",
  description:
    "ASR ARENA: Qoraqosh qishlog'idagi billiard va stol tennisi zali. Stolni onlayn band qiling.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}