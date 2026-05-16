import { siteConfig } from "@/config/site";
import LeafIcon from "@/components/brand/LeafIcon";
import ChevronDivider from "@/components/brand/ChevronDivider";

const iconMap = {
  leaf: <LeafIcon className="w-6 h-6" />,
};

export default function Features() {
  const { heading, subheading, items } = siteConfig.features;

  return (
    <section id="features" className="py-20 px-6 bg-teal-dark grain">
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12">
          <ChevronDivider className="text-teal-mid mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-sand max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((feature, index) => (
            <div
              key={index}
              className="bg-carbon/60 backdrop-blur-sm p-8 rounded-2xl border border-teal-mid/30 hover:border-crimson/60 hover:shadow-[0_0_24px_rgba(214,24,62,0.15)] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-mid/20 text-teal-mid rounded-xl flex items-center justify-center mb-5">
                {iconMap[feature.icon] ?? iconMap.leaf}
              </div>
              <h3 className="font-display text-xl font-semibold text-ivory mb-3">
                {feature.title}
              </h3>
              <p className="text-sand leading-relaxed font-serif">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
