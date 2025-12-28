import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Customer Experience & Leadership | Brian Killian Consulting",
  description:
    "Customer experience and leadership consulting for owners and operators: tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/customer-experience-leadership",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/customer-experience-leadership",
    title: "Customer Experience & Leadership | Brian Killian Consulting",
    description:
      "Tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Experience & Leadership | Brian Killian Consulting",
    description:
      "Tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://briankillianconsulting.com/#service-customer-experience-leadership",
  name: "Customer Experience & Leadership",
  description:
    "Customer experience and leadership support for owners and operators: tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention and execution.",
  serviceType: "Customer experience & leadership consulting",
  provider: { "@id": "https://briankillianconsulting.com/#organization" },
  areaServed: "US",
  url: "https://briankillianconsulting.com/services/customer-experience-leadership",
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
      name: "Customer Experience & Leadership",
      item: "https://briankillianconsulting.com/services/customer-experience-leadership",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do you mean by tenant communication and “over-communication”?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It means setting clear expectations early and sending timely updates—especially during disruptions—so tenants aren’t guessing. The goal is fewer escalations and higher trust.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with tenant engagement and activities?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. I can help plan and execute simple engagement programs—events, activations, and feedback loops—that fit your property, budget, and tenant mix.",
      },
    },
    {
      "@type": "Question",
      name: "Can this help boost tenant sales?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "When relevant (especially retail or amenity tenants), I can help coordinate promotions, signage moments, communications, and property-led activations that support foot traffic and tenant visibility.",
      },
    },
    {
      "@type": "Question",
      name: "What does the leadership portion focus on?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Collaboration, empathy, servant leadership, and change management—plus cross-functional execution so PM, engineering, and accounting stay aligned and commitments get closed out consistently.",
      },
    },
  ],
};


const Card = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-3xl border bg-background p-6 shadow-sm">
    <div className="text-sm font-semibold">{title}</div>
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
      {items.map((x) => (
        <li key={x}>• {x}</li>
      ))}
    </ul>
  </div>
);

export default function CustomerExperienceLeadershipPage() {
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
        <span className="text-foreground">Customer Experience &amp; Leadership</span>
      </div>

     <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
  Tenant experience that builds loyalty — powered by calm, collaborative leadership.
</h1>


      <p className="mt-3 max-w-3xl text-muted-foreground">
  This offering is built for retention and reputation. On the tenant side, it improves communication, engagement,
  and day-to-day relationship management—so tenants feel informed, supported, and seen. On the team side, it
  strengthens leadership rhythms and collaboration across PM/engineering/accounting so follow-through is consistent
  and issues don’t fall through the cracks.
</p>


      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card
  title="Tenant relations & engagement (what changes)"
  items={[
    "Tenant communication cadence: clear expectations, over-communication when it matters, and fewer surprises",
    "Tenant meeting rhythm (monthly/quarterly) with agendas that drive decisions and follow-up",
    "Engagement programming support: events, activations, and simple feedback loops that improve satisfaction",
    "Service recovery playbooks: fast acknowledgement, timelines, and consistent updates until closed",
    "Retail/amenity alignment to boost sales where relevant (promos, signage, foot-traffic moments, tenant coordination)",
  ]}
/>

<Card
  title="Leadership & cross-functional execution (how it sticks)"
  items={[
    "Servant-leadership behaviors: empathy, patience, calm execution, and clear accountability",
    "Cross-functional collaboration between PM/ENG/Accounting: handoffs, roles, and ‘definition of done’",
    "Change management that lands: involve team members in decisions, communicate why, and reinforce habits",
    "Positive work environments: clarity + respect + psychological safety so issues surface early",
    "Motivating associates: scorecards, recognition, development rhythms, and removing blockers",
  ]}
/>

      </div>

      <div className="mt-10 rounded-3xl border bg-background/60 p-6">
        <div className="text-sm font-semibold">Typical deliverables</div>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
  <li>• Tenant communications toolkit: cadence, templates, and escalation messaging</li>
  <li>• Tenant meeting agendas + follow-up tracker + “closed loop” standards</li>
  <li>• Engagement plan: events/activations, feedback loops, and simple satisfaction metrics</li>
  <li>• Retail/tenant sales support ideas (when applicable): promotions, signage moments, coordination</li>
  <li>• Cross-functional playbook: roles, handoffs, and decision lanes across PM/ENG/Accounting</li>
  <li>• Leadership rhythms: 1:1s, team cadence, recognition, and change-management checklist</li>
</ul>

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
