import Image from "next/image";
import { siteConfig } from "@/config/site";
import Monogram from "@/components/brand/Monogram";

export default function Footer({ className = "" }) {
  const { name } = siteConfig;
  const { tagline, logoImage, links, copyright, social } = siteConfig.footer;
  const { email, phone, address } = siteConfig.contact;

  return (
    <footer
      className={`relative pt-16 pb-12 px-6 overflow-hidden ${className}`.trim()}
    >
      <div className="section-gradient-line mb-12 max-w-6xl mx-auto" />
      <Monogram className="absolute bottom-8 right-8 w-40 h-16 text-carbon/15 pointer-events-none hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src={logoImage}
              alt={`${name} — ${tagline}`}
              width={200}
              height={130}
              className="footer-logo w-36 sm:w-40 h-auto"
            />
            {address ? (
              <p className="text-sm text-carbon/70 mt-4">{address}</p>
            ) : null}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-carbon/70 hover:text-carbon transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:text-right text-sm text-carbon/70 space-y-1">
            {email ? (
              <a href={`mailto:${email}`} className="block hover:text-carbon">
                {email}
              </a>
            ) : null}
            {phone ? <p>{phone}</p> : null}
            {social?.length ? (
              <div className="flex gap-4 md:justify-end mt-3">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="hover:text-teal-mid transition-colors"
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <p className="text-sm text-carbon/60 text-center">
          &copy; {new Date().getFullYear()} {name}. {copyright}
        </p>
      </div>
    </footer>
  );
}
