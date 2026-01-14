"use client";

import { useEffect } from "react";
import { gaEvent } from "@/lib/ga";

export default function ServicesViewedTracker() {
  useEffect(() => {
    gaEvent("services_viewed", {
      page: window.location.pathname,
    });
  }, []);

  return null;
}
