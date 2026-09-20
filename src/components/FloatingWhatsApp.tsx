import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone, Star } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickText, setQuickText] = useState('');

  const defaultPrompts = [
    'What are the gym membership fees?',
    'I want to book a Free 1-Day Trial Pass.',
    'What are the morning and evening batch timings?',
    'Do you have personal training and diet consultation?',
  ];

  const handleSendCustom = (textToSend: string) => {
    const message = textToSend || quickText || 'Hello Coach Shripad! I want to inquire about Max Fitness Gym Solapur.';
    window.open(createWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick chat popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-left">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-sm">
                MF
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-emerald-700" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">Shripad Sugare</p>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Max Fitness Gym Solapur</span>
                  <span>• Online</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-black/20 text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-neutral-950/80 space-y-3">
            <div className="bg-neutral-900 border border-neutral-800 p-3 rounded-xl rounded-tl-none max-w-[85%] text-xs text-neutral-200">
              <p>
                Namaskar! 🙏 Welcome to Max Fitness Gym Solapur. How can I help you today?
              </p>
              <p className="text-[10px] text-neutral-400 mt-1">Direct WhatsApp to 7768965260</p>
            </div>

            {/* Quick action pill buttons */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Quick Inquiries:</p>
              {defaultPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendCustom(prompt)}
                  className="w-full text-left text-xs bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white px-3 py-2 rounded-xl transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <span className="text-emerald-400 text-xs">→</span>
                </button>
              ))}
            </div>

            {/* Custom input bar */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={quickText}
                onChange={(e) => setQuickText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendCustom(quickText);
                }}
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSendCustom(quickText)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-xl transition-colors cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-105 transition-all cursor-pointer border border-emerald-400/40"
        aria-label="Chat with Coach Shripad on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-emerald-600 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-emerald-600" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs font-bold leading-none">WhatsApp Us</p>
          <p className="text-[10px] text-emerald-100 font-mono mt-0.5">{GYM_DETAILS.phone}</p>
        </div>
      </button>
    </div>
  );
};
