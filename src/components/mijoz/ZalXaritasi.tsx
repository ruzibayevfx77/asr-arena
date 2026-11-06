import BolimSarlavha from "@/components/ui/BolimSarlavha";
import Reveal from "@/components/ui/Reveal";
import { ZAL_STOLLARI, type StolJoyi } from "@/config/zal";

// Stol o'lchami (konteyner ichidagi foizda)
function olcham(s: StolJoyi) {
  if (s.tur === "tennis") return { w: 15, h: 13.5 };
  return s.vertikal ? { w: 9.5, h: 30 } : { w: 24, h: 19 };
}

// Zal chizmasi. Hozircha hamma stol "bo'sh" ko'rinadi.
// 5-bosqichda jonli holat (bo'sh/band/bron) ulanadi.
export default function ZalXaritasi() {
  return (
    <section id="zal" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <BolimSarlavha kichik="Zal" katta="Zal xaritasi" />
        </Reveal>

        <Reveal>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-oltin/30 bg-white/[0.02]">
            {ZAL_STOLLARI.map((s) => {
              const { w, h } = olcham(s);
              return (
                <div
                  key={s.id}
                  className="absolute flex items-center justify-center rounded-md border border-emerald-400/60 bg-emerald-500/15 font-sarlavha text-[10px] font-semibold text-emerald-200 sm:text-sm"
                  style={{
                    left: `${s.x}%`,
                    top: `${s.y}%`,
                    width: `${w}%`,
                    height: `${h}%`,
                    writingMode: s.vertikal ? "vertical-rl" : undefined,
                  }}
                >
                  {s.nom}
                </div>
              );
            })}

            {/* Kirish: chap devorda */}
            <div className="absolute left-0 top-[26%] flex items-center gap-1">
              <div className="h-10 w-1.5 rounded-r bg-oltin sm:h-14" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-oltin sm:text-xs">
                Kirish
              </span>
            </div>

            {/* Kassa: pastki chapda */}
            <div className="absolute bottom-[4%] left-[3%] rounded-md border border-kumush/30 bg-kumush/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-kumush/80 sm:text-xs">
              Kassa
            </div>
          </div>
        </Reveal>

        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-kumush/60">
          <span className="flex items-center gap-2">
            <i className="inline-block h-3 w-3 rounded bg-emerald-500/60" /> Bo&apos;sh
          </span>
          <span className="flex items-center gap-2">
            <i className="inline-block h-3 w-3 rounded bg-qizil" /> Band
          </span>
          <span className="flex items-center gap-2">
            <i className="inline-block h-3 w-3 rounded bg-oltin" /> Bron qilingan
          </span>
        </div>
      </div>
    </section>
  );
}