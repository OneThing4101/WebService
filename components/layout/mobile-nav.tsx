"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { mainNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white text-ink shadow-[0_14px_28px_rgba(14,34,64,0.08)]"
        aria-label="Цэс нээх"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "pointer-events-none absolute inset-x-4 top-[84px] rounded-[2rem] border border-border bg-white p-5 opacity-0 shadow-[0_25px_60px_rgba(14,34,64,0.12)] transition-all duration-200",
          open && "pointer-events-auto opacity-100",
        )}
      >
        <nav className="flex flex-col gap-2">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-panel"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-ink"
        >
          <Phone className="h-4 w-4" />
          Холбоо барих
        </Link>
      </div>
    </div>
  );
}
