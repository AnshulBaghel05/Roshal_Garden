import React, { useState } from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { GlassWater, Cake, Briefcase, GraduationCap, Users, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface EventsViewProps {
  onOpenEnquiry: (eventType?: string) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onOpenEnquiry }) => {
  const [selectedEventType, setSelectedEventType] = useState<'reception' | 'birthday' | 'corporate' | 'college'>('reception');

  const eventDetails = {
    reception: {
      title: 'Grand Evening Receptions',
      subtitle: 'Festive Illumination, Royal Dining & Sprawling Lawn Atmosphere',
      image: '/images/evening_reception_lawn.jpg',
      capacity: '300 to 1,500 Guests',
      areaUsed: '18,000 sq ft Lawn + 3,000 sq ft Hall',
      highlights: [
        'Dazzling twilight lawn perimeter lighting and grand entry archways',
        'Elevated stage for couple felicitation and photo opportunities',
        'Elaborate multi-station buffet dining with live tandoor and chaat counters',
        'Full indoor air-conditioned backup hall in case of weather variations',
        'Dedicated VIP lounge seating for elders and key guests'
      ]
    },
    birthday: {
      title: 'Birthday Parties, Sangeet & Milestones',
      subtitle: 'Fun, Music, Dynamic DJ Stage & Vibrant Ambience',
      image: '/images/banquet_hall.jpg',
      capacity: '100 to 400 Guests',
      areaUsed: '3,000 sq ft AC Banquet Hall or Garden Veranda',
      highlights: [
        'Air-conditioned hall with wooden dance floor zone and acoustic setup',
        'Themed balloon / floral stage setups for 1st birthdays or 50th silver jubilees',
        'Kid-friendly snack counters (live pasta, mini pizzas, ice creams, mocktails)',
        'Private cake-cutting pedestal and family photo booth backdrop',
        'Complete sound setup for live musicians or DJ'
      ]
    },
    corporate: {
      title: 'Corporate Galas, Awards & Seminars',
      subtitle: 'Prestigious Corporate Hospitality in Bhosari Industrial Hub',
      image: '/images/corporate_conference.jpg',
      capacity: '100 to 500 Delegates',
      areaUsed: 'Banquet Hall + Dining Veranda',
      highlights: [
        'Direct connectivity on Pune-Nashik highway, convenient for MIDC Bhosari and Chakan',
        'Audiovisual readiness with high-lumen projector, screen, and collar mics',
        'Executive corporate lunch or high-tea buffet curated for professionals',
        'Professional stage layout for annual awards, dealer meets & product releases',
        'Hassle-free parking with valet marshals'
      ]
    },
    college: {
      title: 'College Gatherings, Fests & Reunions',
      subtitle: 'Safe, Expansive Open Turf for Cultural Youth Celebrations',
      image: '/images/college_fest.jpg',
      capacity: '300 to 1,000 Students & Alumni',
      areaUsed: '18,000 sq ft Open Lawn',
      highlights: [
        'Massive 18,000 sq ft secured grounds with fenced perimeter and professional security',
        'Stage space for band performances, talent shows, and alumni felicitations',
        'Value-oriented catering packages with street food counters & student favourites',
        'Generous green lawn space for group activities, ceremonies, and drone photos',
        'Cooperative venue management adhering to strict safety and curfew timings'
      ]
    }
  };

  const current = eventDetails[selectedEventType];

  return (
    <div className="bg-[#FAF7F2] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059] block mb-2">
            Multi-Purpose Event Estate
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1C12]">
            Celebrations & Gatherings
          </h1>
          <p className="text-sm sm:text-base text-[#5C6A62] mt-3">
            Whether hosting a 1,000-guest wedding reception or a focused 150-delegate corporate symposium, Roshal Garden adapts seamlessly to your event scale.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-12">
          <button
            onClick={() => setSelectedEventType('reception')}
            className={`p-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedEventType === 'reception'
                ? 'bg-[#123320] text-[#FAF7F2] shadow-md'
                : 'bg-white text-[#5C6A62] border border-[#EAE2D5] hover:text-[#0A1C12]'
            }`}
          >
            <GlassWater className="w-4 h-4 text-[#C5A059]" />
            <span>Receptions</span>
          </button>

          <button
            onClick={() => setSelectedEventType('birthday')}
            className={`p-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedEventType === 'birthday'
                ? 'bg-[#123320] text-[#FAF7F2] shadow-md'
                : 'bg-white text-[#5C6A62] border border-[#EAE2D5] hover:text-[#0A1C12]'
            }`}
          >
            <Cake className="w-4 h-4 text-[#C5A059]" />
            <span>Birthday & Parties</span>
          </button>

          <button
            onClick={() => setSelectedEventType('corporate')}
            className={`p-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedEventType === 'corporate'
                ? 'bg-[#123320] text-[#FAF7F2] shadow-md'
                : 'bg-white text-[#5C6A62] border border-[#EAE2D5] hover:text-[#0A1C12]'
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#C5A059]" />
            <span>Corporate Events</span>
          </button>

          <button
            onClick={() => setSelectedEventType('college')}
            className={`p-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
              selectedEventType === 'college'
                ? 'bg-[#123320] text-[#FAF7F2] shadow-md'
                : 'bg-white text-[#5C6A62] border border-[#EAE2D5] hover:text-[#0A1C12]'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-[#C5A059]" />
            <span>College & Fests</span>
          </button>
        </div>

        {/* Selected Event Detail Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE2D5] shadow-md grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Featured Format
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0A1C12] mt-1">
                {current.title}
              </h2>
              <p className="text-sm text-[#5C6A62] mt-2">
                {current.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-3.5 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#EAE2D5] text-xs font-semibold text-[#123320] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C5A059]" />
                <span>Capacity: {current.capacity}</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#EAE2D5] text-xs font-semibold text-[#123320]">
                Space: {current.areaUsed}
              </div>
            </div>

            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#123320]">
                What Roshal Garden Delivers:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                {current.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenEnquiry(current.title)}
                className="px-6 py-3.5 rounded-xl bg-[#123320] hover:bg-[#19452C] text-[#FAF7F2] font-semibold text-sm shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Enquire for {current.title}</span>
              </button>

              <a
                href={`tel:${venueConfig.contact.primaryPhone}`}
                className="px-5 py-3.5 rounded-xl border border-[#EAE2D5] text-[#123320] font-semibold text-sm hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
              >
                <span>Call Venue Desk</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md bg-stone-200">
            <img
              src={current.image}
              alt={current.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
