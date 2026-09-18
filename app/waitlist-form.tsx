"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "error";

export default function WaitlistForm({ enabled }: { enabled: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  if (!enabled) {
    return (
      <a
        href="mailto:hello@plantbionix.com?subject=Waitlist"
        className="inline-block rounded-full bg-ink px-6 py-3 font-medium text-bone transition-colors hover:bg-rose-deep"
      >
        Email us to join the waitlist
      </a>
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("sending");

    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
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
      <p className="text-rose-deep display text-2xl">
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
          className="flex-1 rounded-full border border-line bg-white px-5 py-3 text-ink placeholder:text-ink-soft/60 outline-none focus:border-rose"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-ink px-6 py-3 font-medium text-bone transition-colors hover:bg-rose-deep disabled:opacity-60"
        >
          {status === "sending" ? "Adding…" : "Join the waitlist"}
        </button>
      </div>
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
