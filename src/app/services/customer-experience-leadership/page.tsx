import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Tenant Experience & Leadership | Brian Killian Consulting",
  description:
    "Tenant experience and leadership consulting for owners and operators: tenant communication cadence, engagement programs, service recovery playbooks, and cross-functional leadership rhythms that execute.",
  alternates: {
    canonical:
      "https://briankillianconsulting.com/services/tenant-experience-leadership",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/tenant-experience-leadership",
    title: "Tenant Experience & Leadership | Brian Killian Consulting",
    description:
      "Improve tenant relations and engagement while building calm, collaborative leadership rhythms that execute across PM/ENG/Accounting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenant Experience & Leadership | Brian Killian Consulting",
    description:
      "Tenant relations, tenant communication, engagement, and leadership systems that improve follow-through and reduce surprises.",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://briankillianconsulting.com/#service-customer-experience-leadership",
  name: "Tenant Experience & Leadership",
  description:
    "Tenant experience and leadership consulting for owners and operators: tenant communication cadence, engagement, service recovery playbooks, and calm cross-functional leadership rhythms that execute.",
  serviceType: "Tenant experience & leadership consulting",
  provider: {
    "@id": "https://briankillianconsulting.com/#organization",
  },
  areaServed: "US",
  url: "https://briankillianconsulting.com/services/tenant-experience-leadership",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://briankillianconsulting.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://briankillianconsulting.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tenant Experience & Leadership",
      item: "https://briankillianconsulting.com/services/tenant-experience-leadership",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does “tenant experience” mean in this context?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It means building a repeatable tenant communication and engagement system: clear cadence, consistent follow-through, service recovery standards, and tenant-facing moments that improve trust and retention.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with retail tenant sales support?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes—when it’s relevant. I can help create practical activation and communication ideas (promotions, signage moments, foot-traffic events, tenant coordination) that support tenant performance without overcomplicating operations.",
      },
    },
    {
      "@type": "Question",
      name: "How does the leadership portion work?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We translate servant-leadership behaviors into operating rhythm: clear roles and handoffs, decision lanes, calm change management, and routines that keep PM/engineering/accounting aligned so issues don’t fall through the cracks.",
      },
    },
  ],
};

export default function TenantExperienceLeadershipPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumbs */}
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link
          href="/services"
          className="hover:text-foreground underline underline-offset-4"
        >
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Tenant Experience &amp; Leadership</span>
      </div>

      {/* Hero */}
      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Tenant experience that builds loyalty — powered by calm, collaborative leadership.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        This offering is built for retention and reputation. On the tenant side, it improves
        communication, engagement, and day-to-day relationship management—so tenants feel informed,
        supported, and seen. On the team side, it strengthens leadership rhythms and collaboration
        across PM/engineering/accounting so follow-through is consistent and issues don’t fall
        through the cracks.
      </p>

      {/* Two-column cards */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-semibold">
              Tenant relations &amp; engagement (what changes)
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Tenant communication cadence: clear expectations, over-communication when it matters, and fewer surprises</li>
              <li>• Tenant meeting rhythm (monthly/quarterly) with agendas that drive decisions and follow-up</li>
              <li>• Engagement programming support: events, activations, and simple feedback loops that improve satisfaction</li>
              <li>• Service recovery playbooks: fast acknowledgement, timelines, and consistent updates until closed</li>
              <li>• Retail/amenity alignment to boost sales where relevant (promos, signage, foot-traffic moments, tenant coordination)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-semibold">
              Leadership &amp; cross-functional execution (how it sticks)
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Servant-leadership behaviors: empathy, patience, calm execution, and clear accountability</li>
              <li>• Cross-functional collaboration between PM/ENG/Accounting: handoffs, roles, and “definition of done”</li>
              <li>• Change management that lands: involve team members in decisions, communicate why, and reinforce habits</li>
              <li>• Positive work environments: clarity + respect + psychological safety so issues surface early</li>
              <li>• Motivating associates: scorecards, recognition, development rhythms, and removing blockers</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Deliverables */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="text-sm font-semibold">Typical deliverables</div>
          <div className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <div>• Tenant communications toolkit: cadence, templates, and escalation messaging</div>
            <div>• Tenant meeting agendas + follow-up tracker + “closed loop” standards</div>
            <div>• Engagement plan: events/activations, feedback loops, and simple satisfaction metrics</div>
            <div>• Retail/tenant sales support ideas (when applicable): promotions, signage moments, coordination</div>
            <div>• Cross-functional playbook: roles, handoffs, and decision lanes across PM/ENG/Accounting</div>
            <div>• Leadership rhythms: 1:1s, team cadence, recognition, and change-management checklist</div>
          </div>
        </CardContent>
      </Card>

      {/* CTAs */}
<div className="mt-8 flex flex-wrap gap-3">
  <LetsTalkCTA
    className="inline-flex items-center justify-center rounded-2xl bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm transition hover:bg-foreground/90"
  />

  <Link
    href="/services"
    className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-foreground/5"
  >
    Back to services
  </Link>
</div>



      {/* Related services */}
      <div className="mt-10 border-t pt-8">
        <div className="text-sm font-semibold">Related services</div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <Link href="/services/property-management-consulting" className="underline underline-offset-4 hover:text-foreground">
            Property Management Consulting
          </Link>
          <Link href="/services/budgeting-reforecasting" className="underline underline-offset-4 hover:text-foreground">
            Budgeting &amp; Reforecasting
          </Link>
          <Link href="/services/capital-planning" className="underline underline-offset-4 hover:text-foreground">
            Capital Planning
          </Link>
          <Link href="/services/operational-audit" className="underline underline-offset-4 hover:text-foreground">
            Operational Audit
          </Link>
          <Link href="/services/owner-investor-reporting" className="underline underline-offset-4 hover:text-foreground">
            Owner &amp; Investor Reporting
          </Link>
        </div>



        <p className="mt-6 text-sm text-muted-foreground">
          Note: Details can be anonymized for confidentiality. I focus on owner-ready reporting, disciplined
          operations, and repeatable systems—so performance is clear and outcomes are predictable.
        </p>
      </div>
    </main>
  );
}
