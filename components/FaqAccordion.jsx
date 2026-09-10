'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl sm:rounded-3xl bg-white border border-black/[0.06] overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none min-h-[56px]"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-bold text-apple-dark">
                {faq.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full bg-apple-gray flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-sembada-navy text-white' : 'text-apple-secondary'
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-apple-secondary leading-relaxed border-t border-black/[0.04] animate-in fade-in duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
