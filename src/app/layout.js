import {
  Cormorant_Garamond,
  Cormorant_Unicase,
  DM_Sans,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

// Argentum Sans no esta en Google Fonts; DM Sans como sustituto para UI y botones.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantUnicase = Cormorant_Unicase({
  variable: "--font-cormorant-unicase",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${cormorantUnicase.variable} ${cormorantGaramond.variable} font-sans antialiased bg-parchment text-carbon`}
      >
        {children}
      </body>
    </html>
  );
}
