export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="border-b border-line bg-rose-tint">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-14 text-center">
          <p className="display text-2xl md:text-3xl">
            Want to be first in line?
          </p>
          <a
            href="/join"
            className="eyebrow inline-block rounded-full bg-rose px-7 py-3.5 text-white transition-colors hover:bg-rose-deep"
          >
            Join the waitlist
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="display text-lg">PLANT BIONIX</span>
            <p className="mt-2 text-sm text-ink-soft">India</p>
            <a
              href="mailto:sales@plantbionix.com"
              className="mt-2 inline-block text-sm text-ink-soft underline transition-colors hover:text-rose-deep"
            >
              sales@plantbionix.com
            </a>
          </div>
          <div>
            <p className="text-xs leading-relaxed text-ink-soft">
              PLANT BIONIX products are food, not medicine. Nothing here is a
              health claim, and nothing here is intended to diagnose, treat,
              cure or prevent any condition. References to traditional use
              describe how these woods have historically been used in Kerala
              households. Not an outcome you should expect.
            </p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
              <span>© {new Date().getFullYear()} PLANT BIONIX LLP</span>
              <a href="/privacy" className="underline hover:text-rose-deep">
                Privacy Policy
              </a>
              <a href="/terms" className="underline hover:text-rose-deep">
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
