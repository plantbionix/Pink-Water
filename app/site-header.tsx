import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bone/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="display text-xl text-ink">
          PLANT BIONIX
        </Link>
        <nav className="flex items-center gap-5">
          <Link
            href="/"
            className="eyebrow hidden text-ink-soft transition-colors hover:text-rose sm:inline"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="eyebrow hidden text-ink-soft transition-colors hover:text-rose sm:inline"
          >
            Products
          </Link>
          <Link
            href="/faq"
            className="eyebrow hidden text-ink-soft transition-colors hover:text-rose sm:inline"
          >
            FAQ
          </Link>
          <Link
            href="/join"
            className="eyebrow rounded-full bg-rose px-5 py-2.5 text-white transition-colors hover:bg-rose-deep"
          >
            Join the waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
