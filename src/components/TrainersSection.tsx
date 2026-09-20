import React from 'react';
import { Award, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { TRAINERS, GYM_DETAILS, createWhatsAppLink } from '../data/gymData';

export const TrainersSection: React.FC = () => {
  return (
    <section id="trainers" className="py-20 bg-neutral-900/40 border-t border-neutral-800 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <Award className="w-3.5 h-3.5" />
            <span>Experienced & Certified Mentors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Meet Your Max Fitness Coaches
          </h2>
          <p className="text-base text-neutral-300">
            Led by Proprietor Shripad Sugare, our certified trainers guide your form, motivate your daily habits, and craft nutritional roadmaps that produce measurable changes.
          </p>
        </div>

        {/* Head Coach Highlight Card */}
        <div className="mb-14 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-2 border-red-600/60 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Founder & Head Coach</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-neutral-700 shadow-xl max-w-sm mx-auto">
                <img
                  src={TRAINERS[0].image}
                  alt={TRAINERS[0].name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                    MAX FITNESS PROPRIETOR
                  </span>
                  <p className="text-white font-extrabold text-lg mt-1">{TRAINERS[0].name}</p>
                  <p className="text-xs text-red-300">📞 {TRAINERS[0].contactNumber}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 text-left space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                  {TRAINERS[0].experience} • Solapur Fitness Leader
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                  {TRAINERS[0].name}
                </h3>
                <p className="text-sm font-semibold text-neutral-300">
                  {TRAINERS[0].role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {TRAINERS[0].bio}
              </p>

              {/* Specializations & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Expertise & Specialties:</p>
                  <ul className="space-y-1 text-xs text-neutral-300">
                    {TRAINERS[0].specialization.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Accreditations:</p>
                  <ul className="space-y-1 text-xs text-neutral-300">
                    {TRAINERS[0].certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct WhatsApp Call with Coach Shripad */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  id="trainer-shripad-whatsapp-btn"
                  href={createWhatsAppLink(`Hello Coach Shripad Sugare! I want to consult you regarding personal fitness training and diet at Max Fitness Solapur.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Consultation with Shripad Sir ({GYM_DETAILS.phone})</span>
                </a>
                <a
                  href={`tel:${GYM_DETAILS.phone}`}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-colors border border-neutral-700"
                >
                  <Phone className="w-3.5 h-3.5 text-red-400" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Certified Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.slice(1).map((trainer) => (
            <div
              key={trainer.id}
              className="bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden text-left flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-[10px] font-semibold px-2 py-0.5 rounded border border-neutral-800">
                    {trainer.experience}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h4 className="text-xl font-bold text-white font-['Outfit']">{trainer.name}</h4>
                    <p className="text-xs font-medium text-red-400">{trainer.role}</p>
                  </div>

                  <p className="text-xs text-neutral-300 line-clamp-3">
                    {trainer.bio}
                  </p>

                  <div className="pt-2">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1.5">Specialties:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialization.map((spec, i) => (
                        <span key={i} className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded border border-neutral-700/60">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-800/80 mt-4">
                <a
                  href={createWhatsAppLink(`Hello Coach Shripad, I am interested in training with ${trainer.name} at Max Fitness Solapur.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 bg-neutral-800 hover:bg-emerald-600 hover:text-white text-neutral-200 text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                  <span>Inquire for {trainer.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
