import React, { useState, useEffect } from 'react';
import { venueConfig } from './config/venueConfig.ts';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { VenueHighlights } from './components/VenueHighlights.tsx';
import { PackageCard } from './components/PackageCard.tsx';
import { CateringSection } from './components/CateringSection.tsx';
import { AwardsStrip } from './components/AwardsStrip.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { ReviewCard } from './components/ReviewCard.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { EnquiryForm } from './components/EnquiryForm.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyMobileBar } from './components/StickyMobileBar.tsx';
import { EnquiryModal } from './components/EnquiryModal.tsx';
import { PreLaunchChecklistModal } from './components/PreLaunchChecklistModal.tsx';

// Page Views
import { WeddingsView } from './pages/WeddingsView.tsx';
import { EventsView } from './pages/EventsView.tsx';
import { PackagesView } from './pages/PackagesView.tsx';
import { AboutView } from './pages/AboutView.tsx';
import { ContactView } from './pages/ContactView.tsx';

import { MessageCircle, Phone, MapPin, Sparkles, Navigation, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [selectedEventType, setSelectedEventType] = useState<string>('Wedding & Reception');
  const [checklistOpen, setChecklistOpen] = useState<boolean>(false);

  // Ensure 'home' is always the primary default view when site is opened or refreshed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (['weddings', 'events', 'catering', 'packages', 'gallery', 'about', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      } else {
        setCurrentTab('home');
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: string) => {
    const targetTab = tab.trim().toLowerCase();
    setCurrentTab(targetTab);
    if (targetTab === 'home') {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = targetTab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (eventType?: string) => {
    if (eventType) {
      setSelectedEventType(eventType);
    }
    setEnquiryModalOpen(true);
  };

  const defaultWaMessage = encodeURIComponent(
    'Hello Roshal Garden, I would like to check venue availability and package details for an event in Bhosari, Pune.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F2421] selection:bg-[#C5A059]/20 selection:text-[#123320]">
      {/* Sticky Header with Navigation & Call Actions */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            {/* 1. Hero Section (Passes 5-Second Test) */}
            <Hero
              onOpenEnquiry={() => handleOpenEnquiry('Wedding & Reception')}
              onNavigatePackages={() => handleSelectTab('packages')}
            />

            {/* 2. Venue Highlights & Event Visual Cards */}
            <VenueHighlights
              onSelectEventType={(eventTitle) => handleOpenEnquiry(eventTitle)}
              onOpenEnquiry={() => handleOpenEnquiry()}
            />

            {/* 3. Packages Teaser on Home */}
            <section className="py-16 sm:py-24 bg-white border-y border-[#EAE2D5]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059] block mb-2">
                      Structured Venue Pricing
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1C12]">
                      Celebration & Wedding Tiers
                    </h2>
                    <p className="text-sm sm:text-base text-[#5C6A62] mt-2 max-w-xl">
                      Straightforward packages covering lawn hire, banquet hall, bridal dressing rooms, power backup, and catering infrastructure.
                    </p>
                  </div>

                  <button
                    onClick={() => handleSelectTab('packages')}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE2D5] text-[#123320] text-sm font-bold border border-[#C5A059]/40 transition-colors cursor-pointer"
                  >
                    <span>View All Inclusions & Capacity Matrix</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {venueConfig.packages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      onSelectPackage={(title) => handleOpenEnquiry(title)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Awards Strip (Captioned readable text) */}
            <AwardsStrip />

            {/* 5. In-House Catering Teaser */}
            <CateringSection onOpenEnquiry={() => handleOpenEnquiry('Catering & Feast')} />

            {/* 6. Featured Gallery */}
            <GallerySection onOpenEnquiry={() => handleOpenEnquiry('Venue Tour')} />

            {/* 7. Google Review Wall (6-10 Reviews Solving Thin Trust Signal) */}
            <section className="py-16 sm:py-24 bg-white border-t border-[#EAE2D5]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059] block mb-2">
                    Verified Guest Experiences
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1C12]">
                    Trusted by Pune & PCMC Families
                  </h2>
                  <p className="text-sm text-[#5C6A62] mt-2">
                    Real wedding couples and corporate planners who celebrated at Roshal Garden on Pune-Nashik highway.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {venueConfig.reviews.map((rev) => (
                    <ReviewCard key={rev.id} review={rev} />
                  ))}
                </div>
              </div>
            </section>

            {/* 8. Short FAQ */}
            <FaqSection onOpenEnquiry={() => handleOpenEnquiry()} />

            {/* 9. Final Enquiry CTA & Embedded Google Map */}
            <section className="py-16 sm:py-24 bg-[#0A1C12] text-white relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Form */}
                  <div className="lg:col-span-7">
                    <EnquiryForm />
                  </div>

                  {/* Right Map & Direct Access */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-xs">
                      <span className="text-xs uppercase font-bold tracking-widest text-[#D8B775] block mb-1">
                        Visit Roshal Garden
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#FAF7F2] mb-3">
                        On-Site Guided Walkthroughs Daily
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-light">
                        Experience the open breeze across 18,000 sq ft of lush green lawn and step inside our 3,000 sq ft banquet hall in Bhosari.
                      </p>

                      <div className="space-y-3.5 text-xs sm:text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-white block">{venueConfig.contact.displayAddress}</span>
                            <span className="text-white/60 text-xs">{venueConfig.contact.landmark}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white/60 text-[11px] uppercase block">Call Desk Directly</span>
                            <a href={`tel:${venueConfig.contact.primaryPhone}`} className="text-white hover:text-[#C5A059] font-semibold text-sm">
                              +91 {venueConfig.contact.primaryPhone}
                            </a>
                            <span className="text-white/40 mx-2">/</span>
                            <a href={`tel:${venueConfig.contact.secondaryPhone}`} className="text-white hover:text-[#C5A059] font-semibold text-sm">
                              +91 {venueConfig.contact.secondaryPhone}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                        <a
                          href={venueConfig.contact.googleMapsDirectionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8B775] hover:underline"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Get Driving Directions</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>

                        <a
                          href={`https://wa.me/${venueConfig.contact.whatsappNumber}?text=${defaultWaMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp Desk</span>
                        </a>
                      </div>
                    </div>

                    {/* Map Embed Frame */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-[16/10] bg-stone-900">
                      <iframe
                        title="Roshal Garden Bhosari Location Map"
                        src={venueConfig.contact.googleMapsEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentTab === 'weddings' && (
          <WeddingsView onOpenEnquiry={handleOpenEnquiry} />
        )}

        {currentTab === 'events' && (
          <EventsView onOpenEnquiry={handleOpenEnquiry} />
        )}

        {currentTab === 'catering' && (
          <CateringSection onOpenEnquiry={() => handleOpenEnquiry('Catering Menu')} />
        )}

        {currentTab === 'packages' && (
          <PackagesView onOpenEnquiry={handleOpenEnquiry} />
        )}

        {currentTab === 'gallery' && (
          <GallerySection onOpenEnquiry={() => handleOpenEnquiry('Gallery Site Visit')} />
        )}

        {currentTab === 'about' && (
          <AboutView onOpenEnquiry={() => handleOpenEnquiry()} />
        )}

        {currentTab === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Floating Desktop WhatsApp Button */}
      <a
        href={`https://wa.me/${venueConfig.contact.whatsappNumber}?text=${defaultWaMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 group font-medium text-sm"
        aria-label="Chat with Roshal Garden on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Persistent Bottom Bar on Mobile Devices (WhatsApp | Call | Enquire) */}
      <StickyMobileBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Quick Enquiry Modal (Triggered by "Book Your Event" buttons) */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultEventType={selectedEventType}
      />

      {/* Client Handover: Pre-Launch Checklist & Placeholder Inspection Modal */}
      <PreLaunchChecklistModal
        isOpen={checklistOpen}
        onClose={() => setChecklistOpen(false)}
      />

      {/* Comprehensive Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenChecklist={() => setChecklistOpen(true)}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />
    </div>
  );
}
