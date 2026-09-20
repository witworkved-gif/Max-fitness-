import React from 'react';
import { Award, CheckCircle2, MessageCircle, Phone, Sparkles, Trophy, Star, ShieldCheck, HeartPulse } from 'lucide-react';
import { TRAINERS, GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

interface TrainersViewProps {
  onOpenTrialModal: () => void;
}

export const TrainersView: React.FC<TrainersViewProps> = ({ onOpenTrialModal }) => {
  return (
    <div className="py-10 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
          <Award className="w-3.5 h-3.5" />
          <span>Certified Solapur Fitness Mentors</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
          Meet Your Coaches & Diet Specialists
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Behind every successful transformation is disciplined coaching. Under the guidance of Proprietor Shripad Sugare, our team ensures every rep is performed with anatomical accuracy and daily accountability.
        </p>
      </div>

      {/* Head Coach Spotlight Card */}
      <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-2 border-red-600/70 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest px-6 py-2 rounded-bl-3xl shadow-md flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proprietor & Head Strength Coach</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-0">
          
          {/* Photo */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-neutral-700 shadow-2xl max-w-sm mx-auto group">
              <img
                src={TRAINERS[0].image}
                alt={TRAINERS[0].name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  MAX FITNESS SOLAPUR
                </span>
                <p className="text-white font-black text-xl mt-1">{TRAINERS[0].name}</p>
                <p className="text-xs text-red-300">📞 {TRAINERS[0].contactNumber}</p>
              </div>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-8 space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                {TRAINERS[0].experience} • Solapur Fitness Pioneer
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                {TRAINERS[0].name}
              </h2>
              <p className="text-sm font-semibold text-neutral-300">
                {TRAINERS[0].role}
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {TRAINERS[0].bio}
            </p>

            <blockquote className="border-l-2 border-red-500 pl-3 text-xs italic text-neutral-300">
              &ldquo;Fitness is not a 30-day quick fix. As our gym motto says, Your Body Is The Reflection Of Your Daily Habits. If you give me discipline on the gym floor and honesty on your plate, I will guarantee your transformation.&rdquo;
            </blockquote>

            {/* Specialties & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2 bg-neutral-900/90 p-4 rounded-2xl border border-neutral-800">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Expertise & Specialties:</p>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {TRAINERS[0].specialization.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 bg-neutral-900/90 p-4 rounded-2xl border border-neutral-800">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Official Certifications:</p>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {TRAINERS[0].certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={createWhatsAppLink(`Hello Coach Shripad Sugare! I would like to consult you regarding 1-on-1 personal training and diet at Max Fitness Solapur.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Coach Shripad ({GYM_DETAILS.phone})</span>
              </a>
              <a
                href={`tel:${GYM_DETAILS.phone}`}
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2 transition-colors border border-neutral-700"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Other Coaches Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white font-['Outfit'] text-left">
          Certified Fitness & Nutrition Specialists
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.slice(1).map((trainer) => (
            <div
              key={trainer.id}
              className="bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-3xl overflow-hidden text-left flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-[10px] font-semibold px-2.5 py-0.5 rounded border border-neutral-800">
                    {trainer.experience}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h4 className="text-xl font-bold text-white font-['Outfit']">{trainer.name}</h4>
                    <p className="text-xs font-semibold text-red-400">{trainer.role}</p>
                  </div>

                  <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">
                    {trainer.bio}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Specialties:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialization.map((spec, i) => (
                        <span key={i} className="text-[10px] bg-neutral-800 text-neutral-300 px-2.5 py-0.5 rounded-md border border-neutral-700/60">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-800/80 mt-4">
                <a
                  href={createWhatsAppLink(`Hello Coach Shripad, I would like to enquire about training sessions with ${trainer.name} at Max Fitness Solapur.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 bg-neutral-800 hover:bg-emerald-600 hover:text-white text-neutral-200 text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                  <span>Enquire for {trainer.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Max Fitness Coaching */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-left space-y-4">
        <h4 className="text-lg font-bold text-white font-['Outfit'] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-red-500" />
          The Max Fitness Coaching Standards
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
            <p className="font-bold text-white">Injury-Free Biomechanics</p>
            <p className="text-neutral-400">Strict form enforcement on deadlifts, squats, and overhead presses to protect your joints and spine.</p>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
            <p className="font-bold text-white">Authentic Maharashtrian Diets</p>
            <p className="text-neutral-400">We construct balanced macro meal plans using accessible local foods—eggs, paneer, sprouts, bhakri, and dal.</p>
          </div>
          <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-1">
            <p className="font-bold text-white">Daily Floor Presence</p>
            <p className="text-neutral-400">Our coaches do not sit behind a desk—they actively walk the floor, spot lifters, and correct lifting mechanics.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
