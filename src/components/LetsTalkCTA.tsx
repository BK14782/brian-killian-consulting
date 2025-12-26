"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/LeadCaptureModal";

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
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      <LeadCaptureModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
