import React, { useState } from 'react';
import { Check, Flame, MessageCircle, Sparkles, Shield, Gift } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_DETAILS, createWhatsAppLink } from '../data/gymData';
import { MembershipPlan } from '../types';

interface MembershipPlansProps {
  onOpenTrialModal: () => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onOpenTrialModal }) => {
  const [selectedBilling, setSelectedBilling] = useState<'standard' | 'annual'>('standard');

  const handleEnroll = (plan: MembershipPlan) => {
    const text = `Hello Coach Shripad Sugare! I would like to enroll in the ${plan.name} (₹${plan.price}) at Max Fitness Gym, Inner Ring Road, Solapur. Please let me know how to proceed with payment and timing slot.`;
    window.open(createWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="memberships" className="py-20 bg-neutral-900/60 border-t border-neutral-800 text-neutral-100 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Transparent Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Membership Plans at Max Fitness Gym
          </h2>
          <p className="text-base text-neutral-300">
            No hidden admission fees. All memberships include full floor access, morning & evening flexibility, locker privileges, and trainer floor supervision.
          </p>

          {/* Special Student & Group Offer Banner */}
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-medium px-4 py-1.5 rounded-full shadow-sm mt-2">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>Special 10% Student & Pair Discount available upon showing College ID!</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.slice(0, 3).map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-neutral-900 border-2 border-red-600 shadow-2xl shadow-red-950/60 lg:-translate-y-2'
                  : 'bg-neutral-950/90 border border-neutral-800 hover:border-neutral-700'
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
                  <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider">Plan Inclusions:</p>
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
                  id={`plan-enroll-${plan.id}-btn`}
                  onClick={() => handleEnroll(plan)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.isPopular
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30'
                      : 'bg-neutral-800 hover:bg-neutral-700 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enroll via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-neutral-400">
                  Instant response from Prop: {GYM_DETAILS.proprietor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Plans Row: 12-Month Annual & 1-on-1 Personal Training */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MEMBERSHIP_PLANS.slice(3).map((plan) => (
            <div
              key={plan.id}
              className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-7 flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{plan.tag}</span>
                    <h3 className="text-2xl font-bold text-white font-['Outfit']">{plan.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white font-['Outfit']">₹{plan.price}</span>
                    <span className="text-xs text-neutral-400">/ {plan.duration}</span>
                    {plan.originalPrice && (
                      <span className="text-xs text-neutral-400 line-through">₹{plan.originalPrice}</span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-neutral-300">{plan.idealFor}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed guidance & progress tracking</span>
                </div>
                <button
                  id={`plan-enroll-${plan.id}-btn`}
                  onClick={() => handleEnroll(plan)}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire {plan.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Trial Callout */}
        <div className="mt-12 bg-neutral-900/90 border border-neutral-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Not sure which plan is right for you?</h4>
            <p className="text-xs text-neutral-300">Experience our iron, cardio section, and friendly Solapur crowd with a zero-cost 1-Day Trial Pass.</p>
          </div>
          <button
            id="membership-free-trial-btn"
            onClick={onOpenTrialModal}
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Claim Free Trial Pass
          </button>
        </div>

      </div>
    </section>
  );
};
