import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../site-header";
import SiteFooter from "../site-footer";
import { ContinueLink } from "../chapter-nav";

export const metadata: Metadata = {
  title: "Our Story | PLANT BIONIX",
  description:
    "Why PLANT BIONIX exists: a founder's letter on the afternoon that started it, Kerala's pink water tradition, and why we'll only ever tell you exactly what's inside.",
  alternates: { canonical: "https://www.plantbionix.com/story" },
};

export default function StoryPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-rose">Founder&rsquo;s note</p>
            <h1 className="display mt-4 text-4xl leading-[1.1] md:text-5xl">
              I didn&rsquo;t set out to start a drinks brand.
            </h1>

            <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
              <p>
                I was 29, working from home the way a lot of people do now
                — long hours, most of them sitting, most of them in front
                of a laptop. I ate reasonably well. I went to the gym. On
                paper, nothing was wrong.
              </p>
              <p>
                Then, one ordinary afternoon at my desk, my vision started
                to blur and my heart was pounding so hard I was sure I was
                having a heart attack. I was alone in the apartment. I
                banged on my neighbour&rsquo;s door — no answer — so I
                drove myself to the emergency room, which is not something
                I&rsquo;d recommend to anyone.
              </p>
              <p>
                It wasn&rsquo;t a heart attack. The actual explanation was
                almost anticlimactic: hours of sitting, bad posture, and a
                stomach full of trapped gas pressing on a nerve that sits
                close to the heart. My body had panicked because my day
                had given it every reason to.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-rose-tint">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <blockquote className="display max-w-3xl text-2xl leading-snug text-rose-deep md:text-3xl">
              &ldquo;A piece of wood in a jar of water doesn&rsquo;t fix a
              nerve. If anyone ever tells you a drink can, don&rsquo;t
              believe them.&rdquo;
            </blockquote>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-2xl space-y-5 leading-relaxed text-ink-soft">
            <p>
              I&rsquo;m telling you this not because Pink Water has
              anything to do with what happened that afternoon. It
              doesn&rsquo;t, and I&rsquo;d rather say that plainly than let
              you assume otherwise. I&rsquo;m telling you because that
              afternoon is the reason I started paying attention — properly,
              for the first time — to what I was putting into my body every
              day. And the most basic thing I put into my body, more often
              than food, more often than anything, is water.
            </p>
          </div>
        </section>

        <section className="border-t border-line bg-bone-deep/50">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 md:grid-cols-2 md:py-12">
            <div className="max-w-md">
              <p className="eyebrow text-rose">Where it comes from</p>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink-soft">
                <p>
                  In Kerala, where my family is from, households have kept
                  a piece of heartwood in their drinking water for
                  generations — not as a health routine, just as the water.
                  Restaurants across the state have served it since the
                  1990s.
                </p>
                <p>
                  What exists today is loose chips, sold like a spice — no
                  dose, no grade, no story.{" "}
                  <span className="font-medium text-ink">
                    That gap is Pink Water.
                  </span>
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-bone-deep">
              <Image
                src="/products/product-0187.jpg"
                alt="Raw heartwood, ground to powder, beside the Pink Water box"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-rose">What I promised myself</p>
            <div className="mt-4 space-y-5 leading-relaxed text-ink-soft">
              <p>
                Here&rsquo;s what I decided before I built anything else:
                I&rsquo;d rather be honest and slower than fast and vague.
              </p>
              <p>
                One ingredient. A single wood, sourced from Kerala —
                nothing else in the sachet, no &ldquo;proprietary
                blend,&rdquo; no four things pretending to be one.
                We&rsquo;re not naming the exact wood publicly just yet —
                that&rsquo;s coming, on our own timeline, once we&rsquo;re
                ready to stand behind every word of it. What I can tell you
                now is simpler, and I think more important: the pink
                you&rsquo;ll see isn&rsquo;t dye. It&rsquo;s the wood. Drop
                the sachet into water and watch it happen — that&rsquo;s
                the whole demonstration, and it looks the same every time,
                because we cut and grade the wood the same way every time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "One Ingredient",
                "No Artificial Colour",
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
          </div>
        </section>

        <section className="border-t border-line bg-rose-tint">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <p className="eyebrow text-rose-deep">Why I think this matters</p>
              <div className="mt-4 space-y-5 leading-relaxed text-ink">
                <p>
                  I think trustworthy food and water is going to get harder
                  to find, not easier — longer ingredient lists, more
                  things you can&rsquo;t pronounce, more labels that tell
                  you less the longer they get. I don&rsquo;t think the fix
                  is another aisle of supplements. I think it&rsquo;s going
                  back to the handful of things households already knew
                  worked, and being straight with people about what they
                  are and aren&rsquo;t.
                </p>
                <p>
                  That&rsquo;s what I&rsquo;m building here, one honest
                  sachet at a time — Pink Water first, DAHA Amber next, and
                  whatever comes after that, under the same rule every
                  time: name what&rsquo;s actually in it, prove a claim
                  before we make it, and never ask you to trust us for a
                  reason we haven&rsquo;t earned yet.
                </p>
                <p>
                  If that&rsquo;s the kind of company you&rsquo;d want to
                  buy from, I&rsquo;d like to have you at the table. Or the
                  water pot, in this case.
                </p>
              </div>

              <p className="display mt-8 text-xl">
                — Arjun
                <span className="mt-1 block text-sm font-normal text-ink-soft">
                  Founder, PLANT BIONIX
                </span>
              </p>
            </div>

            <ContinueLink href="/products" label="Meet Pink Water" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
