


import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";



export const metadata: Metadata = {
  title: "Property Management Consulting | Brian Killian Consulting",
  description:
    "Nationwide property management consulting for owners and operators. Improve reporting, tighten budgets and forecasts, strengthen vendor performance, and increase NOI predictability.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/property-management-consulting",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/property-management-consulting",
    title: "Property Management Consulting | Brian Killian Consulting",
    description:
      "Nationwide property management consulting for owners and operators. Reporting, budgeting, operational controls, vendor governance, and performance clarity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Management Consulting | Brian Killian Consulting",
    description:
      "Nationwide property management consulting for owners and operators. Reporting, budgeting, operational controls, vendor governance, and performance clarity.",
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

const Button = ({
  className = "",
  variant,
  children,
  ...props
}: any) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition border";
  const styles =
    variant === "outline"
      ? "bg-transparent hover:bg-foreground/5"
      : "bg-foreground text-background hover:bg-foreground/90 border-transparent";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
  </button>
  );
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://briankillianconsulting.com/#service-property-management-consulting",
  "name": "Property Management Consulting",
  "description":
    "Nationwide property management consulting for owners and operators. Improve reporting, tighten budgets and forecasts, strengthen vendor performance, and increase NOI predictability.",
  "serviceType": "Property management consulting",
   provider: {
    "@id": "https://briankillianconsulting.com/#organization",
  },
  "areaServed": "US",
  "url": "https://briankillianconsulting.com/services/property-management-consulting"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://briankillianconsulting.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://briankillianconsulting.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Property Management Consulting",
      "item": "https://briankillianconsulting.com/services/property-management-consulting"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What problems do you typically help solve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Common focus areas include reporting clarity, budgeting and reforecasting cadence, vendor performance, operational controls, and reducing NOI surprises."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with owners, operators, or both?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Both. I align reporting and operating expectations across ownership and the on-the-ground team so decisions are clearer and execution is more consistent."
      }
    },
    {
      "@type": "Question",
      "name": "How do we start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We start with a short call to confirm goals and scope, then define deliverables, timeline, and the first set of improvements to implement."
      }
    }
  ]
};


export default function PropertyManagementConsultingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumb / back link */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
/>


      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-foreground underline underline-offset-4">
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Property Management Consulting</span>
      </div>

      {/* HERO */}
      <section className="mt-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
            <span>Nationwide • Owner-first • Operator-tested</span>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Property management consulting that tightens performance and reduces surprises.
          </h1>

          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            If your portfolio feels reactive—volatile variances, unclear vendor scope, inconsistent
            reporting, or slow approvals—I help you install practical operating controls that owners
            can trust.
          </p>

<div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
  <a
    href="#who-this-is-for"
    className="underline underline-offset-4 hover:text-foreground"
  >
    Who this is for
  </a>
  <a
    href="#deliverables"
    className="underline underline-offset-4 hover:text-foreground"
  >
    Deliverables
  </a>
  <a
    href="#how-we-engage"
    className="underline underline-offset-4 hover:text-foreground"
  >
    How we engage
  </a>
  <a
    href="#related-services"
    className="underline underline-offset-4 hover:text-foreground"
  >
    Related services
  </a>
</div>


          <div className="mt-6 flex flex-wrap gap-3">
           <LetsTalkCTA className="inline-flex items-center justify-center rounded-2xl border bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90" />


            <a
              href="/#case-studies"
              className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            >
              View case studies
            </a>
            
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section id="who-this-is-for" className="mt-10 grid gap-4 md:grid-cols-3">

        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-semibold">Private owners / family offices</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want cleaner reporting, fewer “surprise” costs, and confidence that the operator is
              managing risk and NOI with discipline.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-semibold">Institutional investors</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You need consistent portfolio standards—dashboards, narratives, covenant-style controls,
              and decision support that scales across assets.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-semibold">Property management firms</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want your teams operating the same way—SOPs, approval lanes, vendor governance, and
              templates that improve quality without slowing execution.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* WHAT YOU GET */}
      <section id="deliverables" className="mt-12">

        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            What you get (deliverables owners actually use)
          </h2>
          <p className="mt-2 text-muted-foreground">
            Clear artifacts that make performance legible: templates, standards, and operating lanes
            that reduce rework and stabilize outcomes.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Reporting & KPI standards</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Monthly operating report structure + variance narrative standards</li>
                <li>• KPI definitions (NOI, controllables, leasing funnel, service levels)</li>
                <li>• “No surprises” weekly/bi-weekly owner update cadence</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Budget + forecast controls</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Reforecast cadence, assumptions, and accountability owners can audit</li>
                <li>• Variance thresholds + risk flags before month-end</li>
                <li>• Scope-to-cost discipline to reduce change orders and overruns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Vendor governance</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Service standards, SLAs, and measurable KPIs</li>
                <li>• Bid leveling / apples-to-apples scope clarity</li>
                <li>• Scorecards + recurring review cadence</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="text-base font-semibold">Operating model improvements</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Cross-functional cadence (ops/accounting/engineering/leasing)</li>
                <li>• Approval lanes + decision packages that get first-pass approvals</li>
                <li>• Playbooks for escalation + incident response</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section id="how-we-engage" className="mt-12">

        <Card className="bg-background/60">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-sm font-semibold">1) Diagnose</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Review current reporting, budgets, vendor agreements, pain points, and owner goals.
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold">2) Install controls</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Build templates, cadence, and decision lanes that reduce rework and stabilize outcomes.
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold">3) Transfer + coach</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Train the team so improvements stick—optional ongoing oversight if desired.
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <LetsTalkCTA className="inline-flex items-center justify-center rounded-2xl border bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90" />


              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
              >
                Back to services
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
              >
                Browse all case studies
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

<section id="related-services" className="mt-12">

  <h2 className="text-xl font-semibold tracking-tight">Related services</h2>
  <div className="mt-3 flex flex-wrap gap-3 text-sm">
    <Link href="/services/budgeting-reforecasting" className="underline underline-offset-4 hover:text-foreground">
      Budgeting &amp; Reforecasting
    </Link>
    <Link href="/services/owner-investor-reporting" className="underline underline-offset-4 hover:text-foreground">
      Owner &amp; Investor Reporting
    </Link>
    <Link href="/services/capital-planning" className="underline underline-offset-4 hover:text-foreground">
      Capital Planning
    </Link>
    <Link href="/services/operational-audit" className="underline underline-offset-4 hover:text-foreground">
      Operational Audit
    </Link>
  </div>
</section>


      {/* OPTIONAL: quick trust line */}
      <section className="mt-10">
        <p className="text-sm text-muted-foreground">
          Note: Details can be anonymized for confidentiality. I focus on owner-ready reporting, disciplined
          operations, and repeatable systems—so performance is clear and outcomes are predictable.
        </p>
      </section>
          

    </main>
  );
}
