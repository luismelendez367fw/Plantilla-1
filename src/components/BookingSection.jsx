"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import PaymentButton from "@/components/PaymentButton";

export default function BookingSection() {
  const { heading, subheading, schedulingCta, schedulingUrl, depositNote } =
    siteConfig.booking;

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7501/ingest/56484c5a-075b-4ba5-be58-861593c08313", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "0bbfd2",
      },
      body: JSON.stringify({
        sessionId: "0bbfd2",
        runId: "pre-fix",
        hypothesisId: "C",
        location: "BookingSection.jsx:mount",
        message: "booking schedulingUrl at runtime",
        data: {
          schedulingUrl: schedulingUrl || null,
          hasSchedulingUrl: Boolean(schedulingUrl),
          branch: schedulingUrl ? "external" : "fallback-contact",
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [schedulingUrl]);

  return (
    <section id="booking" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-4 tracking-wide">
          {heading}
        </h2>
        <p className="font-serif text-lg text-carbon/75 mb-8">{subheading}</p>
        <p className="text-sm text-teal-mid mb-6">{depositNote}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {schedulingUrl ? (
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
              onClick={(e) => {
                // #region agent log
                fetch(
                  "http://127.0.0.1:7501/ingest/56484c5a-075b-4ba5-be58-861593c08313",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "X-Debug-Session-Id": "0bbfd2",
                    },
                    body: JSON.stringify({
                      sessionId: "0bbfd2",
                      runId: "pre-fix",
                      hypothesisId: "D",
                      location: "BookingSection.jsx:click",
                      message: "Ver disponibilidad clicked",
                      data: {
                        href: e.currentTarget.getAttribute("href"),
                        target: e.currentTarget.getAttribute("target"),
                      },
                      timestamp: Date.now(),
                    }),
                  }
                ).catch(() => {});
                // #endregion
              }}
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
