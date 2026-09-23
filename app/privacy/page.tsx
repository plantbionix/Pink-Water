import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PLANT BIONIX",
  description: "How PLANT BIONIX collects, uses and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="display text-xl text-ink">
            PLANT BIONIX
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="eyebrow text-rose">Legal</p>
        <h1 className="display mt-4 text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-soft">Last updated September 2026</p>

        <div className="mt-10 space-y-8 leading-relaxed text-ink-soft">
          <section>
            <h2 className="display text-2xl text-ink">What we collect</h2>
            <p className="mt-3">
              When you join our waitlist, we ask for your name, email address,
              mobile number, and delivery address (including landmark, city
              and pincode). We only ask for what we need to plan delivery for
              the first production run and to contact you when it&rsquo;s
              ready.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-ink">How we use it</h2>
            <p className="mt-3">
              Your details are used only to: notify you when Daha Pink and
              Daha Amber are ready to ship, plan which regions to prioritise
              for the first delivery run, and respond if you write to us.
              Nothing you submit is sold, rented, or shared with advertisers.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-ink">Where it&rsquo;s stored</h2>
            <p className="mt-3">
              Waitlist submissions are sent directly to our team&rsquo;s email
              (sales@plantbionix.com) via a third-party form service
              (Web3Forms). We do not maintain a separate marketing database or
              CRM at this stage.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-ink">Your rights</h2>
            <p className="mt-3">
              You can ask us to delete your information at any time by
              emailing{" "}
              <a
                href="mailto:sales@plantbionix.com"
                className="text-rose-deep underline"
              >
                sales@plantbionix.com
              </a>{" "}
              from the same email address you used to sign up. We&rsquo;ll
              confirm once it&rsquo;s removed.
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-ink">Cookies</h2>
            <p className="mt-3">
              This site does not use tracking or advertising cookies. Any
              cookies set are strictly functional (e.g. remembering your
              theme preference).
            </p>
          </section>

          <section>
            <h2 className="display text-2xl text-ink">Contact</h2>
            <p className="mt-3">
              Questions about this policy? Write to{" "}
              <a
                href="mailto:sales@plantbionix.com"
                className="text-rose-deep underline"
              >
                sales@plantbionix.com
              </a>
              .
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-16 inline-block text-sm text-ink-soft underline hover:text-rose-deep"
        >
          ← Back to plantbionix.com
        </Link>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} PLANT BIONIX LLP
          </p>
        </div>
      </footer>
    </>
  );
}
