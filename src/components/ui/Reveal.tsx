"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Ichidagi narsa ekranga kirganda yumshoq paydo bo'ladi.
export default function Reveal({
  children,
  kechikish = 0,
  className,
}: {
  children: ReactNode;
  kechikish?: number;
  className?: string;
}) {
  const kamHarakat = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={kamHarakat ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: kechikish, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}