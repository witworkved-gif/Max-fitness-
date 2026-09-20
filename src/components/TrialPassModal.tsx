import React, { useState } from 'react';
import { X, Dumbbell, CheckCircle2, MessageCircle, Share2, Calendar, Clock, MapPin, Download } from 'lucide-react';
import { GYM_DETAILS, createWhatsAppLink } from '../data/gymData';
import { TrialPass } from '../types';

interface TrialPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialPassModal: React.FC<TrialPassModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [slot, setSlot] = useState('Morning (5:30 AM – 8:00 AM)');
  const [goal, setGoal] = useState('General Workout Experience');
  const [generatedPass, setGeneratedPass] = useState<TrialPass | null>(null);

  if (!isOpen) return null;

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const randomId = `MF-SLP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newPass: TrialPass = {
      passId: randomId,
      fullName: fullName.trim(),
      phone: phone.trim(),
      preferredSlot: slot,
      goal: goal,
      bookingDate: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      status: 'confirmed',
    };

    setGeneratedPass(newPass);
  };

  const handleSendToWhatsApp = () => {
    if (!generatedPass) return;
    const text = `Hello Coach Shripad Sugare! I have generated my Free 1-Day Trial Pass for Max Fitness Gym Solapur:
- Pass ID: ${generatedPass.passId}
- Name: ${generatedPass.fullName}
- Contact: ${generatedPass.phone}
- Preferred Shift: ${generatedPass.preferredSlot}
- Goal: ${generatedPass.goal}

Please confirm my free trial slot!`;

    window.open(createWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!generatedPass ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
                <Dumbbell className="w-6 h-6 -rotate-45" />
              </div>
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                  100% Free • No Obligation
                </span>
                <h3 className="text-2xl font-black text-white font-['Outfit']">
                  Claim Free 1-Day Trial Pass
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
              Step inside Max Fitness Gym on Inner Ring Road, Solapur. Experience our barbell platforms, cardio zone, and friendly guidance from Coach Shripad Sugare for free.
            </p>

            <form onSubmit={handleGeneratePass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Shinde"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  WhatsApp Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Morning (5:30 AM – 7:30 AM)">Morning Early Batch (5:30 AM – 7:30 AM)</option>
                  <option value="Morning (7:30 AM – 10:00 AM)">Morning Regular Batch (7:30 AM – 10:00 AM)</option>
                  <option value="Evening (5:00 PM – 7:30 PM)">Evening Prime Batch (5:00 PM – 7:30 PM)</option>
                  <option value="Evening (7:30 PM – 10:00 PM)">Evening Late Batch (7:30 PM – 10:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Primary Fitness Goal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Fat Loss & Cardio">Weight Loss / Fat Burn</option>
                  <option value="Muscle Building & Strength">Muscle Building & Iron Training</option>
                  <option value="Diet & Body Toning">Diet & General Tone</option>
                  <option value="Just Exploring the Gym">General Gym Experience</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Generate Free VIP Pass</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Pass Generated Digital Card */
          <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
            <div className="inline-flex items-center gap-1.5 bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pass Confirmed & Active</span>
            </div>

            {/* Digital Gym Pass Graphic */}
            <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-2 border-red-600/70 rounded-2xl p-6 text-left relative overflow-hidden shadow-2xl">
              {/* Watermark Barbell */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none text-white">
                <Dumbbell className="w-44 h-44" />
              </div>

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <div>
                  <h4 className="text-lg font-black text-white tracking-wider font-['Outfit']">MAX FITNESS GYM</h4>
                  <p className="text-[10px] text-neutral-400">Solapur • Inner Ring Road</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] bg-red-600 text-white font-black px-2 py-0.5 rounded uppercase">
                    1-DAY PASS
                  </span>
                  <p className="text-[11px] font-mono text-red-400 mt-1 font-bold">{generatedPass.passId}</p>
                </div>
              </div>

              {/* Member Details */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Guest Name:</span>
                  <span className="font-bold text-white">{generatedPass.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Contact:</span>
                  <span className="font-mono text-neutral-200">{generatedPass.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Reserved Slot:</span>
                  <span className="font-semibold text-amber-400">{generatedPass.preferredSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Valid Date:</span>
                  <span className="text-neutral-200">{generatedPass.bookingDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Host / Coach:</span>
                  <span className="text-red-400 font-semibold">{GYM_DETAILS.proprietor}</span>
                </div>
              </div>

              {/* Barcode visual */}
              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                <span>||| | | |||| | ||| |||| |</span>
                <span>SHOW AT RECEPTION</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/30 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Pass with Coach Shripad on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setGeneratedPass(null);
                  onClose();
                }}
                className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
