import { siteConfig } from "@/config/site";
import PaymentButton from "@/components/PaymentButton";

export default function Footer() {
  const { name } = siteConfig;
  const { tagline, links, copyright } = siteConfig.footer;
  const showPayment =
    siteConfig.payment.enabled && siteConfig.payment.paypalMeUsername;

  return (
    <footer className="border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-lg font-bold text-gray-900">{name}</span>
          <p className="text-sm text-gray-500 mt-1">{tagline}</p>
        </div>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {name}. {copyright}
        </p>
      </div>

      {showPayment ? (
        <div className="max-w-6xl mx-auto flex justify-center mt-8 pt-8 border-t border-gray-200">
          <PaymentButton />
        </div>
      ) : null}
    </footer>
  );
}
