import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { PackageCard } from '../components/PackageCard.tsx';
import { Sparkles, Heart, Trees, Building2, Calendar, Phone, CheckCircle2 } from 'lucide-react';

interface WeddingsViewProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const WeddingsView: React.FC<WeddingsViewProps> = ({ onOpenEnquiry }) => {
  const weddingPackages = venueConfig.packages.filter(p => p.id === 'gold-wedding' || p.id === 'sovereign-grand');

  return (
    <div className="bg-[#FAF7F2] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C5A059]/40 text-[#123320] text-xs font-bold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span>Grand Indian Nuptials</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1C12] tracking-tight">
            Weddings at Roshal Garden
          </h1>
          <p className="text-base sm:text-lg text-[#5C6A62] mt-4 leading-relaxed font-light">
            An 18,000 sq ft sprawling green lawn framed by British garden architecture, paired with an air-conditioned 3,000 sq ft banquet hall for sacred Vedic rituals and grand receptions.
          </p>
        </div>

        {/* Feature Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE2D5] shadow-sm">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
              The Nuptial Setting
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12]">
              Where British Landscaping Meets Vedic Splendour
            </h2>
            <p className="text-sm text-[#5C6A62] leading-relaxed">
              Envisioned by Ms C.K. Sharma to offer families in Pune and PCMC a venue free from cramped banquet restrictions. The 18,000 sq ft open turf gives you boundless freedom for spectacular mandaps, royal Barat processions, and multi-cuisine live dining pavilions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                <div className="font-serif font-bold text-[#123320] text-base flex items-center gap-2">
                  <Trees className="w-4 h-4 text-[#C5A059]" />
                  <span>18,000 sq ft Lawn</span>
                </div>
                <p className="text-xs text-[#5C6A62] mt-1">Comfortably accommodates large gatherings of 500 to 1,200+ wedding attendees.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                <div className="font-serif font-bold text-[#123320] text-base flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#C5A059]" />
                  <span>3,000 sq ft AC Hall</span>
                </div>
                <p className="text-xs text-[#5C6A62] mt-1">Climate-controlled hall for intimate Muhurtam rituals, senior seating, or dining.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenEnquiry('Royal Wedding')}
                className="px-6 py-3.5 rounded-xl bg-[#123320] hover:bg-[#19452C] text-[#FAF7F2] font-semibold text-sm shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Check Wedding Dates Availability</span>
              </button>

              <a
                href={`tel:${venueConfig.contact.primaryPhone}`}
                className="px-5 py-3.5 rounded-xl border border-[#C5A059] text-[#123320] font-semibold text-sm hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call +91 {venueConfig.contact.primaryPhone}</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
            <img
              src="/images/hero_wedding_lawn.jpg"
              alt="Roshal Garden Wedding Mandap and Lawn"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A1C12]/80 backdrop-blur-md text-white border border-white/20 text-xs">
              <span className="font-semibold text-[#D8B775]">Bespoke Stage & Mandap Arrangements</span>
              <p className="text-white/80 mt-0.5">Flexible layouts for Maharashtrian, Marwari, Punjabi, and South Indian ceremonies.</p>
            </div>
          </div>
        </div>

        {/* Wedding Specific Packages */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">Curated For Couples</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12] mt-1">
              Featured Wedding Tiers
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6A62] mt-2">
              Transparent baseline inclusions designed to eliminate hidden costs on your big day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {weddingPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelectPackage={(title) => onOpenEnquiry(title)}
              />
            ))}
          </div>
        </div>

        {/* What Brides & Grooms Get */}
        <div className="bg-[#123320] text-white rounded-3xl p-8 sm:p-12 border border-[#C5A059]/40">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D8B775] font-semibold">Peace of Mind</span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#FAF7F2]">
              Complimentary Bridal Amenities with Every Wedding Booking
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              We understand wedding days require calm, privacy, and impeccable logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] mb-2" />
              <h4 className="font-semibold text-sm text-white">2 AC Dressing Suites</h4>
              <p className="text-xs text-white/70 mt-1">Private vanity mirrors, restrooms & dressing lounges for bride and groom.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] mb-2" />
              <h4 className="font-semibold text-sm text-white">100% DG Power Backup</h4>
              <p className="text-xs text-white/70 mt-1">Zero downtime for mandap lighting, AC, sound, and videography lights.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] mb-2" />
              <h4 className="font-semibold text-sm text-white">150+ Valet Car Parking</h4>
              <p className="text-xs text-white/70 mt-1">Designated parking marshals ensuring effortless arrival from the highway.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059] mb-2" />
              <h4 className="font-semibold text-sm text-white">In-House Royal Kitchen</h4>
              <p className="text-xs text-white/70 mt-1">Master chefs preparing authentic feast with live stations and pure ghee delicacies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
