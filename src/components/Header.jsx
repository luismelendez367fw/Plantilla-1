"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { name } = siteConfig;
  const { links, ctaLabel, ctaHref, logoImage } = siteConfig.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerShell = scrolled
    ? "bg-carbon/90 backdrop-blur-md border-b border-teal-mid/20"
    : "bg-transparent";
  const navText = scrolled
    ? "text-sand hover:text-ivory"
    : "text-carbon/80 hover:text-carbon drop-shadow-sm";
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerShell}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <a href="#hero" className="shrink-0 block">
          <Image
            src={logoImage}
            alt={name}
            width={280}
            height={96}
            priority
            className="header-logo h-18 sm:h-20 w-auto"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors ${navText}`}
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
            className={`lg:hidden p-2 transition-colors ${navText}`}
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
        <ul
          className={`lg:hidden border-b px-6 pb-4 space-y-3 ${
            scrolled
              ? "bg-carbon border-teal-mid/20"
              : "bg-ivory/95 backdrop-blur-md border-carbon/10 shadow-lg"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block text-sm transition-colors ${navText}`}
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
