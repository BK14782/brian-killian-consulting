"use client";


import { caseStudies } from "@/lib/caseStudies";
import ProfileCard from "@/components/ProfileCard";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import Link from "next/link";
import React, { useState } from "react";
import FadeIn from "@/components/FadeIn";
import BannerImage from "@/components/BannerImage";
import { Check, ChevronRight, Mail, Phone, LineChart, ShieldCheck, Wrench, FileText, Workflow, Building2 } from "lucide-react";

const caseStudiesWithHref = caseStudies.map((c) => ({
  ...c,
  href: `/case-studies/${c.slug}`,
}));
const CardContent = ({ className = "", children }: any) => (
  <div className={className}>{children}</div>
);

const Card = ({ className = "", children }: any) => (
  <div className={`border bg-background shadow-sm ${className}`}>{children}</div>
);


const Button = ({ className = "", variant, children, ...props }: any) => {

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

const Badge = ({ className = "", variant, children }: any) => {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs border";
  const styles =
    variant === "secondary"
      ? "bg-foreground/5"
      : variant === "outline"
      ? "bg-transparent"
      : "bg-foreground text-background border-transparent";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
};

type SectionProps = {
  id: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tight?: boolean;
  flushTop?: boolean;
};

const Section = ({ id, kicker, title, subtitle, children, tight, flushTop }: SectionProps) => (
  <section
    id={id}
    className={`scroll-mt-24 ${
      tight
        ? `${flushTop ? "pt-0 pb-6 md:pb-8" : "py-6 md:py-8"}`
        : `${flushTop ? "pt-0 pb-14 md:pb-18" : "py-14 md:py-18"}`
    }`}
  >
    <div className="mx-auto max-w-6xl px-4">
      <div className="max-w-3xl">
        {kicker && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
            <span>{kicker}</span>
          </div>
        )}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="mt-8">{children}</div>
    </div>
  </section>
);

type NavProps = {
  active: string;
  onNav: (id: string) => void;
  onLetsTalk: () => void;
};


