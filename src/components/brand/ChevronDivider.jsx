import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function ChevronDivider({ className = "", tone = "light" }) {
  const { dividerImage } = siteConfig.brand;
  const sizeClass =
    "mx-auto h-[8.75rem] w-full max-w-2xl sm:max-w-3xl min-h-[5rem]";

  if (tone === "cobalt") {
    return (
      <div
        role="img"
        aria-hidden
        className={`brand-divider-cobalt ${sizeClass} ${className}`.trim()}
        style={{
          backgroundColor: "var(--color-cobalt-black)",
          maskImage: `url(${dividerImage})`,
          WebkitMaskImage: `url(${dividerImage})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    );
  }

  return (
    <Image
      src={dividerImage}
      alt=""
      width={1200}
      height={280}
      className={`brand-divider ${sizeClass} object-contain ${className}`.trim()}
    />
  );
}
