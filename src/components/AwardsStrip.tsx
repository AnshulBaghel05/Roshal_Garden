import React from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { Award, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export const AwardsStrip: React.FC = () => {
  return (
    <section className="bg-[#123320] text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D8B775] font-semibold mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Industry Recognition & Standards</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
            Awards & Quality Accreditations
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            Captioned with issuing bodies, category, and verified standards for complete client transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {venueConfig.awards.map((award) => (
            <div
              key={award.id}
              className="bg-white/5 border border-[#C5A059]/30 rounded-2xl p-6 relative overflow-hidden backdrop-blur-xs flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1C12] border border-[#C5A059]/50 flex items-center justify-center text-[#D8B775]">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-xl font-bold text-[#D8B775]">
                    {award.year}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-[#D8B775] font-semibold mb-1">
                  {award.category}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                  {award.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs space-y-1">
                <div className="text-white/80">
                  <span className="text-white/50">Conferred by: </span>
                  <span className="font-medium text-white">{award.issuer}</span>
                </div>
                {award.notes && (
                  <div className="text-[11px] text-[#D8B775]/90 font-mono pt-1">
                    {award.notes}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
