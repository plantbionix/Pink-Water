import type { Metadata } from "next";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { ContinueLink } from "../chapter-nav";
import { faqs } from "../content";

export const metadata: Metadata = {
  title: "FAQ | PLANT BIONIX",
  description: "Common questions about Daha Pink and Daha Amber, answered.",
  alternates: { canonical: "https://www.plantbionix.com/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <h1 className="display text-4xl md:text-5xl">
                Got questions? Good.
              </h1>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Pathimugham is traditionally used as an emmenagogue. If you
                are pregnant, please check with your doctor before drinking
                it. Karingali carries a daily limit, printed on its pack,
                and is not meant to be drunk all day the way the pink is.
              </p>
            </div>

            <div className="divide-y divide-line border-y border-line">
              {faqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink marker:content-none">
                    {item.q}
                    <span className="display shrink-0 text-2xl text-rose transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <ContinueLink href="/join" label="Join the waitlist" />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
