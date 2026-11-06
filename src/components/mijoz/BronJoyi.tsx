import { Phone } from "lucide-react";
import BolimSarlavha from "@/components/ui/BolimSarlavha";
import Reveal from "@/components/ui/Reveal";
import { SAYT } from "@/config/sayt";

// Onlayn bron formasi 8-bosqichda shu yerga qo'yiladi.
export default function BronJoyi() {
  return (
    <section id="bron" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <BolimSarlavha kichik="Bron" katta="Stol band qilish" />
          <p className="text-kumush/70">
            {"Onlayn bron tez orada ishga tushadi. Hozircha stolni telefon orqali band qilishingiz mumkin."}
          </p>
          <a
            href={`tel:${SAYT.telefonRaqam}`}
            className="oltin-fon mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 font-sarlavha text-lg font-bold text-black"
          >
            <Phone size={20} />
            {SAYT.telefon}
          </a>
        </Reveal>
      </div>
    </section>
  );
}