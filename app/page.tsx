import Image from "next/image";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { ContinueLink } from "./chapter-nav";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="display text-5xl leading-[1.05] md:text-6xl">
              Old practices, questioned and made for today.
              <span className="mt-3 block text-rose">
                Nothing synthetic added. Nothing masked.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              PLANT BIONIX makes everyday plant-based drinks. Our first is
              Pink Water: drop one sachet into a litre of water and it turns
              rose-pink. The colour comes from the plant itself, not a dye.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "100% Plant-Based",
                "Organic",
                "No Artificial Colour",
                "No Synthetic Additives",
                "No Sugar",
                "No Caffeine",
              ].map((chip) => (
                <span
                  key={chip}
                  className="eyebrow rounded-full border border-line px-4 py-2 text-ink-soft"
                >
                  {chip}
                </span>
              ))}
            </div>

            <ContinueLink href="/products" label="Pink Water" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-bone-deep md:aspect-auto">
            <Image
              src="/products/product-0189.jpg"
              alt="A PLANT BIONIX carton beside a crescent of rose-hued powder on marble"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-t border-line bg-bone-deep/50">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <p className="eyebrow text-rose">What we stand for</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Nothing synthetic added",
                  body: "No dye, no sugar, no flavouring. The pink you see comes from the plant itself.",
                },
                {
                  n: "02",
                  title: "Nothing masked",
                  body: "Pink Water is one plant-based ingredient. Nothing added to hide or disguise it.",
                },
                {
                  n: "03",
                  title: "Questioned, not taken on faith",
                  body: "We read the research behind old practices, and tell you plainly what it shows and what it doesn’t.",
                },
              ].map((pillar) => (
                <article
                  key={pillar.n}
                  className="rounded-[2rem] bg-white p-7 shadow-sm"
                >
                  <p className="eyebrow text-rose">{pillar.n}</p>
                  <h2 className="display mt-3 text-2xl leading-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
