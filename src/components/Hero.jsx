import { siteConfig } from "@/config/site";
import Mandala from "@/components/brand/Mandala";

export default function Hero() {
  const {
    badge,
    title,
    titleHighlight,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    ctaPrimaryUrl,
    ctaSecondaryUrl,
  } = siteConfig.hero;

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 px-6 overflow-hidden hero-cosmic-bg"
    >
      <motionGlow className="-top-32 left-1/4 bg-crimson/20" />
      <motionGlow className="-top-20 right-1/4 bg-orange/15" />
      <motionGlow className="bottom-0 left-1/2 -translate-x-1/2 bg-teal-mid/10" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <Mandala className="w-14 h-14 mx-auto mb-6 text-teal-mid" />
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-sand border border-teal-mid/40 rounded-full">
          {badge}
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-ivory leading-tight mb-2 tracking-wide">
          {title}
        </h1>
        <p className="font-display text-4xl md:text-6xl gradient-cosmic-text font-semibold mb-8 tracking-wide">
          {titleHighlight}
        </p>
        <p className="font-serif text-lg md:text-xl text-sand max-w-2xl mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={ctaPrimaryUrl} className="btn-primary w-full sm:w-auto text-center">
            {ctaPrimary}
          </a>
          <a
            href={ctaSecondaryUrl}
            className="btn-secondary w-full sm:w-auto text-center"
          >
            {ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

function motionGlow({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute w-96 h-96 rounded-full blur-3xl ${className}`}
      aria-hidden="true"
    />
  );
}
