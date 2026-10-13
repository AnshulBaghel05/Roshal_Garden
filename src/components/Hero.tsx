import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { Calendar, Layers, ShieldCheck, MapPin, Sparkles, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
  onNavigatePackages: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onNavigatePackages }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A1C12]">
      {/* Background Photography with Sophisticated Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85"
          alt="Roshal Garden wedding lawn and evening banquet illumination in Bhosari Pune"
          className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
        />
        {/* Architectural Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C12] via-[#0A1C12]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A1C12]/40 to-[#0A1C12]/90" />
      </div>

      {/* Decorative Gold Heritage Border Filigree */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent z-10 opacity-70" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center text-white">
        {/* British-Indian Heritage Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/40 text-[#E6CE9D] text-xs sm:text-sm font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>British Sophistication &middot; Indian Warmth &middot; Founded by Ms C.K. Sharma</span>
        </div>

        {/* Primary Value Proposition Headline (Passes 5-Second Test) */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-[1.15] mb-6 drop-shadow-md">
          Pune’s Premier Wedding Lawn & Banquet Hall with In-House Royal Catering
        </h1>

        {/* Proof Line */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#FAF7F2]/90 font-light leading-relaxed mb-8 sm:mb-10">
          <strong className="font-semibold text-[#D8B775]">18,000 sq ft lush manicured lawn</strong> +{' '}
          <strong className="font-semibold text-[#D8B775]">3,000 sq ft AC banquet hall</strong> on the{' '}
          <span className="text-white font-medium">Pune-Nashik Highway, Bhosari</span>.
          Crafted for unforgettable weddings, grand receptions, and celebrations across Pune & PCMC.
        </p>

        {/* Dual Primary Call-To-Action (Enquiry + Packages) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#D8B775] text-[#0A1C12] font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <Calendar className="w-5 h-5 text-[#0A1C12]" />
            <span>Check Date Availability</span>
          </button>

          <button
            onClick={onNavigatePackages}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF7F2] font-semibold text-base sm:text-lg border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-[#C5A059]"
          >
            <Layers className="w-5 h-5 text-[#C5A059]" />
            <span>View Packages & Pricing</span>
          </button>
        </div>

        {/* 3 Core Venue Metrics (Fast Qualification) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left pt-6 border-t border-white/15">
          <div className="bg-white/5 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-white/10">
            <span className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold">Open Lawn</span>
            <span className="block text-lg sm:text-xl font-bold font-serif text-[#FAF7F2]">18,000 sq ft</span>
            <span className="block text-xs text-white/70">Up to 1,200+ guests</span>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-white/10">
            <span className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold">AC Banquet Hall</span>
            <span className="block text-lg sm:text-xl font-bold font-serif text-[#FAF7F2]">3,000 sq ft</span>
            <span className="block text-xs text-white/70">Up to 300 guests</span>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-white/10">
            <span className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold">Location</span>
            <span className="block text-lg sm:text-xl font-bold font-serif text-[#FAF7F2]">Bhosari, PCMC</span>
            <span className="block text-xs text-white/70">Pune-Nashik Highway</span>
          </div>

          <div className="bg-white/5 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-white/10">
            <span className="block text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold">Kitchen & Dining</span>
            <span className="block text-lg sm:text-xl font-bold font-serif text-[#FAF7F2]">In-House Chefs</span>
            <span className="block text-xs text-white/70">Pure Veg & Non-Veg feasts</span>
          </div>
        </div>

        {/* Instant Contact Line for Mobile Visitors */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/80">
          <MapPin className="w-4 h-4 text-[#C5A059]" />
          <span>Prime Road Access &middot; 150+ Valet Car Parking &middot; 100% Silent DG Backup</span>
        </div>
      </div>
    </section>
  );
};
