import React, { useState } from 'react';
import { Phone, MessageCircle, Star, Menu, X, Clock, MapPin, Dumbbell, Sparkles } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

interface NavbarProps {
  onOpenTrialModal: () => void;
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal, activeSection, onSelectSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'memberships', label: 'Memberships', badge: 'Plans' },
    { id: 'schedule', label: 'Batches' },
    { id: 'trainers', label: 'Coaches' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews', badge: '4.8★' },
    { id: 'calculator', label: 'BMI & Diet' },
    { id: 'contact', label: 'Location & Map' },
  ];

  const handleSelect = (id: string) => {
    onSelectSection(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-xl">
      {/* Top Utility Announcement Bar */}
      <div className="bg-neutral-900/90 border-b border-neutral-800 text-[11px] sm:text-xs text-neutral-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Inner Ring Road, Solapur</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Morning 5:30–10 AM | Evening 5–10 PM</span>
            </span>
            <button
              onClick={() => handleSelect('reviews')}
              className="flex items-center gap-1 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-medium transition-colors cursor-pointer"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>4.8 Google Rating (184+ Solapur Reviews)</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-neutral-400 hidden md:inline">Prop: {GYM_DETAILS.proprietor}</span>
            <a
              id="header-call-btn"
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex items-center gap-1 text-neutral-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="font-semibold tracking-wide">{GYM_DETAILS.formattedPhone}</span>
            </a>
            <a
              id="header-whatsapp-top-link"
              href={createWhatsAppLink('Hello Coach Shripad Sugare! I am visiting the Max Fitness Gym Solapur website and want details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleSelect('home')}
            className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-600/30 border border-red-500/40 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-7 h-7 text-white transform -rotate-45" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tight text-white font-['Outfit']">
                  MAX<span className="text-red-500">FITNESS</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-red-600/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded">
                  SOLAPUR
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-neutral-400 uppercase font-medium line-clamp-1">
                Your Body Is The Reflection Of Your Daily Habits
              </span>
            </div>
          </button>

          {/* Desktop Section Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-2xl border border-neutral-800">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleSelect(sec.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeSection === sec.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <span>{sec.label}</span>
                {sec.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold uppercase ${
                    activeSection === sec.id
                      ? 'bg-white text-red-600'
                      : sec.badge.includes('4.8')
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-red-950 text-red-400 border border-red-800/40'
                  }`}>
                    {sec.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-free-trial-btn"
              onClick={onOpenTrialModal}
              className="bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Free 1-Day Pass</span>
            </button>
            <a
              id="nav-whatsapp-direct-btn"
              href={createWhatsAppLink('Hello Coach Shripad Sugare! I want to visit Max Fitness Gym Solapur.')}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-semibold px-3 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none cursor-pointer border border-neutral-800"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-left">
            <div>
              <p className="text-[11px] text-neutral-400">Head Coach & Prop:</p>
              <p className="text-sm font-bold text-white">{GYM_DETAILS.proprietor}</p>
            </div>
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="text-xs bg-red-600/20 text-red-400 border border-red-500/30 px-2.5 py-1.5 rounded-lg font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> {GYM_DETAILS.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleSelect(sec.id)}
                className={`text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === sec.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'
                }`}
              >
                <span>{sec.label}</span>
                {sec.badge && (
                  <span className="text-[9px] bg-black/40 px-1.5 py-0.5 rounded text-white">
                    {sec.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full bg-red-600 hover:bg-red-500 text-white text-center py-3 rounded-xl font-bold text-xs"
            >
              Claim Free Pass
            </button>
            <a
              href={createWhatsAppLink('Hello Coach Shripad! I am contacting you from the Max Fitness Gym Solapur mobile site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
