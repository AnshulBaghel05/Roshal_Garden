import React from 'react';
import { EnquiryForm } from './EnquiryForm.tsx';
import { X } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultEventType = 'Wedding'
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl my-6 bg-transparent">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-2 sm:-right-3 z-10 p-2 rounded-full bg-[#0A1C12] text-white hover:text-[#C5A059] border border-[#C5A059] shadow-lg cursor-pointer transition-all"
          aria-label="Close Enquiry Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <EnquiryForm
          defaultEventType={defaultEventType}
          onSuccessClose={onClose}
          className="shadow-2xl"
        />
      </div>
    </div>
  );
};
