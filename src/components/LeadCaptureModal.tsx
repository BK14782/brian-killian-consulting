"use client";

import { useEffect, useState } from "react";
import { gaEvent } from "@/lib/ga";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LeadCaptureModal({ isOpen, onClose }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);


  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

useEffect(() => {
  const handler = (e: MessageEvent) => {
    if (e.data?.event === "calendly.event_scheduled") {
      gaEvent("calendly_submit", {
        page: window.location.pathname,
      });
    }
  };

  window.addEventListener("message", handler);
  return () => window.removeEventListener("message", handler);
}, []);


  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

async function onSubmit(e: React.FormEvent) {
  e.preventDefault();
  setStatus("submitting");
  setErrorMsg(null);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
      setStatus("error");
      return;
    }

    setStatus("success");
  } catch {
    setErrorMsg("Something went wrong. Please try again.");
    setStatus("error");
  }
}


  function closeAndReset() {
    setStatus("idle");
    setFirstName("");
    setLastName("");
    setEmail("");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <button
        aria-label="Close modal"
        onClick={closeAndReset}
        className="absolute inset-0 bg-black/50"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border bg-background p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">Let’s talk</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Leave your details and I’ll follow up.
            </p>
          </div>

          <button
            onClick={closeAndReset}
            className="rounded-full border px-3 py-1 text-sm"
          >
            Close
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-6 rounded-2xl border bg-background/60 p-4 text-sm">
            <div className="font-medium">Thanks — message received.</div>
            <div className="mt-1 text-muted-foreground">
              I’ll reach out soon.
            </div>

            <button
              onClick={closeAndReset}
              className="mt-4 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">First name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border bg-background px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Last name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="mt-1 w-full rounded-xl border bg-background px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="mt-1 w-full rounded-xl border bg-background px-3 py-2 text-sm"
              />
            </div>

            {status === "error" ? (
  <div className="text-sm text-red-600">
    {errorMsg ?? "Something went wrong. Please try again."}
  </div>
) : null}


            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
