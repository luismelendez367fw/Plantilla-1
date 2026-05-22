"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-teal-mid/30">
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-sans text-base font-medium text-carbon pr-4 normal-case">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-teal-mid shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="pb-5 text-carbon/75 font-serif leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const { heading, subheading, items } = siteConfig.faq;

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-carbon mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-carbon/70">{subheading}</p>
        </div>
        <div>
          {items.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
