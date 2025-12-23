export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  context: string;
  outcome: string;
  bullets: string[];
  metrics: string[];
  whatIDid: string[];
  timeline?: string;
  tools?: string[];
  notes?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "forecasting-controls",
    tag: "Forecasting + NOI predictability",
    title: "Tightened forecasting and reduced variance volatility across a campus portfolio",
    context:
      "Portfolio reporting had high volatility and repeated surprises due to unclear scope, inconsistent assumptions, and reactive updates.",
    outcome:
      "Created predictable reporting cadence and clearer scope control so ownership saw fewer surprises and cleaner monthly narratives.",
    bullets: [
      "Standardized variance narrative + forward-looking risk flags",
      "Aligned vendor scope to owner expectations before approvals",
      "Introduced weekly “no surprises” updates ahead of MOR",
    ],
    metrics: [
      "Reduced month-end variance by ~50% on average within 4–6 months",
      "Improved NOI predictability to within ~2.5% once controls stabilized",
      "Fewer change orders by tightening scopes before work began",
    ],
    whatIDid: [
      "Built a simple forecasting standard (assumptions, timing, owner expectations)",
      "Coached teams to verify field conditions vs. vendor-only inputs",
      "Used weekly calls to surface risks early, not at month-end",
    ],
    timeline: "4–6 months to fully stabilize; visible improvement within ~2 cycles",
    tools: ["Owner reporting cadence", "Vendor scope controls", "Variance standards"],
  },

  {
    slug: "approval-cycle-time",
    tag: "Approvals + decision velocity",
    title: "Cut proposal back-and-forth and accelerated approvals for ownership decisions",
    context:
      "Approval packages were inconsistent and often reused from older templates, driving rework, delays, and owner follow-ups.",
    outcome:
      "Created repeatable proposal standards that made approvals faster and reduced noise so the team had more time for tenant-facing work.",
    bullets: [
      "Rebuilt proposal templates and formatting standards",
      "Created step-by-step submission instructions",
      "Trained managers on “owner-ready” packages",
    ],
    metrics: [
      "Reduced approval cycle time from ~3–4 weeks to ~3–4 days",
      "Moved to first-pass approvals within ~90 days",
      "Reduced owner escalations by ~30–40% after ~2 cycles (time freed for proactive walks/tenant touchpoints)",
    ],
    whatIDid: [
      "Mapped where packages broke (language, formatting, missing assumptions)",
      "Built a checklist and examples of “good” submissions",
      "Coached managers and QC’d early submissions until consistent",
    ],
    timeline: "~90 days to normalize first-pass approvals",
    tools: ["Templates + checklists", "Training + QC loop", "Owner communications cadence"],
  },

  {
    slug: "cross-functional-realignment",
    tag: "Cross-functional operating model",
    title: "Reintegrated siloed teams to stabilize performance and reduce ownership involvement",
    context:
      "Commercial portfolio (mostly office with some industrial) was operating in silos: ops, accounting, engineering, and construction lacked shared cadence and translation.",
    outcome:
      "Repaired team-to-team communication so reporting and decisions became consistent, reducing volatility and reactive owner involvement.",
    bullets: [
      "Set shared cadence + single point of contact expectations",
      "Trained each team on how other functions think/communicate",
      "Rebuilt rapport and escalations path with clear ownership",
    ],
    metrics: [
      "Reduced variance volatility significantly (up to ~90% once teams shared timely updates)",
      "Returned ownership to a predictable bi-weekly cadence after trust rebuilt",
      "Stabilized communication and reduced reactive “status chasing” within ~100 days",
    ],
    whatIDid: [
      "Translated norms across teams (accounting absolutes vs ops pragmatism, etc.)",
      "Led guided working sessions to establish shared workflows",
      "Stepped out once the system held without facilitation",
    ],
    timeline: "~100 days to rebuild trust and normalize operating rhythm",
    tools: ["Cross-functional cadence", "Escalation model", "Reporting discipline"],
  },

  {
    slug: "lease-up-concessions",
    tag: "Lease-up strategy",
    title: "Delivered ground-up lease-ups with controlled concessions and clear performance tracking",
    context:
      "Brand-new ground-up lease-ups required pace without eroding long-term rent integrity; concessions were a primary lever.",
    outcome:
      "Balanced velocity and rent health by tracking leasing funnels, concessions, and competitive positioning in real time.",
    bullets: [
      "Tracked concession strategy against absorption targets",
      "Aligned leasing + ops + marketing to weekly decision cadence",
      "Kept ownership informed with clear forward-looking reporting",
    ],
    metrics: [
      "Concessions used as a controlled lever (tracked weekly vs absorption targets)",
      "Improved decision clarity by tying incentives to measurable funnel health",
      "Reduced reactive strategy shifts by standardizing weekly reporting",
    ],
    whatIDid: [
      "Built weekly lease-up dashboards (traffic → tours → apps → leases)",
      "Created decision rules for when to adjust concessions",
      "Kept investor reporting focused on pace, rent health, and risk",
    ],
    timeline: "Ongoing through lease-up; weekly cadence throughout",
    tools: ["Leasing funnel KPIs", "Concession governance", "Weekly reporting"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
