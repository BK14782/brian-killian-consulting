"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type BannerImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  height?: number;
  caption?: string;
  className?: string; // applied to the <Image />
};

export default function BannerImage({
  src,
  alt,
  priority = false,
  height = 420,
  caption,
  className = "",
}: BannerImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect(); // animate once
        }
      },
      { threshold: 0.2, rootMargin: "80px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        "mx-auto max-w-6xl px-4", // keeps it aligned with the rest of the site
        "mb-0", // no extra space BELOW the banner
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
    >
      <div className="relative overflow-hidden rounded-2xl border border-neutral-200/70 shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-sky-500/10" />
        <Image
          src={src}
          alt={alt}
          priority={priority}
          width={1600}
          height={height}
          className={[
            "w-full object-cover",
            "h-[130px] sm:h-[150px] md:h-[165px] object-[center_40%]", // banner height control
            className, // your extra filters like saturate/contrast
          ].join(" ")}
        />
      </div>

      {caption ? <p className="mt-1 text-sm text-neutral-600">{caption}</p> : null}
    </div>
  );
}
