import React, { useState } from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { Utensils, Printer, Download, Sparkles, Check, Coffee, Flame, ShieldAlert, Award, Phone } from 'lucide-react';

interface CateringSectionProps {
  onOpenEnquiry?: () => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onOpenEnquiry }) => {
  const [activeMenuTab, setActiveMenuTab] = useState<'veg' | 'nonveg'>('veg');

  const { catering } = venueConfig;

  const handlePrintMenu = () => {
    window.print();
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 text-[#123320] text-xs font-semibold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>In-House Culinary Excellence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C12]">
            Grand Banquet Catering & Dining
          </h2>
          <p className="text-sm sm:text-base text-[#5C6A62] mt-3 leading-relaxed">
            From regal traditional Maharashtrian wedding feasts to live global counters and rich North Indian royal curries. Cooked fresh by seasoned master chefs on our estate.
          </p>
        </div>

        {/* Essential Positioning Clarification: Event Catering vs Restaurant Dining */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#EAE2D5] flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#123320] text-[#C5A059] flex items-center justify-center shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">For Events & Banquets</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1C12] mt-0.5">
                Full-Scale Event Banquet Catering
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6A62] mt-1.5 leading-relaxed">
                Dedicated multi-station catering for 150 to 1,500+ guests. Includes live chaat stations, tandoori grills, buffet layouts, royal brass chafing ware, and uniformed service staff.
              </p>
              <div className="mt-3 text-xs font-semibold text-[#123320]">
                Covered in all wedding & event proposals.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#C5A059]/40 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/15 text-[#123320] flex items-center justify-center shrink-0 border border-[#C5A059]/40">
              <Coffee className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#123320]">For Casual Dining</span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1C12] mt-0.5">
                Roshal Garden Restaurant
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6A62] mt-1.5 leading-relaxed">
                Our distinct garden restaurant operates separately from banquet events. Enjoy family dining, garden seating, and delicious a-la-carte lunch and dinners without interfering with ongoing private celebrations.
              </p>
              <div className="mt-3 text-xs font-medium text-[#5C6A62] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Table reservations: Call +91 9850543449</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Range Qualification Cards */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#EAE2D5] mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#EAE2D5] gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">Standard Per-Plate Tariff</span>
              <h3 className="font-serif text-2xl font-bold text-[#0A1C12] mt-0.5">
                Catering Tariff & Plate Packages
              </h3>
              <p className="text-xs text-[#5C6A62] mt-1">
                {catering.pricingNote}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrintMenu}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#EAE2D5] text-[#123320] text-xs font-bold hover:border-[#C5A059] cursor-pointer shadow-xs transition-all"
              >
                <Printer className="w-4 h-4 text-[#C5A059]" />
                <span>Print / Save Sample PDF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Vegetarian Plate */}
            <div className="bg-white rounded-xl p-6 border border-[#EAE2D5]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700">Royal Pure Vegetarian</span>
                <span className="w-3 h-3 rounded-full bg-green-600 ring-2 ring-green-100" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#123320] mt-2">
                {catering.vegPerPlateStartingFrom}
              </div>
              <p className="text-xs text-[#5C6A62] mt-1">
                Includes 2 Welcome Drinks, 3 Starters, 3 Mains, 2 Dal/Rice, 3 Breads, 2 Desserts + Live Counter.
              </p>
            </div>

            {/* Non-Vegetarian Plate */}
            <div className="bg-white rounded-xl p-6 border border-[#EAE2D5]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">Gourmet Non-Vegetarian & Fusion</span>
                <span className="w-3 h-3 rounded-full bg-red-600 ring-2 ring-red-100" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#123320] mt-2">
                {catering.nonVegPerPlateStartingFrom}
              </div>
              <p className="text-xs text-[#5C6A62] mt-1">
                Includes 2 Welcome Drinks, 4 Starters (Chicken/Mutton/Fish), 4 Mains, Biryani, Assorted Breads & 2 Desserts.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Sample Menus */}
        <div className="bg-white rounded-2xl border border-[#EAE2D5] shadow-xs overflow-hidden">
          {/* Menu Switcher Tabs */}
          <div className="flex border-b border-[#EAE2D5] bg-[#FAF7F2]">
            <button
              onClick={() => setActiveMenuTab('veg')}
              className={`flex-1 py-4 text-center font-serif text-base sm:text-lg font-bold transition-all cursor-pointer ${
                activeMenuTab === 'veg'
                  ? 'bg-white text-[#123320] border-t-2 border-[#123320]'
                  : 'text-[#5C6A62] hover:text-[#0A1C12]'
              }`}
            >
              Royal Vegetarian Sample Menu
            </button>
            <button
              onClick={() => setActiveMenuTab('nonveg')}
              className={`flex-1 py-4 text-center font-serif text-base sm:text-lg font-bold transition-all cursor-pointer ${
                activeMenuTab === 'nonveg'
                  ? 'bg-white text-[#123320] border-t-2 border-[#123320]'
                  : 'text-[#5C6A62] hover:text-[#0A1C12]'
              }`}
            >
              Regal Non-Vegetarian Sample Menu
            </button>
          </div>

          {/* Menu Courses Grid */}
          <div className="p-6 sm:p-10 print-section">
            <div className="text-center mb-8">
              <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                Roshal Garden Curated Menu
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12] mt-1">
                {activeMenuTab === 'veg' ? 'Traditional & Contemporary Vegetarian Feast' : 'Grand Mughlai & Coastal Non-Vegetarian Feast'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6A62] mt-1">
                All recipes can be customized to Maharashtrian, North Indian, Jain, or Gujarati preferences.
              </p>
            </div>

            {activeMenuTab === 'veg' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Welcome Drinks */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Welcome Refreshments
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleVegMenu.welcomeDrinks.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Starters */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Hot Starters & Kebabs
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleVegMenu.starters.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mains */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Signature Main Courses
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleVegMenu.mains.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rice & Breads */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Breads & Fragrant Rice
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleVegMenu.riceAndBreads.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Counters */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Live Culinary Stations
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleVegMenu.liveCounters.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desserts */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Royal Desserts & Mithai
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleVegMenu.desserts.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Welcome Drinks */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Welcome Drinks
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleNonVegMenu.welcomeDrinks.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Starters */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Charcoal Kebabs & Tandoor
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleNonVegMenu.starters.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mains */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5] mb-3">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Mughlai & Heritage Curries
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleNonVegMenu.mains.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rice & Breads */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Dum Biryanis & Tandoori Breads
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleNonVegMenu.riceAndBreads.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Stations */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Live Grill & Tawa Counters
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleNonVegMenu.liveCounters.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desserts */}
                <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#EAE2D5]">
                  <h4 className="font-serif text-base font-bold text-[#123320] pb-2 border-b border-[#EAE2D5] mb-3">
                    Royal Desserts
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#333D37]">
                    {catering.sampleNonVegMenu.desserts.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Catering Standards & Action */}
        <div className="mt-12 text-center">
          {onOpenEnquiry && (
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-3.5 rounded-xl bg-[#123320] hover:bg-[#19452C] text-[#FAF7F2] font-semibold text-sm sm:text-base shadow-md cursor-pointer transition-all inline-flex items-center gap-2"
            >
              <span>Schedule a Chef Tasting & Custom Quote</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
