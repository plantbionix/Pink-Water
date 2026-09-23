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
              Plain water is a missed opportunity.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Kerala grandmothers already worked out a fix, generation after
              generation: heartwood dropped into a pot of water, organic and
              homemade, nothing to declare on a label because there
              wasn&rsquo;t one. We just started milling and portioning it
              ourselves.
            </p>
            <p className="display mt-6 text-xl text-rose-deep md:text-2xl">
              No dye. No guesswork. No stained pots.
            </p>

            <ContinueLink href="/products" label="The Products" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-bone-deep md:aspect-auto">
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
      </main>

      <SiteFooter />
    </>
  );
}
