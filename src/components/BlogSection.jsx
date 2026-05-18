import { siteConfig } from "@/config/site";

export default function BlogSection() {
  const { heading, subheading, items } = siteConfig.blog;

  return (
    <section id="blog" className="py-20 px-6">
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
          {items.map((post, index) => (
            <article
              key={index}
              className="group rounded-2xl card-surface overflow-hidden hover:border-crimson/40 transition-colors"
            >
              <div className="h-2 bg-gradient-to-r from-crimson via-orange to-teal-dark" />
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-teal-mid font-medium">
                  {post.category}
                </span>
                <h3 className="font-display text-xl text-carbon mt-3 mb-3 group-hover:text-orange transition-colors">
                  {post.title}
                </h3>
                <p className="font-serif text-carbon/75 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <a
                  href={post.url}
                  className="text-sm font-medium text-crimson hover:text-orange transition-colors"
                >
                  {post.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
