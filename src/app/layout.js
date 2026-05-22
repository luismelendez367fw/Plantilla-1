import "./globals.css";
import { siteConfig } from "@/config/site";

// Fuentes locales: Argentum Sans y Cormorant Unicase (public/fonts, ver globals.css).
export const metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased bg-parchment text-carbon">
        {children}
      </body>
    </html>
  );
}
