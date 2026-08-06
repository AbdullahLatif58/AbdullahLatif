"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      setClock(
        new Date()
          .toLocaleString("en-US", {
            weekday: "short",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
          .toUpperCase(),
      );
    };

    tick();

    const id = window.setInterval(tick, 30000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-5 py-5 md:px-10">
          <Link
            href="/"
            className="font-display text-background text-sm font-black tracking-tight uppercase"
          >
            DevBY{profile.first}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/#about"
              className="label-mono link-underline text-background/80"
            >
              About
            </a>

            <Link
              href="/projects"
              className="label-mono link-underline text-background/80"
            >
              Projects
            </Link>

            <a
              href="/#contact"
              className="label-mono link-underline text-background/80"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <span className="label-mono hidden text-background/60 sm:inline">
              {clock}
            </span>

            <button
              onClick={() => setOpen(true)}
              className="flex h-8 w-8 flex-col justify-center gap-1.5 md:hidden"
              aria-label="Open Menu"
            >
              <span className="bg-background h-px w-full rounded-full" />
              <span className="bg-background h-px w-full rounded-full" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-neutral-950 text-white transition-all duration-500 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-6 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-6 pb-8">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <span className="font-display text-lg font-bold uppercase">
              Dev/{profile.first}
            </span>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
            >
              Close
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-12 flex flex-1 flex-col justify-center gap-8">
            <a
              href="/#about"
              onClick={() => setOpen(false)}
              className="text-5xl font-black tracking-tight transition-opacity hover:opacity-60"
            >
              About
            </a>

            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="text-5xl font-black tracking-tight transition-opacity hover:opacity-60"
            >
              Projects
            </Link>

            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="text-5xl font-black tracking-tight transition-opacity hover:opacity-60"
            >
              Contact
            </a>
          </nav>

          {/* Footer */}
          <div className="border-t border-white/10 pt-6">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/40">
              Contact
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="block text-lg transition-opacity hover:opacity-70"
            >
              {profile.email}
            </a>

            <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/35">
              <span>{clock}</span>
              <span>Available Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}