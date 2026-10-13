import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Clock, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenChecklist: () => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenChecklist, onOpenEnquiry }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1C12] text-white border-t border-[#C5A059]/30 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Founder Story */}
          <div className="space-y-4">
            <button
              onClick={() => onSelectTab('home')}
              className="flex items-center gap-3 text-left cursor-pointer group focus:outline-none"
              title="Return to Home"
            >
              <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center bg-[#123320] text-[#C5A059] font-serif font-bold text-lg group-hover:scale-105 transition-transform">
                RG
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-[#FAF7F2] group-hover:text-[#C5A059] transition-colors">
                ROSHAL GARDEN
              </span>
            </button>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Founded by <strong className="text-[#D8B775] font-semibold">{venueConfig.brandStory.founder}</strong> after 25 years in England, blending classic British landscape sophistication with grand Indian hospitality.
            </p>

            <div className="pt-2 text-xs text-[#C5A059] space-y-1">
              <div>&bull; 18,000 sq ft Royal Green Lawn</div>
              <div>&bull; 3,000 sq ft AC Banquet Hall</div>
              <div>&bull; In-House Kitchen & Dining Pavilion</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={venueConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="Instagram @roshal_garden"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={venueConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="Facebook /roshalgardenpune"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={venueConfig.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#D8B775] uppercase tracking-wider mb-4">
              Explore Venue
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer font-medium text-white"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('weddings')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Weddings & Receptions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('events')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Sangeet, Haldi & Birthdays
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('events')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Corporate & College Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('catering')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  In-House Catering & Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('packages')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Packages & Pricing Tiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('gallery')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  Photo Gallery & Ambience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  About, Awards & Client Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Desk Hours */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#D8B775] uppercase tracking-wider mb-4">
              Booking Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-white/50 uppercase">Direct Booking Numbers</div>
                  <a href={`tel:${venueConfig.contact.primaryPhone}`} className="hover:text-[#C5A059] font-medium block">
                    +91 {venueConfig.contact.primaryPhone}
                  </a>
                  <a href={`tel:${venueConfig.contact.secondaryPhone}`} className="hover:text-[#C5A059] font-medium block">
                    +91 {venueConfig.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-white/50 uppercase">Venue Visiting Hours</div>
                  <span className="block text-white/90">{venueConfig.contact.operatingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-white/50 uppercase">Official Email</div>
                  <a href={`mailto:${venueConfig.contact.email}`} className="hover:text-[#C5A059]">
                    {venueConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#C5A059] hover:bg-[#D8B775] text-[#0A1C12] font-bold text-xs uppercase tracking-wider cursor-pointer transition-all"
                >
                  Schedule Site Tour
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Address & Location Pin */}
          <div>
            <h4 className="font-serif text-base font-bold text-[#D8B775] uppercase tracking-wider mb-4">
              Location & Access
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">{venueConfig.contact.displayAddress}</span>
                  <span className="block text-[11px] text-white/60 mt-0.5">{venueConfig.contact.landmark}</span>
                </div>
              </div>

              <a
                href={venueConfig.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D8B775] hover:underline pt-1"
              >
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70">
                <span className="font-semibold text-white">Serving:</span> Bhosari, Pimpri, Chinchwad, Moshi, Alandi, Chakan, Wakad, Hinjewadi & Pune City.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer with dynamic year & checklist link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {currentYear} Roshal Garden. All rights reserved. &middot; Bhosari, Pune, Maharashtra.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenChecklist}
              className="text-[#D8B775] hover:underline flex items-center gap-1 cursor-pointer"
              title="View Client Content Placeholders & Pre-Launch Checklist"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Owner Pre-Launch Checklist & Placeholders</span>
            </button>
            <span className="text-white/20">|</span>
            <span>English (Hindi / Marathi ready)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
