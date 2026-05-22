import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { name, tagline } = siteConfig;
  const {
    backgroundImage,
    brandingImage,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    ctaPrimaryUrl,
    ctaSecondaryUrl,
  } = siteConfig.hero;

  return (
    <section id="hero" className="relative overflow-hidden hero-encabezado">
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="hero-encabezado__vignette" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-10 md:pt-28 md:pb-14">
        <Image
          src={brandingImage}
          alt={`${name} — ${tagline}`}
          width={780}
          height={570}
          priority
          className="w-full max-w-[min(100%,33rem)] sm:max-w-[30rem] md:max-w-[36rem] h-auto drop-shadow-sm"
        />
      </div>

      <div className="relative z-10 px-6 pb-14 md:pb-16">
        <div className="max-w-2xl mx-auto hero-encabezado__cta-panel rounded-2xl overflow-hidden">
          <div className="card-accent-top" aria-hidden="true" />
          <div className="px-6 py-8 text-center">
          <p className="font-serif text-base md:text-lg text-ivory leading-relaxed mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaPrimaryUrl}
              className="btn-primary w-full sm:w-auto text-center shadow-md"
            >
              {ctaPrimary}
            </a>
            <a
              href={ctaSecondaryUrl}
              className="btn-secondary hero-encabezado__btn-secondary text-ivory w-full sm:w-auto text-center"
            >
              {ctaSecondary}
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
