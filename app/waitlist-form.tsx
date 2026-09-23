"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

const FALLBACK_MAILTO = "mailto:sales@plantbionix.com?subject=Waitlist";

export function WaitlistForm({
  enabled,
  compact = false,
}: {
  enabled: boolean;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");

  if (compact) {
    return (
      <a
        href={enabled ? "#waitlist" : FALLBACK_MAILTO}
        className="inline-block rounded-full bg-rose px-7 py-3.5 font-semibold text-white transition-colors hover:bg-rose-deep"
      >
        Join the waitlist
      </a>
    );
  }

  if (!enabled) {
    return (
      <a
        href={FALLBACK_MAILTO}
        className="inline-block rounded-full bg-rose px-7 py-3.5 font-semibold text-white transition-colors hover:bg-rose-deep"
      >
        Email us to join the waitlist
      </a>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        mobile: data.get("mobile"),
        address: data.get("address"),
        landmark: data.get("landmark"),
        city: data.get("city"),
        pincode: data.get("pincode"),
        segment: data.get("segment"),
      }),
    });

    if (res.ok) {
      form.reset();
      setStatus("done");
    } else {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-white px-8 py-10 text-center shadow-sm">
        <p className="display text-3xl text-rose-deep">You&rsquo;re on the list.</p>
        <p className="mt-3 max-w-sm mx-auto leading-relaxed text-ink-soft">
          Someone from Plant Bionix will reach out to you personally before the
          first pouches ship. No spam, no forwarding your number — just one
          note when it&rsquo;s ready.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-2xl border-2 border-line bg-white px-5 py-3.5 text-ink placeholder:text-ink-soft/60 outline-none focus:border-rose";
  const labelClass = "eyebrow block text-ink-soft mb-1.5";

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile number
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            inputMode="numeric"
            pattern="[0-9+ ]{10,15}"
            placeholder="98765 43210"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="pincode" className={labelClass}>
            Pincode
          </label>
          <input
            id="pincode"
            name="pincode"
            type="text"
            required
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            placeholder="682001"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="address" className={labelClass}>
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            placeholder="House / flat, street, area"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="landmark" className={labelClass}>
            Landmark
          </label>
          <input
            id="landmark"
            name="landmark"
            type="text"
            placeholder="Nearby landmark"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            placeholder="Your city"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="segment" className={labelClass}>
            What brings you here?
          </label>
          <select
            id="segment"
            name="segment"
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="diaspora">I miss this from home</option>
            <option value="wellness">Curious, never tried it</option>
            <option value="horeca">I run a café, resort or restaurant</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-rose px-7 py-3.5 font-semibold text-white transition-colors hover:bg-rose-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Join the waitlist"}
      </button>

      <p className="mt-3 text-xs text-ink-soft">
        Your address is only used to plan delivery for the first run — never
        shared or sold.
      </p>

      {status === "error" && (
        <p className="mt-3 text-sm text-rose-deep">
          That didn&rsquo;t go through. Try again, or write to{" "}
          <a className="underline" href={FALLBACK_MAILTO}>
            sales@plantbionix.com
          </a>
          .
        </p>
      )}
    </form>
  );
}

export default WaitlistForm;
