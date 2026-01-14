"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { gaEvent } from "@/lib/ga";

export default function LetsTalkCTA({
  className = "",
  label = "Let’s talk",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
  type="button"
  onClick={() => {
    gaEvent("cta_lets_talk_click", {
      location: "primary_cta",
      page: window.location.pathname,
    });
    setOpen(true);
  }}
  className={`inline-flex items-center justify-center rounded-2xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm transition hover:bg-foreground/90 ${className}`}
>
  {label}
</button>



      <LeadCaptureModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
