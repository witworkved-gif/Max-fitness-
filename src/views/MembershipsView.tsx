import React, { useState } from 'react';
import { Check, Flame, MessageCircle, Sparkles, Shield, Gift, HelpCircle, ArrowRight, CreditCard, Award } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_DETAILS, createWhatsAppLink, FAQS } from '../data/gymData';
import { MembershipPlan } from '../types';

interface MembershipsViewProps {
  onOpenTrialModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const MembershipsView: React.FC<MembershipsViewProps> = ({ onOpenTrialModal, onNavigate }) => {
  const [filterType, setFilterType] = useState<'all' | 'general' | 'personal'>('all');

  const filteredPlans = filterType === 'all'
    ? MEMBERSHIP_PLANS
    : filterType === 'general'
      ? MEMBERSHIP_PLANS.filter((p) => p.id !== 'personal-training')
      : MEMBERSHIP_PLANS.filter((p) => p.id === 'personal-training');

  const handleEnroll = (plan: MembershipPlan) => {
    const text = `Hello Coach Shripad Sugare! I would like to join the ${plan.name} (₹${plan.price}) at Max Fitness Gym, Inner Ring Road, Solapur. Please guide me on payment and batch timings.`;
    window.open(createWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-10 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header / Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Solapur Pricing • No Admission Fee</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
          Max Fitness Membership Plans
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Invest in your physical transformation with flexible, honest membership rates. Full morning and evening access, Olympic barbell racks, cardio decks, and certified coach supervision included.
        </p>

        {/* Special Student & Partner Offer */}
        <div className="inline-flex items-center gap-2 bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-medium px-4 py-2 rounded-xl shadow-md mt-2">
          <Gift className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Special 10% College Student & Workout Buddy discount available on all plans!</span>
        </div>
      </div>

      {/* Plan Type Tabs */}
      <div className="flex justify-center">
        <div className="bg-neutral-900/90 border border-neutral-800 p-1.5 rounded-2xl inline-flex gap-1">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterType === 'all'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Packages ({MEMBERSHIP_PLANS.length})
          </button>
          <button
            onClick={() => setFilterType('general')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterType === 'general'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            General Memberships (1M - 12M)
          </button>
          <button
            onClick={() => setFilterType('personal')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterType === 'personal'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            1-on-1 Personal Training
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
              plan.isPopular
                ? 'bg-neutral-900 border-2 border-red-600 shadow-2xl shadow-red-950/70 lg:-translate-y-2'
                : 'bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-white" />
                <span>Solapur&apos;s #1 Choice</span>
              </div>
            )}

            <div className="space-y-4 text-left">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-['Outfit']">{plan.name}</h3>
                {plan.tag && !plan.isPopular && (
                  <span className="text-[11px] font-semibold bg-neutral-800 text-neutral-300 px-2.5 py-0.5 rounded-full border border-neutral-700">
                    {plan.tag}
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white font-['Outfit']">₹{plan.price}</span>
                <span className="text-xs text-neutral-400">/ {plan.duration}</span>
                {plan.originalPrice && (
                  <span className="text-xs text-neutral-400 line-through">₹{plan.originalPrice}</span>
                )}
              </div>

              <p className="text-xs text-neutral-400 italic">
                Ideal for: {plan.idealFor}
              </p>

              <div className="pt-4 border-t border-neutral-800 space-y-2.5">
                <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Features Included:</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <div className="w-4 h-4 rounded-full bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 space-y-2">
              <button
                onClick={() => handleEnroll(plan)}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  plan.isPopular
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30'
                    : 'bg-neutral-800 hover:bg-emerald-600 hover:text-white text-neutral-200'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Plan via WhatsApp</span>
              </button>
              <p className="text-[11px] text-center text-neutral-400">
                Direct chat with Prop: {GYM_DETAILS.proprietor} ({GYM_DETAILS.phone})
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Plan Feature Comparison Table */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-left shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white font-['Outfit']">Detailed Feature Comparison</h3>
            <p className="text-xs text-neutral-400">Find the right package that matches your fitness commitment.</p>
          </div>
          <span className="text-xs font-semibold text-red-400">All prices include tax</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400">
                <th className="py-3 pr-4 font-semibold">Benefit / Feature</th>
                <th className="py-3 px-3 font-semibold text-center">1 Month (₹1,200)</th>
                <th className="py-3 px-3 font-semibold text-center text-red-400">3 Months (₹3,000)</th>
                <th className="py-3 px-3 font-semibold text-center">6 Months (₹5,200)</th>
                <th className="py-3 px-3 font-semibold text-center text-amber-400">12 Months (₹8,500)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Morning (5:30-10 AM) & Evening (5-10 PM) Access</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Full Free Weights, Racks & Cardio Floor</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Personalized Diet Chart by Coach Shripad</td>
                <td className="py-3 px-3 text-center text-neutral-500">Basic Guide</td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
                <td className="py-3 px-3 text-center"><Check className="w-4 h-4 text-emerald-400 mx-auto" /></td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Body Fat & Metric Assessment</td>
                <td className="py-3 px-3 text-center text-neutral-500">Day 1 only</td>
                <td className="py-3 px-3 text-center text-red-400 font-bold">Every 2 Weeks</td>
                <td className="py-3 px-3 text-center text-emerald-400 font-bold">Bi-weekly</td>
                <td className="py-3 px-3 text-center text-amber-400 font-bold">Monthly Tracking</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Membership Freeze on Travel / Exams</td>
                <td className="py-3 px-3 text-center text-neutral-500">—</td>
                <td className="py-3 px-3 text-center text-neutral-500">—</td>
                <td className="py-3 px-3 text-center font-semibold text-white">15 Days</td>
                <td className="py-3 px-3 text-center font-semibold text-amber-400">30 Days</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Free Guest Passes for Friends</td>
                <td className="py-3 px-3 text-center text-neutral-500">—</td>
                <td className="py-3 px-3 text-center font-semibold text-white">1 Pass</td>
                <td className="py-3 px-3 text-center font-semibold text-white">2 Passes</td>
                <td className="py-3 px-3 text-center font-semibold text-amber-400">Unlimited (3/quarter)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment & Admission Guidance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-2">
          <CreditCard className="w-6 h-6 text-emerald-400" />
          <h4 className="text-base font-bold text-white">Easy Payment Options</h4>
          <p className="text-xs text-neutral-400">
            Pay easily via UPI (Google Pay, PhonePe, Paytm), cash at reception, or direct account transfer. Instant digital receipt issued.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-2">
          <Shield className="w-6 h-6 text-red-500" />
          <h4 className="text-base font-bold text-white">Zero Hidden Charges</h4>
          <p className="text-xs text-neutral-400">
            No registration fee or locker rental fee. The price you see is the final price for full gym privileges.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-2">
          <Award className="w-6 h-6 text-amber-400" />
          <h4 className="text-base font-bold text-white">100% Coach Guidance</h4>
          <p className="text-xs text-neutral-400">
            Proprietor Shripad Sugare and floor trainers are always on the floor to spot your heavy lifts and correct barbell form.
          </p>
        </div>
      </div>

      {/* Action Footer Callout */}
      <div className="bg-gradient-to-r from-red-950/40 via-neutral-900 to-neutral-950 border border-red-900/40 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
        <div>
          <h4 className="text-2xl font-bold text-white font-['Outfit']">Want to try the gym before committing?</h4>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">
            Claim a complimentary 1-Day Free Trial Pass. Drop in at Inner Ring Road, Solapur and test any machine.
          </p>
        </div>
        <button
          onClick={onOpenTrialModal}
          className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shrink-0 cursor-pointer shadow-lg shadow-red-600/30"
        >
          Book 1-Day Free Pass
        </button>
      </div>

    </div>
  );
};
