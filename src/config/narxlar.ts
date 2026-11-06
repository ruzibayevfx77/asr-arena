// Stol turlari va soatlik narxlar (so'mda, butun son).
// 3-bosqichda bu qiymatlar bazadan olinadi.

export const STOL_TURLARI = {
  billiard: { nom: "Billiard", soatNarxi: 50000, stollarSoni: 4 },
  tennis: { nom: "Stol tennisi", soatNarxi: 30000, stollarSoni: 3 },
} as const;

export type StolTuri = keyof typeof STOL_TURLARI;