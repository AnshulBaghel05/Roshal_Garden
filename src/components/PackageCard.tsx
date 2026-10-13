import React from 'react';
import { Check, X, Users, Sparkles, ArrowRight } from 'lucide-react';

interface PackageProps {
  pkg: {
    id: string;
    title: string;
    subtitle: string;
    badge?: string;
    priceStartingFrom: string;
    priceNote: string;
    idealFor: string;
    capacity: string;
    inclusions: string[];
    exclusions: string[];
  };
  onSelectPackage: (packageTitle: string) => void;
}

export const PackageCard: React.FC<PackageProps> = ({ pkg, onSelectPackage }) => {
  const isFeatured = pkg.badge === 'Most Popular';

  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
        isFeatured
          ? 'bg-white border-2 border-[#C5A059] shadow-xl md:-translate-y-2'
          : 'bg-white border border-[#EAE2D5] shadow-md hover:shadow-lg'
      }`}
    >
      {/* Top Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm flex items-center gap-1 ${
              isFeatured
                ? 'bg-[#123320] text-[#D8B775] border border-[#C5A059]'
                : 'bg-[#C5A059] text-[#0A1C12]'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>{pkg.badge}</span>
          </span>
        </div>
      )}

      {/* Package Header */}
      <div className="p-6 sm:p-7 border-b border-[#FAF7F2]">
        <div className="text-xs uppercase font-bold tracking-widest text-[#C5A059] mb-1">
          Venue & Celebration Tier
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0A1C12]">
          {pkg.title}
        </h3>
        <p className="text-sm text-[#5C6A62] mt-1 min-h-[40px]">
          {pkg.subtitle}
        </p>

        {/* Pricing Area */}
        <div className="mt-5 pt-4 border-t border-[#EAE2D5]/70">
          <div className="text-xs text-[#5C6A62] uppercase tracking-wider">Starting Tariff</div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#123320] mt-0.5">
            {pkg.priceStartingFrom}
          </div>
          <div className="text-xs text-[#5C6A62] mt-0.5">{pkg.priceNote}</div>
        </div>

        {/* Capacity Details */}
        <div className="mt-4 p-3 bg-[#FAF7F2] rounded-xl border border-[#EAE2D5] flex items-center gap-3 text-xs text-[#1A1F1C]">
          <div className="p-2 rounded-lg bg-[#123320] text-[#C5A059]">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-[#123320]">Recommended for: {pkg.idealFor}</div>
            <div className="text-[#5C6A62]">{pkg.capacity}</div>
          </div>
        </div>
      </div>

      {/* Inclusions & Exclusions */}
      <div className="p-6 sm:p-7 flex-1 space-y-5">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[#123320] mb-3">
            What is Included
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#333D37]">
            {pkg.inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#123320]/10 text-[#123320] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {pkg.exclusions.length > 0 && (
          <div className="pt-2 border-t border-[#FAF7F2]">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#5C6A62] mb-2">
              Excluded / Optional Add-ons
            </div>
            <ul className="space-y-2 text-xs text-[#5C6A62]">
              {pkg.exclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-stone-100 text-[#5C6A62] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-2 h-2" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Action */}
      <div className="p-6 sm:p-7 pt-0">
        <button
          onClick={() => onSelectPackage(pkg.title)}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
            isFeatured
              ? 'bg-[#123320] hover:bg-[#19452C] text-[#FAF7F2] shadow-md hover:shadow-lg'
              : 'bg-[#FAF7F2] hover:bg-[#EAE2D5] text-[#123320] border border-[#C5A059]/40'
          }`}
        >
          <span>Enquire for {pkg.title}</span>
          <ArrowRight className="w-4 h-4 text-[#C5A059]" />
        </button>
      </div>
    </div>
  );
};
