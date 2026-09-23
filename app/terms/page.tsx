import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Plant Bionix",
  description: "Terms of use for plantbionix.com.",
};

export default function TermsOfUse() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" className="display text-xl text-paper">
            plant bionix
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="eyebrow text-rose">Legal</p>
        <h1 className="display mt-4 text-4xl md:text-5xl">Terms of Use</h1>
        <p className="mt-4 text-sm text-paper-soft">Last updated September 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-paper-soft">
          <section>
            <h2 className="display text-2xl text-paper">Where we are</h2>
            <p className="mt-3">
              This site is operated by Plant Bionix LLP, India. It is
              currently a pre-launch site — Daha Pink and Daha Amber are not
              yet available for purchase. Joining the waitlist does not
              create an order, a reservation, or any payment obligation.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-paper">What&rsquo;s on this site</h2>
            <p className="mt-3">
              Product descriptions, pack images and copy are provided for
              information only. Pack photography currently in use is
              pre-production and may not exactly match the final retail
              packaging.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-paper">Not medical advice</h2>
            <p className="mt-3">
              Daha Pink and Daha Amber are food products, not medicines.
              Nothing on this site is a health claim or medical advice, and
              nothing here is intended to diagnose, treat, cure or prevent
              any condition. If you are pregnant or have a medical condition,
              speak to your doctor before using these products once
              available.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-paper">Waitlist information</h2>
            <p className="mt-3">
              Details you submit through the waitlist form are used only to
              contact you about availability and plan delivery — see our{" "}
              <Link href="/privacy" className="text-rose underline">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-paper">Changes</h2>
            <p className="mt-3">
              As a pre-launch site, content here may change as we finalise
              packaging, pricing and availability. We&rsquo;ll keep this page
              current.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-paper">Contact</h2>
            <p className="mt-3">
              Questions? Write to{" "}
              <a
                href="mailto:sales@plantbionix.com"
                className="text-rose underline"
              >
                sales@plantbionix.com
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-16 inline-block text-sm text-paper-soft underline hover:text-rose"
        >
          ← Back to plantbionix.com
        </Link>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <p className="text-xs text-paper-soft">
            © {new Date().getFullYear()} Plant Bionix LLP
          </p>
        </div>
      </footer>
    </>
  );
}
