import { siteConfig } from "@/config/site";

export default function EventsSection() {
  const { heading, subheading, items } = siteConfig.events;

  return (
    <section id="events" className="py-20 px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-carbon/70">{subheading}</p>
        </div>
        <div className="space-y-6">
          {items.map((event, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl card-surface hover:border-crimson/40 transition-colors"
            >
              <div className="shrink-0 text-center sm:text-left sm:w-24">
                <span className="font-display text-4xl font-bold text-crimson block leading-none">
                  {event.day}
                </span>
                <span className="text-xs uppercase tracking-widest text-teal-mid">
                  {event.month}
                </span>
              </div>
              <div className="flex-1 border-t sm:border-t-0 sm:border-l border-teal-mid/30 pt-4 sm:pt-0 sm:pl-6">
                <h3 className="font-display text-xl text-carbon mb-2">{event.title}</h3>
                <p className="font-serif text-carbon/75 mb-4">{event.description}</p>
                <a
                  href={event.ctaUrl}
                  className="inline-flex px-5 py-2 text-sm font-medium bg-crimson text-ivory rounded-full hover:bg-orange transition-colors"
                >
                  {event.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
