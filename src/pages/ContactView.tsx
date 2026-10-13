import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { EnquiryForm } from '../components/EnquiryForm.tsx';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, Youtube, ExternalLink, Navigation } from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059] block mb-2">
            Reach Out Directly
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1C12]">
            Contact Roshal Garden
          </h1>
          <p className="text-sm sm:text-base text-[#5C6A62] mt-3">
            Schedule an on-site lawn walkthrough, discuss food tasting, or verify auspicious wedding dates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm className="shadow-md" />
          </div>

          {/* Right Column: Contact Details, Socials, Maps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE2D5] shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0A1C12] pb-3 border-b border-[#FAF7F2]">
                Venue Desk & Inquiries
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#123320] text-[#C5A059] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#5C6A62] font-semibold block">Booking Phones</span>
                    <a href={`tel:${venueConfig.contact.primaryPhone}`} className="text-base font-bold text-[#123320] hover:text-[#C5A059] block">
                      +91 {venueConfig.contact.primaryPhone}
                    </a>
                    <a href={`tel:${venueConfig.contact.secondaryPhone}`} className="text-sm font-semibold text-[#1A1F1C] hover:text-[#C5A059] block">
                      +91 {venueConfig.contact.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#123320] text-[#C5A059] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#5C6A62] font-semibold block">Address</span>
                    <p className="font-medium text-[#1A1F1C] leading-snug">{venueConfig.contact.displayAddress}</p>
                    <p className="text-xs text-[#5C6A62] mt-0.5">{venueConfig.contact.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#123320] text-[#C5A059] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#5C6A62] font-semibold block">Visiting Timings</span>
                    <p className="font-medium text-[#1A1F1C]">{venueConfig.contact.operatingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#123320] text-[#C5A059] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#5C6A62] font-semibold block">Email</span>
                    <a href={`mailto:${venueConfig.contact.email}`} className="font-medium text-[#1A1F1C] hover:text-[#C5A059]">
                      {venueConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#FAF7F2]">
                <span className="text-[11px] uppercase tracking-wider text-[#5C6A62] font-semibold block mb-2.5">
                  Follow Event Updates
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={venueConfig.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#EAE2D5] text-xs font-semibold text-[#1A1F1C] hover:border-[#C5A059]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                    <span>@roshal_garden</span>
                  </a>

                  <a
                    href={venueConfig.socials.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#EAE2D5] text-xs font-semibold text-[#1A1F1C] hover:border-[#C5A059]"
                  >
                    <Facebook className="w-3.5 h-3.5 text-blue-600" />
                    <span>/roshalgardenpune</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EAE2D5] shadow-xs">
              <div className="p-4 border-b border-[#FAF7F2] flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-[#0A1C12] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>Google Maps Location</span>
                </span>
                <a
                  href={venueConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#123320] hover:text-[#C5A059] flex items-center gap-1"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="aspect-[16/10] w-full">
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
      </div>
    </div>
  );
};
