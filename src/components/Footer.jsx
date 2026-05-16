import { siteConfig } from "@/config/site";
import Monogram from "@/components/brand/Monogram";

export default function Footer() {
  const { name } = siteConfig;
  const { tagline, links, copyright, social } = siteConfig.footer;
  const { email, phone, address } = siteConfig.contact;

  return (
    <footer className="relative border-t border-transparent pt-16 pb-12 px-6 overflow-hidden">
      <div className="section-gradient-line mb-12 max-w-6xl mx-auto" />
      <Monogram className="absolute bottom-8 right-8 w-40 h-16 text-ivory pointer-events-none hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="font-display text-xl font-semibold text-ivory tracking-wide">
              {name}
            </span>
            <p className="font-serif italic text-sand mt-2">{tagline}</p>
            {address ? (
              <p className="text-sm text-sand mt-3">{address}</p>
            ) : null}
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-sand hover:text-ivory transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:text-right text-sm text-sand space-y-1">
            {email ? (
              <a href={`mailto:${email}`} className="block hover:text-ivory">
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

        <p className="text-sm text-sand/70 text-center">
          &copy; {new Date().getFullYear()} {name}. {copyright}
        </p>
      </div>
    </footer>
  );
}
