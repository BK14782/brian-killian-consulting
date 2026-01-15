"use client";

import { caseStudies } from "@/lib/caseStudies";
import ProfileCard from "@/components/ProfileCard";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import Link from "next/link";
import React, { useState } from "react";
import FadeIn from "@/components/FadeIn";
import BannerImage from "@/components/BannerImage";
import {
  Check,
  ChevronRight,
  Mail,
  LineChart,
  ShieldCheck,
  Wrench,
  FileText,
  Workflow,
  Building2,
} from "lucide-react";
import { gaEvent } from "@/lib/ga";

const caseStudiesWithHref = caseStudies.map((c) => ({
  ...c,
  href: `/case-studies/${c.slug}`,
}));

type CardContentProps = {
  className?: string;
  children: React.ReactNode;
};

const CardContent = ({ className = "", children }: CardContentProps) => (
  <div className={className}>{children}</div>
);

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className = "", children }: CardProps) => (
  <div className={`border bg-background shadow-sm ${className}`}>{children}</div>
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
};

const Button = ({
  className = "",
  variant = "solid",
  children,
  ...props
}: ButtonProps) => {
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

type BadgeProps = {
  className?: string;
  variant?: "solid" | "secondary" | "outline";
  children: React.ReactNode;
};

const Badge = ({ className = "", variant = "solid", children }: BadgeProps) => {
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
  kickerHref?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tight?: boolean;
  flushTop?: boolean;
};

const Section = ({
  id,
  kicker,
  kickerHref,
  title,
  subtitle,
  children,
  tight,
  flushTop,
}: SectionProps) => (
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
        {kicker &&
          (kickerHref ? (
            <div className="mb-3">
              <Link
                href={kickerHref}
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground transition hover:border-foreground hover:text-foreground hover:bg-foreground/5"
              >
                {kicker}
              </Link>
            </div>
          ) : (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
              <span>{kicker}</span>
            </div>
          ))}

        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="mt-8">{children}</div>
    </div>
  </section>
);

const items = [
  { id: "services", label: "Services", href: "/services" },
  { id: "performance", label: "Performance" },
  { id: "deliverables", label: "Deliverables" },
  { id: "engagements", label: "Engagements" },
  { id: "case-studies", label: "Case Studies" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

type NavProps = {
  active: string;
  onNav: (id: string) => void;
};

const Nav = ({ active, onNav }: NavProps) => {
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

        {/* Mobile menu */}
        <details className="relative md:hidden">
          <summary className="list-none inline-flex cursor-pointer items-center justify-center rounded-2xl border px-3 py-2 text-sm font-medium hover:bg-foreground/5">
            Menu
          </summary>

          <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border bg-background shadow-lg">
            <div className="flex flex-col p-2 text-sm">
              {items.map((it) =>
                it.href ? (
                  <Link
                    key={it.id}
                    href={it.href}
                    className="rounded-xl px-3 py-2 hover:bg-foreground/5"
                  >
                    {it.label}
                  </Link>
                ) : (
                  <button
                    key={it.id}
                    onClick={() => onNav(it.id)}
                    className="rounded-xl px-3 py-2 text-left hover:bg-foreground/5"
                  >
                    {it.label}
                  </button>
                )
              )}
            </div>
          </div>
        </details>
        </div>
      </div>
  );
};

/* HERO */
const Hero = ({ onLetsTalk }: { onLetsTalk: () => void }) => (
  <header className="relative">
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-3xl">
        <FadeIn delayMs={0}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75">
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
          <p className="mt-5 text-base text-white/80 md:text-lg">
            With over 20 years in property and asset operations, I help owners and investors bring
            structure, visibility, and confidence to portfolio decisions.
          </p>
        </FadeIn>

        <FadeIn delayMs={240}>
          <div className="mt-6 grid gap-2 text-sm text-white/80 sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-white/80" />
              20+ years in property & asset operations
            </div>
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-white/80" />
              Office, mixed-use, industrial, multifamily
            </div>
            <div className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-white/80" />
              Institutional + private ownership experience
            </div>
          </div>
        </FadeIn>

        <FadeIn delayMs={320}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={onLetsTalk}
              className="bg-white !text-[#0B1F3A] hover:bg-white/90 border-transparent"
            >
              Let’s talk
            </Button>

            <div className="text-sm text-white/75">
              No sales pitch — just clarity on what’s working, what isn’t, and where to focus first.
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </header>
);




const Footer = () => (
  <footer className="border-t py-10 mt-16">
    <div className="mx-auto max-w-6xl px-4 text-sm text-muted-foreground flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>© {new Date().getFullYear()} Brian Killian Consulting</div>
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
        type="button"
        onClick={onClick}
        className="rounded-2xl shadow-lg bg-foreground text-background hover:bg-foreground/90 border-transparent"
      >
        Let’s talk <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

/* SERVICES SNAPSHOT (cards only) */
const servicesSnapshot = [
  {
    href: "/services/property-management-consulting",
    title: "Property Management Consulting",
    desc:
      "Owner-first operating controls: tighten reporting, stabilize budgets/forecasts, improve vendor performance, and reduce surprises.",
    icon: LineChart,
  },
  {
    href: "/services/budgeting-reforecasting",
    title: "Budgeting & Reforecasting",
    desc:
      "Build a forecast cadence with clear assumptions, variance thresholds, and decision-ready reporting.",
    icon: FileText,
  },
  {
    href: "/services/capital-planning",
    title: "Capital Planning",
    desc:
      "Scopes, budgets, bid leveling, approvals, and execution tracking—kept defensible and on-scope.",
    icon: Wrench,
  },
  {
    href: "/services/operational-audit",
    title: "Operational Audit",
    desc:
      "Review workflows, controls, vendor governance, and reporting cadence—then deliver practical SOP fixes.",
    icon: Workflow,
  },
  {
    href: "/services/owner-investor-reporting",
    title: "Owner & Investor Reporting",
    desc:
      "Monthly packages that tell the story: KPIs, variance narratives, and forward-looking risk flags.",
    icon: ShieldCheck,
  },
  {
    href: "/services/tenant-experience-leadership",
    title: "Tenant Experience & Leadership",
    desc:
      "Tenant engagement systems + calm cross-functional leadership rhythms that improve follow-through and retention.",
    icon: ShieldCheck,
  },
];

type CaseStudyCardProps = {
  href: string;
  tag: string;
  title: string;
  context: string;
  outcome: string;
  bullets: string[];
  metrics: string[];
  heroImage?: string; // NEW
};


const CaseStudyCard = ({
  href,
  tag,
  title,
  context,
  outcome,
  bullets,
  metrics,
  heroImage,
}: CaseStudyCardProps) => (
  <Link href={href} className="block">
    <Card className="relative overflow-hidden rounded-3xl shadow-sm transition hover:shadow-md">
      {/* Translucent per-card background image (uses the same image as the case study page) */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: `url(${heroImage || "/banners/handshake-01.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Soft overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/75 to-background pointer-events-none" />

      <CardContent className="relative p-6 space-y-4">
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


export default function Page() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [active, setActive] = useState("services");

  const openLead = () => {
    gaEvent("cta_lets_talk_click", {
      location: "homepage",
      page: window.location.pathname,
    });
    setLeadOpen(true);
  };

  const closeLead = () => setLeadOpen(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* One floating button only */}
      <FloatingLetsTalkButton onClick={openLead} />

      <Nav active={active} onNav={scrollTo} />
      {/* NAVY HERO WRAPPER (extends through photo/ProfileCard) */}
    <div className="relative overflow-hidden text-white">
    <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A]/95 to-background" />
    <div className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -right-48 top-24 h-[520px] w-[520px] rounded-full bg-sky-300/10 blur-3xl" />
    </div>

    <div className="relative z-10">
      </div>
    <Hero onLetsTalk={openLead} />

    {/* Photo/ProfileCard section still inside the navy fade */}
    <div className="mx-auto max-w-6xl px-4 -mt-14 pb-14 relative">
  <div className="absolute inset-x-0 -top-10 h-16 bg-gradient-to-b from-transparent to-[#0B1F3A]/0 pointer-events-none" />
  <ProfileCard variant="dark" />
</div>

    </div>



      {/* 2) SERVICES SNAPSHOT (cards only, early on the page) */}
      <Section
        id="services"
        kicker="Services"
        kickerHref="/services"
        title="Advisory support where owners feel it most"
        subtitle="Pick the area you want to improve first. Details live on the service pages."
        tight
      >
        <div className="grid gap-4 md:grid-cols-2">
          {servicesSnapshot.map((x) => (
            <Link
              key={x.href}
              href={x.href}
              className="group block rounded-3xl border bg-background shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-foreground/25 hover:ring-1 hover:ring-foreground/15"
            >
              <div className="p-6 transition-colors group-hover:bg-foreground/[0.02]">
                <div className="flex items-center gap-3">
                  <x.icon className="h-5 w-5 text-muted-foreground" />
                  <div className="text-base font-semibold">{x.title}</div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{x.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm underline underline-offset-4 transition group-hover:text-foreground">
                View details{" "}
                <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </div>

              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          Prefer a quick conversation first?{" "}
          <button
            type="button"
            onClick={openLead}
            className="underline underline-offset-4 hover:text-foreground"
          >
            Let’s talk
          </button>
          .
        </div>
      </Section>

      <BannerImage
        src="/banners/services-01.jpg"
        alt="Professional leadership meeting"
        caption="Institutional discipline with an operator-first mindset."
        className="scale-[1.02] object-cover saturate-110 contrast-105"
      />

      {/* 3) WHY THIS APPROACH WORKS (credibility, not biography) */}
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
                We’ll define success upfront — reporting standards, cost controls, a capital roadmap, or an
                execution cadence — and track progress with a simple scorecard.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 rounded-3xl border bg-background/60 p-6">
          <div className="text-sm font-semibold">
            What you can expect on the free 30-minute call
          </div>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4" />
            Identify the top 2–3 drivers of noise (reporting, budget drift, vendors, capital).
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4" />
            Clarify what “good” looks like: KPIs, cadence, ownership, and decision lanes.
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4" />
            A simple first-week plan: what to fix now vs. what to stabilize over 30–60 days.
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4" />
            Confirm fit (or I’ll point you toward the right next step if I’m not the best match).
          </li>
        </ul>


          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={openLead}
              className="px-5 py-3 shadow-sm transition hover:shadow-md"
            >
              Let’s talk <ChevronRight className="ml-2 h-4 w-4" />
            </Button>

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

      {/* 4) WHO THIS IS FOR / NOT FOR (new, compact, reduces overwhelm) */}
      <Section
        id="fit"
        kicker="Fit"
        title="Who this is for (and who it isn’t)"
        subtitle="This helps you self-qualify quickly, without reading every section."
        tight
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">This is for you if…</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "You want predictable reporting and fewer surprises month-to-month",
                  "Budgets or forecasts drift, and the story behind variance isn’t clear",
                  "Vendor performance needs structure (scope, SLAs, accountability)",
                  "Capital planning needs stronger governance and decision-ready proposals",
                  "Your team is busy, but progress feels noisy or reactive",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">This is probably not for you if…</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "You want a long slide deck instead of practical templates and execution support",
                  "You’re looking for general advice without implementing systems or cadence",
                  "You need full-time staffing rather than a focused, outcomes-based engagement",
                  "You’re not ready to define measurable outcomes up front",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full border" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

        <BannerImage
        src="/banners/Are-we-a-fit-01.jpg"
        alt="Are we a fit?"
        caption="Clear priorities. Shared targets. Reliable follow-through."
        className="scale-[1.02] object-cover saturate-110 contrast-105"
      />


      {/* 5) PRIMARY CTA (new, simple decision moment) */}
      <Section
        id="cta"
        kicker="Next step"
        title="Get clarity on what to do first"
        subtitle="If you share what you’re trying to improve, I’ll propose a simple scope with clear outcomes."
        tight
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="rounded-3xl shadow-sm lg:col-span-2">
  <CardContent className="p-6">
    <div className="flex flex-wrap items-center gap-3">
      <Button type="button" onClick={openLead} className="px-5 py-3">
        Let’s talk <ChevronRight className="ml-2 h-4 w-4" />
      </Button>

      <a
        href="https://calendly.com/killianbrian82/30min"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          gaEvent("calendly_open", {
            location: "primary_cta_section",
            page: window.location.pathname,
            url: "https://calendly.com/killianbrian82/30min",
          })
        }
        className="inline-flex items-center justify-center rounded-2xl border bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
      >
        Schedule a Call
      </a>

      <a
        href="/banners/Consulting_Webpage_Forms_and_Services_PDF.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-foreground/5"
      >
        Capabilities PDF
      </a>
    </div>

    <p className="mt-4 text-sm text-muted-foreground">
      You’ll leave the call with a quick read on what’s driving noise and the first 2–3 moves to create momentum.
    </p>

    {/* What you get (fills space + improves conversion) */}
    <div className="mt-6 rounded-3xl border bg-background/60 p-5">
      <div className="text-sm font-semibold">What you’ll get in 30 minutes</div>

      <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
        <li className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4" />
          Identify the top 2–3 drivers of noise (reporting, budget drift, vendors, capital).
        </li>
        <li className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4" />
          Clarify what “good” looks like: KPIs, cadence, ownership, and decision lanes.
        </li>
        <li className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4" />
          A simple first-week plan: what to fix now vs. what to stabilize over 30–60 days.
        </li>
        <li className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4" />
          Confirm fit (or I’ll point you toward the right next step if I’m not the best match).
        </li>
      </ul>

      <div className="mt-4 text-xs text-muted-foreground">
        Confidentiality is standard—share as much or as little detail as you’d like.
      </div>
    </div>
  </CardContent>
</Card>


          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm font-semibold">Starter scopes</div>
              <div className="mt-4 space-y-3 text-sm">
                {[
                  "Reporting & KPI reset",
                  "Budget + reforecast controls",
                  "Vendor optimization sprint",
                  "Capital planning + phasing",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl border bg-background">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{t}</div>
                      <div className="text-muted-foreground">
                        2–6 weeks depending on portfolio size.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <BannerImage
        src="/banners/next-step-01.jpg"
        alt="Handshake between business partners"
        caption="Clear communication. Reliable follow-through."
        className="scale-[1.02] object-cover saturate-110 contrast-105"
      />

{/* CASE STUDIES */}
      <Section
        id="case-studies"
        kicker="Proof"
        title="Selected case studies"
        subtitle="Real examples of outcomes and execution approach (details anonymized)."
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


      {/* 6) DEEPER NARRATIVE / SEO (all your detailed sections remain below) */}

      {/* PERFORMANCE PHILOSOPHY */}
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
                      "Owners don’t expect zero variance—they expect to understand it. I focus on tightening forecast accuracy, reducing surprise, and ensuring teams surface operational risk early instead of explaining it late.",
                  },
                  {
                    title: "Decision quality is a performance metric",
                    body:
                      "Slow approvals, unclear proposals, and rework create hidden operating drag. I design systems that shorten decision cycles, improve first-pass approvals, and keep leadership discussions moving forward instead of backward.",
                  },
                  {
                    title: "Communication is an operating system",
                    body:
                      "Most volatility starts as informational, not financial. When teams operate in silos, performance degrades. I align operations, accounting, engineering, and construction so context travels with the data.",
                  },
                  {
                    title: "Time is a controllable asset",
                    body:
                      "When teams spend less time reacting, they gain time to prevent issues. Reducing back-and-forth, escalations, and noise creates capacity for proactive work that compounds across the portfolio.",
                  },
                  {
                    title: "Metrics must reflect reality—not just reporting",
                    body:
                      "I focus on metrics that reflect how work actually happens: forecast variance trends, decision velocity, escalation frequency, lease-up efficiency, and stabilization timelines—not vanity KPIs.",
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
                <div className="mt-1 text-sm">If a metric doesn’t change decisions, it’s noise.</div>
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

      {/* DELIVERABLES */}
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
                Clear, owner-ready materials—no consulting theater. Depending on scope, you’ll receive a tailored
                set of templates, narratives, and dashboards your team can run without me.
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
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border bg-background/60 p-4"
                  >
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
                Owners get clarity on approvals, exceptions, and accountability—so decisions don’t drift and reporting
                stays predictable.
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

      {/* ENGAGEMENTS */}
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
              desc:
                "Get control fast—clarify variance drivers, reset cadence, and eliminate recurring surprises.",
              bullets: ["30–60 day reset", "Reporting + controls", "Owner-ready narrative"],
            },
            {
              title: "Project-based execution",
              desc:
                "Deliver a defined outcome—budgets, templates, capital planning, or lease-up operating rhythm.",
              bullets: ["2–8 weeks", "Templates + training", "Measurable deliverables"],
            },
            {
              title: "Interim / fractional leadership",
              desc:
                "Hands-on leadership while you hire or restructure—keeping performance stable during transitions.",
              bullets: ["Acting ops lead", "Vendor governance", "Team alignment + accountability"],
            },
            {
              title: "Ongoing advisory",
              desc:
                "Maintain discipline—monthly/quarterly oversight to keep reporting, controls, and execution tight.",
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

      {/* ASSET PERFORMANCE */}
      <Section
        id="asset-performance"
        kicker="Performance philosophy"
        title="How I think about asset performance"
        subtitle="Asset performance is NOI under constraints—cashflow timing, reserves, debt service, and covenant discipline."
        tight
      >
        <p className="mb-6 max-w-3xl text-sm text-muted-foreground">
          Once operating discipline is in place, financial performance becomes manageable instead of reactive. This is where
          execution turns into protected cashflow and predictable lender outcomes.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Cashflow is the truth",
              desc:
                "I manage performance the way a lender does: rent collections → operating costs → reserves → debt service. NOI matters, but liquidity timing and controllable levers matter more.",
              bullets: [
                "Separate paper variance vs. cash variance",
                "Track timing risk (reimbursements, CAM true-ups, capex draws)",
                "Protect debt service before optional spend",
              ],
            },
            {
              title: "Covenant discipline (DSCR + triggers)",
              desc:
                "Loan covenants are guardrails. I monitor DSCR and break-even trends forward-looking, flag risks early, and build a cushion plan before coverage compresses.",
              bullets: [
                "Monitor DSCR trajectory, not just point-in-time",
                "Identify top 2–3 covenant drift triggers (downtime, credits, repairs)",
                "Create 60–120 day action plan to preserve cushion",
              ],
            },
            {
              title: "Reserves + capital planning",
              desc:
                "Reserves aren’t a line item—they’re a schedule. I run capex/tenant spend with governance so commitments match funding, timing, and approval lanes.",
              bullets: [
                "Capex and TI/LC tracked like a forecast, not a wish list",
                "Spend tied to payback, risk reduction, and covenant impact",
                "Avoid last-minute capital calls and reactive deferrals",
              ],
            },
            {
              title: "Lender-ready reporting",
              desc:
                "Clean, consistent reporting prevents scrambling. I focus on a clear narrative: what changed, why it matters, and what we’re doing next—framed in capital terms.",
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

      {/* APPROACH */}
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
              desc:
                "Review current performance, reporting, vendor agreements, work order data, and stakeholder expectations.",
              bullets: ["Trailing 12 story", "Variance drivers", "Service pain points", "Process bottlenecks"],
            },
            {
              title: "2) Design",
              desc:
                "Build a clear plan with measurable outcomes: budgets, SOPs, dashboards, and a capital roadmap.",
              bullets: ["KPI definitions", "Cadence & ownership", "Templates", "Approval lanes"],
            },
            {
              title: "3) Execute",
              desc:
                "Implement quick wins while building durable systems. Align PM/leasing/engineering/accounting.",
              bullets: ["Vendor scorecards", "Energy/utility recovery", "Project controls", "Tenant comms"],
            },
            {
              title: "4) Transfer",
              desc:
                "Handoff materials and train teams so improvements stick. Optional ongoing oversight.",
              bullets: ["Playbooks", "Coaching", "Governance", "Quarterly refresh"],
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
        src="/banners/approach-01.jpg"
        alt="Professional leadership meeting"
        caption="Custom designed and tailored for your goals."
        className="scale-[1.02] object-cover saturate-110 contrast-105"
      />

      {/* ABOUT */}
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
                {[
                  "20+ years in real estate operations",
                  "Lean Six Sigma Green Belt",
                  "Institutional owner reporting",
                  "Cross-functional leadership",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4" />
                    <span>{b}</span>
                  </div>
                ))}
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
                <div className="mt-1 text-sm">
                  Calm under pressure • clear writing • tight accountability • pragmatic change management
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

{/* Bottom fade (Before we talk → Contact → Footer) */}
<div className="bg-gradient-to-b from-background to-sky-50">
  {/* BEFORE WE TALK */}
  <div className="mx-auto max-w-6xl px-4 py-12">
    <div className="mb-6 max-w-3xl">
      <button
        type="button"
        className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium text-foreground shadow-sm transition hover:bg-foreground/5"
      >
        Before we talk
      </button>

      <p className="mt-3 text-sm text-muted-foreground">
        A quick reminder of who you’ll be working with and how I approach engagements.
      </p>
    </div>

    <ProfileCard />
  </div>

  {/* CONTACT (kept inside the fade) */}
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
          <div className="mt-6 grid gap-3">
            <div className="rounded-2xl border bg-background/60 p-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4" /> Email
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                <a
                  href="mailto:brian@briankillianconsulting.com"
                  className="underline underline-offset-4"
                >
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
              onClick={() =>
                gaEvent("calendly_open", {
                  location: "schedule_call_link",
                  page: window.location.pathname,
                  url: "https://calendly.com/killianbrian82/30min",
                })
              }
              className="inline-flex items-center justify-center rounded-2xl border bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
            >
              Schedule a Call
            </a>

            <a
              href="/banners/Consulting_Webpage_Forms_and_Services_PDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
            >
              Capabilities PDF
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl shadow-sm">
        <CardContent className="p-6">
          <div className="text-sm font-semibold">Starter scopes</div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              "Reporting & KPI reset",
              "Budget + reforecast controls",
              "Vendor optimization sprint",
              "Capital planning + phasing",
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-xl border bg-background">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">{t}</div>
                  <div className="text-muted-foreground">
                    2–6 weeks depending on portfolio size.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>

  {/* Footer INSIDE the fade */}
  <Footer />
</div>

{/* Modals should be outside the gradient wrapper */}
<LeadCaptureModal isOpen={leadOpen} onClose={closeLead} />
</div>
  );
}
