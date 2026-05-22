import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function EventsSection() {
  const { heading, subheading, backgroundImage, items } = siteConfig.events;

  return (
    <section id="events" className="relative overflow-hidden py-20 px-6">
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
      <div className="max-w-4xl mx-auto relative z-10">
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
        <div className="space-y-6">
          {items.map((event, index) => (
            <article
              key={index}
              className="rounded-2xl overflow-hidden card-surface hover:border-crimson/40 transition-colors"
            >
              <div className="card-accent-top" aria-hidden="true" />
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="shrink-0 w-full sm:w-28 text-center">
                  {event.dateRange ? (
                    <>
                      <p className="font-sans text-base sm:text-lg font-bold text-crimson leading-snug normal-case">
                        {event.dateRange}
                      </p>
                      {event.time ? (
                        <span className="mt-1 block text-sm font-medium text-teal-mid">
                          {event.time}
                        </span>
                      ) : null}
                    </>
                  ) : (
                    <>
                      <span className="font-sans text-4xl font-bold text-crimson block leading-none normal-case">
                        {event.day}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-teal-mid">
                        {event.month}
                      </span>
                    </>
                  )}
                </div>
                <div className="flex-1 border-t sm:border-t-0 sm:border-l border-teal-mid/30 pt-4 sm:pt-0 sm:pl-6">
                  <h3 className="font-sans text-xl font-semibold text-carbon mb-2 normal-case">
                    {event.title}
                  </h3>
                  <p className="font-serif text-carbon/75 mb-4">
                    {event.description}
                  </p>
                  <a
                    href={event.ctaUrl}
                    className="inline-flex px-5 py-2 text-sm font-medium bg-crimson text-ivory rounded-full hover:bg-orange transition-colors"
                    {...(event.ctaUrl.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {event.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
