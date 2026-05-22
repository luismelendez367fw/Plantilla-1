import Image from "next/image";
import { siteConfig } from "@/config/site";
import RadialSun from "@/components/brand/RadialSun";

export default function TestimonialsSection() {
  const { heading, subheading, backgroundImage, items } =
    siteConfig.testimonials;

  return (
    <section id="testimonials" className="relative py-20 px-6 overflow-hidden">
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
      <RadialSun className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-teal-mid pointer-events-none opacity-15 z-[2]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold mb-4 tracking-wide ${
              backgroundImage ? "text-ivory" : "text-carbon"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`font-serif text-lg ${
              backgroundImage ? "text-ivory/85" : "text-carbon/70"
            }`}
          >
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <blockquote key={index} className="p-8 rounded-2xl card-surface">
              <p className="font-serif text-carbon/80 leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <footer>
                <cite className="font-sans text-carbon not-italic font-semibold normal-case">
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
