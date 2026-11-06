import { SAYT } from "@/config/sayt";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8 text-center text-sm text-kumush/50">
      <p>
        © {new Date().getFullYear()} {SAYT.nom}. Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}