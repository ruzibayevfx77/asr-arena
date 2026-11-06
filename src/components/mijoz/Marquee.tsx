const SOZLAR = ["O'YNANG", "ZAVQLANING", "QAYTING"];

// Sekin oqadigan yozuv lentasi. Bir xil guruh ikki marta yoziladi,
// shunda lenta uzluksiz aylanadi.
export default function Marquee() {
  const qator = [...SOZLAR, ...SOZLAR, ...SOZLAR, ...SOZLAR];

  return (
    <div
      className="overflow-hidden border-y border-oltin/20 bg-black py-4"
      aria-hidden="true"
    >
      <div className="marquee-yol flex w-max whitespace-nowrap">
        {[0, 1].map((n) => (
          <div key={n} className="flex shrink-0 gap-8 pr-8">
            {qator.map((soz, i) => (
              <span
                key={i}
                className="font-sarlavha text-xl font-bold italic text-kumush/80"
              >
                {soz} <span className="text-oltin">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}