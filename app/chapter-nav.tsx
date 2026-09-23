import Link from "next/link";

export function ContinueLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="mt-14 flex justify-center">
      <Link
        href={href}
        className="eyebrow group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-ink-soft transition-colors hover:border-rose hover:text-rose-deep"
      >
        Continue: {label}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
