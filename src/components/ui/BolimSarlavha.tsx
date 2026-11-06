// Har bir bo'lim tepasidagi sarlavha.
export default function BolimSarlavha({
  kichik,
  katta,
}: {
  kichik: string;
  katta: string;
}) {
  return (
    <div className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-oltin">
        {kichik}
      </p>
      <h2 className="mt-2 font-sarlavha text-3xl font-bold italic text-kumush sm:text-4xl">
        {katta}
      </h2>
    </div>
  );
}