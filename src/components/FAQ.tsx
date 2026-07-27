"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq, whatsappLink } from "@/data/content";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white pt-10 pb-20 lg:pt-14 lg:pb-28">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <Reveal
          direction="left"
          className="flex flex-col gap-5 rounded-2xl border border-line/70 p-10"
        >
          <p className="font-lato text-[15px] font-semibold uppercase tracking-[2.3px] text-gold">
            {faq.featured.eyebrow}
          </p>
          <h2 className="font-playfair text-3xl font-semibold leading-tight text-ink">
            {faq.featured.title}
          </h2>

          {faq.featured.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-heebo text-base font-light leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}

          <div>
            <Button href={whatsappLink()}>{faq.featured.ctaLabel}</Button>
          </div>
        </Reveal>

        <Reveal direction="right" className="flex flex-col">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="border-b border-gold/25 py-6 first:pt-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-playfair text-lg font-semibold text-ink">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-gold-bright transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 font-heebo text-base font-light leading-relaxed text-muted">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
