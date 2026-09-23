import Image from "next/image";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";
import { ContinueLink } from "./chapter-nav";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="display text-5xl leading-[1.05] md:text-6xl">
              Plain water is a missed opportunity.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Kerala grandmothers already worked out a fix for that: heartwood
              chips, sold unbranded, dropped into a pot of water. It stains,
              gives the water colour and character, and a reason to finish
              the jug. What nobody did was standardise it enough to put on a
              shelf.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-bone-deep">
            <Image
              src="/products/product-0189.jpg"
              alt="A PLANT BIONIX carton beside a crescent of pathimugham powder on marble"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-t border-line bg-bone-deep/50">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-bone-deep md:order-2 md:aspect-square">
              <Image
                src="/products/product-0187.jpg"
                alt="Heartwood and milled powder beside a PLANT BIONIX carton"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <p className="eyebrow text-rose">Why we made this</p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                This is what our grandmothers made at home, generation after
                generation: a piece of heartwood dropped into a pot of water,
                nothing else added, nothing to declare because there was
                never a label to declare it on. It was always organic,
                always homemade, just never something you could buy off a
                shelf. So we started buying the same heartwood, milling it to
                a coarse cut, and sealing it one dose at a time, keeping
                everything about it exactly as it was, minus the guesswork.
              </p>
              <h2 className="display mt-4 text-3xl md:text-4xl">
                No dye. No guesswork. No stained pots.
              </h2>

              <ContinueLink href="/products" label="The Products" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
