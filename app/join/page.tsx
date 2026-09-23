import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import WaitlistForm from "../waitlist-form";

export const metadata: Metadata = {
  title: "Join the waitlist | PLANT BIONIX",
  description:
    "We're filling the first pouches by hand. Join the waitlist to hear first.",
  alternates: { canonical: "https://www.plantbionix.com/join" },
};

export default function JoinPage() {
  const waitlistEnabled = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-rose-tint">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
          <div>
            <p className="eyebrow text-rose">Join</p>
            <h1 className="display mt-5 text-4xl md:text-5xl">
              We&rsquo;re filling the first pouches by hand.
            </h1>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Which means the first run is small. Add your details and
              we&rsquo;ll reach out personally when it&rsquo;s ready. Not a
              newsletter.
            </p>
          </div>
          <div>
            <WaitlistForm enabled={waitlistEnabled} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
