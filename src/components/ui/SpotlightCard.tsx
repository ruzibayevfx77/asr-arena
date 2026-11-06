"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

// Karta ustida sichqoncha yurganda oltin yorug'lik izidan boradi.
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function harakat(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={harakat}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--x, 50%) var(--y, 50%), rgba(227,169,41,0.18), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}