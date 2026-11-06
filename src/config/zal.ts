// Zal chizmasi: har bir stolning joyi (foizlarda, chapdan va tepadan).

import type { StolTuri } from "./narxlar";

export type StolJoyi = {
  id: string;
  nom: string;
  tur: StolTuri;
  x: number; // chapdan, %
  y: number; // tepadan, %
  vertikal?: boolean;
};

export const ZAL_STOLLARI: StolJoyi[] = [
  { id: "tennis-3", nom: "Tennis 3", tur: "tennis", x: 6, y: 5 },
  { id: "tennis-2", nom: "Tennis 2", tur: "tennis", x: 23, y: 5 },
  { id: "tennis-1", nom: "Tennis 1", tur: "tennis", x: 45, y: 5 },
  { id: "billiard-1", nom: "Billiard 1", tur: "billiard", x: 12.6, y: 44, vertikal: true },
  { id: "billiard-3", nom: "Billiard 3", tur: "billiard", x: 34, y: 42 },
  { id: "billiard-2", nom: "Billiard 2", tur: "billiard", x: 34, y: 67 },
  { id: "billiard-4", nom: "Billiard 4", tur: "billiard", x: 76, y: 46, vertikal: true },
];