import React, { useState } from 'react';
import { Clock, Calendar, Flame, Users, MessageCircle, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLASS_SCHEDULES, GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

interface ScheduleViewProps {
  onOpenTrialModal: () => void;
}

export const ScheduleView: React.FC<ScheduleViewProps> = ({ onOpenTrialModal }) => {
  const [selectedShift, setSelectedShift] = useState<'All' | 'Morning' | 'Evening'>('All');
  const [selectedDay, setSelectedDay] = useState<string>('All');

  const days = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const filteredSchedule = CLASS_SCHEDULES.filter((item) => {
    const shiftMatch = selectedShift === 'All' || item.category === selectedShift;
    const dayMatch = selectedDay === 'All' || item.days.includes(selectedDay);
    return shiftMatch && dayMatch;
  });

  return (
    <div className="py-10 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-950/80 border border-amber-800/40 text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
          <Clock className="w-3.5 h-3.5" />
          <span>Dual Shift Timetable • Solapur</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
          Gym Batches & Class Schedule
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Open 6 days a week with dual shifts. Morning batch runs from <strong>5:30 AM to 10:00 AM</strong> and evening batch from <strong>5:00 PM to 10:00 PM</strong>. Train on your own time or join our coach-led structured batches.
        </p>
      </div>

      {/* Shifts Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 rounded-3xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Early Bird & Morning</span>
            <span className="bg-red-950 text-red-300 text-[10px] font-bold px-2 py-0.5 rounded border border-red-800/40">Active</span>
          </div>
          <p className="text-2xl font-black text-white font-['Outfit']">5:30 AM – 10:00 AM</p>
          <p className="text-xs text-neutral-400">
            Ideal for students, morning professionals, and runners. Fresh air, minimal wait times on squat racks and benches.
          </p>
        </div>

        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 rounded-3xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Evening & Prime Hours</span>
            <span className="bg-amber-950 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-800/40">High Energy</span>
          </div>
          <p className="text-2xl font-black text-white font-['Outfit']">5:00 PM – 10:00 PM</p>
          <p className="text-xs text-neutral-400">
            High motivation atmosphere with active spotting by Coach Shripad Sugare and team. Heavy lifting and cardio circuits.
          </p>
        </div>

        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-6 rounded-3xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Sunday Schedule</span>
            <span className="bg-emerald-950 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-800/40">Recovery</span>
          </div>
          <p className="text-2xl font-black text-white font-['Outfit']">6:00 AM – 10:00 AM</p>
          <p className="text-xs text-neutral-400">
            Special morning recovery, mobility stretching, and personal consultations. Evening closed for deep equipment maintenance.
          </p>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-neutral-900/90 border border-neutral-800 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Shift Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-center">
          <span className="text-xs text-neutral-400 font-medium mr-1 hidden sm:inline">Shift:</span>
          {(['All', 'Morning', 'Evening'] as const).map((shift) => (
            <button
              key={shift}
              onClick={() => setSelectedShift(shift)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedShift === shift
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              {shift === 'All' ? 'All Shifts' : `${shift} Batch`}
            </button>
          ))}
        </div>

        {/* Day Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
          <span className="text-xs text-neutral-400 font-medium mr-1 hidden sm:inline">Day:</span>
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
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

      {/* Schedule Batches List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSchedule.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 text-left flex flex-col justify-between transition-all hover:shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-neutral-800 text-neutral-200 text-xs font-bold px-3 py-1 rounded-xl border border-neutral-700">
                  <Clock className="w-3.5 h-3.5 text-red-400" />
                  {item.time}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  item.intensity === 'High'
                    ? 'bg-red-950 text-red-400 border-red-800'
                    : 'bg-amber-950 text-amber-400 border-amber-800'
                }`}>
                  {item.intensity} Intensity
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-['Outfit']">
                {item.title}
              </h3>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-neutral-950 px-2.5 py-1 rounded-lg text-red-400 border border-neutral-800 font-medium">
                  🎯 Focus: {item.focus}
                </span>
                <span className="bg-neutral-950 px-2.5 py-1 rounded-lg text-neutral-300 border border-neutral-800">
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
                href={createWhatsAppLink(`Hello Coach Shripad! I want to join the '${item.title}' batch (${item.time}) at Max Fitness Solapur.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Reserve Batch Spot</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Gym Floor Protocol & Tips */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-left space-y-4">
        <h4 className="text-lg font-bold text-white font-['Outfit'] flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-red-500" />
          Gym Floor Etiquette & Training Advice
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-neutral-300">
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 space-y-1">
            <p className="font-bold text-white">Clean Shoes & Towel</p>
            <p className="text-neutral-400">Please carry clean indoor workout shoes and a personal sweat towel to keep the gym hygienic.</p>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 space-y-1">
            <p className="font-bold text-white">Rerack Your Weights</p>
            <p className="text-neutral-400">Always return dumbbells and Olympic plates to their designated racks after finishing your sets.</p>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/80 space-y-1">
            <p className="font-bold text-white">Ask For Spotting</p>
            <p className="text-neutral-400">Proprietor Shripad Sugare and floor trainers are always ready to spot your heavy bench or squats.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={onOpenTrialModal}
          className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/30 cursor-pointer"
        >
          Book Your Free 1-Day Trial Slot
        </button>
      </div>

    </div>
  );
};
