import { siteConfig } from "@/config/site";
import PaymentButton from "@/components/PaymentButton";

export default function BookingSection() {
  const { heading, subheading, schedulingCta, schedulingUrl, depositNote } =
    siteConfig.booking;

  return (
    <section id="booking" className="py-20 px-6 bg-teal-dark grain">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4 tracking-wide">
          {heading}
        </h2>
        <p className="font-serif text-lg text-sand mb-8">{subheading}</p>
        <p className="text-sm text-teal-mid mb-6">{depositNote}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {schedulingUrl ? (
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              {schedulingCta}
            </a>
          ) : (
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              {schedulingCta}
            </a>
          )}
          <PaymentButton className="w-full sm:w-auto py-3.5 justify-center" />
        </div>
      </div>
    </section>
  );
}
