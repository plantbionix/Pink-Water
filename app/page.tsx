import Image from "next/image";
import WaitlistForm from "./waitlist-form";

const range = [
  {
    name: "Daha Pink",
    botanical: "Pathimugham · Caesalpinia sappan",
    colour: "Rose",
    when: "All day, room temperature",
    body: "The everyday Kerala household water. Turns rose on its own from brazilin, the pigment in the heartwood — no dye, no sugar, no flavouring. Clean and faintly woody.",
    image: "/products/product-0185.jpg",
    alt: "A Daha Pink carton and jar of powder on a counter",
    status: "First to ship",
    tint: "bg-rose-tint",
    dot: "bg-rose",
  },
  {
    name: "Daha Amber",
    botanical: "Karingali · Acacia catechu",
    colour: "Amber",
    when: "One measured evening pour",
    body: "Its own Kerala tradition, not a darker version of the pink. Brews amber and astringent — closer to a weak black tea. Meant for a measured evening pour, with a daily ceiling printed on the pack.",
    image: "/products/product-0186.jpg",
    alt: "A hand shaking powder beside a kraft carton",
    status: "First to ship",
    tint: "bg-amber-tint",
    dot: "bg-amber",
  },
  {
    name: "Daha Gold",
    botanical: "Our six-wood house blend",
    colour: "Deep amber",
    when: "After meals",
    body: "Pathimugham and karingali with vetiver, sandalwood, naruneendi and dry ginger. There is no single classical recipe for this — the proportions are ours, and we print them.",
    image: "/products/product-0188.jpg",
    alt: "A Plant Bionix carton with an empty jar and lid",
    status: "In development",
    tint: "bg-gold-tint",
    dot: "bg-gold",
  },
];

const dayInTheLife = [
  {
    tag: "MORNING",
    h: "Fill the pot.",
    p: "One sachet, one litre, tap water is fine. Leave it while you get ready.",
  },
  {
    tag: "MIDDAY",
    h: "It's already rose.",
    p: "No steeping schedule to watch. By the time you're thirsty, the colour is there.",
  },
  {
    tag: "EVENING",
    h: "Same jug, same pour.",
    p: "It tastes like the last glass, because the dose never changes. One sachet is one sachet.",
  },
  {
    tag: "GUESTS",
    h: "Pour it for someone else.",
    p: "The way Kerala restaurants have served it since the nineties — instead of plain water, not next to it.",
  },
];

const howTo = [
  { step: "01", h: "Water in.", p: "Any jug, bottle or pot. Tap water is fine — no boiling." },
  { step: "02", h: "Sachet in.", p: "Drop it in and walk away. Nothing to stir, nothing to watch yet." },
  { step: "03", h: "Then it happens.", p: "About four minutes, and the water turns rose on its own — brazilin, the pigment already in the wood." },
  { step: "04", h: "Drink it through the day.", p: "Refill the same sachet's litre, or start fresh." },
];

const faqs = [
  {
    q: "Am I drinking plain water with something added?",
    a: "You're drinking water that a piece of heartwood has sat in. Nothing is added to the water — no dye, no sugar, no flavouring. The colour and the taste both come from the wood itself.",
  },
  {
    q: "How long does one sachet last?",
    a: "One sachet is dosed for one litre. Daha Pink can be topped up through the day; Daha Amber is a single measured pour with a daily ceiling printed on the pack.",
  },
  {
    q: "Is this safe in pregnancy?",
    a: "Pathimugham is traditionally used as an emmenagogue. If you're pregnant, please check with your doctor before drinking Daha Pink.",
  },
  {
    q: "What does it actually taste like?",
    a: "Clean and faintly woody — not sweet, not floral. Daha Amber is more astringent, closer to a weak black tea.",
  },
  {
    q: "Is this a supplement or a medicine?",
    a: "Neither. It's a food product — heartwood you steep in water, the way Kerala households already do. We're not making any health claim about it.",
  },
  {
    q: "What is this called in Kerala?",
    a: "Pathimugham vellam. You'll also see it spelled pathimugam, pathimukham or patangam depending on who taught you — same wood, same water. The wood itself is pathimugham, Caesalpinia sappan, and the water it makes is what we call Daha Pink.",
  },
  {
    q: "How is this different from green tea?",
    a: "It isn't a substitute for green tea and we're not claiming it's better — it's just a different habit. No caffeine, no leaves to steep, and it's a pot you drink through the day rather than a single cup you have to remember to finish.",
  },
  {
    q: "Does it have caffeine? Can I drink it in the evening?",
    a: "No caffeine at all — it's heartwood in water, not a tea. That's a fact about what's in it, not a claim about sleep or relaxation, but it's why people drink it any time of day, evenings included.",
  },
  {
    q: "How does this compare to hibiscus tea?",
    a: "Hibiscus is the closest reference point most people already know: both are caffeine-free and coloured only by the plant itself. The differences — hibiscus is a flower and sharply tart; this is heartwood, gentler and faintly sweet, closer to water than to tea. And hibiscus is usually a cup; this is a whole pot, the way Kerala households drink it all day.",
  },
];

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

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: range.map((product, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `Plant Bionix ${product.name}`,
      description: product.body,
      brand: { "@type": "Brand", name: "Plant Bionix" },
    },
  })),
};

