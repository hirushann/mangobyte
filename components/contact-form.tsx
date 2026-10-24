"use client";

import { useState } from "react";
import { services, site } from "@/lib/content";

const budgets = ["Under LKR 150k", "LKR 150k – 500k", "LKR 500k+", "Not sure yet"];

// No backend yet: the form composes an email in the visitor's mail app.
export function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(service: string) {
    setSelected((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "-"}`,
      `Interested in: ${selected.join(", ") || "-"}`,
      `Budget: ${data.get("budget") || "-"}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New project enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-leaf focus:ring-2 focus:ring-mango/50";

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-paper-deep p-6 sm:p-10">
      <fieldset>
        <legend className="font-display text-lg font-semibold">What can we help with?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {services.map((s) => {
            const on = selected.includes(s.title);
            return (
              <button
                key={s.title}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s.title)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  on ? "border-leaf bg-leaf text-paper" : "border-line bg-paper hover:border-ink/40"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-medium">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="text-sm font-medium">
          Company <span className="text-muted">(optional)</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="text-sm font-medium">
          Budget
          <select name="budget" defaultValue="" className={field}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium">
        Project details
        <textarea
          name="message"
          required
          rows={5}
          placeholder="A few lines about your business and what you’d like to build."
          className={field}
        />
      </label>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-6 py-4 font-semibold text-paper transition-colors hover:bg-leaf-soft sm:w-auto"
      >
        Send enquiry <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
