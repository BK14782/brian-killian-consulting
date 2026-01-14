"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gaEvent } from "@/lib/ga";

export default function ServiceDetailViewedAutoTracker() {
  const pathname = usePathname() || "";

  useEffect(() => {
    const parts = pathname.split("/").filter(Boolean);

    // Expect /services/<slug>
    if (parts[0] !== "services") return;
    if (!parts[1]) return; // ignore /services root

    const serviceSlug = parts[1];

    gaEvent("service_detail_viewed", {
      page: pathname,
      service_slug: serviceSlug,
    });
  }, [pathname]);

  return null;
}
