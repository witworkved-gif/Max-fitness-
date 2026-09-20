import React from 'react';
import { Dumbbell, Phone, MapPin, Clock, MessageCircle, Star, ShieldCheck, Heart } from 'lucide-react';
import { GYM_DETAILS, FAQS, createWhatsAppLink } from '../data/gymData';

interface FooterProps {
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrialModal }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-left pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top FAQ section */}
        <div className="mb-16 border-b border-neutral-800/80 pb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Frequently Asked Questions</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
              Got Questions Before Joining?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-neutral-900/60 border border-neutral-800 p-5 rounded-2xl space-y-2">
                <p className="text-sm font-bold text-white">{faq.question}</p>
                <p className="text-xs text-neutral-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                <Dumbbell className="w-6 h-6 -rotate-45" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight font-['Outfit']">
                  MAX<span className="text-red-500">FITNESS</span>
                </span>
                <span className="text-[10px] ml-1.5 font-bold uppercase bg-red-950 text-red-400 border border-red-800/40 px-1.5 py-0.5 rounded">
                  SOLAPUR
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 font-medium italic">
              &ldquo;{GYM_DETAILS.tagline}&rdquo;
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Solapur&apos;s premier strength, bodybuilding, and fitness facility on Inner Ring Road. Certified coaching under Proprietor Shripad Sugare for visible, lasting health transformations.
            </p>

            <a
              href="#reviews"
              className="flex items-center gap-2 text-xs text-amber-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 p-2.5 rounded-xl w-fit transition-colors"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.8 Rating</span>
              <span className="text-neutral-400">(184+ Google Reviews)</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Dedicated Sections</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#memberships" className="hover:text-white transition-colors">Membership Packages</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Shift Batches & Timetable</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors">Coaches & Coach Shripad</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Facility & Equipment Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Google 4.8★ Reviews</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">BMI & Diet Calculator</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Location & Solapur Map</a></li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Gym Shifts</p>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div>
                <p className="font-semibold text-white flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-red-500" /> Morning Shift:
                </p>
                <p className="text-neutral-400">{GYM_DETAILS.timings.morning}</p>
              </div>
              <div>
                <p className="font-semibold text-white flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-red-500" /> Evening Shift:
                </p>
                <p className="text-neutral-400">{GYM_DETAILS.timings.evening}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sunday:</p>
                <p className="text-neutral-400">{GYM_DETAILS.timings.sunday}</p>
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Reach Out</p>
            <div className="space-y-2 text-xs">
              <p className="text-white font-semibold">Prop: {GYM_DETAILS.proprietor}</p>
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="flex items-center gap-1.5 text-white hover:text-red-400 font-mono font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                {GYM_DETAILS.formattedPhone}
              </a>
              <a
                href={createWhatsAppLink('Hello Shripad Sir, I have a query about Max Fitness Gym Solapur.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp: {GYM_DETAILS.phone}
              </a>
              <p className="text-neutral-400 flex items-start gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>{GYM_DETAILS.address}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Max Fitness Gym Solapur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTrialModal}
              className="text-red-400 hover:text-red-300 font-medium cursor-pointer"
            >
              Book Free 1-Day Pass
            </button>
            <span>•</span>
            <a
              href={createWhatsAppLink('Hello Shripad Sir!')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium"
            >
              WhatsApp (7768965260)
            </a>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
