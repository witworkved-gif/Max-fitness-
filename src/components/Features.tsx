import React from 'react';
import { Dumbbell, Flame, Apple, Users, ShieldCheck, Clock, Check } from 'lucide-react';
import { GYM_FACILITIES, GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

export const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-red-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-emerald-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-purple-500" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-red-400" />;
      default:
        return <Dumbbell className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <span>Built For Serious Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Facilities & Training Services in Solapur
          </h2>
          <p className="text-base text-neutral-400">
            From beginners stepping into the gym for the first time to competitive lifters, Max Fitness delivers an empowering environment led by Coach {GYM_DETAILS.proprietor}.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GYM_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between group"
            >
              <div className="space-y-4 text-left">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-neutral-800 transition-all">
                  {getIcon(facility.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] tracking-wide">
                  {facility.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {facility.description}
                </p>

                <div className="pt-2 space-y-2">
                  {facility.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <div className="w-4 h-4 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-medium">Included in all plans</span>
                <a
                  href={createWhatsAppLink(`Hi Coach Shripad, I want to know more about the ${facility.title} at Max Fitness Solapur.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Enquire via WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Timings Highlight Banner */}
        <div className="mt-14 bg-gradient-to-r from-red-950/40 via-neutral-900 to-neutral-900 border border-red-900/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Convenient Shift Timings</span>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
              Morning & Evening Batches Designed for Solapur Schedules
            </h4>
            <p className="text-sm text-neutral-300 max-w-xl">
              Morning shift opens at 5:30 AM for early birds, students, and morning professionals. Evening shift continues till 10:00 PM with constant trainer floor support.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <div className="bg-neutral-950/80 border border-neutral-800 px-4 py-3 rounded-xl">
              <p className="text-xs text-neutral-400">Morning Shift</p>
              <p className="text-base font-bold text-white">{GYM_DETAILS.timings.morning}</p>
            </div>
            <div className="bg-neutral-950/80 border border-neutral-800 px-4 py-3 rounded-xl">
              <p className="text-xs text-neutral-400">Evening Shift</p>
              <p className="text-base font-bold text-white">{GYM_DETAILS.timings.evening}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
