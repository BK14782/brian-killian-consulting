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
      onClick={() => {
  gaEvent("cta_test_click", { page: window.location.pathname });
  setOpen(true);
}}




      <LeadCaptureModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
