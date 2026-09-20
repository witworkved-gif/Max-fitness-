import React from 'react';
import { Star, ArrowRight, MessageCircle, Flame, Dumbbell, ShieldCheck, Clock, MapPin, Trophy, Users, CheckCircle, ChevronRight } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink, MEMBERSHIP_PLANS, CLASS_SCHEDULES } from '../data/gymData';

interface HomeViewProps {
  onOpenTrialModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onOpenTrialModal, onNavigate }) => {
  return (
    <div className="space-y-16 pb-16 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-neutral-950 pt-6 pb-12">
        {/* Ambient Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/40 via-neutral-950 to-neutral-950 pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-red-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={() => onNavigate('reviews')}
                  className="inline-flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/30 px-3.5 py-1.5 rounded-full shadow-sm transition-colors cursor-pointer"
                >
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">4.8 Rating on Google</span>
                  <span className="text-neutral-400 text-xs">(184+ Reviews)</span>
                </button>

                <div className="inline-flex items-center gap-1.5 bg-red-950/60 border border-red-800/40 px-3 py-1.5 rounded-full text-xs font-semibold text-red-400">
                  <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Inner Ring Road, Solapur</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-['Outfit'] uppercase leading-[1.08]">
                  Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-500">Strongest Habits</span> At Max Fitness.
                </h1>
                
                <div className="border-l-4 border-red-600 pl-4 py-1">
                  <p className="text-lg sm:text-xl font-bold tracking-wide text-neutral-200 uppercase">
                    &ldquo;{GYM_DETAILS.tagline}&rdquo;
                  </p>
                  <p className="text-xs font-medium text-neutral-400 tracking-wider uppercase mt-0.5">
                    Proprietor: <span className="text-white font-semibold">{GYM_DETAILS.proprietor}</span> | Contact: {GYM_DETAILS.phone}
                  </p>
                </div>
              </div>

              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
                Solapur&apos;s trusted fitness center for heavy iron strength training, cardiovascular fat burn, and personalized Maharashtrian diet consultation. Daily batches from 5:30 AM to 10:00 PM.
              </p>

              {/* Service Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Weight Training', 'Cardio Section', 'Diet Consultation', 'Certified Coaches', 'Women Batches'].map((s, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-neutral-900/90 text-neutral-300 border border-neutral-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm"
                  >
                    <Flame className="w-3 h-3 text-red-500" />
                    {s}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  id="home-hero-trial-btn"
                  onClick={onOpenTrialModal}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-xl shadow-red-600/30 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book Free 1-Day Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="home-hero-whatsapp-btn"
                  href={createWhatsAppLink(`Hello Coach Shripad Sugare! I am interested in joining Max Fitness Gym Solapur. Please share membership details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>WhatsApp (7768965260)</span>
                </a>

                <button
                  onClick={() => onNavigate('memberships')}
                  className="text-neutral-300 hover:text-white font-semibold text-sm px-4 py-3 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 transition-colors cursor-pointer"
                >
                  View Membership Plans
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <span>100% Certified Form Guidance</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Morning 5:30-10 AM & Evening 5-10 PM</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span>4.8 Google Star Rating</span>
                </span>
              </div>
            </div>

            {/* Right Column: Visual Gym Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl group">
                  <div className="aspect-[4/5] w-full relative">
                    <img
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                      alt="Max Fitness Gym Solapur Floor"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                    
                    {/* Replicated Storefront Signboard */}
                    <div className="absolute top-4 left-4 right-4 bg-neutral-950/90 backdrop-blur-md p-3.5 rounded-xl border border-neutral-800 shadow-lg">
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

                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">
                        SOLAPUR FACILITY
                      </span>
                      <p className="text-white font-bold text-base mt-1">High-Precision Barbells & Free Weights</p>
                      <p className="text-xs text-neutral-300">Located on Inner Ring Road with active batch supervision.</p>
                    </div>
                  </div>
                </div>

                {/* Floating Rating Pill */}
                <button
                  onClick={() => onNavigate('reviews')}
                  className="absolute -bottom-5 -left-4 sm:-left-6 bg-neutral-900/95 backdrop-blur-md p-4 rounded-xl border border-neutral-800 shadow-2xl max-w-[210px] text-left hover:border-amber-500/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-lg font-black text-white">4.8</span>
                    <span className="text-xs text-neutral-400">/ 5.0 Google Score</span>
                  </div>
                  <p className="text-xs font-semibold text-neutral-200">184+ Verified Ratings</p>
                  <p className="text-[10px] text-neutral-400">Click to read Solapur member reviews →</p>
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Specific Sections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Explore Dedicated Sections</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
            Everything You Need To Achieve Peak Fitness
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            Click any section below to browse detailed schedules, transparent rates, trainer profiles, and member results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: Memberships */}
          <div
            onClick={() => onNavigate('memberships')}
            className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/60 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-red-950/30 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                ₹
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-red-400 transition-colors">
                Membership Packages
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                From 1-Month Starter (₹1,200) to 3-Month Transformation (₹3,000) and Annual Plans. Includes free diet charts and flexible freezes.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-red-400 font-semibold">
              <span>View All Rates & Inclusions</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Schedule */}
          <div
            onClick={() => onNavigate('schedule')}
            className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/60 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-red-950/30 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-amber-400 transition-colors">
                Batches & Daily Timetable
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Explore morning (5:30–10 AM) and evening (5–10 PM) shifts. Targeted splits for chest, back, legs, HIIT cardio, and women fitness.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-amber-400 font-semibold">
              <span>Check Class Schedules</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Trainers */}
          <div
            onClick={() => onNavigate('trainers')}
            className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/60 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-red-950/30 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-blue-400 transition-colors">
                Trainers & Coach Shripad
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Meet Proprietor Shripad Sugare (ISSA Master Coach) and certified strength & nutrition coaches. Dedicated personal training options.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-blue-400 font-semibold">
              <span>Meet Coach Profiles</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Gallery */}
          <div
            onClick={() => onNavigate('gallery')}
            className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-600/60 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-red-950/30 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-500 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-purple-400 transition-colors">
                Gym Gallery & Floor Tour
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Browse our Olympic barbells, heavy dumbbell racks up to 40kg, cable towers, cardio stations, and inspiring transformation photos.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-purple-400 font-semibold">
              <span>Browse Photo Gallery</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Reviews */}
          <div
            onClick={() => onNavigate('reviews')}
            className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/60 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-amber-950/30 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-amber-400 transition-colors">
                Google 4.8★ Reviews
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Verified reviews from 184+ Solapur members praising our hygienic atmosphere, serious lifters, and Shripad Sir&apos;s personal attention.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-amber-400 font-semibold">
              <span>Read 184+ Solapur Reviews</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: BMI & Diet */}
          <div
            onClick={() => onNavigate('calculator')}
            className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-emerald-600/60 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-emerald-950/30 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                BMI & Nutrition Planner
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Calculate your BMI, daily calorie target, and protein needs. Share directly with Coach Shripad on WhatsApp for a custom diet chart.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-emerald-400 font-semibold">
              <span>Launch Fitness Calculator</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

      {/* Featured Popular Plan Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-950/50 via-neutral-900 to-neutral-900 border-2 border-red-600/70 rounded-3xl p-6 sm:p-10 text-left shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              MOST POPULAR IN SOLAPUR
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              3-Month Transformation Package — ₹3,000
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Includes full floor & cardio access (Morning & Evening), custom Maharashtrian diet chart by Coach Shripad, bi-weekly body fat measurement, and WhatsApp form assistance.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-neutral-300 pt-1">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-red-500" /> Free Diet Chart</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-red-500" /> No Admission Fee</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-red-500" /> Student Friendly</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <a
              href={createWhatsAppLink('Hello Coach Shripad! I want to join the 3-Month Transformation Plan (₹3,000) at Max Fitness Solapur.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enroll via WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate('memberships')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-neutral-700 transition-colors cursor-pointer"
            >
              Compare All Plans
            </button>
          </div>
        </div>
      </section>

      {/* Quick Location Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white font-['Outfit']">Visit Us on Inner Ring Road, Solapur</h4>
              <p className="text-xs sm:text-sm text-neutral-300">{GYM_DETAILS.address}</p>
              <p className="text-xs text-neutral-400">Hours: Morning 5:30–10:00 AM | Evening 5:00–10:00 PM • Call: {GYM_DETAILS.phone}</p>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full md:w-auto bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs px-5 py-3 rounded-xl border border-neutral-700 transition-colors cursor-pointer"
            >
              View Full Map & Route
            </button>
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="w-full md:w-auto bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-colors text-center"
            >
              Call 7768965260
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