export default function Home() {
  const waitlistEnabled = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <header className="sticky top-0 z-10 border-b border-line bg-bone/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="display text-xl text-ink">plant bionix</span>
          <nav className="flex items-center gap-6">
            <a
              href="#range"
              className="eyebrow hidden text-ink-soft transition-colors hover:text-rose sm:inline"
            >
              The range
            </a>
            <a
              href="#faq"
              className="eyebrow hidden text-ink-soft transition-colors hover:text-rose sm:inline"
            >
              FAQ
            </a>
            <a
              href="#waitlist"
              className="eyebrow rounded-full bg-rose px-5 py-2.5 text-white transition-colors hover:bg-rose-deep"
            >
              Waitlist
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 pt-16 pb-10 text-center md:pt-24">
          <p className="eyebrow text-rose">Functional water</p>
          <h1 className="display mx-auto mt-5 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Plain water is a
            <br />
            missed opportunity.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Kerala households worked this out generations ago: drop a piece of
            heartwood in the pot, and the same water comes out with colour,
            character, and a reason to finish the jug.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm enabled={waitlistEnabled} compact />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-bone-deep">
            <Image
              src="/products/product-0189.jpg"
              alt="A Plant Bionix carton beside a crescent of pathimugham powder on marble"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <div className="mt-10 overflow-hidden border-y border-line bg-rose py-3 text-white">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {Array.from({ length: 6 }).map((_, j) => (
                  <span
                    key={j}
                    className="display px-6 text-lg tracking-wide whitespace-nowrap"
                  >
                    No dye. No sugar. Just wood.
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="eyebrow text-rose">Why we made this</p>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink-soft">
            Pick up almost anything colourful in a store and check the label.
            The pink, the red, the electric blue — it&rsquo;s dye, most of the
            time. Ours isn&rsquo;t on the label at all, because there isn&rsquo;t
            one to declare.
          </p>
          <h2 className="display mt-4 text-3xl md:text-5xl">
            The plant does the work.
            <br />
            We just portion it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft">
            Heartwood, milled to a coarse kwatha cut and sealed one dose at a
            time. No powder to scoop, no schedule to keep, no guessing how much
            went into the pot.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#range"
              className="rounded-full bg-ink px-7 py-3.5 font-semibold text-bone transition-colors hover:bg-rose-deep"
            >
              See the range
            </a>
          </div>
          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-ink-soft">
            We are deliberately not making a health claim here. These woods have
            a long documented history of household and classical use in Kerala,
            and the modern laboratory work on them is early. When there is
            something solid to say, we will say it and show you the paper.
          </p>
        </section>

        <section id="range" className="border-y border-line bg-bone-deep/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="text-center">
              <p className="eyebrow text-rose">The range</p>
              <h2 className="display mt-4 text-3xl md:text-5xl">
                Three waters. Three different drinks.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-soft">
                They are not colourways of the same thing. Each wood tastes
                different, behaves differently in water, and belongs at a
                different time of day — so each gets its own pack and its own
                dosing.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
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
                      <h3 className="display text-2xl">{product.name}</h3>
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
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="eyebrow text-rose">A day with it</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">
              Small habit, same jug.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dayInTheLife.map((item, i) => (
              <div key={item.tag} className="relative pl-6">
                <span className="eyebrow text-rose">{item.tag}</span>
                <h3 className="display mt-2 text-xl">{item.h}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{item.p}</p>
                {i < dayInTheLife.length - 1 && (
                  <span className="absolute top-1 -right-4 hidden text-line lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-ink text-bone">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="text-center">
              <p className="eyebrow text-rose">How it works</p>
              <h2 className="display mt-4 text-3xl md:text-5xl">
                It&rsquo;s crazy simple.
              </h2>
            </div>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {howTo.map((item) => (
                <div key={item.step}>
                  <span className="display text-4xl text-rose">{item.step}</span>
                  <h3 className="display mt-3 text-xl">{item.h}</h3>
                  <p className="mt-2 leading-relaxed text-bone/70">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-bone-deep">
              <Image
                src="/products/product-0187.jpg"
                alt="Heartwood and milled powder beside a Plant Bionix carton"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-rose">The woods</p>
              <h2 className="display mt-4 text-3xl md:text-4xl">
                Everybody&rsquo;s grandmother used them. Nobody made them worth
                putting on the table.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Across Kerala these woods are sold as unbranded bags of chips.
                You boil them, they stain the pot, and you never quite know how
                much to use. Restaurants have served pathimugham water instead
                of plain water since the nineties.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                We buy the heartwood, mill it to a coarse cut so it gives its
                colour quickly, and portion it so a litre comes out the same
                every time. That is the entire product. The tradition was
                already there.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-bone-deep/50">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <p className="eyebrow text-center text-rose">In the pack</p>
            <h2 className="display mt-4 text-center text-3xl md:text-4xl">
              Sachets, not a scoop.
            </h2>
            <dl className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
              {[
                [
                  "Format",
                  "Single-serve paper dip-bag sachets inside a resealable stand-up pouch.",
                ],
                ["Dose", "One sachet per litre. No measuring, no guessing."],
                [
                  "Why sachets",
                  "Coarse-cut wood stales faster than whole chips. A sealed sachet inside a resealable pouch keeps each litre tasting like the last.",
                ],
                [
                  "What it is not",
                  "Not an instant powder, not a supplement, not a medicine. It is a food product you steep in water.",
                ],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-line pt-4">
                  <dt className="eyebrow text-ink-soft">{k}</dt>
                  <dd className="mt-2 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="eyebrow text-rose">FAQ</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">
              Got questions? Good.
            </h2>
          </div>
          <div className="mt-10 divide-y divide-line border-y border-line">
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
          <p className="mt-10 text-center text-sm leading-relaxed text-ink-soft">
            Pathimugham is traditionally used as an emmenagogue — if you are
            pregnant, please check with your doctor before drinking it.
            Karingali carries a daily limit, printed on its pack, and is not
            meant to be drunk all day the way the pink is.
          </p>
        </section>

        <section id="waitlist" className="border-t border-line bg-rose-tint">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
            <p className="eyebrow text-rose-deep">Waitlist</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              We&rsquo;re filling the first pouches by hand.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Which means the first run is small. Add your details below and
              we&rsquo;ll reach out personally when it&rsquo;s ready — not a
              newsletter.
            </p>
            <div className="mt-9 flex justify-center">
              <WaitlistForm enabled={waitlistEnabled} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row">
            <div>
              <span className="display text-lg">plant bionix</span>
              <p className="mt-2 text-sm text-ink-soft">India</p>
            </div>
            <a
              href="mailto:sales@plantbionix.com"
              className="text-sm text-ink-soft underline transition-colors hover:text-rose-deep"
            >
              sales@plantbionix.com
            </a>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-soft">
            Plant Bionix products are food, not medicine. Nothing here is a
            health claim, and nothing here is intended to diagnose, treat, cure
            or prevent any condition. References to traditional use describe
            how these woods have historically been used in Kerala households —
            not an outcome you should expect.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
            <span>© {new Date().getFullYear()} Plant Bionix LLP</span>
            <a href="/privacy" className="underline hover:text-rose-deep">
              Privacy Policy
            </a>
            <a href="/terms" className="underline hover:text-rose-deep">
              Terms of Use
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
