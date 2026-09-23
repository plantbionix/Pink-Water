import Image from "next/image";
import WaitlistForm from "./waitlist-form";

export default function Home() {
  const waitlistEnabled = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-void/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="display text-xl text-paper">plant bionix</span>
          <a
            href="#waitlist"
            className="eyebrow text-paper-soft transition-colors hover:text-rose"
          >
            Waitlist
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="animate-bloom relative h-full w-full">
              <Image
                src="/products/product-0189.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-25"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 45%, var(--rose-glow), transparent 70%)",
              }}
            />
          </div>

          <p className="eyebrow text-rose">Something is coming</p>
          <h1 className="display glow mx-auto mt-6 max-w-3xl text-6xl leading-[1.05] italic md:text-8xl">
            Plain water is a
            <br />
            missed opportunity.
          </h1>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-paper-soft">
            We&rsquo;re not ready to say what it is yet. Only that it turns
            plain water into something you&rsquo;ll actually want to finish —
            and that the first people to know will be the ones on this list.
          </p>
          <div className="mt-10">
            <WaitlistForm enabled={waitlistEnabled} compact />
          </div>
        </section>

        <div className="overflow-hidden border-y border-line py-3">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {Array.from({ length: 6 }).map((_, j) => (
                  <span
                    key={j}
                    className="display px-6 text-lg italic tracking-wide whitespace-nowrap text-rose"
                  >
                    Something is coming.
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
          <p className="eyebrow text-rose">The problem</p>
          <h2 className="display mt-5 text-3xl leading-snug md:text-4xl">
            You drink two or three litres of water a day, out of obligation,
            not desire.
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-paper-soft">
            Everything colourful you could add to it comes from a lab. We
            think there&rsquo;s a better way — one with a long history behind
            it. We&rsquo;re not ready to show it yet.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-line">
            <Image
              src="/products/product-0187.jpg"
              alt="A hint of what's coming — heartwood and rose-coloured powder"
              fill
              sizes="100vw"
              className="object-cover opacity-70 grayscale"
            />
            <div className="absolute inset-0 bg-void/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="eyebrow rounded-full border border-line bg-void/70 px-5 py-2.5 text-paper-soft backdrop-blur">
                Not yet. Soon.
              </p>
            </div>
          </div>
        </section>

        <section
          id="waitlist"
          className="border-t border-line bg-gradient-to-b from-void to-void-deep"
        >
          <div className="mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
            <p className="eyebrow text-rose">Be first</p>
            <h2 className="display mt-5 text-4xl md:text-5xl">
              Join the waitlist.
            </h2>
            <p className="mt-5 leading-relaxed text-paper-soft">
              No newsletter, no spam. One note, when there&rsquo;s something
              real to tell you.
            </p>
            <div className="mt-10 flex justify-center">
              <WaitlistForm enabled={waitlistEnabled} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row">
            <div>
              <span className="display text-lg text-paper">plant bionix</span>
              <p className="mt-2 text-sm text-paper-soft">India</p>
            </div>
            <a
              href="mailto:sales@plantbionix.com"
              className="text-sm text-paper-soft underline transition-colors hover:text-rose"
            >
              sales@plantbionix.com
            </a>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-paper-soft">
            Plant Bionix will be a food product, not a medicine. Nothing here
            is a health claim, and nothing here is intended to diagnose,
            treat, cure or prevent any condition. Full ingredient and safety
            information will be published before anything ships.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-paper-soft">
            <span>© {new Date().getFullYear()} Plant Bionix LLP</span>
            <a href="/privacy" className="underline hover:text-rose">
              Privacy Policy
            </a>
            <a href="/terms" className="underline hover:text-rose">
              Terms of Use
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
