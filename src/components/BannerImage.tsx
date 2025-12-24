"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type BannerImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  height?: number;
  caption?: string;
  className?: string;
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
        "mx-auto max-w-6xl px-4 mt-8 mb-4",
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
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
          className="h-[120px] w-full object-cover sm:h-[160px] md:h-[200px]"

        />
      </div>

      {caption ? <p className="mt-3 text-sm text-neutral-600">{caption}</p> : null}
    </div>
  );
}
