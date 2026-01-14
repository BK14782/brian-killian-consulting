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
          console.log("CTA CLICK FIRED");
          gaEvent("cta_lets_talk_click", {
            location: "lets_talk_cta",
            page: window.location.pathname,
          });
          setOpen(true);
        }}
        className={className}
      >
        {label}
      </button>

      <LeadCaptureModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
