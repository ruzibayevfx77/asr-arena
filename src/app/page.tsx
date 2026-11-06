import { SAYT } from "@/config/sayt";

export default function BoshSahifa() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#070707] p-6 text-center">
      <h1 className="text-4xl font-bold text-[#E3A929]">{SAYT.nom}</h1>
      <p className="mt-3 text-[#E6E8EB]">{SAYT.tavsif}</p>
      <p className="mt-6 text-sm text-[#E6E8EB]/60">{SAYT.manzil}</p>
      <p className="mt-1 text-sm text-[#E6E8EB]/60">{SAYT.telefon}</p>
    </main>
  );
}