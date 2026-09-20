import React from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const GoogleRatingBar: React.FC = () => {
  return (
    <section className="bg-neutral-900 border-y border-neutral-800 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-6 rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          
          {/* Left: Google Rating Badge */}
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-md shrink-0">
              {/* Google G logo stylized */}
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-white font-['Outfit']">{GYM_DETAILS.googleRating}</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Verified Score
                </span>
              </div>
              <p className="text-sm font-semibold text-neutral-200">
                Top Rated Gym in Solapur on Google Reviews
              </p>
              <p className="text-xs text-neutral-400">
                Based on 184+ authentic member ratings & transformation testimonials
              </p>
            </div>
          </div>

          {/* Center: Key highlights pill */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto">
            <div className="bg-neutral-900/90 border border-neutral-800 px-3.5 py-2 rounded-xl text-center">
              <p className="text-lg font-bold text-red-400">98%</p>
              <p className="text-[11px] text-neutral-400">Client Satisfaction</p>
            </div>
            <div className="bg-neutral-900/90 border border-neutral-800 px-3.5 py-2 rounded-xl text-center">
              <p className="text-lg font-bold text-amber-400">10+ Yrs</p>
              <p className="text-[11px] text-neutral-400">Prop Coaching</p>
            </div>
            <div className="bg-neutral-900/90 border border-neutral-800 px-3.5 py-2 rounded-xl text-center col-span-2 sm:col-span-1">
              <p className="text-lg font-bold text-white">#1 Choice</p>
              <p className="text-[11px] text-neutral-400">Inner Ring Rd</p>
            </div>
          </div>

          {/* Right: CTA to read or write review */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              id="google-review-action-btn"
              href="#reviews"
              className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-neutral-700 transition-colors"
            >
              <span>See Member Stories</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
