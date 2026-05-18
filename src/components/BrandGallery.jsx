import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function BrandGallery() {
  const { items } = siteConfig.brandGallery;

  return (
    <section
      id="galeria"
      className="py-16 md:py-20 px-6"
      aria-label="Galería visual"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {items.map((item) => (
            <div
              key={item.src}
              className="brand-gallery-card group relative flex min-h-[16rem] sm:min-h-[18rem] items-center justify-center overflow-hidden rounded-2xl border border-carbon/10 bg-ivory/40 p-3 shadow-[0_8px_28px_rgba(35,31,32,0.1)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={480}
                height={600}
                sizes="(max-width: 640px) 100vw, 33vw"
                className="h-auto max-h-[28rem] w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
