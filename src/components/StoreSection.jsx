import { siteConfig } from "@/config/site";

export default function StoreSection() {
  const { heading, subheading, items } = siteConfig.store;

  return (
    <section id="store" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-sand max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((product, index) => (
            <article
              key={index}
              className="rounded-2xl overflow-hidden border border-teal-mid/30 bg-carbon/80 hover:border-crimson/40 transition-colors"
            >
              <div
                className={`h-48 bg-gradient-to-br ${product.imageGradient}`}
                aria-hidden="true"
              />
              <div className="p-6">
                <h3 className="font-display text-xl text-ivory mb-2">
                  {product.name}
                </h3>
                <p className="font-serif text-sand text-sm mb-3 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-teal-mid font-medium mb-4">{product.price}</p>
                <a
                  href={product.ctaUrl}
                  className="inline-flex px-5 py-2 text-sm font-medium border border-teal-mid text-ivory rounded-full hover:bg-teal-dark/50 transition-colors"
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
