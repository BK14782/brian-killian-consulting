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
        "flex items-center gap-4 rounded-3xl border p-6 backdrop-blur",
        isDark
          ? "border-white/20 bg-white/10 text-white"
          : "border-border bg-background text-foreground",
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
            isDark ? "text-white hover:text-white/90" : "hover:text-foreground",
          ].join(" ")}
        >
          View LinkedIn →
        </Link>
      </div>
    </div>
  );
}
