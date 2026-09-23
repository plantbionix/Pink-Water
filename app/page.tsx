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
              Nothing is wrong with your water. That&rsquo;s the problem.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Your water is clean. But let&rsquo;s be honest, nobody craves
              it. Modern wellness tells you to fix that with endless pills
              and synthetic powders. Kerala grandmothers had a better way.
              They passed down a simple, proven botanical that transforms
              ordinary water into a vibrant, health-boosting infusion.
              We&rsquo;ve finally packaged this ancient wisdom for your
              modern routine.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "100% Plant-Based",
                "Organic",
                "No Artificial Colour",
                "No Chemicals",
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
      </main>

      <SiteFooter />
    </>
  );
}
