import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../data/galleryData.ts';
import { venueConfig } from '../config/venueConfig.ts';
import { Instagram, Eye, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  onOpenEnquiry?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'receptions', label: 'Receptions' },
    { id: 'decor', label: 'Decor & Ambience' },
    { id: 'catering', label: 'Catering & Dining' },
    { id: 'lawn', label: 'Lawn & Grounds' },
    { id: 'corporate', label: 'Corporate & Youth' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#EAE2D5]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              Visual Grandeur
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C12]">
              Lawn, Hall & Celebrations Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5C6A62] mt-2 max-w-2xl">
              Explore 18,000 sq ft of lush grounds, 3,000 sq ft banquet interiors, bespoke royal mandaps, and authentic in-house dining arrangements.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href={venueConfig.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#EAE2D5] text-[#123320] text-sm font-semibold hover:border-[#C5A059] shadow-xs hover:shadow transition-all"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span>See Live Stories @roshal_garden</span>
            </a>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#123320] text-[#FAF7F2] shadow-sm'
                    : 'bg-white text-[#5C6A62] hover:text-[#0A1C12] border border-[#EAE2D5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-200 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#D8B775] font-semibold block mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#D8B775] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#123320] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C5A059]/30">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF7F2]">
              Planning an event in Bhosari, Pune?
            </h4>
            <p className="text-sm text-white/80 mt-1">
              Visit Roshal Garden in person for a guided tour of the 18,000 sq ft lawn and 3,000 sq ft banquet hall.
            </p>
          </div>
          {onOpenEnquiry && (
            <button
              onClick={onOpenEnquiry}
              className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#D8B775] text-[#0A1C12] font-bold text-sm whitespace-nowrap shadow-md cursor-pointer transition-all"
            >
              Book an On-Site Tour
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <img
              src={activeItem.image}
              alt={activeItem.alt}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="text-center mt-4 text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#D8B775] font-semibold">
                {activeItem.categoryLabel}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                {activeItem.title}
              </h3>
              <p className="text-sm text-white/80 mt-1 font-light">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
