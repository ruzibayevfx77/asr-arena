// Pulni chiroyli yozish: 50000 -> "50 000 so'm"
export function pulFormat(miqdor: number): string {
  const matn = Math.round(miqdor)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${matn} so'm`;
}