import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function ChevronDivider({ className = "" }) {
  const { dividerImage } = siteConfig.brand;

  return (
    <Image
      src={dividerImage}
      alt=""
      width={1200}
      height={280}
      className={`brand-divider mx-auto h-[8.75rem] w-auto max-w-2xl object-contain sm:max-w-3xl ${className}`.trim()}
    />
  );
}
