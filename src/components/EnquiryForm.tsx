import React, { useState } from 'react';
import { venueConfig } from '../config/venueConfig.ts';
import { Calendar, Users, Phone, User, MessageSquare, CheckCircle2, AlertCircle, ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

interface EnquiryFormProps {
  onSuccessClose?: () => void;
  defaultEventType?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultEventType = 'Wedding',
  className = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState(defaultEventType);
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('300 - 500 Guests');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);

  // Minimum date today
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    if (!eventDate) {
      setError('Please select your prospective event date.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          eventType,
          eventDate,
          guestCount,
          message
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry. Please call us directly.');
      }

      setSuccessData({
        referenceId: data.referenceId,
        message: data.message,
        whatsappUrl: data.whatsappRedirectUrl
      });
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : 'Network error. Please call our desk at 9850543449.';
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setEventDate('');
    setMessage('');
    setSuccessData(null);
    setError(null);
  };

  if (successData) {
    return (
      <div className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#C5A059]/40 shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 bg-[#123320] text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-[#123320]/10">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059]">Enquiry Confirmed</span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12] mt-1 mb-2">
          Thank You, {fullName || 'Valued Guest'}!
        </h3>

        <div className="bg-[#FAF7F2] border border-[#EAE2D5] rounded-xl p-4 my-4 text-left text-sm space-y-2">
          <div className="flex justify-between items-center pb-2 border-b border-[#EAE2D5]">
            <span className="text-[#5C6A62]">Reference ID:</span>
            <span className="font-mono font-bold text-[#123320]">{successData.referenceId}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-[#5C6A62]">
            <span>Event:</span>
            <span className="font-medium text-[#1A1F1C]">{eventType} &middot; {guestCount}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-[#5C6A62]">
            <span>Prospective Date:</span>
            <span className="font-medium text-[#1A1F1C]">{eventDate}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-[#123320] bg-[#123320]/5 py-2.5 px-3 rounded-lg mb-6">
          <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span className="font-medium">{venueConfig.contact.responseTimeNotice}</span>
        </div>

        <div className="space-y-3">
          <a
            href={successData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <span>Speed up reply: Send details on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-[#5C6A62] hover:text-[#123320] underline pt-2 cursor-pointer"
          >
            Submit another enquiry or change details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE2D5] shadow-lg ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Priority Date Booking</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1C12]">
          Check Venue Availability
        </h3>
        <p className="text-sm text-[#5C6A62] mt-1">
          Direct quotes for 18,000 sq ft lawn & banquet hall. <span className="font-medium text-[#123320]">Response guaranteed in under 2 hours.</span>
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1A1F1C] uppercase tracking-wider mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#5C6A62] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Ramesh Patil"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-sm text-[#1A1F1C]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A1F1C] uppercase tracking-wider mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#5C6A62] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-sm text-[#1A1F1C]"
              />
            </div>
          </div>
        </div>

        {/* Event Type & Guest Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1A1F1C] uppercase tracking-wider mb-1.5">
              Event Type <span className="text-red-500">*</span>
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-sm text-[#1A1F1C]"
            >
              <option value="Wedding & Reception">Wedding & Reception</option>
              <option value="Grand Reception Only">Grand Reception Only</option>
              <option value="Engagement / Roka">Engagement / Roka</option>
              <option value="Sangeet / Mehendi / Haldi">Sangeet / Mehendi / Haldi</option>
              <option value="Birthday Party / Anniversary">Birthday Party / Anniversary</option>
              <option value="Corporate Seminar / Annual Gala">Corporate Seminar / Annual Gala</option>
              <option value="College Event / Reunion">College Event / Reunion</option>
              <option value="Baby Shower / Naming Ceremony">Baby Shower / Naming Ceremony</option>
              <option value="Other Celebration">Other Celebration</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A1F1C] uppercase tracking-wider mb-1.5">
              Approx. Guests <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-[#5C6A62] absolute left-3.5 top-3.5 pointer-events-none" />
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-sm text-[#1A1F1C]"
              >
                <option value="Under 150 Guests">Under 150 Guests (Hall)</option>
                <option value="150 - 300 Guests">150 - 300 Guests (Hall / Lawn)</option>
                <option value="300 - 500 Guests">300 - 500 Guests (Lawn + Hall)</option>
                <option value="500 - 900 Guests">500 - 900 Guests (Lawn + Hall)</option>
                <option value="1,000+ Guests">1,000+ Guests (Full Estate)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Date and Optional Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#1A1F1C] uppercase tracking-wider mb-1.5">
              Target Event Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-[#5C6A62] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="date"
                required
                min={todayStr}
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-sm text-[#1A1F1C]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1A1F1C] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-[#5C6A62] font-normal text-[11px]">(Optional for quotation)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. patil@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-sm text-[#1A1F1C]"
            />
          </div>
        </div>

        {/* Special Requirements / Note */}
        <div>
          <label className="block text-xs font-semibold text-[#1A1F1C] uppercase tracking-wider mb-1.5">
            Catering Preferences or Special Requirements
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-[#5C6A62] absolute left-3.5 top-3.5 pointer-events-none" />
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Vegetarian only, need 2 bridal dressing rooms, prefer evening slot..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#EAE2D5] bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-sm text-[#1A1F1C] resize-none"
            />
          </div>
        </div>

        {/* Separation note about restaurant dining */}
        <p className="text-[11px] text-[#5C6A62] bg-[#FAF7F2] p-2.5 rounded-lg border border-[#EAE2D5]">
          <span className="font-semibold text-[#123320]">Note:</span> This form is for lawn & banquet event bookings. For restaurant table dining, please contact our restaurant desk directly on 9850543449.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-[#123320] hover:bg-[#19452C] text-[#FAF7F2] font-semibold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group active:scale-[0.99]"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Check Availability & Get Quote</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        {/* Stated response time & trust note */}
        <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-[#5C6A62]">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Response within 2 hours</span>
          </span>
          <span>&middot;</span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#123320]" />
            <span>Direct owner quote, no middlemen</span>
          </span>
        </div>
      </form>
    </div>
  );
};
