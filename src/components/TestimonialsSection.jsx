import { siteConfig } from "@/config/site";
import RadialSun from "@/components/brand/RadialSun";

export default function TestimonialsSection() {
  const { heading, subheading, items } = siteConfig.testimonials;

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-teal-dark/60 to-carbon"
    >
      <RadialSun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-ivory pointer-events-none opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-sand">{subheading}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <blockquote
              key={index}
              className="p-8 rounded-2xl border border-teal-mid/30 bg-carbon/70 backdrop-blur-sm"
            >
              <p className="font-serif text-sand leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer>
                <cite className="font-display text-ivory not-italic font-semibold">
                  {item.name}
                </cite>
                <p className="text-sm text-teal-mid mt-1">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
