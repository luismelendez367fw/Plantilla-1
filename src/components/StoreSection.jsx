import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function StoreSection() {
  const { heading, subheading, items } = siteConfig.store;

  return (
    <section id="store" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-carbon/70 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((product, index) => (
            <article
              key={index}
              className="rounded-2xl overflow-hidden card-surface hover:border-crimson/40 transition-colors"
            >
              {product.image ? (
                <div className="relative h-48 bg-ivory/60">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
              ) : (
                <div
                  className={`h-48 bg-gradient-to-br ${product.imageGradient}`}
                  aria-hidden="true"
                />
              )}
              <div className="p-6">
                <h3 className="font-display text-xl text-carbon mb-2">
                  {product.name}
                </h3>
                <p className="font-serif text-carbon/75 text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-teal-mid font-medium mb-4">{product.price}</p>
                <a
                  href={product.ctaUrl}
                  className="inline-flex px-5 py-2 text-sm font-medium border border-teal-mid text-carbon rounded-full hover:bg-teal-mid/15 transition-colors"
                  {...(product.ctaUrl.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {product.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
