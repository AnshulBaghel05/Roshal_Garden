import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { AwardsStrip } from '../components/AwardsStrip.tsx';
import { ReviewCard } from '../components/ReviewCard.tsx';
import { Sparkles, HeartHandshake, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onOpenEnquiry: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="bg-[#FAF7F2]">
      {/* Hero / Founder Story */}
      <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#C5A059]/40 text-[#123320] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>The Roshal Story</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1C12]">
            British Sophistication &middot; Indian Warmth
          </h1>
          <p className="text-base sm:text-lg text-[#5C6A62] mt-4 font-light leading-relaxed">
            The vision behind Bhosari’s premier wedding lawn and banquet estate.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#EAE2D5] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg bg-stone-100 border border-[#EAE2D5]">
              <img
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80"
                alt="English garden walkway and estate landscaping at Roshal Garden"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C12]/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D8B775] font-semibold">Founder & Visionary</span>
                <h3 className="font-serif text-2xl font-bold">{venueConfig.brandStory.founder}</h3>
                <p className="text-xs text-white/80 mt-1 font-light">25 Years Living in England &middot; Curating Gracious Hospitality</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
              The Genesis of Roshal Garden
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12] leading-snug">
              Why Roshal Garden Was Created for Pune Families
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#333D37] leading-relaxed">
              <p>
                After spending over <strong className="text-[#123320]">25 years residing and absorbing English garden aesthetics in England</strong>, our founder <strong className="text-[#123320]">{venueConfig.brandStory.founder}</strong> returned to Maharashtra with a passionate vision: to create an event estate that fuses the structured symmetry, lush lawns, and understated elegance of British manors with the vibrant, joyful hospitality intrinsic to Indian weddings.
              </p>
              <p>
                Too many event venues in the PCMC and Pune corridor force hosts to compromise—either suffocated in closed, low-ceiling basements or stranded on dusty open plots lacking proper dressing rooms, acoustic harmony, or hygiene.
              </p>
              <p>
                At Roshal Garden, you get <strong className="text-[#123320]">18,000 sq ft of level manicured green grass</strong> and a <strong className="text-[#123320]">3,000 sq ft air-conditioned hall</strong>, flanked by clean bridal suites, 100% generator backup, and high-standard in-house dining.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#FAF7F2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#123320] text-[#C5A059] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#0A1C12]">Family-Centric Care</h4>
                  <p className="text-[11px] text-[#5C6A62]">Personalized host attention for every wedding ritual.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#123320] text-[#C5A059] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#0A1C12]">Zero Middlemen</h4>
                  <p className="text-[11px] text-[#5C6A62]">Direct booking desk with fair, published guidelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section with Captioned Text */}
      <AwardsStrip />

      {/* 8 Google Review Cards (Thin trust signals resolved!) */}
      <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059] block mb-2">
            Social Proof & Verification
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1C12]">
            What Pune & PCMC Families Say
          </h2>
          <p className="text-sm text-[#5C6A62] mt-2">
            Authentic guest feedback from real weddings, receptions, and corporate banquets hosted at Roshal Garden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {venueConfig.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenEnquiry}
            className="px-8 py-3.5 rounded-xl bg-[#123320] hover:bg-[#19452C] text-white font-semibold text-sm shadow-md cursor-pointer transition-all inline-flex items-center gap-2"
          >
            <span>Book Your Celebration at Roshal Garden</span>
          </button>
        </div>
      </div>
    </div>
  );
};
