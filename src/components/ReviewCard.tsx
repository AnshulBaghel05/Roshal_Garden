import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

interface ReviewProps {
  review: {
    id: string;
    author: string;
    eventType: string;
    date: string;
    rating: number;
    text: string;
    source: string;
  };
}

export const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
  const isPlaceholder = review.author.includes('[ADD REVIEW');

  return (
    <div className={`p-6 rounded-2xl flex flex-col justify-between transition-all ${
      isPlaceholder
        ? 'bg-[#FAF7F2] border-2 border-dashed border-[#C5A059]/50'
        : 'bg-white border border-[#EAE2D5] shadow-xs hover:shadow-md'
    }`}>
      <div>
        {/* Rating stars & Source */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-[#C5A059]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-stone-300'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-[#5C6A62] flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5 text-[#123320]" />
            <span>{review.source}</span>
          </span>
        </div>

        {/* Review Quote */}
        <p className={`text-sm leading-relaxed mb-4 ${
          isPlaceholder ? 'text-[#8C6D2D] font-mono text-xs' : 'text-[#333D37] italic'
        }`}>
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Author and Event Metadata */}
      <div className="pt-3 border-t border-[#FAF7F2] flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm text-[#0A1C12]">
            {review.author}
          </div>
          <div className="text-xs text-[#5C6A62]">
            {review.eventType}
          </div>
        </div>
        <div className="text-[11px] text-[#5C6A62]">
          {review.date}
        </div>
      </div>
    </div>
  );
};
