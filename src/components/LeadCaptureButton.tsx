"use client";

import { useState } from "react";
import LeadCaptureModal from "@/components/LeadCaptureModal";

type Props = {
  label?: string;
  className?: string;
};

export default function LeadCaptureButton({
  label = "Start a conversation →",
  className = "inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      <LeadCaptureModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
