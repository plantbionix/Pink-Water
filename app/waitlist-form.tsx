"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

const FALLBACK_MAILTO = "mailto:sales@plantbionix.com?subject=Waitlist";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const segmentLabel: Record<string, string> = {
  diaspora: "Misses this from home",
  wellness: "Curious, never tried it",
  horeca: "Runs a café, resort or restaurant",
  other: "Something else",
};

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
        className="inline-block rounded-full bg-rose px-8 py-4 font-medium text-void transition-colors hover:bg-rose-deep hover:text-paper"
      >
        Join the waitlist
      </a>
    );
  }

  if (!enabled) {
    return (
      <a
        href={FALLBACK_MAILTO}
        className="inline-block rounded-full bg-rose px-8 py-4 font-medium text-void transition-colors hover:bg-rose-deep hover:text-paper"
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

    const segment = String(data.get("segment") ?? "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Plant Bionix waitlist — ${data.get("name")}`,
          from_name: "Plant Bionix waitlist",
          replyto: data.get("email"),
          Name: data.get("name"),
          Email: data.get("email"),
          Mobile: data.get("mobile"),
          Address: data.get("address"),
          Landmark: data.get("landmark") || "—",
          City: data.get("city"),
          Pincode: data.get("pincode"),
          "Reason for joining": segmentLabel[segment] ?? "—",
        }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        form.reset();
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white/5 px-8 py-10 text-center backdrop-blur">
        <p className="display glow text-3xl text-rose">You&rsquo;re on the list.</p>
        <p className="mt-3 max-w-sm mx-auto leading-relaxed text-paper-soft">
          We&rsquo;ll reach out personally when it&rsquo;s time. No spam, no
          forwarding your number — just one note, when there&rsquo;s something
          to say.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-white/5 px-5 py-3.5 text-paper placeholder:text-paper-soft/40 outline-none transition-colors focus:border-rose focus:bg-white/[0.08]";
  const labelClass = "eyebrow block text-paper-soft mb-1.5";

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
            <option value="" disabled className="bg-void">
              Choose one
            </option>
            <option value="diaspora" className="bg-void">
              I miss this from home
            </option>
            <option value="wellness" className="bg-void">
              Curious, never tried it
            </option>
            <option value="horeca" className="bg-void">
              I run a café, resort or restaurant
            </option>
            <option value="other" className="bg-void">
              Something else
            </option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-rose px-8 py-4 font-medium text-void transition-colors hover:bg-rose-deep hover:text-paper disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Join the waitlist"}
      </button>

      <p className="mt-3 text-xs text-paper-soft">
        Your address is only used to plan delivery for the first run — never
        shared or sold.
      </p>

      {status === "error" && (
        <p className="mt-3 text-sm text-rose">
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
