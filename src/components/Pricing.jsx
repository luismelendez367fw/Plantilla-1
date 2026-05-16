import { siteConfig } from "@/config/site";
import PaymentButton from "@/components/PaymentButton";
import ChevronDivider from "@/components/brand/ChevronDivider";

function priceToAmount(priceStr) {
  const n = parseFloat(String(priceStr).replace(/[^\d.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function planCtaHref(plan) {
  const { enabled, paypalMeUsername, currency } = siteConfig.payment;
  if (!enabled || !paypalMeUsername) return "#contact";

  const amount = priceToAmount(plan.price);
  if (amount > 0) {
    return `https://www.paypal.me/${paypalMeUsername}/${amount}${currency}`;
  }
  return `https://www.paypal.me/${paypalMeUsername}`;
}

export default function Pricing() {
  const { heading, subheading, plans, priceLabel } = siteConfig.pricing;
  const showPaypalCtas =
    siteConfig.payment.enabled && siteConfig.payment.paypalMeUsername;

  return (
    <section id="pricing" className="py-20 px-6 grain">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ChevronDivider className="text-teal-mid mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-sand max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const ctaHref = planCtaHref(plan);
            const isExternalPaypal = ctaHref.startsWith("http");
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlighted
                    ? "border-orange bg-teal-dark text-ivory shadow-[0_0_32px_rgba(233,108,26,0.2)] md:scale-105"
                    : "border-teal-mid/30 bg-carbon/80 text-ivory"
                }`}
              >
                <h3 className="font-display text-lg font-semibold mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm mb-6 font-serif text-sand">
                  {plan.description}
                </p>
                <p className="text-xs uppercase tracking-widest text-teal-mid mb-1">
                  {priceLabel}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-display font-semibold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-sand">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-serif">
                      <svg
                        className="w-5 h-5 shrink-0 text-teal-mid"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {showPaypalCtas ? (
                  <PaymentButton
                    amount={priceToAmount(plan.price)}
                    className="w-full py-3 justify-center"
                  />
                ) : (
                  <a
                    href={ctaHref}
                    target={isExternalPaypal ? "_blank" : undefined}
                    rel={isExternalPaypal ? "noopener noreferrer" : undefined}
                    className="block w-full py-3 text-center rounded-full font-medium bg-crimson text-ivory hover:bg-orange transition-colors"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
