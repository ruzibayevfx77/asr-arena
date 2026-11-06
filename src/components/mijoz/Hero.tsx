"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SAYT } from "@/config/sayt";

// Bosh ekran: logotip paydo bo'ladi, oltin yaltirash o'tadi.
export default function Hero() {
  const kamHarakat = useReducedMotion();

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pt-16">
      {/* Orqadagi oltin nur */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(227,169,41,0.20), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h1
          className="font-sarlavha text-6xl font-extrabold italic leading-[0.95] tracking-wider sm:text-8xl"
          initial={kamHarakat ? false : { opacity: 0, scale: 0.85, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="oltin-matn">ASR</span>
          <br />
          <span className="text-kumush">ARENA</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-kumush/80 sm:text-xl"
          initial={kamHarakat ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {SAYT.tavsif}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={kamHarakat ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a
            href="#bron"
            className="oltin-fon rounded-full px-8 py-4 font-sarlavha text-lg font-bold text-black shadow-lg shadow-oltin/20 transition hover:scale-105"
          >
            Stol band qilish
          </a>
          <a
            href="#narxlar"
            className="rounded-full border border-oltin/40 px-8 py-4 font-sarlavha text-lg font-semibold text-oltin transition hover:bg-oltin/10"
          >
            Narxlarni ko&apos;rish
          </a>
        </motion.div>
      </div>
    </section>
  );
}