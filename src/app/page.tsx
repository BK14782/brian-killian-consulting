"use client";

import React, { useMemo, useState } from "react";

import { Check, ChevronRight, Mail, Phone, LineChart, ShieldCheck, Wrench, FileText, Workflow, Building2 } from "lucide-react";
const Card = ({ className = "", children }: any) => (
  <div className={`border bg-background shadow-sm ${className}`}>{children}</div>
);

const CardContent = ({ className = "", children }: any) => (
  <div className={className}>{children}</div>
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
};

const Section = ({ id, kicker, title, subtitle, children }: SectionProps) => (

  <section id={id} className="scroll-mt-24 py-14 md:py-18">
    <div className="mx-auto max-w-6xl px-4">
      <div className="max-w-3xl">
        {kicker ? (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
            <span>{kicker}</span>
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  </section>
);

type NavProps = {
  active: string;
  onNav: (id: string) => void;
};

const Nav = ({ active, onNav }: NavProps) => {

  const items = [
    { id: "services", label: "Services" },
    { id: "case-studies", label: "Case Studies" },
    { id: "approach", label: "Approach" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl border bg-background shadow-sm">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Brian Killian Consulting</div>
            <div className="text-xs text-muted-foreground">Operational asset performance • Reporting • Process improvement</div>
          </div>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => onNav(it.id)}
              className={`text-sm transition ${active === it.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {it.label}
            </button>
          ))}
        </div>
        <Button onClick={() => onNav("contact")} className="rounded-2xl">
          Let’s talk <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

type HeroProps = {
  onNav: (id: string) => void;
};

const Hero = ({ onNav }: HeroProps) => (

  <header className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-foreground/5 blur-3xl" />
      <div className="absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-foreground/5 blur-3xl" />
    </div>
    <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="inline-flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="rounded-full">Providing nationwide advisory services to real estate owners and operators.</Badge>
            <Badge variant="secondary" className="rounded-full">Office • Retail • Mixed-use • Multifamily</Badge>
            <Badge variant="secondary" className="rounded-full">Owner & Investor Reporting</Badge>
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            Turn operations into measurable asset performance.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            I help owners, operators, and asset teams improve NOI, modernize reporting, and build repeatable operating frameworks—without adding noise.
            If your portfolio needs tighter controls, clearer narratives, and better execution, I can step in quickly.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl" onClick={() => onNav("contact")}>Request a consult</Button>
            <Button variant="outline" className="rounded-2xl" onClick={() => onNav("case-studies")}>View case studies</Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground">Typical outcomes</div>
                <div className="mt-1 text-lg font-semibold">NOI & recovery lift</div>
                <div className="mt-2 text-sm text-muted-foreground">Expense control, utility recovery, vendor optimization.</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground">Execution focus</div>
                <div className="mt-1 text-lg font-semibold">Process efficiency</div>
                <div className="mt-2 text-sm text-muted-foreground">Digitize, automate, and steamline accurate data.</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground">Clarity</div>
                <div className="mt-1 text-lg font-semibold">Reporting that lands</div>
                <div className="mt-2 text-sm text-muted-foreground">Board- and investor-ready narratives from the numbers.</div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="md:col-span-5">
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">How I typically engage</div>
              <div className="mt-4 space-y-3 text-sm">
                {["Rapid diagnostic (2–3 weeks)", "90-day operating reset", "Quarterly portfolio performance cadence", "Interim leadership / stand-up function"].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl border bg-background">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{t}</div>
                      <div className="text-muted-foreground">Tailored scope, measurable deliverables, clean handoff.</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border bg-background/60 p-4">
                <div className="text-xs text-muted-foreground">Best fit for</div>
                <div className="mt-1 text-sm">
                  Owners/operators who need tighter NOI controls, clearer reporting, improved customer experience, and repeatable processes.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
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


type CaseStudyCardProps = {
  tag: string;
  title: string;
  outcome: string;
  context: string;
  bullets: string[];
  metrics?: string[];
};

const CaseStudyCard = ({ tag, title, outcome, context, bullets, metrics }: CaseStudyCardProps) => (

  <Card className="rounded-3xl shadow-sm">
    <CardContent className="p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="rounded-full">{tag}</Badge>
        {metrics?.map((m) => (
          <Badge key={m} className="rounded-full" variant="outline">{m}</Badge>
        ))}
      </div>
      <div className="mt-4 text-lg font-semibold">{title}</div>
      <div className="mt-2 text-sm text-muted-foreground">{context}</div>
      <div className="mt-4 rounded-2xl border bg-background/60 p-4">
        <div className="text-xs text-muted-foreground">Outcome</div>
        <div className="mt-1 text-sm font-medium">{outcome}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Footer = () => (
  <footer className="border-t py-10">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="text-sm font-semibold">Brian Killian Consulting</div>
          <div className="mt-1 text-sm text-muted-foreground">Based in Seattle, serving clients nationwide</div>
        </div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} • All rights reserved</div>
      </div>
    </div>
  </footer>
);

export default function Website() {
  const [active, setActive] = useState("services");

  const caseStudies = useMemo(
    () => [
      {
        tag: "Office / Tech Campus",
        title: "NOI lift + capital delivery + occupancy recovery",
        context:
          "Operational reset for a 1M SF commercial portfolio including tech campus, offices, and a data center—alongside major capital delivery.",
        outcome:
          "Improved NOI and tenant experience while keeping capital delivery predictable and reporting investor-ready.",
        bullets: [
          "Audited operating performance and optimized vendor + energy programs",
          "Delivered modernization projects with tight budget control",
          "Built 1–5-year improvement plan tied to tenant satisfaction and CapEx planning",
          "Developed energy and sustainability programs for aging equipment"
        ],
        metrics: ["1M SF", "$25M CapEx", "+10% NOI", "88%→97% occupancy"],
      },
      {
        tag: "Mixed-Use / Multifamily Portfolio",
        title: "Utility audit platform to drive recurring NOI recovery",
        context:
          "Designed and implemented a utility audit approach across a multi-property portfolio to improve cost recovery and reporting discipline.",
        outcome:
          "Created repeatable process and controls that improved recoveries and supported long-term expense management.",
        bullets: [
          "Built cross-functional workflow with accounting + operations",
          "Standardized documentation and exception handling",
          "Connected KPIs to client objectives for transparency",
        ],
        metrics: ["7-property portfolio", "+15%–20% NOI"],
      },
      {
        tag: "Enterprise / Public-Facing Campus",
        title: "Scaled reporting + vendor governance across 4.5M SF",
        context:
          "Led operational oversight for a 4.5M SF Class A office portfolio with major retail and high service expectations.",
        outcome:
          "Improved service delivery, accelerated approvals, and strengthened executive reporting.",
        bullets: [
          "Negotiated major service agreements; tightened SLAs/KPIs",
          "Integrated operating policies across campus",
          "Produced exec-ready operational and financial reporting",
        ],
        metrics: ["4.5M SF", "$100M contracts", "$60M CapEx"],
      },
      {
        tag: "Operations to Strategy",
        title: "SOP playbook to unify performance across teams",
        context:
          "Created standardized operating procedures spanning management, accounting, engineering, and project management.",
        outcome:
          "Reduced friction, improved consistency, and made performance easier to measure and scale.",
        bullets: [
          "Defined role clarity and approval lanes",
          "Built reporting cadence and common KPIs",
          "Created practical templates for teams to adopt",
        ],
        metrics: ["Cross-functional"],
      },
    ],
    []
  );

  const scrollTo = (id: string) => {

    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav active={active} onNav={scrollTo} />
      <Hero onNav={scrollTo} />

      <Section
        id="services"
        kicker="What I do"
        title="Consulting services"
        subtitle="Flexible engagement models that strengthen performance, improve reporting, and make operations more predictable."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="rounded-3xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border bg-background">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-base font-semibold">{s.title}</div>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-foreground" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border bg-background/60 p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">Common deliverables</div>
              <div className="mt-2 text-sm text-muted-foreground">
                MOR templates • budget models • dashboards • vendor KPI/SLA scorecards • capital plans • SOP playbooks • executive narratives
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Industries & portfolios</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Office • mixed-use • multifamily • campus environments • retail components • data center adjacency
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">How we start</div>
              <div className="mt-2 text-sm text-muted-foreground">
                30-minute intro call → data request → rapid diagnostic → prioritized roadmap and quick wins.
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="case-studies"
        kicker="Proof"
        title="Selected case studies"
        subtitle="Representative examples of outcomes and methods. Details can be anonymized for confidentiality."
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.title} {...c} />
          ))}
        </div>
      </Section>

      <Section
        id="approach"
        kicker="How it works"
        title="A repeatable operating approach"
        subtitle="Practical, structured, and easy for teams to adopt—built for owners who want clarity and control."
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

      <Section
        id="about"
        kicker="About"
        title="Built in operations. Fluent in investor language."
        subtitle="A practical operator who turns field realities into numbers, narratives, and repeatable systems."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="rounded-3xl shadow-sm lg:col-span-2">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">Background</div>
              <p className="mt-3 text-sm text-muted-foreground">
                I’ve led operations across office, mixed-use, and multifamily portfolios—including campus environments with complex service delivery.
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

      <Section
        id="contact"
        kicker="Contact"
        title="Let’s talk about your portfolio"
        subtitle="Share what you’re trying to improve and I’ll propose a simple scope with clear outcomes."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="rounded-3xl shadow-sm lg:col-span-2">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">Quick note</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Replace the contact details below with your preferred email and add a scheduling link if you’d like.
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

  <button
    type="button"
    disabled
    className="rounded-2xl border px-4 py-2 opacity-60 cursor-not-allowed"
  >
    Scheduling link (coming soon)
  </button>

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

      <Footer />
    </div>
  );
}
