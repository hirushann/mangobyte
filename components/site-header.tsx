"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";
import { Logo } from "./logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="MangoByte home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-leaf-soft"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-0.5 w-4 bg-ink transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-4 bg-ink transition-transform ${open ? "top-1.5 -rotate-45" : "top-2.5"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-line px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line/60 py-4 font-display text-2xl font-semibold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-leaf px-5 py-3.5 text-center font-semibold text-paper"
          >
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
