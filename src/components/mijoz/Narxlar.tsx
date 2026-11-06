import BolimSarlavha from "@/components/ui/BolimSarlavha";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { STOL_TURLARI, type StolTuri } from "@/config/narxlar";
import { pulFormat } from "@/lib/format";

function Qator({ nom, narx }: { nom: string; narx: string }) {
  return (
    <li className="flex items-center justify-between border-b border-white/5 pb-3">
      <span className="text-kumush/80">{nom}</span>
      <span className="font-sarlavha text-lg font-bold text-oltin">{narx}</span>
    </li>
  );
}

// Narxlar bo'limi. 3-bosqichda ma'lumot bazadan olinadi.
export default function Narxlar() {
  const turlar = Object.keys(STOL_TURLARI) as StolTuri[];

  return (
    <section id="narxlar" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <BolimSarlavha kichik="Narxlar" katta="O'yin narxlari" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {turlar.map((tur, i) => {
            const q = STOL_TURLARI[tur];
            return (
              <Reveal key={tur} kechikish={i * 0.1}>
                <SpotlightCard className="h-full p-6">
                  <h3 className="font-sarlavha text-2xl font-bold italic text-kumush">
                    {q.nom}
                  </h3>
                  <p className="text-sm text-kumush/50">{q.stollarSoni} ta stol</p>

                  <ul className="mt-6 space-y-3">
                    <Qator nom="30 daqiqa" narx={pulFormat(q.soatNarxi / 2)} />
                    <Qator nom="60 daqiqa" narx={pulFormat(q.soatNarxi)} />
                    <Qator nom="VIP (daqiqasi bilan)" narx={`${pulFormat(q.soatNarxi)} / soat`} />
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-6 text-center text-sm text-kumush/50">
            {"30 va 60 daqiqadan oshgan vaqt soatlik narx bo'yicha qo'shiladi. VIP rejimida vaqt cheklanmagan, o'yin tugaganda daqiqasi bilan hisoblanadi."}
          </p>
        </Reveal>
      </div>
    </section>
  );
}