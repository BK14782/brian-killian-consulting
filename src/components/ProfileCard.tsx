import Image from "next/image";
import Link from "next/link";

export default function ProfileCard({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={[
        // shared layout
        "flex items-center gap-4 rounded-3xl p-6 backdrop-blur",
        // light vs dark styling
        isDark
          ? "bg-white/5 text-white ring-1 ring-white/10"
          : "border border-border bg-background text-foreground shadow-sm",
      ].join(" ")}
    >
      <Image
        src="/brian-killian.jpg"
        alt="Brian Killian"
        width={96}
        height={96}
        className="rounded-full"
        unoptimized
      />

      <div>
        <div className={isDark ? "text-base font-semibold text-white" : "text-base font-semibold"}>
          Brian Killian
        </div>

        <div className={isDark ? "text-sm text-white/80" : "text-sm text-muted-foreground"}>
          Principal, Brian Killian Consulting
        </div>

        <div className={isDark ? "mt-1 text-xs text-white/75" : "mt-1 text-xs text-muted-foreground"}>
          Seattle-based • Real estate operations consulting
        </div>

        <Link
          href="https://www.linkedin.com/in/briannkillian/"
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "mt-2 inline-flex items-center gap-1 text-sm underline underline-offset-4 transition",
            isDark ? "text-white/90 hover:text-white" : "hover:text-foreground",
          ].join(" ")}
        >
          View LinkedIn →
        </Link>
      </div>
    </div>
  );
}
