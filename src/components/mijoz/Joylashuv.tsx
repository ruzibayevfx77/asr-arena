import { Clock, MapPin, Phone } from "lucide-react";
import BolimSarlavha from "@/components/ui/BolimSarlavha";
import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { SAYT } from "@/config/sayt";

// Manzil, telefon, ish vaqti va Google xarita.
export default function Joylashuv() {
  const q = encodeURIComponent(SAYT.xaritaSoroq);
  const ochishHavolasi = `https://www.google.com/maps/search/?api=1&query=${q}`;
  const joylashHavolasi = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <section id="manzil" className="scroll-mt-20 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <BolimSarlavha kichik="Manzil" katta="Bizni toping" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <SpotlightCard className="h-full p-6">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-1 shrink-0 text-oltin" size={22} />
                  <span className="text-kumush/90">{SAYT.manzil}</span>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 shrink-0 text-oltin" size={22} />
                  <a href={`tel:${SAYT.telefonRaqam}`} className="text-kumush/90 hover:text-oltin">
                    {SAYT.telefon}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 shrink-0 text-oltin" size={22} />
                  <span className="text-kumush/90">{SAYT.ishVaqti}</span>
                </li>
              </ul>

              <a
                href={ochishHavolasi}
                target="_blank"
                rel="noopener noreferrer"
                className="oltin-fon mt-8 inline-block rounded-full px-6 py-3 font-bold text-black"
              >
                Xaritada ochish
              </a>
            </SpotlightCard>
          </Reveal>

          <Reveal kechikish={0.1}>
            <div className="h-72 overflow-hidden rounded-2xl border border-white/10 md:h-full md:min-h-72">
              <iframe
                title="ASR ARENA joylashuvi"
                src={joylashHavolasi}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}