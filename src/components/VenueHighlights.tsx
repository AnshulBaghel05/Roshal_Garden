import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { Trees, Building2, Car, Zap, Sparkles, HeartHandshake, ArrowRight, ShieldCheck, DoorOpen } from 'lucide-react';

interface VenueHighlightsProps {
  onSelectEventType: (eventType: string) => void;
  onOpenEnquiry: () => void;
}

export const VenueHighlights: React.FC<VenueHighlightsProps> = ({ onSelectEventType, onOpenEnquiry }) => {
  const eventTypes = [
    {
      id: 'wedding',
      title: 'Royal Weddings & Varmala',
      category: 'Weddings',
      image: '/images/hero_wedding_lawn.jpg',
      description: 'Lush 18,000 sq ft lawn for open-air mandaps under the stars, plus majestic guest dining.',
      capacity: 'Up to 1,200+ guests'
    },
    {
      id: 'reception',
      title: 'Grand Evening Receptions',
      category: 'Receptions',
      image: '/images/evening_reception_lawn.jpg',
      description: 'Chic canopy lighting, royal stage backdrops, multi-cuisine catering, and ambient sound.',
      capacity: '300 to 1,500 guests'
    },
    {
      id: 'sangeet',
      title: 'Sangeet, Haldi & Birthdays',
      category: 'Celebrations',
      image: '/images/banquet_hall.jpg',
      description: 'Air-conditioned 3,000 sq ft hall perfect for DJ dance floors, sound setups, and intimate dining.',
      capacity: '150 to 350 guests'
    },
    {
      id: 'corporate',
      title: 'Corporate Galas & Seminars',
      category: 'Corporate',
      image: '/images/corporate_conference.jpg',
      description: 'Prime connectivity along Bhosari industrial hub. Acoustic hall, presentation staging & dining.',
      capacity: '100 to 450 delegates'
    },
    {
      id: 'college',
      title: 'College Fests & Youth Meets',
      category: 'Youth & Alumni',
      image: '/images/college_fest.jpg',
      description: 'Sprawling secure green grounds for cultural annual gatherings, farewells, and reunions.',
      capacity: 'Up to 1,000 guests'
    },
    {
      id: 'restaurant',
      title: 'On-Site Garden Restaurant',
      category: 'Dining',
      image: '/images/buffet_dining.jpg',
      description: 'Distinct family dining facility for authentic regional & tandoori cuisine without event overlap.',
      capacity: 'Table reservations daily'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Infrastructure Facts Strip */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Estate Specifications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1C12]">
              Engineered for Effortless Celebrations
            </h2>
            <p className="text-sm sm:text-base text-[#5C6A62] mt-2">
              Every detail planned for guest comfort, logistics reliability, and royal photography.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#EAE2D5] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#123320] text-[#C5A059] shrink-0">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0A1C12]">18,000 sq ft Open Lawn</h3>
                <p className="text-xs sm:text-sm text-[#5C6A62] mt-1 leading-relaxed">
                  Lush, level natural turf with British border gardens, capable of accommodating massive mandaps and 1,200+ guests.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EAE2D5] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#123320] text-[#C5A059] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0A1C12]">3,000 sq ft AC Banquet Hall</h3>
                <p className="text-xs sm:text-sm text-[#5C6A62] mt-1 leading-relaxed">
                  Pillarless, high-ceiling climate-controlled hall with ambient chandelier lighting, ideal for sangeet or senior seating.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EAE2D5] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#123320] text-[#C5A059] shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0A1C12]">Ample Valet Parking</h3>
                <p className="text-xs sm:text-sm text-[#5C6A62] mt-1 leading-relaxed">
                  Dedicated on-site parking lot for 150+ vehicles with organized traffic wardens on Pune-Nashik highway.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EAE2D5] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#123320] text-[#C5A059] shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0A1C12]">100% DG Generator Backup</h3>
                <p className="text-xs sm:text-sm text-[#5C6A62] mt-1 leading-relaxed">
                  Heavy-duty silent generators ensuring uninterrupted illumination, air-conditioning, and sound during crucial rituals.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EAE2D5] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#123320] text-[#C5A059] shrink-0">
                <DoorOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0A1C12]">Private Bridal Green Rooms</h3>
                <p className="text-xs sm:text-sm text-[#5C6A62] mt-1 leading-relaxed">
                  Two air-conditioned dressing suites with full vanity mirrors, comfortable rest lounges, and private washrooms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#EAE2D5] shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#123320] text-[#C5A059] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0A1C12]">British & Indian Heritage</h3>
                <p className="text-xs sm:text-sm text-[#5C6A62] mt-1 leading-relaxed">
                  Carefully conceptualized by founder Ms C.K. Sharma with 25 years of UK hospitality experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Types Cards */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#EAE2D5]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                Versatile Hosting
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12]">
                Events Tailored to Perfection
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5C6A62] mt-2 sm:mt-0">
              Select an event type to pre-fill your enquiry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event) => (
              <div
                key={event.id}
                onClick={() => onSelectEventType(event.title)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#EAE2D5] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A1C12]/80 backdrop-blur-xs text-[#FAF7F2] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-white/20">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-xl font-bold text-[#0A1C12] group-hover:text-[#123320] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C6A62] mt-1.5 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#FAF7F2] text-xs">
                  <span className="text-[#123320] font-semibold">{event.capacity}</span>
                  <span className="text-[#C5A059] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
