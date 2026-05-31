import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { serviceSlug, whatsappScheduleUrl } from "@/components/whatsappUrl";
import ServicesTrustBlock from "@/components/ServicesTrustBlock";

export const metadata = {
  title: `Servicios | ${siteConfig.name}`,
  description:
    "Terapias individuales, talleres grupales y cursos online. Descripción, inversión y contacto por WhatsApp.",
};

function ServiceOption({ option, scheduleCta }) {
  return (
    <article className="rounded-xl border border-teal-mid/20 bg-parchment/60 p-6">
      <h3 className="font-sans text-lg font-semibold text-carbon mb-3 normal-case">
        {option.title}
      </h3>
      <p className="font-serif text-carbon/80 text-sm leading-relaxed mb-4">
        {option.description}
      </p>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <p className="font-sans text-xl font-semibold text-crimson">
          {option.price}
          <span className="text-sm font-normal text-carbon/60"> MXN</span>
        </p>
        {option.duration ? (
          <p className="text-sm text-teal-mid font-medium">
            · {option.duration}
          </p>
        ) : null}
      </div>
      {option.variants?.length ? (
        <div className="mb-4 pl-4 border-l-2 border-teal-mid/30">
          <p className="text-xs uppercase tracking-widest text-teal-mid mb-2">
            Variantes
          </p>
          <ul className="space-y-1 text-sm font-serif text-carbon/75">
            {option.variants.map((v) => (
              <li key={v.name}>
                {v.name} — {v.price} MXN
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <a
        href={whatsappScheduleUrl(option.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex py-2.5 px-6 text-sm"
      >
        {scheduleCta}
      </a>
    </article>
  );
}

export default function ServiciosPage() {
  const { heading, subheading, iconImage, scheduleCta, items } =
    siteConfig.features;

  return (
    <div className="min-h-screen bg-parchment text-carbon">
      <header className="border-b border-carbon/10 bg-ivory/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/#features"
            className="text-sm font-medium text-teal-mid hover:text-crimson transition-colors"
          >
            ← Volver al sitio
          </Link>
          <span className="font-display text-lg text-carbon tracking-wide">
            {siteConfig.name}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-4 tracking-wide">
            {heading}
          </h1>
          <p className="font-serif text-lg text-carbon/70">{subheading}</p>
        </div>

        <ul className="space-y-8">
          {items.map((service) => {
            const id = serviceSlug(service.title);
            const hasOptions = service.options?.length > 0;

            return (
              <li
                key={id}
                id={id}
                className="scroll-mt-24 rounded-2xl overflow-hidden card-surface"
              >
                <div className="card-accent-top" aria-hidden="true" />
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    {iconImage ? (
                      <Image
                        src={iconImage}
                        alt=""
                        width={40}
                        height={40}
                        className="h-10 w-10 shrink-0 object-contain brightness-0 opacity-85"
                      />
                    ) : null}
                    <h2 className="font-sans text-2xl font-semibold text-carbon normal-case">
                      {service.title}
                    </h2>
                  </div>

                  <p className="font-serif text-carbon/80 leading-relaxed mb-6">
                    {service.detailedDescription || service.description}
                  </p>

                  {hasOptions && service.title === "Terapias Individuales" ? (
                    <div className="mb-8">
                      <ServicesTrustBlock variant="light" />
                    </div>
                  ) : null}

                  {hasOptions ? (
                    <div className="space-y-5">
                      {service.options.map((option) => (
                        <ServiceOption
                          key={option.title}
                          option={option}
                          scheduleCta={scheduleCta}
                        />
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="rounded-xl bg-parchment border border-teal-mid/25 px-5 py-4 mb-6">
                        <p className="text-xs uppercase tracking-widest text-teal-mid mb-1">
                          Inversión
                        </p>
                        <p className="font-sans text-2xl font-semibold text-carbon">
                          {service.price}
                          {service.period ? (
                            <span className="text-base font-normal text-carbon/60">
                              {service.period}
                            </span>
                          ) : null}
                        </p>
                      </div>
                      <a
                        href={whatsappScheduleUrl(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex py-3.5 px-8"
                      >
                        {scheduleCta}
                      </a>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
