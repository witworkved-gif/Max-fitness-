import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Check, Send, AlertCircle } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

export const LocationContact: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [enquiryType, setEnquiryType] = useState('Membership Rates & Packages');
  const [customMsg, setCustomMsg] = useState('');

  const handleDirectWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hello Coach Shripad Sugare!
My Name: ${senderName.trim() || 'Visitor'}
Enquiry: ${enquiryType}
Message: ${customMsg.trim() || 'Please provide details about Max Fitness Gym Solapur.'}`;

    window.open(createWhatsAppLink(formatted), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950 text-neutral-100 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Solapur Location & Direct Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Visit Max Fitness or WhatsApp Us
          </h2>
          <p className="text-base text-neutral-300">
            Have questions regarding gym fees, workout timings, or diet consultation? Connect with Head Coach Shripad Sugare directly.
          </p>
        </div>

        {/* 2 Column Layout: Details & Map on Left, Direct WhatsApp Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Solapur Inner Ring Road Map */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Direct Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone & Prop Card */}
              <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-xs text-neutral-400 font-medium">Direct Phone & WhatsApp</p>
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="text-lg font-bold text-white hover:text-red-400 transition-colors block mt-0.5"
                >
                  {GYM_DETAILS.formattedPhone}
                </a>
                <p className="text-xs text-neutral-400 mt-1">Prop: {GYM_DETAILS.proprietor}</p>
              </div>

              {/* Hours Card */}
              <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-xs text-neutral-400 font-medium">Daily Gym Hours</p>
                <p className="text-sm font-bold text-white mt-0.5">5:30 AM – 10:00 AM</p>
                <p className="text-sm font-bold text-white">5:00 PM – 10:00 PM</p>
              </div>

            </div>

            {/* Address Card & Map representation */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                    <h3 className="text-lg font-bold text-white font-['Outfit']">Gym Address</h3>
                  </div>
                  <p className="text-sm text-neutral-300 font-medium">
                    {GYM_DETAILS.address}
                  </p>
                  <p className="text-xs text-neutral-400">
                    Located on Inner Ring Road, easily accessible with 2-wheeler and 4-wheeler parking space.
                  </p>
                </div>

                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold px-3 py-2 rounded-xl border border-neutral-700 flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Simulated Map Visual Replicating User's Inner Ring Road Map */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 aspect-[16/9] bg-neutral-950">
                {/* SVG styled road map representation */}
                <svg className="w-full h-full" viewBox="0 0 400 220">
                  <rect width="400" height="220" fill="#171717" />
                  
                  {/* Grid blocks */}
                  <rect x="20" y="20" width="80" height="70" fill="#212121" rx="4" />
                  <rect x="120" y="20" width="100" height="70" fill="#212121" rx="4" />
                  <rect x="240" y="20" width="140" height="70" fill="#212121" rx="4" />
                  <rect x="20" y="110" width="80" height="90" fill="#212121" rx="4" />
                  <rect x="120" y="110" width="100" height="90" fill="#212121" rx="4" />
                  <rect x="240" y="110" width="140" height="90" fill="#212121" rx="4" />

                  {/* Roads */}
                  <line x1="110" y1="0" x2="110" y2="220" stroke="#333333" strokeWidth="12" />
                  <line x1="230" y1="0" x2="230" y2="220" stroke="#333333" strokeWidth="12" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#333333" strokeWidth="14" />
                  
                  {/* Inner Ring Road prominent route in blue tone */}
                  <path d="M 60 0 L 100 220" stroke="#2563EB" strokeWidth="8" opacity="0.75" />
                  
                  {/* Text for Inner Ring Rd */}
                  <g transform="translate(65, 130) rotate(78)">
                    <rect x="-8" y="-12" width="110" height="20" fill="#0A0A0A" rx="4" opacity="0.9" />
                    <text x="0" y="2" fill="#E5E5E5" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                      Inner Ring Rd
                    </text>
                  </g>

                  {/* Marker Pin on Max Fitness */}
                  <g transform="translate(195, 85)">
                    {/* Shadow pulse */}
                    <circle cx="0" cy="18" r="8" fill="#DC2626" opacity="0.3">
                      <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Pin shape */}
                    <path
                      d="M 0 0 C -9 -14 -12 -22 -12 -30 C -12 -42 -4 -50 0 -50 C 4 -50 12 -42 12 -30 C 12 -22 9 -14 0 0 Z"
                      fill="#DC2626"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <circle cx="0" cy="-30" r="5" fill="#FFFFFF" />
                  </g>

                  {/* Pin label */}
                  <g transform="translate(150, 42)">
                    <rect x="-10" y="-18" width="145" height="26" fill="#0A0A0A" stroke="#DC2626" strokeWidth="1" rx="6" />
                    <text x="5" y="-1" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                      MAX FITNESS GYM
                    </text>
                  </g>
                </svg>

                {/* Overlay link to actual map */}
                <a
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-neutral-900/90 hover:bg-neutral-800 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-neutral-700 flex items-center gap-1 shadow-md transition-colors"
                >
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Direct WhatsApp Messaging Form */}
          <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-left shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Direct Line To Coach Shripad
                </span>
                <h3 className="text-2xl font-black text-white font-['Outfit']">
                  Send a WhatsApp Message
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
              Fill in your details below and tap the button to automatically launch WhatsApp with your pre-formatted enquiry directly to <strong className="text-white font-bold">{GYM_DETAILS.phone}</strong>.
            </p>

            <form onSubmit={handleDirectWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sagar Jadhav"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  What are you inquiring about?
                </label>
                <select
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Membership Rates & Packages">Membership Rates & Packages</option>
                  <option value="Free 1-Day Trial Pass">Free 1-Day Trial Pass</option>
                  <option value="Personal Training with Shripad Sir">Personal Training with Shripad Sir</option>
                  <option value="Diet & Nutrition Consultation">Diet & Nutrition Consultation</option>
                  <option value="Women Fitness Batch Details">Women Fitness Batch Details</option>
                  <option value="Student / College Discount">Student / College Discount</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Additional Note (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any specific goal or question (e.g. 'I want to visit tomorrow morning at 6:30 AM')"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="pt-2">
                <button
                  id="contact-whatsapp-send-btn"
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-600/30"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>Send to WhatsApp (+91 7768965260)</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-400 justify-center pt-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant response within 15–30 minutes during gym hours</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
