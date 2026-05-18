import Image from "next/image";
import { siteConfig } from "@/config/site";
import ChevronDivider from "@/components/brand/ChevronDivider";

export default function Features() {
  const { heading, subheading, iconImage, items } = siteConfig.features;

  return (
    <section id="features" className="py-20 px-6">
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12">
          <ChevronDivider className="mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-carbon/70 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((feature, index) => (
            <div
              key={index}
              className="card-surface p-8 rounded-2xl hover:border-crimson/40 hover:shadow-[0_4px_24px_rgba(214,24,62,0.12)] transition-all duration-300"
            >
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
              <h3 className="font-display text-xl font-semibold text-carbon mb-3">
                {feature.title}
              </h3>
              <p className="text-carbon/75 leading-relaxed font-serif">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
