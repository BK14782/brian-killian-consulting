import Link from "next/link";

export const metadata = {
  title: "Contact | Brian Killian Consulting",
  description:
    "Get in touch to discuss consulting, fractional leadership, or operational improvements.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Start a conversation
      </h1>

      <p className="mt-4 max-w-2xl text-muted-foreground">
        If you’re navigating operational friction, forecasting uncertainty, or
        owner communication challenges, I’m happy to talk. Share a little
        context and I’ll follow up with next steps.
      </p>

      <div className="mt-8 grid gap-6 rounded-3xl border bg-background p-8 shadow-sm">
        <div>
          <div className="text-sm font-semibold">Email</div>
          <a
            className="mt-2 inline-block underline underline-offset-4"
            href="mailto:brian@briankillianconsulting.com?subject=Consulting%20Inquiry"
          >
            brian@briankillianconsulting.com
          </a>
        </div>

        <div>
          <div className="text-sm font-semibold">Helpful context to include</div>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
            <li>Asset or portfolio type (office, mixed-use, campus, residential)</li>
            <li>What’s breaking right now (forecasting, approvals, communication, lease-up)</li>
            <li>Timeline and decision-makers</li>
            <li>What success looks like in the next 30–90 days</li>
          </ul>
        </div>

        <div className="text-sm text-muted-foreground">
          Prefer to review examples first?{" "}
          <Link
            className="underline underline-offset-4"
            href="/case-studies"
          >
            View case studies
          </Link>
          .
        </div>
      </div>
    </main>
  );
}
