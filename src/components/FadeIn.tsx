"use client";

import { useEffect, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number; // stagger control
};

export default function FadeIn({ children, className = "", delayMs = 0 }: FadeInProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShown(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs]);

  return (
    <div
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
