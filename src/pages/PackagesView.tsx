import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { PackageCard } from '../components/PackageCard.tsx';
import { FaqSection } from '../components/FaqSection.tsx';
import { Sparkles, Users, Trees, Building2, Layers, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface PackagesViewProps {
  onOpenEnquiry: (packageName?: string) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-[#FAF7F2] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#C5A059]/40 text-[#123320] text-xs font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Transparent Booking Tiers</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1C12]">
            Packages & Capacity Breakdown
          </h1>
          <p className="text-sm sm:text-base text-[#5C6A62] mt-3">
            Every booking is backed by clear inclusions, guaranteed power backup, and dedicated hospitality coordination. Select your tier below.
          </p>
        </div>

        {/* Capacity Breakdown Matrix (Passes Qualification Test) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE2D5] shadow-xs mb-16">
          <div className="text-center sm:text-left mb-6 pb-4 border-b border-[#EAE2D5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#C5A059]">Space Dimensions</span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1C12]">
                Official Venue Capacity Matrix
              </h2>
            </div>
            <span className="text-xs text-[#5C6A62]">
              Located on Pune-Nashik Highway, Bhosari
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D5]">
              <div className="flex items-center justify-between text-[#123320] mb-2">
                <span className="font-serif text-lg font-bold">Open-Air Lawn</span>
                <Trees className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="text-2xl font-bold font-serif text-[#0A1C12]">18,000 sq ft</div>
              <div className="mt-2 text-xs text-[#5C6A62]">
                <span className="font-semibold text-[#123320]">Guest Capacity: </span>
                {venueConfig.venueStats.lawnCapacity}
              </div>
              <p className="text-[11px] text-[#5C6A62] mt-2 border-t border-[#EAE2D5] pt-2">
                Manicured natural grass, perimeter garden trees, grand entry pathway & dedicated mandap zone.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D5]">
              <div className="flex items-center justify-between text-[#123320] mb-2">
                <span className="font-serif text-lg font-bold">Banquet Hall</span>
                <Building2 className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="text-2xl font-bold font-serif text-[#0A1C12]">3,000 sq ft</div>
              <div className="mt-2 text-xs text-[#5C6A62]">
                <span className="font-semibold text-[#123320]">Guest Capacity: </span>
                {venueConfig.venueStats.hallCapacity}
              </div>
              <p className="text-[11px] text-[#5C6A62] mt-2 border-t border-[#EAE2D5] pt-2">
                100% air-conditioned, chandelier illumination, integrated stage, dressing suite access.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/40 shadow-xs">
              <div className="flex items-center justify-between text-[#123320] mb-2">
                <span className="font-serif text-lg font-bold">Combined Estate</span>
                <Sparkles className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="text-2xl font-bold font-serif text-[#0A1C12]">21,000+ sq ft</div>
              <div className="mt-2 text-xs text-[#5C6A62]">
                <span className="font-semibold text-[#123320]">Guest Capacity: </span>
                {venueConfig.venueStats.combinedCapacity}
              </div>
              <p className="text-[11px] text-[#5C6A62] mt-2 border-t border-[#EAE2D5] pt-2">
                Total estate buyout with flawless indoor-outdoor circulation, dining pavilions & VIP zones.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {venueConfig.packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelectPackage={(title) => onOpenEnquiry(title)}
            />
          ))}
        </div>

        {/* Note on Custom Inclusions & Taxes */}
        <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EAE2D5] text-xs text-[#5C6A62] mb-16 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#123320] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#123320]">Pricing & Quotation Transparency: </span>
            Exact package costs vary depending on auspicious dates, full-day vs half-day slots, and custom live catering menus. All quotes provided directly by Roshal Garden management without broker commissions.
          </div>
        </div>

        {/* Embedded Booking FAQ */}
        <FaqSection onOpenEnquiry={() => onOpenEnquiry('Package Booking')} />
      </div>
    </div>
  );
};
