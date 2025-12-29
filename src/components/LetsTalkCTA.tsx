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
      <button
  type="button"
  onClick={() => setOpen(true)}
  className={`inline-flex items-center justify-center rounded-2xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm transition hover:bg-foreground/90 ${className}`}
>
  {label}
</button>


      <LeadCaptureModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
