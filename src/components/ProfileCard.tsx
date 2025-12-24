import Image from "next/image";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <div className="flex items-center gap-4 rounded-3xl border bg-background p-6">
      <Image
        src="/brian-killian.jpg"
        alt="Brian Killian"
        width={96}
        height={96}
        className="rounded-full"
      />

      <div>
        <div className="text-base font-semibold">Brian Killian</div>
        <div className="text-sm text-muted-foreground">
          Principal, Brian Killian Consulting
        </div>

        <Link
          href="https://www.linkedin.com/in/briannkillian"
          target="_blank"
          className="mt-2 inline-flex items-center gap-1 text-sm underline underline-offset-4"
        >
          View LinkedIn →
        </Link>
      </div>
    </div>
  );
}
