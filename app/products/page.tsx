import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { ContinueLink } from "../chapter-nav";
import { range } from "../content";

export const metadata: Metadata = {
  title: "Pink Water | PLANT BIONIX",
  description:
    "Meet Pink Water, our first functional water. DAHA Amber and DAHA Gold are next.",
  alternates: { canonical: "https://www.plantbionix.com/products" },
};

const [pinkWater, ...comingNext] = range;

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: range.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `PLANT BIONIX ${product.line ?? product.name}`,
      description: product.body,
      brand: { "@type": "Brand", name: "PLANT BIONIX" },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow text-rose">{pinkWater.line}</p>
            <h1 className="display mt-4 text-4xl md:text-6xl">
              {pinkWater.name}
            </h1>
            <p className="mt-5 leading-relaxed text-ink-soft">
              {pinkWater.body}
            </p>
            <dl className="mt-8 flex gap-10 text-sm">
              <div>
                <dt className="text-ink-soft">Pours</dt>
                <dd className="font-medium">{pinkWater.colour}</dd>
              </div>
              <div>
                <dt className="text-ink-soft">Drink it</dt>
                <dd className="font-medium">{pinkWater.when}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
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
            <p className="mt-5 text-xs leading-relaxed text-ink-soft">
              Documented in classical Ayurvedic texts, used in Kerala
              households for generations.
            </p>
            <p className="mt-6 text-sm text-ink-soft">
              Share your ritual:{" "}
              <span className="font-semibold text-rose-deep">
                #DahaPinkRitual
              </span>{" "}
              ·{" "}
              <span className="font-semibold text-rose-deep">
                #SkincareBeverage
              </span>
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-bone-deep md:aspect-auto">
            <Image
              src={pinkWater.image}
              alt={pinkWater.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-t border-line bg-bone-deep/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="eyebrow text-rose">What&rsquo;s next from DAHA</p>
            <h2 className="display mt-4 text-2xl md:text-3xl">
              Pink Water is the first. Two more are coming.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {comingNext.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
                >
                  <div className={`relative aspect-[16/9] ${product.tint}`}>
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span className="eyebrow absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-ink">
                      {product.status}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${product.dot}`}
                      />
                      <h3 className="display text-2xl">{product.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-ink-soft italic">
                      {product.note}
                    </p>
                    <p className="mt-4 leading-relaxed text-ink-soft">
                      {product.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <ContinueLink href="/faq" label="FAQ" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
