import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, FileCode, CheckSquare, Sparkles, ExternalLink, Copy, Check } from 'lucide-react';

interface PreLaunchChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreLaunchChecklistModal: React.FC<PreLaunchChecklistModalProps> = ({
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const placeholdersList = [
    {
      category: 'Venue Capacity',
      code: 'venueConfig.venueStats.lawnCapacity',
      current: '[ADD CAPACITY: e.g. 500 – 1,200 guests]',
      action: 'Confirm the official maximum guest limit for the 18,000 sq ft lawn.'
    },
    {
      category: 'Venue Capacity',
      code: 'venueConfig.venueStats.hallCapacity',
      current: '[ADD CAPACITY: e.g. 150 – 300 guests]',
      action: 'Confirm the official seated and floating capacity of the 3,000 sq ft AC hall.'
    },
    {
      category: 'Venue Capacity',
      code: 'venueConfig.venueStats.combinedCapacity',
      current: '[ADD CAPACITY: up to 1,500 guests]',
      action: 'Confirm total simultaneous estate capacity when using lawn + hall together.'
    },
    {
      category: 'Venue Capacity',
      code: 'venueConfig.venueStats.parkingCapacity',
      current: '[ADD CAPACITY: 150+ cars with dedicated valet space]',
      action: 'Confirm exact number of vehicle parking bays available.'
    },
    {
      category: 'Package Pricing',
      code: 'venueConfig.packages[0].priceStartingFrom',
      current: '[ADD PRICE - Contact for season pricing]',
      action: 'Specify Silver Elegance starting rate (or keep as seasonal quote).'
    },
    {
      category: 'Package Pricing',
      code: 'venueConfig.packages[1].priceStartingFrom',
      current: '[ADD PRICE - Contact for customized proposal]',
      action: 'Specify Royal Gold Wedding package baseline tariff.'
    },
    {
      category: 'Package Pricing',
      code: 'venueConfig.packages[2].priceStartingFrom',
      current: '[ADD PRICE - Custom quote based on menu & decor]',
      action: 'Specify Imperial Sovereign buyout baseline tariff.'
    },
    {
      category: 'Catering Per-Plate',
      code: 'venueConfig.catering.vegPerPlateStartingFrom',
      current: '[ADD PRICE: e.g. ₹650 / plate]',
      action: 'Set base vegetarian per-plate price for banquets.'
    },
    {
      category: 'Catering Per-Plate',
      code: 'venueConfig.catering.nonVegPerPlateStartingFrom',
      current: '[ADD PRICE: e.g. ₹850 / plate]',
      action: 'Set base non-vegetarian per-plate price for banquets.'
    },
    {
      category: 'Awards Verification',
      code: 'venueConfig.awards[].notes',
      current: '[ADD OFFICIAL CERTIFICATE DETAILS]',
      action: 'Attach official certificate registration numbers or seal copies.'
    },
    {
      category: 'Client Testimonials',
      code: 'venueConfig.reviews[6 & 7]',
      current: '[ADD REVIEW: Client Name / Details]',
      action: 'Paste latest verified Google or wedding customer review quotes.'
    },
    {
      category: 'Booking Policy',
      code: 'venueConfig.faqs[3].answer',
      current: '[ADD POLICY: e.g. 25% token, 50% one month prior]',
      action: 'Confirm exact advance payment percentage terms.'
    }
  ];

  const checklistItems = [
    {
      title: '1. Form & Lead Delivery Test',
      description: 'Submit a test enquiry from mobile and desktop. Verify entry logs in console/backend, and test 1-tap WhatsApp forwarding link with prefilled details.',
      status: 'Ready for Test'
    },
    {
      title: '2. Real Device & Mobile Viewport Test',
      description: 'Test on iOS Safari and Android Chrome. Ensure sticky bottom bar (WhatsApp / Call / Enquire) is thumb-friendly (>=44px) and doesn’t block content.',
      status: 'Ready for Test'
    },
    {
      title: '3. Google PageSpeed & Lighthouse Verification',
      description: 'Run audit on mobile profile: target Performance 90+, Accessibility 95+, Best Practices 100, SEO 100. Check LCP < 2.5s and CLS < 0.1.',
      status: 'Ready for Test'
    },
    {
      title: '4. Link, Tel & Schema Validation',
      description: 'Validate schema via Google Rich Results Test (LocalBusiness, EventVenue, FAQPage). Verify tel:9850543449, Instagram @roshal_garden, and Google Maps directions.',
      status: 'Ready for Test'
    }
  ];

  const handleCopyPlaceholders = () => {
    const text = placeholdersList.map(p => `[${p.category}] ${p.code}\nValue: ${p.current}\nAction: ${p.action}\n`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#C5A059] shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-200 text-[#5C6A62] cursor-pointer"
          aria-label="Close Checklist Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Roshal Garden Client Handover</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12]">
          Pre-Launch Checklist & Placeholders
        </h2>
        <p className="text-xs sm:text-sm text-[#5C6A62] mt-1 mb-6">
          This panel is for the venue owner (Ms C.K. Sharma & team) and developer to review all marked placeholders and conduct pre-flight launch checks.
        </p>

        {/* Deliverable 3: Placeholders List */}
        <div className="bg-white rounded-xl p-5 border border-[#EAE2D5] mb-8 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE2D5] mb-4">
            <div>
              <h3 className="font-serif font-bold text-lg text-[#123320]">
                Client Data Placeholders to Fill (in `src/config/venueConfig.ts`)
              </h3>
              <p className="text-xs text-[#5C6A62]">
                As per rules, no fictional rates or capacities were invented. Edit these in the single config file.
              </p>
            </div>
            <button
              onClick={handleCopyPlaceholders}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#EAE2D5] text-[#123320] text-xs font-semibold cursor-pointer border border-[#C5A059]/40"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy List'}</span>
            </button>
          </div>

          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {placeholdersList.map((item, idx) => (
              <div key={idx} className="p-3 bg-[#FAF7F2] rounded-lg border border-[#EAE2D5] text-xs">
                <div className="flex items-center justify-between text-[#C5A059] font-semibold mb-1">
                  <span>{item.category}</span>
                  <span className="font-mono text-[10px] text-[#5C6A62]">{item.code}</span>
                </div>
                <div className="font-mono font-bold text-[#8C6D2D] bg-white p-1.5 rounded border border-[#EAE2D5] mb-1">
                  {item.current}
                </div>
                <div className="text-[#333D37]">{item.action}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverable 4: Pre-Launch Checklist */}
        <div className="bg-white rounded-xl p-5 border border-[#EAE2D5] shadow-xs">
          <h3 className="font-serif font-bold text-lg text-[#123320] mb-3 pb-2 border-b border-[#EAE2D5]">
            Technical Pre-Launch Checklist
          </h3>
          <div className="space-y-4">
            {checklistItems.map((check, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="w-6 h-6 rounded-full bg-[#123320] text-[#D8B775] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-[#0A1C12]">{check.title}</div>
                  <div className="text-[#5C6A62] text-xs mt-0.5 leading-relaxed">{check.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#123320] text-white font-semibold text-xs sm:text-sm cursor-pointer hover:bg-[#19452C]"
          >
            Close Checklist
          </button>
        </div>
      </div>
    </div>
  );
};