const items = [
  { id: "services", label: "Services", href: "/services" },
  { id: "deliverables", label: "Deliverables" },
  { id: "case-studies", label: "Case Studies" },
  { id: "performance", label: "Performance" },
  { id: "engagements", label: "Engagements" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Nav = ({ active, onNav, onLetsTalk }: NavProps) => {
  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl border bg-background shadow-sm">
            <Building2 className="h-5 w-5" />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold">Brian Killian Consulting</div>
            <div className="text-xs text-muted-foreground">
              Asset performance • Financial clarity • Operational discipline
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {items.map((it) =>
  it.href ? (
    <Link
      key={it.id}
      href={it.href}
      className="text-sm text-muted-foreground hover:text-foreground transition"
    >
      {it.label}
    </Link>
  ) : (
    <button
      key={it.id}
      onClick={() => onNav(it.id)}
      className={`text-sm transition ${
        active === it.id
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {it.label}
    </button>
  )
)}

        </div>

      
      </div>
    </div>
  );
};



 const Hero = ({ onLetsTalk }: { onLetsTalk: () => void }) => (
  <header className="relative overflow-hidden">
    {/* Warm background wash */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-500/15 blur-3xl" />
      <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-sky-500/15 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/60" />
    </div>

    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-3xl">
        <FadeIn delayMs={0}>
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-amber-500/60" />
            Nationwide consulting • Commercial & residential portfolios
          </div>
        </FadeIn>

        <FadeIn delayMs={80}>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            Clear thinking and steady execution for complex real estate portfolios
          </h1>
        </FadeIn>

        <FadeIn delayMs={160}>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            With over 20 years in property and asset operations, I help owners and investors bring structure,
            visibility, and confidence to portfolio decisions.
          </p>
        </FadeIn>

        <FadeIn delayMs={240}>
          <div className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" />
              20+ years in property & asset operations
            </div>
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" />
              Office, mixed-use, industrial, multifamily
            </div>
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4" />
              Institutional + private ownership experience
            </div>
          </div>
        </FadeIn>

        <FadeIn delayMs={320}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button onClick={onLetsTalk}>
              Let’s talk <ChevronRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="text-sm text-muted-foreground">
              No sales pitch — just clarity on what’s working, what isn’t, and where to focus first.
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </header>
);

const services = [
  {
    icon: LineChart,
    title: "Operational & Financial Reporting",
    bullets: [
      "Monthly operating reports (MOR) that tell the story",
      "Variance narratives + forward-looking risk flags",
      "Portfolio dashboards and KPI standards",
    ],
  },
  {
    icon: FileText,
    title: "Budgeting, Reforecasting & Business Plans",
    bullets: [
      "Budget build, reforecast cadence, and controls",
      "One- to five-year business plans and capital roadmaps",
      "Underwriting-style analysis for operational decisions",
    ],
  },
  {
    icon: Workflow,
    title: "Process Management & Improvement",
    bullets: [
      "SOPs across PM/engineering/accounting/project teams",
      "Approval workflows + vendor governance",
      "Lean-style root cause and waste reduction",
    ],
  },
  {
    icon: Wrench,
    title: "Capital Planning & Delivery",
    bullets: [
      "Project phasing, scope control, and reporting",
      "Owner/tenant stakeholder alignment",
      "Lifecycle planning tied to compliance + energy codes",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Customer Experience & Retention",
    bullets: [
      "Service standards, comms cadence, and playbooks",
      "Vendor SLAs/KPIs that support the occupant experience",
      "Escalation protocols and incident response",
    ],
  },
   {
    icon: ShieldCheck,
    title: "Leadership & Coaching",
    bullets: [
      "One-on-one mentorship",
      "Growth & servant leadership development",
      "Cross-functional team building",
    ],
  },
];


type CaseStudy = {
  tag: string;
  title: string;
  outcome: string;
  context: string;
  bullets: string[];
  metrics: string[];
  href: string;
  slug: string;
};



type CaseStudyCardProps = {
  href: string;
  tag: string;
  title: string;
  context: string;
  outcome: string;
  bullets: string[];
  metrics: string[];

};

const CaseStudyCard = ({
  href,
  tag,
  title,
  context,
  outcome,
  bullets,
  metrics,
}: CaseStudyCardProps) => (

  <Link href={href} className="block">
    <Card className="rounded-3xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-6 space-y-4">
        <Badge variant="secondary" className="w-fit">
          {tag}
        </Badge>

        <h3 className="text-lg font-semibold leading-tight">{title}</h3>

        <p className="text-sm text-muted-foreground">{context}</p>

        <p className="text-sm font-medium">{outcome}</p>

        <ul className="space-y-2 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border bg-background/60 p-4 text-sm text-muted-foreground">
         <strong>Results:</strong> {metrics.join(" • ")}
        </div>
      </CardContent>
    </Card>
  </Link>
);



const Footer = () => (
  <footer className="border-t py-10 mt-16">
    <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        © {new Date().getFullYear()} Brian Killian Consulting
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:brian@briankillianconsulting.com"
          className="hover:text-foreground transition"
        >
          brian@briankillianconsulting.com
        </a>
      </div>
    </div>
  </footer>
);

function FloatingLetsTalkButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        onClick={onClick}
        className="rounded-2xl shadow-lg"
      >
        Let’s talk <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}




export default function Page() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [active, setActive] = useState("services");

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

return (
    <div className="min-h-screen bg-background text-foreground">
      {/* One floating button only */}
      <FloatingLetsTalkButton onClick={() => setLeadOpen(true)} />

      <Nav active={active} onNav={scrollTo} onLetsTalk={() => setLeadOpen(true)} />
      <Hero onLetsTalk={() => setLeadOpen(true)} />

      <div className="mx-auto max-w-6xl px-4 mt-10">
        <ProfileCard />
      </div>
          
     <Section
  id="why"
  kicker="Why work with me"
  title="A calm, operator-first approach"
  subtitle="Consulting that feels like an experienced partner — not a slide deck."
  tight
>
  <div className="grid gap-4 lg:grid-cols-3">
    <Card className="rounded-3xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-500/30">
      <CardContent className="p-6">
        <div className="text-sm font-semibold">I speak “owner” and “operations”</div>
        <p className="mt-3 text-sm text-muted-foreground">
          I translate on-the-ground realities into clear reporting, decisions, and accountability.
          The goal is a steady cadence owners can trust — and teams can actually execute.
        </p>
      </CardContent>
    </Card>

    <Card className="rounded-3xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-500/30">
      <CardContent className="p-6">
        <div className="text-sm font-semibold">Practical, not theoretical</div>
        <p className="mt-3 text-sm text-muted-foreground">
          You’ll get simple frameworks, clean templates, and a realistic plan your team can follow.
          I focus on the few levers that move performance — and remove the noise.
        </p>
      </CardContent>
    </Card>

    <Card className="rounded-3xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-500/30">
      <CardContent className="p-6">
        <div className="text-sm font-semibold">Fast clarity, measurable outcomes</div>
        <p className="mt-3 text-sm text-muted-foreground">
          We’ll define success upfront — reporting standards, cost controls, a capital roadmap, or an execution cadence —
          and track progress with a simple scorecard.
        </p>
      </CardContent>
    </Card>
  </div>

  <div className="mt-6 rounded-3xl border bg-background/60 p-6">
    <div className="text-sm font-semibold">What you can expect on the free 30-minute call</div>
    <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
      <li className="flex items-start gap-2">
        <Check className="mt-0.5 h-4 w-4" />
        A quick read on what’s driving pain (reporting, cost, capital, execution)
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-0.5 h-4 w-4" />
        The first 2–3 moves that will create momentum
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-0.5 h-4 w-4" />
        Whether I’m the right fit — and if not, what to do next
      </li>
      <li className="flex items-start gap-2">
        <Check className="mt-0.5 h-4 w-4" />
        A simple scope option with clear outcomes (if you want one)
      </li>
    </ul>

    <div className="mt-5 flex flex-wrap items-center gap-3">
      <button
  type="button"
  onClick={() => setLeadOpen(true)}
  className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
>
  Let’s talk
  <ChevronRight className="ml-2 h-4 w-4" />
</button>

      <div className="text-sm text-muted-foreground">
        Typical engagements range from 2–6 weeks depending on portfolio size and complexity.
      </div>
    </div>
  </div>
</Section>

<BannerImage
  src="/banners/corporate-01.jpg"
  alt="Professional leadership meeting"
  caption="Institutional discipline with an operator-first mindset."
  className="scale-[1.02] object-cover saturate-110 contrast-105"
/>

<Section
  id="performance"
  kicker="Performance Philosophy"
  title="How I think about performance"
  subtitle="Operating clarity, decision discipline, and execution systems that reduce noise."
tight

>
  <div className="grid gap-4 lg:grid-cols-3">
    <Card className="rounded-3xl shadow-sm lg:col-span-2">
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">
          I approach real estate performance through a small set of disciplined, repeatable operating principles.
Across portfolios, property types, and ownership structures, the work varies—but the execution logic stays consistent.

        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Predictability matters more than perfection",
              body:
                "Owners don’t expect zero variance—they expect to understand it. I focus on tightening forecast accuracy, reducing surprise, and ensuring teams surface operational risk early instead of explaining it late."
            },
            {
              title: "Decision quality is a performance metric",
              body:
                "Slow approvals, unclear proposals, and rework create hidden operating drag. I design systems that shorten decision cycles, improve first-pass approvals, and keep leadership discussions moving forward instead of backward."

            },
            {
              title: "Communication is an operating system",
              body:
                "Most volatility starts as informational, not financial. When teams operate in silos, performance degrades. I align operations, accounting, engineering, and construction so context travels with the data."

            },
            {
              title: "Time is a controllable asset",
              body:
                "When teams spend less time reacting, they gain time to prevent issues. Reducing back-and-forth, escalations, and noise creates capacity for proactive work that compounds across the portfolio."
            },
            {
              title: "Metrics must reflect reality—not just reporting",
              body:
                "I focus on metrics that reflect how work actually happens: forecast variance trends, decision velocity, escalation frequency, lease-up efficiency, and stabilization timelines—not vanity KPIs."

            },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border bg-background/60 p-4">
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.body}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    <Card className="rounded-3xl shadow-sm">
      <CardContent className="p-6">
        <div className="text-sm font-semibold">Metrics I care about</div>
        <div className="mt-4 space-y-3 text-sm">
          {[
            "Forecast variance reduction (target: ≥40–50%)",
            "Approval cycle time (weeks → days)",
            "Escalation frequency (reduced 30–40%)",
            "Variance volatility control (stabilized reporting)",
            "Lease-up efficiency vs pro forma",
            "Time-to-stabilization improvements",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3">
              <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl border bg-background">
                <Check className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border bg-background/60 p-4">
          <div className="text-xs text-muted-foreground">Simple filter</div>
          <div className="mt-1 text-sm">
            If a metric doesn’t change decisions, it’s noise.
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</Section>

<BannerImage
  src="/banners/corporate-02.jpg"
  alt="Professional leadership meeting"
  caption="Leadership that keeps teams aligned and owners informed."
  className="scale-[1.02] object-cover saturate-110 contrast-105"
  />


<Section id="services" title="Advisory support where owners feel it most">
  <div className="text-xs font-medium tracking-wide text-muted-foreground">
    Services
  </div>

  <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
    Targeted engagements designed to improve clarity, control, and decision-making across operations,
    reporting, and capital planning.
  </p>

  <div className="mt-6 grid gap-6 md:grid-cols-2">
    {services.map((service, idx) => (
      <div key={idx} className="rounded-2xl border bg-background p-6">
        <div className="flex items-center gap-3">
          <service.icon className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
        </div>

        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
          {service.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span>•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</Section>







<Section
  id="deliverables"
  kicker="Deliverables"
  title="What owners receive"
  subtitle="Decision-ready outputs—built to reduce noise, tighten predictability, and keep teams aligned."
  tight
>
  <div className="grid gap-4 lg:grid-cols-3">
    <Card className="rounded-3xl shadow-sm lg:col-span-2">
      <CardContent className="p-6">
        <div className="text-sm font-semibold">Outputs you can forward</div>
        <p className="mt-2 text-sm text-muted-foreground">
          Clear, owner-ready materials—no consulting theater. Depending on scope, you’ll receive a
          tailored set of templates, narratives, and dashboards your team can run without me.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Monthly operating reporting with variance narratives + forward risk flags",
            "Budget + reforecast models tied to execution assumptions and timing",
            "Approval-ready proposal templates (scope, risk, ROI clarity, decision points)",
            "Capital planning roadmaps with phasing, governance rules, and reporting cadence",
            "Lease-up dashboards tracking pace, concessions, and rent health",
            "Cross-functional operating cadence + escalation framework (who owns what, when)",
            "Board/IC-ready summary pages when needed (clean, concise, defensible)",
            "Transfer package: SOPs, checklists, and training so improvements stick",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border bg-background/60 p-4">
              <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl border bg-background">
                <Check className="h-4 w-4" />
              </div>
              <div className="text-sm text-muted-foreground">{item}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    <Card className="rounded-3xl shadow-sm">
      <CardContent className="p-6">
        <div className="text-sm font-semibold">Built-in governance</div>
        <p className="mt-2 text-sm text-muted-foreground">
          Owners get clarity on approvals, exceptions, and accountability—so decisions don’t drift and
          reporting stays predictable.
        </p>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          {[
            "Approval thresholds + lanes",
            "Exception handling + escalation rules",
            "Vendor scope controls to reduce change orders",
            "Cadence that prevents “status chasing”",
          ].map((x) => (
            <div key={x} className="flex items-start gap-3">
              <span className="mt-2 inline-block h-2 w-2 rounded-full border" />
              <span>{x}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
</Section>

<BannerImage
  src="/banners/deliverables-01.jpg"
  alt="Handshake between business partners"
  caption="Clear communication. Reliable follow-through."
  className="scale-[1.02] object-cover saturate-110 contrast-105"
   />

<Section
  id="engagements"
  kicker="Engagements"
  title="How clients use me"
  subtitle="Flexible scopes—from quick stabilization to ongoing performance oversight."
  tight
>
  <div className="grid gap-4 md:grid-cols-2">
    {[
      {
        title: "Diagnostic + stabilization",
        desc: "Get control fast—clarify variance drivers, reset cadence, and eliminate recurring surprises.",
        bullets: ["30–60 day reset", "Reporting + controls", "Owner-ready narrative"],
      },
      {
        title: "Project-based execution",
        desc: "Deliver a defined outcome—budgets, templates, capital planning, or lease-up operating rhythm.",
        bullets: ["2–8 weeks", "Templates + training", "Measurable deliverables"],
      },
      {
        title: "Interim / fractional leadership",
        desc: "Hands-on leadership while you hire or restructure—keeping performance stable during transitions.",
        bullets: ["Acting ops lead", "Vendor governance", "Team alignment + accountability"],
      },
      {
        title: "Ongoing advisory",
        desc: "Maintain discipline—monthly/quarterly oversight to keep reporting, controls, and execution tight.",
        bullets: ["Portfolio oversight", "KPIs + cadence", "Continuous improvement"],
      },
    ].map((x) => (
      <Card key={x.title} className="rounded-3xl shadow-sm">
        <CardContent className="p-6">
          <div className="text-base font-semibold">{x.title}</div>
          <div className="mt-2 text-sm text-muted-foreground">{x.desc}</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {x.bullets.map((b) => (
              <Badge key={b} variant="outline" className="rounded-full">
                {b}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</Section>

<BannerImage
  src="/banners/engagements-01.jpg"
  alt="Handshake between business partners"
  caption="Clear communication. Reliable follow-through."
  className="scale-[1.02] object-cover saturate-110 contrast-105"
/>


      <Section
        id="case-studies"
        kicker="Proof"
        title="Selected case studies"
        subtitle="Representative examples of outcomes and methods. Details can be anonymized for confidentiality."
        tight
        
      >
        <div className="grid gap-4 lg:grid-cols-2">
{caseStudiesWithHref.map((c) => (
  <CaseStudyCard key={c.slug} {...c} />
))}

        </div>
      </Section>

<BannerImage
  src="/banners/handshake-01.jpg"
  alt="Handshake between business partners"
  caption="Clear communication. Reliable follow-through."
  className="scale-[1.02] object-cover saturate-110 contrast-105"
/>




<Section
  id="asset-performance"
  kicker="Performance philosophy"
  title="How I think about asset performance"
  subtitle="Asset performance is NOI under constraints—cashflow timing, reserves, debt service, and covenant discipline."
  tight
  
>
  <p className="mb-6 max-w-3xl text-sm text-muted-foreground">
    Once operating discipline is in place, financial performance becomes manageable
    instead of reactive. This is where execution turns into protected cashflow and predictable lender outcomes.
  </p>

  <div className="grid gap-4 md:grid-cols-2">
   {[
  {
    title: "Cashflow is the truth",
    desc: "I manage performance the way a lender does: rent collections → operating costs → reserves → debt service. NOI matters, but liquidity timing and controllable levers matter more.",
    bullets: [
      "Separate paper variance vs. cash variance",
      "Track timing risk (reimbursements, CAM true-ups, capex draws)",
      "Protect debt service before optional spend",
    ],
  },
  {
    title: "Covenant discipline (DSCR + triggers)",
    desc: "Loan covenants are guardrails. I monitor DSCR and break-even trends forward-looking, flag risks early, and build a cushion plan before coverage compresses.",
    bullets: [
      "Monitor DSCR trajectory, not just point-in-time",
      "Identify top 2–3 covenant drift triggers (downtime, credits, repairs)",
      "Create 60–120 day action plan to preserve cushion",
    ],
  },
  {
    title: "Reserves + capital planning",
    desc: "Reserves aren’t a line item—they’re a schedule. I run capex/tenant spend with governance so commitments match funding, timing, and approval lanes.",
    bullets: [
      "Capex and TI/LC tracked like a forecast, not a wish list",
      "Spend tied to payback, risk reduction, and covenant impact",
      "Avoid last-minute capital calls and reactive deferrals",
    ],
  },
  {
    title: "Lender-ready reporting",
    desc: "Clean, consistent reporting prevents scrambling. I focus on a clear narrative: what changed, why it matters, and what we’re doing next—framed in capital terms.",
    bullets: [
      "Month-end package + mid-month risk check cadence",
      "Decision framing: payback, downside risk, covenant impact",
      "Fewer surprises, faster alignment with ownership/debt partners",
    ],
  },
].map((x) => (
  <Card key={x.title} className="rounded-3xl shadow-sm">
    <CardContent className="p-6">
      <div className="text-base font-semibold">{x.title}</div>
      <div className="mt-2 text-sm text-muted-foreground">{x.desc}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {x.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
))}

  </div>
</Section>

<BannerImage
  src="/banners/corporate-03.jpg"
  alt="Handshake between business partners"
  caption=""
  className="scale-[1.02] object-cover saturate-110 contrast-105"
/>

      <Section
        id="approach"
        kicker="How it works"
        title="A repeatable operating approach"
        subtitle="Practical, structured, and easy for teams to adopt—built for owners who want clarity and control."
        tight
        
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "1) Diagnose",
              desc: "Review current performance, reporting, vendor agreements, work order data, and stakeholder expectations.",
              bullets: ["Trailing 12 story", "Variance drivers", "Service pain points", "Process bottlenecks"],
            },
            {
              title: "2) Design",
              desc: "Build a clear plan with measurable outcomes: budgets, SOPs, dashboards, and a capital roadmap.",
              bullets: ["KPI definitions", "Cadence & ownership", "Templates", "Approval lanes"],
            },
            {
              title: "3) Execute",
              desc: "Implement quick wins while building durable systems. Align PM/leasing/engineering/accounting.",
              bullets: ["Vendor scorecards", "Energy/utility recovery", "Project controls", "Tenant comms"],
            },
            {
              title: "4) Transfer",
              desc: "Handoff materials and train teams so improvements stick. Optional ongoing oversight.",
              bullets: ["Playbooks", "Coaching", "Governance", "Quarterly refresh"],
            },
          ].map((x) => (
            <Card key={x.title} className="rounded-3xl shadow-sm">
              <CardContent className="p-6">
                <div className="text-base font-semibold">{x.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{x.desc}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {x.bullets.map((b) => (
                    <Badge key={b} variant="outline" className="rounded-full">{b}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

<BannerImage
  src="/banners/approach-01.jpg"
  alt="Professional leadership meeting"
  caption="Custom designed and tailored for your goals."
  className="scale-[1.02] object-cover saturate-110 contrast-105"
/>


      <Section
        id="about"
        kicker="About"
        title="Built in operations. Fluent in investor language."
        subtitle="A practical operator who turns field realities into numbers, narratives, and repeatable systems."
        tight
        
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="rounded-3xl shadow-sm lg:col-span-2">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">Background</div>
              <p className="mt-3 text-sm text-muted-foreground">
                I’ve led operations across office, retail, mixed-use, and multifamily portfolios—including campus environments with complex service delivery.
                My work focuses on improving NOI and tenant experience through better reporting, tighter controls, and stronger execution.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["20+ years in real estate operations", "Lean Six Sigma Green Belt", "Institutional owner reporting", "Cross-functional leadership"].map(
                  (b) => (
                    <div key={b} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4" />
                      <span>{b}</span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">Tools & systems</div>
              <div className="mt-3 text-sm text-muted-foreground">
                Yardi • MRI • Entrata • Smartsheet • Asana • Office 365 • and portfolio reporting stacks.
              </div>
              <div className="mt-5 rounded-2xl border bg-background/60 p-4">
                <div className="text-xs text-muted-foreground">Style</div>
                <div className="mt-1 text-sm">Calm under pressure • clear writing • tight accountability • pragmatic change management</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>


<div className="mx-auto max-w-6xl px-4 mt-16">
  <div className="mb-6 max-w-3xl">
    <div className="text-sm font-semibold">Before we talk</div>
    <p className="mt-1 text-sm text-muted-foreground">
      A quick reminder of who you’ll be working with and how I approach engagements.
    </p>
  </div>

  <ProfileCard />
</div>




      <Section
        id="contact"
        kicker="Contact"
        title="Let’s talk about your portfolio"
        subtitle="Share what you’re trying to improve and I’ll propose a simple scope with clear outcomes."
        tight
      
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="rounded-3xl shadow-sm lg:col-span-2">
            <CardContent className="p-6">
              <div className="text-sm font-semibold"></div>
              <p className="mt-3 text-sm text-muted-foreground">
                
              </p>
<div className="mt-6 grid gap-3">
  <div className="rounded-2xl border bg-background/60 p-4">
    <div className="flex items-center gap-2 text-sm font-medium">
      <Mail className="h-4 w-4" /> Email
    </div>
    <div className="mt-2 text-sm text-muted-foreground">
      <a href="mailto:brian@briankillianconsulting.com" className="underline underline-offset-4">
        brian@briankillianconsulting.com
      </a>
    </div>
  </div>
</div>

<div className="mt-4 flex flex-wrap gap-3">
  <a
    href="mailto:brian@briankillianconsulting.com"
    className="inline-flex items-center justify-center rounded-2xl border px-4 py-2"
  >
    Email Brian
  </a>

  <a
    href="https://calendly.com/killianbrian82/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-2xl border bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
  >
    Schedule a Call
  </a>

  <button
    type="button"
    disabled
    className="rounded-2xl border px-4 py-2 opacity-60 cursor-not-allowed"
  >
    Capabilities PDF (coming soon)
  </button>
</div>

            </CardContent>
          </Card>
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">Starter scopes</div>
              <div className="mt-4 space-y-3 text-sm">
                {["Reporting & KPI reset", "Budget + reforecast controls", "Vendor optimization sprint", "Capital planning + phasing"].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl border bg-background">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{t}</div>
                      <div className="text-muted-foreground">2–6 weeks depending on portfolio size.</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

 
<LeadCaptureModal isOpen={leadOpen} onClose={() => setLeadOpen(false)} />

      <Footer />
    </div>
  );
}
