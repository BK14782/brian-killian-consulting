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
  heroImage?: string;
};
export type CaseStudyWithHref = CaseStudy & {
  href: string;
};

export const caseStudies: CaseStudy[] = [
  
    {
  slug: "forecasting-controls",
  tag: "Forecast stability",
  title: "Forecast stability through disciplined scope control and reporting cadence",
  context:
    "Multi-building campus-style commercial portfolio with recurring operating and capital activity across multiple vendors and internal teams.",
  outcome:
    "Restored predictable forecasting by tightening scope discipline and introducing a proactive reporting cadence that reduced surprises.",
  bullets: [
    "Forecast assumptions standardized and documented",
    "Vendor scopes clarified prior to execution",
    "Risks surfaced early through weekly updates",
  ],
  metrics: [
    "Month-end variance reduced by ~50% within 4–6 months",
    "NOI predictability improved to within ~±2.5%",
    "Fewer change orders due to clearer upfront scoping",
  ],
  whatIDid: [
    "Introduced a simple forecasting standard tied to assumptions and timing",
    "Realigned vendor scope practices to reduce downstream change orders",
    "Implemented weekly risk-focused updates ahead of monthly reporting",
  ],
  timeline: "Visible improvement within ~2 cycles; full stabilization over 4–6 months",
  heroImage: "/case-studies/forecasting-controls.jpg",

},


  {
  slug: "approval-cycle-time",
  tag: "Decision velocity",
  title: "Accelerating ownership approvals through proposal discipline",
  context:
    "Multi-asset commercial portfolio requiring frequent operational and capital approvals across varying ownership priorities.",
  outcome:
    "Reduced approval friction by standardizing proposal structure and decision framing.",
  bullets: [
    "Approval packages rebuilt for clarity and consistency",
    "Submission standards aligned with ownership decision-making",
    "Manager training reduced rework and delays",
  ],
  metrics: [
    "Approval cycle time reduced from ~3–4 weeks to ~3–4 days",
    "First-pass approvals normalized within ~90 days",
    "Owner follow-ups and revisions declined significantly",
  ],
  whatIDid: [
    "Rebuilt proposal templates to separate context, ask, and assumptions",
    "Created submission guidelines and examples of owner-ready packages",
    "Reviewed early submissions until standards became routine",
  ],
  timeline: "~90 days to normalize first-pass approvals",
  heroImage: "/case-studies/approval-cycle-time.jpg",

},


 {
  slug: "cross-functional-realignment",
  tag: "Operating alignment",
  title: "Variance volatility reduction through cross-functional reintegration",
  context:
    "Commercial portfolio consisting of approximately 70% office and 30% industrial warehouse properties.",
  outcome:
    "Stabilized performance by reintegrating siloed teams and restoring disciplined communication.",
  bullets: [
    "Cross-team communication norms re-established",
    "Single source of truth for ownership updates",
    "Clear escalation paths and shared cadence",
  ],
  metrics: [
    "Variance volatility reduced by up to ~90%",
    "Ownership involvement reduced to bi-weekly cadence",
    "Operational trust restored within ~100 days",
  ],
  whatIDid: [
    "Trained teams on how other functions operate and communicate",
    "Facilitated structured cross-team working sessions",
    "Centralized ownership communication before stepping back",
  ],
  timeline: "~100 days to full stabilization",
  heroImage: "/case-studies/cross-functional-realignment.jpg",

},


{
  slug: "lease-up-concessions",
  tag: "Lease-up strategy",
  title: "Delivering lease-up velocity without over-concessioning",
  context:
    "Ground-up residential lease-up projects requiring competitive positioning while protecting long-term rent integrity.",
  outcome:
    "Achieved predictable absorption by treating concessions as a controlled strategic lever.",
  bullets: [
    "Weekly funnel tracking tied concessions to absorption",
    "Clear decision rules replaced reactive pricing",
    "Ownership reporting focused on pace and rent health",
  ],
  metrics: [
    "Concessions deployed deliberately rather than reactively",
    "Lease-up velocity achieved without rent roll erosion",
    "Reduced strategy churn through consistent reporting cadence",
  ],
  whatIDid: [
    "Built weekly lease-up dashboards across the full funnel",
    "Established concession adjustment thresholds",
    "Kept ownership focused on forward-looking performance",
  ],
  timeline: "Ongoing throughout lease-up",
  heroImage: "/case-studies/lease-up-concessions.jpg",

},

];
export const caseStudiesWithHref: CaseStudyWithHref[] = caseStudies.map((c) => ({
  ...c,
  href: `/case-studies/${c.slug}`,
}));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

