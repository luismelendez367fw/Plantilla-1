"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const TYPE_SPEED_MS = 38;
const IMAGE_DURATION_MS = 900;

function useInViewOnce(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}

export default function ServicesTrustBlock({ variant = "light" }) {
  const { trustImage, trustImageAlt, trustCaption } = siteConfig.features;
  const { ref, inView } = useInViewOnce();
  const [typedQuote, setTypedQuote] = useState("");
  const [showAttribution, setShowAttribution] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  if (!trustImage) return null;

  const isOnDark = variant === "dark";
  const fullQuote = `\u201C${trustCaption}\u201D`;
  const attribution = `\u2014 ${siteConfig.name}`;

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setTypedQuote(fullQuote);
      setShowAttribution(true);
      return;
    }

    setTypedQuote("");
    setShowAttribution(false);

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setTypedQuote(fullQuote.slice(0, index));
      if (index >= fullQuote.length) {
        clearInterval(interval);
        setTimeout(() => setShowAttribution(true), 400);
      }
    }, TYPE_SPEED_MS);

    return () => clearInterval(interval);
  }, [inView, reduceMotion, fullQuote]);

  const imageClasses = [
    "relative aspect-[4/5] overflow-hidden rounded-2xl border border-teal-mid/25 shadow-[0_12px_40px_rgba(12,22,36,0.2)] transition-all ease-out",
    inView || reduceMotion ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
  ].join(" ");

  const imageStyle = reduceMotion
    ? undefined
    : { transitionDuration: `${IMAGE_DURATION_MS}ms` };

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-[minmax(0,16rem)_1fr] lg:grid-cols-[minmax(0,18rem)_1fr] gap-8 items-center mb-12 md:mb-14 max-w-4xl mx-auto"
    >
      <div className="mx-auto md:mx-0 w-full max-w-xs md:max-w-none">
        <div className={imageClasses} style={imageStyle}>
          <Image
            src={trustImage}
            alt={trustImageAlt}
            fill
            sizes="(max-width: 768px) 320px, 288px"
            className="object-cover object-center grayscale-[15%]"
          />
        </div>
      </div>
      <blockquote
        className={`text-center md:text-left min-h-[8rem] md:min-h-[7rem] ${
          isOnDark ? "text-ivory/90" : "text-carbon/85"
        }`}
        aria-live="polite"
      >
        <p
          className={`font-serif text-lg md:text-xl leading-relaxed italic ${
            isOnDark ? "text-ivory" : "text-carbon"
          }`}
        >
          {typedQuote}
          {!reduceMotion && inView && typedQuote.length < fullQuote.length ? (
            <span
              className={`inline-block w-0.5 h-[1em] align-middle ml-0.5 animate-pulse ${
                isOnDark ? "bg-ivory" : "bg-carbon"
              }`}
              aria-hidden="true"
            />
          ) : null}
        </p>
        <footer
          className={`mt-4 font-sans text-sm font-medium transition-opacity duration-500 ${
            isOnDark ? "text-teal-mid" : "text-teal-dark"
          } ${showAttribution ? "opacity-100" : "opacity-0"}`}
        >
          {attribution}
        </footer>
      </blockquote>
    </div>
  );
}
