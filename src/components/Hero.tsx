import React from 'react';
import { Star, MessageCircle, ArrowRight, ShieldCheck, Flame, Dumbbell, MapPin, Clock, Trophy } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950 pt-8 pb-16">
      {/* Background Graphic Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/40 via-neutral-950 to-neutral-950 pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Subtle glowing orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="#reviews"
                className="inline-flex items-center gap-2 bg-neutral-900/90 border border-amber-500/30 px-3.5 py-1.5 rounded-full shadow-sm hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white tracking-wide">4.8 Rating on Google</span>
                <span className="text-neutral-400 text-xs">(184+ Reviews)</span>
              </a>

              <div className="inline-flex items-center gap-1.5 bg-red-950/60 border border-red-800/40 px-3 py-1.5 rounded-full text-xs font-semibold text-red-400">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>Inner Ring Road, Solapur</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Outfit'] uppercase leading-[1.08]">
                Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-500">Ultimate Body</span> At Max Fitness.
              </h1>
              
              <div className="border-l-4 border-red-600 pl-4 py-1">
                <p className="text-lg sm:text-xl font-bold tracking-wide text-neutral-200 uppercase">
                  &ldquo;{GYM_DETAILS.tagline}&rdquo;
                </p>
                <p className="text-xs font-medium text-neutral-400 tracking-wider uppercase mt-0.5">
                  — Max Fitness Gym Motto | Prop: {GYM_DETAILS.proprietor}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Solapur&apos;s premier strength and fitness arena on Inner Ring Road. Fully equipped with heavy Olympic iron, advanced cardio, personalized Maharashtrian diet plans, and certified coach supervision for proven transformations.
            </p>

            {/* Core Service Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {GYM_DETAILS.services.map((service, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold bg-neutral-900 text-neutral-300 border border-neutral-800 px-3 py-1.5 rounded-md flex items-center gap-1.5"
                >
                  <Flame className="w-3 h-3 text-red-500" />
                  {service}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-free-trial-btn"
                onClick={onOpenTrialModal}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Claim Free 1-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-whatsapp-direct-btn"
                href={createWhatsAppLink(`Hello Coach Shripad Sugare! I saw your Max Fitness Gym Solapur website and want to ask about membership offers and timings.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp: {GYM_DETAILS.phone}</span>
              </a>

              <a
                id="hero-view-plans-link"
                href="#memberships"
                className="text-neutral-300 hover:text-white font-semibold text-sm px-4 py-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 transition-colors"
              >
                View Plans & Pricing
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>100% Certified Form Correction</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Dual Shifts: 5:30-10 AM & 5:00-10 PM</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span>Solapur Bodybuilding & Powerlifting Legacy</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Floating Feature Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with red gradient accent */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl group">
                <div className="aspect-[4/5] sm:aspect-[4/5] w-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                    alt="Max Fitness Gym Solapur Training Floor"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                  
                  {/* Overlay Storefront Badge Replicating Real Banner */}
                  <div className="absolute top-4 left-4 right-4 bg-neutral-950/85 backdrop-blur-md p-3.5 rounded-xl border border-neutral-800/90 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white">
                          <Dumbbell className="w-5 h-5 -rotate-45" />
                        </div>
                        <div>
                          <p className="text-xs font-black tracking-wider text-white uppercase font-['Outfit']">MAX FITNESS GYM</p>
                          <p className="text-[10px] text-neutral-400">Prop: {GYM_DETAILS.proprietor}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/40">
                        📞 {GYM_DETAILS.phone}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">
                      SOLAPUR CENTER
                    </span>
                    <p className="text-white font-bold text-base mt-1">High-Precision Gym Equipment & Power Racks</p>
                    <p className="text-xs text-neutral-300">Located strategically near Inner Ring Road with active batch supervision.</p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1: Google Rating */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-neutral-900/95 backdrop-blur-md p-4 rounded-xl border border-neutral-800 shadow-2xl max-w-[200px] text-left">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-lg font-black text-white">4.8</span>
                  <span className="text-xs text-neutral-400">/ 5.0</span>
                </div>
                <p className="text-xs font-semibold text-neutral-200">Google Verified Rating</p>
                <p className="text-[10px] text-neutral-400">184+ authentic reviews from Solapur lifters</p>
              </div>

              {/* Floating Stat Card 2: Head Coach Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-neutral-900/95 backdrop-blur-md p-3.5 rounded-xl border border-neutral-800 shadow-2xl text-left hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Shripad Sugare</p>
                    <p className="text-[10px] text-neutral-400">Head Coach & Diet Mentor</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
