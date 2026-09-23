"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export function WaitlistForm({
  enabled,
  compact = false,
}: {
  enabled: boolean;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");

  if (!enabled) {
    return (
      <a
        href="mailto:hello@plantbionix.com?subject=Waitlist"
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
        email: data.get("email"),
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
      <p className="display text-2xl text-rose-deep">
        You&rsquo;re on the list. We&rsquo;ll write when the first pouches are
        filled.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="flex-1 rounded-full border-2 border-line bg-white px-5 py-3.5 text-ink placeholder:text-ink-soft/60 outline-none focus:border-rose"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-rose px-7 py-3.5 font-semibold text-white transition-colors hover:bg-rose-deep disabled:opacity-60"
        >
          {status === "sending" ? "Adding…" : "Join the waitlist"}
        </button>
      </div>
      {!compact && (
        <label className="mt-3 block text-sm text-ink-soft">
          What brings you here?
          <select
            name="segment"
            defaultValue=""
            className="mt-1.5 w-full rounded-full border-2 border-line bg-white px-5 py-3 text-ink outline-none focus:border-rose"
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="diaspora">I miss this from home</option>
            <option value="wellness">Curious, never tried it</option>
            <option value="horeca">I run a café, resort or restaurant</option>
            <option value="other">Something else</option>
          </select>
        </label>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-rose-deep">
          That didn&rsquo;t go through. Try again, or write to{" "}
          <a className="underline" href="mailto:hello@plantbionix.com">
            hello@plantbionix.com
          </a>
          .
        </p>
      )}
    </form>
  );
}

export default WaitlistForm;
