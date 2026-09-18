# Plant Bionix

Marketing site for Plant Bionix — functional water from Kerala. Next.js App Router, Tailwind v4.

This is the **new** site. The existing coming-soon site lives in `plantbionix-coming-soon` and stays untouched so the domain can be pointed back to it at any time.

## Local development

```bash
npm install
npm run dev
```

## Waitlist

The waitlist form posts to `/api/waitlist`, which forwards to whatever endpoint is set in `WAITLIST_ENDPOINT` (a Formspree, Loops, ConvertKit or similar URL that accepts `{ email, source }` as JSON).

If `WAITLIST_ENDPOINT` is unset, the form is replaced with a `mailto:` button — so the page never shows visitors a broken form.

```
WAITLIST_ENDPOINT=https://...
```

Set it in Vercel under Project → Settings → Environment Variables.

## Product images

`public/products/*.jpg` are cropped from concept mockup screenshots. The packs in them read "pink water", which predates the Plant Bionix naming decision — they are placeholders until real pack photography exists.

## Copy constraints

No health claims anywhere on this site. The antioxidant research on these woods is cell/animal only, the menopausal blood-sugar study referenced in early research was never verified, and Caesalpinia sappan's FSSAI status is still unresolved. Traditional-use framing only. Pregnancy caution for pathimugham and the daily ceiling for karingali both stay on the page.
