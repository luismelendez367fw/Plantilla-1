import Image from "next/image";
import { siteConfig } from "@/config/site";
import ChevronDivider from "@/components/brand/ChevronDivider";

export default function AboutSection() {
  const { heading, subheading, image, paragraphs } = siteConfig.about;

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ChevronDivider className="mb-8" />
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-3 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-teal-dark">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-[minmax(0,17rem)_1fr] lg:grid-cols-[minmax(0,20rem)_1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          {image ? (
            <div className="mx-auto md:mx-0 w-full max-w-xs md:max-w-none">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-carbon/10 shadow-[0_8px_32px_rgba(35,31,32,0.12)]">
                <Image
                  src={image}
                  alt={heading}
                  fill
                  sizes="(max-width: 768px) 320px, 320px"
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
          ) : null}

          <div className="space-y-6 font-serif text-carbon/80 text-lg leading-relaxed md:pt-2">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === paragraphs.length - 1 ? "italic text-carbon/90" : undefined
                }
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
