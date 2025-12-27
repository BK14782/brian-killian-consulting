import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nationwide consulting services for commercial property and portfolio performance: reporting, budgeting, process improvement, capital planning, and owner/investor reporting.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services",
  },
};

const Card = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`rounded-3xl border bg-background shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <div className={className}>{children}</div>;

export default function ServicesPage() {
 const items = [
  {
    href: "/services/property-management-consulting",
    title: "Property Management Consulting",
    desc:
      "Owner-first operating controls: tighten reporting, stabilize budgets/forecasts, improve vendor performance, and reduce surprises.",
  },
  {
    href: "/services/budgeting-reforecasting",
    title: "Budgeting & Reforecasting",
    desc:
      "Build a forecast cadence with clear assumptions, variance thresholds, and decision-ready reporting.",
  },
  {
    href: "/services/capital-planning",
    title: "Capital Planning",
    desc:
      "Scopes, budgets, bid leveling, approvals, and execution tracking—kept defensible and on-scope.",
  },
  {
    href: "/services/operational-audit",
    title: "Operational Audit",
    desc:
      "Review workflows, controls, vendor governance, and reporting cadence—then deliver practical SOP fixes.",
  },
  {
    href: "/services/owner-investor-reporting",
    title: "Owner & Investor Reporting",
    desc:
      "Monthly packages that tell the story: KPIs, variance narratives, and forward-looking risk flags.",
  },
];


  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Services</span>
      </div>

     <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
  Services
</h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        Practical, repeatable operating improvements for owners and operators—built around reporting clarity,
        disciplined process, and measurable outcomes.
      </p>

<p className="mt-4 text-sm text-muted-foreground">
  Not sure where to start?{" "}
  <Link
    href="/contact"
    className="underline underline-offset-4 hover:text-foreground"
  >
    Let’s talk
  </Link>
  .
</p>


      <div className="mt-8 grid gap-4 md:grid-cols-2">
  {items.map((x) => (
    <Card key={x.href}>
      <CardContent className="p-6">
        <div className="text-base font-semibold">{x.title}</div>
        <div className="mt-2 text-sm text-muted-foreground">{x.desc}</div>
        <div className="mt-4">
          <Link
            href={x.href}
            className="text-sm underline underline-offset-4 hover:text-foreground"
          >
            View details
          </Link>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

    </main>
  );
}
