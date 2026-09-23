import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { ContinueLink } from "../chapter-nav";
import { range } from "../content";

export const metadata: Metadata = {
  title: "Products | PLANT BIONIX",
  description:
    "Daha Pink, Daha Amber and Daha Gold. Three waters, three different drinks.",
  alternates: { canonical: "https://www.plantbionix.com/products" },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: range.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `PLANT BIONIX ${product.name}`,
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
            <h1 className="display text-4xl md:text-6xl">
              Three waters. Three different drinks.
            </h1>
            <p className="mt-5 leading-relaxed text-ink-soft">
              One sachet, one litre, about four minutes. No boiling needed.
              But each wood tastes different and belongs at a different time
              of day, so each gets its own pack and its own dose.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-bone-deep md:aspect-auto">
            <Image
              src="/products/product-0187.jpg"
              alt="Heartwood and milled powder beside a PLANT BIONIX carton"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <div className="grid gap-8 md:grid-cols-3">
            {range.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
              >
                <div className={`relative aspect-square ${product.tint}`}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="eyebrow absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-ink">
                    {product.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${product.dot}`} />
                    <h2 className="display text-2xl">{product.name}</h2>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft italic">
                    {product.botanical}
                  </p>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    {product.body}
                  </p>
                  <dl className="mt-5 divide-y divide-line border-t border-line text-sm">
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-ink-soft">Pours</dt>
                      <dd className="font-medium">{product.colour}</dd>
                    </div>
                    <div className="flex justify-between gap-4 py-2.5">
                      <dt className="text-ink-soft">Drink it</dt>
                      <dd className="text-right font-medium">{product.when}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>

          <ContinueLink href="/faq" label="FAQ" />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
