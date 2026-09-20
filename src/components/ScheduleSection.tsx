import React, { useState } from 'react';
import { Clock, Calendar, Flame, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { CLASS_SCHEDULES, GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

export const ScheduleSection: React.FC = () => {
  const [selectedShift, setSelectedShift] = useState<'All' | 'Morning' | 'Evening'>('All');
  const [selectedDay, setSelectedDay] = useState<string>('All');

  const days = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const filteredSchedule = CLASS_SCHEDULES.filter((item) => {
    const shiftMatch = selectedShift === 'All' || item.category === selectedShift;
    const dayMatch = selectedDay === 'All' || item.days.includes(selectedDay);
    return shiftMatch && dayMatch;
  });

  const getIntensityBadge = (intensity: string) => {
    switch (intensity) {
      case 'High':
        return <span className="bg-red-950 text-red-400 border border-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><Flame className="w-3 h-3" /> High Intensity</span>;
      case 'Medium':
        return <span className="bg-amber-950 text-amber-400 border border-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Moderate Intensity</span>;
      default:
        return <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">All Fitness Levels</span>;
    }
  };

  return (
    <section id="schedule" className="py-20 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span>Dual Shift Routine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Daily Workout & Class Schedules
          </h2>
          <p className="text-base text-neutral-300">
            Choose your preferred time between 5:30 AM to 10:00 AM (Morning) or 5:00 PM to 10:00 PM (Evening). Walk in at any time or train with our coach-led structured batches.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="bg-neutral-900/90 border border-neutral-800 p-4 rounded-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Shift Filter (Morning / Evening / All) */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-center">
            <span className="text-xs text-neutral-400 font-medium mr-1 hidden sm:inline">Shift:</span>
            {(['All', 'Morning', 'Evening'] as const).map((shift) => (
              <button
                key={shift}
                onClick={() => setSelectedShift(shift)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedShift === shift
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
                }`}
              >
                {shift === 'All' ? 'All Shifts' : `${shift} (${shift === 'Morning' ? '5:30–10 AM' : '5–10 PM'})`}
              </button>
            ))}
          </div>

          {/* Day of Week Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs text-neutral-400 font-medium mr-1 hidden sm:inline">Day:</span>
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedDay === day
                    ? 'bg-neutral-100 text-neutral-950 font-bold'
                    : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

        </div>

        {/* Schedule List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 transition-all hover:bg-neutral-900 hover:shadow-xl text-left flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-neutral-800 text-neutral-200 text-xs font-bold px-3 py-1 rounded-lg border border-neutral-700">
                      <Clock className="w-3.5 h-3.5 text-red-400" />
                      {item.time}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {item.category} Shift
                    </span>
                  </div>
                  {getIntensityBadge(item.intensity)}
                </div>

                <h3 className="text-lg font-bold text-white font-['Outfit']">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="bg-neutral-950 px-2.5 py-1 rounded-md text-red-400 border border-neutral-800 font-medium">
                    🎯 Focus: {item.focus}
                  </span>
                  <span className="bg-neutral-950 px-2.5 py-1 rounded-md text-neutral-300 border border-neutral-800">
                    🏋️ Coach: {item.trainer}
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>Days: {item.days.join(', ')}</span>
                </div>

                <a
                  href={createWhatsAppLink(`Hello Coach Shripad, I want to attend the '${item.title}' (${item.time}) batch at Max Fitness Solapur.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Reserve Spot</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Open Floor Note */}
        <div className="mt-10 p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 flex items-center gap-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Free-Form Workout Flexibility</p>
            <p className="text-xs text-neutral-400">
              Prefer working out independently? You can drop in any time between 5:30 AM–10:00 AM or 5:00 PM–10:00 PM and follow your own customized program. Floor trainers are always available to spot and assist you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
