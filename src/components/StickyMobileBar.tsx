import React, { useState } from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { MessageCircle, Phone, CalendarCheck, X } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenEnquiry: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenEnquiry }) => {
  const [showCallSelector, setShowCallSelector] = useState(false);

  const defaultWaMessage = encodeURIComponent(
    'Hello Roshal Garden, I would like to enquire about date availability and packages for an upcoming event in Bhosari, Pune.'
  );

  return (
    <>
      {/* Call Selector Bottom Sheet */}
      {showCallSelector && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center md:hidden animate-in fade-in duration-150">
          <div className="bg-[#FAF7F2] w-full rounded-t-2xl p-5 pb-8 shadow-2xl border-t border-[#C5A059]/30">
            <div className="flex items-center justify-between pb-3 border-b border-[#EAE2D5]">
              <span className="font-serif font-bold text-lg text-[#0A1C12]">Call Roshal Garden Desk</span>
              <button
                onClick={() => setShowCallSelector(false)}
                className="p-1.5 rounded-full hover:bg-black/5 text-[#5C6A62]"
                aria-label="Close Call Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="pt-4 space-y-3">
              <a
                href={`tel:${venueConfig.contact.primaryPhone}`}
                onClick={() => setShowCallSelector(false)}
                className="flex items-center justify-between w-full p-3.5 bg-white rounded-xl border border-[#C5A059]/40 shadow-xs active:bg-[#FAF7F2]"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">Primary Desk</div>
                  <div className="font-semibold text-[#1A1F1C] text-base">+91 {venueConfig.contact.primaryPhone}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#123320] text-[#C5A059] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
              </a>

              <a
                href={`tel:${venueConfig.contact.secondaryPhone}`}
                onClick={() => setShowCallSelector(false)}
                className="flex items-center justify-between w-full p-3.5 bg-white rounded-xl border border-[#EAE2D5] shadow-xs active:bg-[#FAF7F2]"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#5C6A62] font-semibold">Secondary Line</div>
                  <div className="font-semibold text-[#1A1F1C] text-base">+91 {venueConfig.contact.secondaryPhone}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#EAE2D5] text-[#123320] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Bar on Mobile */}
      <nav
        aria-label="Quick Actions"
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0A1C12] text-white border-t border-[#C5A059]/40 shadow-2xl safe-area-bottom"
      >
        <div className="grid grid-cols-3 divide-x divide-white/10 h-16">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${venueConfig.contact.whatsappNumber}?text=${defaultWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center p-1 text-[#25D366] hover:bg-white/5 active:bg-white/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[11px] font-semibold tracking-tight text-white mt-1">WhatsApp</span>
          </a>

          {/* Call */}
          <button
            type="button"
            onClick={() => setShowCallSelector(true)}
            className="flex flex-col items-center justify-center text-center p-1 text-[#D8B775] hover:bg-white/5 active:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-[11px] font-semibold tracking-tight text-white mt-1">Call Desk</span>
          </button>

          {/* Enquire */}
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="flex flex-col items-center justify-center text-center p-1 bg-[#C5A059] text-[#0A1C12] hover:bg-[#D8B775] active:bg-[#A88339] transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            <span className="text-[11px] font-bold tracking-tight text-[#0A1C12] mt-1">Enquire</span>
          </button>
        </div>
      </nav>
    </>
  );
};
