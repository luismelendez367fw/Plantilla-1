import { siteConfig } from "@/config/site";
import RadialSun from "@/components/brand/RadialSun";

export default function TestimonialsSection() {
  const { heading, subheading, items } = siteConfig.testimonials;

  return (
    <section id="testimonials" className="relative py-20 px-6 overflow-hidden">
      <RadialSun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-teal-mid pointer-events-none opacity-15" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-carbon/70">{subheading}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <blockquote
              key={index}
              className="p-8 rounded-2xl card-surface"
            >
              <p className="font-serif text-carbon/80 leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer>
                <cite className="font-display text-carbon not-italic font-semibold">
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
