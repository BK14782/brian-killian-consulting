import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Operational Audit",
  description:
    "Operational audit consulting for property teams: workflows, vendor controls, reporting cadence, and practical SOPs that reduce risk and save time.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/operational-audit",
  },
};

export default function OperationalAuditPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-foreground underline underline-offset-4">
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Operational Audit</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Operational audits that turn into cleaner systems, not a binder on a shelf.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        I review your current operations (processes, reporting, vendor controls, and tenant
        workflows) and deliver practical fixes: SOPs, checklists, cadence, and owner-ready reporting.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/#contact"
          className="inline-flex items-center justify-center rounded-2xl border bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
        >
          Book a free 30-minute call
        </a>
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
        >
          Back to services
        </Link>
      </div>
    </main>
  );
}
