export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div>
            <span className="display text-lg">PLANT BIONIX</span>
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
          PLANT BIONIX products are food, not medicine. Nothing here is a
          health claim, and nothing here is intended to diagnose, treat, cure
          or prevent any condition. References to traditional use describe
          how these woods have historically been used in Kerala households.
          Not an outcome you should expect.
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
    </footer>
  );
}
