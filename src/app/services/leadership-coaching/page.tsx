import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Leadership & Coaching | Brian Killian Consulting",
  description:
    "Leadership and coaching for property operations teams: mentorship, operating cadence, cross-functional alignment, and practical execution rhythms that stick.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/leadership-coaching",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/leadership-coaching",
    title: "Leadership & Coaching | Brian Killian Consulting",
    description:
      "Mentorship, execution cadence, and cross-functional leadership development for real estate operations teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership & Coaching | Brian Killian Consulting",
    description:
      "Mentorship, execution cadence, and cross-functional leadership development for real estate operations teams.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://briankillianconsulting.com/#service-leadership-coaching",
  name: "Leadership & Coaching",
  description:
    "Leadership and coaching for property and portfolio operations teams: mentorship, operating rhythms, cross-functional alignment, and execution support.",
  serviceType: "Leadership & coaching",
  provider: { "@id": "https://briankillianconsulting.com/#organization" },
  areaServed: "US",
  url: "https://briankillianconsulting.com/services/leadership-coaching",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://briankillianconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://briankillianconsulting.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Leadership & Coaching",
      item: "https://briankillianconsulting.com/services/leadership-coaching",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this coaching for individuals or teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Both. We can focus on one-on-one mentorship, team operating rhythms, or cross-functional alignment depending on what will move outcomes fastest.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical engagement look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Usually a short assessment, a cadence plan (weekly/biweekly), and practical tools: agendas, scorecards, and templates that support execution.",
      },
    },
    {
      "@type": "Question",
      name: "Will this feel like a training program?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. It’s operator-first: real scenarios, real decisions, and simple rhythms your team can run without extra overhead.",
      },
    },
  ],
};

export default function LeadershipCoachingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumbs UI */}
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-foreground underline underline-offset-4">
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Leadership &amp; Coaching</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Leadership support that improves execution — not meetings.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        I help operators and leaders build a steady operating rhythm: priorities, accountability, and clean handoffs
        across property management, engineering, accounting, and projects.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-background p-6 shadow-sm">
          <div className="text-sm font-semibold">Where it helps most</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• One-on-one mentorship and leadership development</li>
            <li>• Team operating cadence (weekly rhythms, scorecards, priorities)</li>
            <li>• Cross-functional alignment and clean decision lanes</li>
            <li>• Escalation, accountability, and “how we run the building” clarity</li>
          </ul>
        </div>

        <div className="rounded-3xl border bg-background p-6 shadow-sm">
          <div className="text-sm font-semibold">Deliverables you’ll get</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• A lightweight operating system: agendas, scorecards, templates</li>
            <li>• Role clarity and handoff maps (PM/ENG/ACCT/Projects)</li>
            <li>• A short-term plan (2–6 weeks) with measurable outcomes</li>
            <li>• Coaching notes + action steps that don’t die in a notebook</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <LetsTalkCTA />
      </div>

      <div className="mt-6">
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
