"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import Mandala from "@/components/brand/Mandala";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { name } = siteConfig;
  const { links, ctaLabel, ctaHref } = siteConfig.nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-carbon/85 backdrop-blur-md border-b border-teal-mid/20">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-ivory shrink-0"
        >
          <Mandala className="w-8 h-8 text-teal-mid" />
          <span className="font-display text-lg font-semibold tracking-wide hidden sm:inline">
            {name}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-sand hover:text-ivory transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="hidden sm:inline-flex px-5 py-2 text-sm font-medium bg-crimson text-ivory rounded-full hover:bg-orange transition-colors"
          >
            {ctaLabel}
          </a>
          <button
            className="lg:hidden p-2 text-sand hover:text-ivory"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="lg:hidden bg-carbon border-b border-teal-mid/20 px-6 pb-4 space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm text-sand hover:text-ivory transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={ctaHref}
              className="inline-flex mt-2 px-5 py-2 text-sm font-medium bg-crimson text-ivory rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              {ctaLabel}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
