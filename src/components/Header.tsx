import React, { useState, useEffect } from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { Phone, Calendar, Instagram, Facebook, Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'events', label: 'Events' },
    { id: 'catering', label: 'Catering & Menu' },
    { id: 'packages', label: 'Packages & Pricing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About & Reviews' }
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar for quick phone & location */}
      <div className="bg-[#0A1C12] text-[#FAF7F2]/90 text-xs py-2 px-4 border-b border-[#C5A059]/20 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[#C5A059] font-medium">Bhosari, Pune-Nashik Highway</span>
            <span className="text-[#FAF7F2]/40">·</span>
            <span>18,000 sq ft Lawn + 3,000 sq ft Hall</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#C5A059]">Direct Booking Desk:</span>
              <a href={`tel:${venueConfig.contact.primaryPhone}`} className="hover:text-[#C5A059] transition-colors font-semibold">
                +91 {venueConfig.contact.primaryPhone}
              </a>
              <span className="text-[#FAF7F2]/40">/</span>
              <a href={`tel:${venueConfig.contact.secondaryPhone}`} className="hover:text-[#C5A059] transition-colors font-semibold">
                {venueConfig.contact.secondaryPhone}
              </a>
            </div>
            <span className="text-[#FAF7F2]/40">·</span>
            <div className="flex items-center gap-2 text-[#FAF7F2]/80">
              <a
                href={venueConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A059] transition-colors flex items-center gap-1"
                aria-label="Roshal Garden on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@roshal_garden</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#123320]/95 backdrop-blur-md shadow-md py-3 text-white border-b border-[#C5A059]/20'
            : 'bg-[#123320] text-white py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
          >
            <div className="w-10 h-10 rounded-full border border-[#C5A059] flex items-center justify-center bg-[#0A1C12] text-[#C5A059] font-serif font-bold text-lg shadow-inner">
              RG
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#FAF7F2] group-hover:text-[#C5A059] transition-colors">
                ROSHAL GARDEN
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#C5A059] font-medium">
                Wedding Lawn &middot; Banquet &middot; Catering
              </span>
            </div>
          </button>

          {/* Desktop Navigation (Max 6 primary items) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all relative rounded-md ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button & Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${venueConfig.contact.primaryPhone}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/90 hover:text-[#C5A059] transition-colors border border-white/10"
              title="Call Booking Desk"
              aria-label="Call Venue Booking Desk"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenEnquiry}
              className="bg-[#C5A059] hover:bg-[#D8B775] text-[#0A1C12] font-semibold text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Event</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="bg-[#C5A059] text-[#0A1C12] font-semibold text-xs px-3 py-2 rounded-md sm:hidden"
            >
              Enquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1C12] border-b border-[#C5A059]/20 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="text-xs text-[#C5A059] font-medium tracking-wide pb-2 border-b border-white/10 uppercase">
              Bhosari, Pune-Nashik Highway
            </div>
            <div className="grid gap-1 pt-2">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-left text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#C5A059]/15 text-[#C5A059] font-semibold'
                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full bg-[#C5A059] hover:bg-[#D8B775] text-[#0A1C12] font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Event / Check Dates</span>
              </button>

              <div className="flex items-center justify-between text-xs text-white/70 pt-2 px-1">
                <a
                  href={`tel:${venueConfig.contact.primaryPhone}`}
                  className="flex items-center gap-1.5 text-white/90 hover:text-[#C5A059]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>9850543449</span>
                </a>
                <a
                  href={venueConfig.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-white/90 hover:text-[#C5A059]"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>@roshal_garden</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
