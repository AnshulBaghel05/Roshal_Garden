import React, { useState } from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onOpenEnquiry?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1C12]">
            Everything You Need to Know
          </h2>
          <p className="text-sm text-[#5C6A62] mt-2">
            Clear guidelines on capacity, advance bookings, catering, music policies, and facilities at Roshal Garden.
          </p>
        </div>

        <div className="space-y-3.5">
          {venueConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#EAE2D5] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#0A1C12] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF7F2] text-[#123320] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#123320] text-[#C5A059]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#333D37] leading-relaxed border-t border-[#FAF7F2]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-[#123320]/5 border border-[#123320]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#123320] text-[#C5A059] shrink-0 hidden sm:block">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#0A1C12] text-base">Have a customized question or unique ritual setup?</h4>
              <p className="text-xs text-[#5C6A62]">Speak directly with Ms Sharma or our head venue coordinator.</p>
            </div>
          </div>
          {onOpenEnquiry && (
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 rounded-xl bg-[#123320] hover:bg-[#19452C] text-white text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Ask an Event Specialist
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
