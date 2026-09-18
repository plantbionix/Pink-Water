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
  },
];

export default function Home() {
  const waitlistEnabled = Boolean(process.env.WAITLIST_ENDPOINT);

  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="eyebrow font-medium">Plant Bionix</span>
          <nav className="flex gap-6">
            <a
              href="#range"
              className="eyebrow text-ink-soft transition-colors hover:text-rose-deep"
            >
              The range
            </a>
            <a
              href="#waitlist"
              className="eyebrow text-ink-soft transition-colors hover:text-rose-deep"
            >
              Waitlist
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="eyebrow text-rose">Functional water from Kerala</p>
            <h1 className="display mt-5 text-5xl leading-[1.05] md:text-6xl">
              Plain water is a
              <br />
              missed opportunity.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              You drink two or three litres of it a day out of obligation. Kerala
              households worked this out generations ago: drop a piece of
              heartwood in the pot, and the same water comes out with colour,
              character, and a reason to finish the jug.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              We portion those woods into single-serve sachets. Three of them, one
              per litre. Nothing else goes in.
            </p>
            <div className="mt-9">
              <WaitlistForm enabled={waitlistEnabled} />
              <p className="mt-3 text-sm text-ink-soft">
                First pouches go out to the waitlist before anyone else.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bone-deep">
            <Image
              src="/products/product-0189.jpg"
              alt="A Plant Bionix carton beside a crescent of pathimugham powder on marble"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="border-y border-line bg-bone-deep/50">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="eyebrow text-rose">Why bother</p>
            <h2 className="display mt-4 max-w-2xl text-3xl md:text-4xl">
              The easiest habit to change is one you already have.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  h: "No new routine",
                  p: "You are already drinking the water. This changes what is in the jug, not what you do with your day. No powder to scoop, no schedule to keep.",
                },
                {
                  h: "The plant does the work",
                  p: "Heartwood, milled to a coarse kwatha cut and left to steep. The colour, the faint woodiness and the character all come out of the wood on their own.",
                },
                {
                  h: "A very short ingredients list",
                  p: "One wood, or in Daha Gold's case six, and nothing else. No sugar, no dye, no flavouring, no preservative, no sweetener of any kind.",
                },
              ].map((item) => (
                <div key={item.h}>
                  <h3 className="display text-2xl">{item.h}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.p}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-soft">
              We are deliberately not making a health claim here. These woods have
              a long documented history of household and classical use in Kerala,
              and the modern laboratory work on them is early. When there is
              something solid to say, we will say it and show you the paper.
            </p>
          </div>
        </section>

        <section id="range" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="eyebrow text-rose">The range</p>
          <h2 className="display mt-4 max-w-2xl text-3xl md:text-4xl">
            Three waters. Three different drinks.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft">
            They are not colourways of the same thing. Each wood tastes different,
            behaves differently in water, and belongs at a different time of day —
            so each gets its own pack and its own dosing.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {range.map((product) => (
              <article key={product.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-bone-deep">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="eyebrow mt-5 text-rose">{product.status}</p>
                <h3 className="display mt-2 text-2xl">{product.name}</h3>
                <p className="mt-1 text-sm italic text-ink-soft">
                  {product.botanical}
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {product.body}
                </p>
                <dl className="mt-5 divide-y divide-line border-t border-line text-sm">
                  <div className="flex justify-between gap-4 py-2.5">
                    <dt className="text-ink-soft">Pours</dt>
                    <dd>{product.colour}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2.5">
                    <dt className="text-ink-soft">Drink it</dt>
                    <dd className="text-right">{product.when}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-bone-deep">
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
                Across Kerala these woods are sold as unbranded bags of chips. You
                boil them, they stain the pot, and you never quite know how much
                to use. Restaurants have served pathimugham water instead of plain
                water since the nineties.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                We buy the heartwood, mill it to a coarse cut so it gives its
                colour quickly, and portion it so a litre comes out the same every
                time. That is the entire product. The tradition was already there.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow text-rose">In the pack</p>
          <h2 className="display mt-4 max-w-2xl text-3xl md:text-4xl">
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
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Pathimugham is traditionally used as an emmenagogue — if you are
            pregnant, please check with your doctor before drinking it. Karingali
            carries a daily limit, printed on its pack, and is not meant to be
            drunk all day the way the pink is.
          </p>
        </section>

        <section id="waitlist" className="border-t border-line bg-bone-deep/50">
          <div className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
            <p className="eyebrow text-rose">Waitlist</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              We&rsquo;re filling the first pouches by hand.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Which means the first run is small. Leave your email and you&rsquo;ll
              get one note when it&rsquo;s ready — not a newsletter.
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
              <p className="eyebrow font-medium">Plant Bionix</p>
              <p className="mt-2 text-sm text-ink-soft">Kerala, India</p>
            </div>
            <a
              href="mailto:hello@plantbionix.com"
              className="text-sm text-ink-soft underline transition-colors hover:text-rose-deep"
            >
              hello@plantbionix.com
            </a>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-soft">
            Plant Bionix products are food, not medicine. Nothing here is a health
            claim, and nothing here is intended to diagnose, treat, cure or
            prevent any condition. References to traditional use describe how
            these woods have historically been used in Kerala households — not an
            outcome you should expect.
          </p>
          <p className="mt-4 text-xs text-ink-soft">
            © {new Date().getFullYear()} Plant Bionix LLP
          </p>
        </div>
      </footer>
    </>
  );
}
