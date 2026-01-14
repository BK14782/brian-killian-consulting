"use client";

import { useEffect, useRef } from "react";
import { gaEvent } from "@/lib/ga";

export default function ScrollDepthTracker() {
  const fired75 = useRef(false);
  const fired90 = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;

      const scrollTop = window.scrollY || doc.scrollTop;
      const viewportHeight = window.innerHeight || doc.clientHeight;
      const fullHeight = doc.scrollHeight;

      const progress = (scrollTop + viewportHeight) / fullHeight;

      if (!fired75.current && progress >= 0.75) {
        fired75.current = true;
        gaEvent("scroll_75", { page: window.location.pathname });
      }

      if (!fired90.current && progress >= 0.9) {
        fired90.current = true;
        gaEvent("scroll_90", { page: window.location.pathname });
      }
    };

    // run once so short pages can still trigger if already “scrolled enough”
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
