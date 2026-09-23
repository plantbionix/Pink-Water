# Plant Bionix

Marketing site for Plant Bionix — functional water. Next.js App Router, Tailwind v4.

This is the **new** site. The existing coming-soon site lives in `plantbionix-coming-soon` and stays untouched so the domain can be pointed back to it at any time.

## Local development

```bash
npm install
npm run dev
```

## Waitlist

The waitlist form collects name, email, mobile, address (with landmark, city, pincode) and submits **directly from the browser** to [Web3Forms](https://web3forms.com), which emails it to **sales@plantbionix.com** — no SMTP setup, no database, no server route.

It submits client-side, not through a Next.js API route, because Web3Forms' free plan rejects server-to-server calls ("Use our API in client side or contact support with server IP address (Pro plan is required)"). This means the access key ends up in the client JS bundle — that's expected for this service (same model as a Stripe publishable key or a reCAPTCHA site key), not a leaked secret.

Setup (one-time, ~2 minutes):
1. Go to [web3forms.com](https://web3forms.com), enter `sales@plantbionix.com`, and get an access key emailed instantly (no password, no signup).
2. Set it in Vercel under Project → Settings → Environment Variables — **must use the `NEXT_PUBLIC_` prefix** so Next.js inlines it into the client bundle:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...
```

If `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is unset, the form is replaced with a `mailto:sales@plantbionix.com` button — so the page never shows visitors a broken form.

## Product images

`public/products/*.jpg` are cropped from concept mockup screenshots. The packs in them read "pink water", which predates the Plant Bionix naming decision — they are placeholders until real pack photography exists.

## Copy constraints

No health claims anywhere on this site. The antioxidant research on these woods is cell/animal only, the menopausal blood-sugar study referenced in early research was never verified, and Caesalpinia sappan's FSSAI status is still unresolved. Traditional-use framing only. Pregnancy caution for pathimugham and the daily ceiling for karingali both stay on the page.
