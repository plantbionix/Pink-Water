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
              Kerala households worked out a fix for that generations ago.
              Drop a piece of heartwood in the pot, and the same water comes
              out with colour, character, and a reason to finish the jug.
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
                Pick up almost anything colourful in a store and check the
                label. The pink, the red, the electric blue. It&rsquo;s dye,
                most of the time. Ours isn&rsquo;t on the label at all,
                because there isn&rsquo;t one to declare.
              </p>
              <h2 className="display mt-4 text-3xl md:text-4xl">
                The plant does the work. We just portion it.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Heartwood, milled to a coarse cut and sealed one dose at a
                time. No powder to scoop, no schedule to keep, no guessing
                how much went into the pot.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <h2 className="display text-3xl md:text-4xl">
              Everybody&rsquo;s grandmother used it. Nobody made it worth
              putting on the table.
            </h2>
            <p className="mt-6 leading-relaxed text-ink-soft">
              Across Kerala it&rsquo;s sold as unbranded bags of chips. You
              boil them, they stain the pot, and you never quite know how
              much to use. We buy the heartwood, mill it fine, and portion it
              so a litre comes out the same every time. That&rsquo;s the
              whole product. The tradition was already there.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              We&rsquo;re deliberately not making a health claim here. The
              modern research on these woods is early. When there&rsquo;s
              something solid to say, we&rsquo;ll say it and show you the
              paper.
            </p>

            <ContinueLink href="/products" label="The Products" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
