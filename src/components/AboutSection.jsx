import { siteConfig } from "@/config/site";
import ChevronDivider from "@/components/brand/ChevronDivider";

export default function AboutSection() {
  const { heading, subheading, paragraphs } = siteConfig.about;

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <ChevronDivider className="text-teal-mid mb-8" />
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-3 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-teal-mid">{subheading}</p>
        </div>
        <div className="space-y-6 font-serif text-sand text-lg leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
