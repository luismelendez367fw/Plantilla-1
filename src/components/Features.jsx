import Image from "next/image";
import { siteConfig } from "@/config/site";
import ChevronDivider from "@/components/brand/ChevronDivider";

export default function Features() {
  const { heading, subheading, backgroundImage, iconImage, items } =
    siteConfig.features;

  return (
    <section id="features" className="relative overflow-hidden py-20 px-6">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-cobalt-black/40 z-[1]"
            aria-hidden="true"
          />
        </>
      ) : null}
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12">
          <ChevronDivider tone="cobalt" className="mb-8" />
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold mb-4 tracking-wide ${
              backgroundImage ? "text-ivory" : "text-carbon"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`font-serif text-lg max-w-2xl mx-auto ${
              backgroundImage ? "text-ivory/85" : "text-carbon/70"
            }`}
          >
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((feature, index) => (
            <div
              key={index}
              className="card-surface rounded-2xl overflow-hidden hover:border-crimson/40 hover:shadow-[0_4px_24px_rgba(214,24,62,0.12)] transition-all duration-300"
            >
              <div className="card-accent-top" aria-hidden="true" />
              <div className="p-8">
              {iconImage ? (
                <div className="mb-5 flex h-12 w-12 items-center justify-center">
                  <Image
                    src={iconImage}
                    alt=""
                    width={48}
                    height={48}
                    className="h-10 w-10 object-contain brightness-0 opacity-85"
                  />
                </div>
              ) : null}
              <h3 className="font-sans text-xl font-semibold text-carbon mb-3 normal-case">
                {feature.title}
              </h3>
              <p className="text-carbon/75 leading-relaxed font-serif">
                {feature.description}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
