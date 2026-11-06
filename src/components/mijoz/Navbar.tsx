import { SAYT } from "@/config/sayt";

// Tepadagi menyu. Telefonda faqat nom va "Band qilish" tugmasi ko'rinadi.
export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-fon/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-sarlavha text-xl font-extrabold italic tracking-wider">
          <span className="oltin-matn">ASR</span>{" "}
          <span className="text-kumush">ARENA</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-kumush/80 md:flex">
          <a href="#narxlar" className="transition hover:text-oltin">Narxlar</a>
          <a href="#zal" className="transition hover:text-oltin">Zal</a>
          <a href="#bron" className="transition hover:text-oltin">Bron</a>
          <a href="#manzil" className="transition hover:text-oltin">Manzil</a>
        </div>

        <a
          href="#bron"
          className="oltin-fon rounded-full px-5 py-2 text-sm font-bold text-black"
          aria-label={`${SAYT.nom}: stol band qilish`}
        >
          Band qilish
        </a>
      </nav>
    </header>
  );
}