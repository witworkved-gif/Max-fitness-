import React, { useState } from 'react';
import { Star, MessageCircle, CheckCircle2, ThumbsUp, Sparkles, Filter, Plus, ShieldCheck } from 'lucide-react';
import { GYM_REVIEWS, GYM_DETAILS, createWhatsAppLink } from '../data/gymData';
import { GymReview } from '../types';

export const ReviewsView: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<GymReview[]>(GYM_REVIEWS);
  const [activeFilter, setActiveFilter] = useState<number | 'all'>('all');
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // New review form states
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('Inner Ring Road, Solapur');
  const [rating, setRating] = useState(5);
  const [program, setProgram] = useState('Weight Loss & Strength');
  const [feedback, setFeedback] = useState('');

  const filteredReviews = activeFilter === 'all'
    ? reviewsList
    : reviewsList.filter((r) => r.rating === activeFilter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !feedback.trim()) return;

    const newRev: GymReview = {
      id: `rev-${Date.now()}`,
      name: authorName.trim(),
      rating: rating,
      date: 'Just now',
      comment: feedback.trim(),
      tag: program,
      verified: true,
      memberSince: authorLocation.trim() || 'Solapur',
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsWriteModalOpen(false);
    setAuthorName('');
    setFeedback('');
  };

  return (
    <div className="py-10 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-amber-950/80 border border-amber-800/40 text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>Google Verified Reviews • 4.8 Rating</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
          What Solapur Says About Max Fitness
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Over 184 genuine reviews from local lifters, working professionals, college students, and athletes training at our Inner Ring Road facility under Coach Shripad Sugare.
        </p>
      </div>

      {/* Google Rating Big Scoreboard */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Big Score Box */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-2 border-b lg:border-b-0 lg:border-r border-neutral-800 pb-6 lg:pb-0 lg:pr-8">
            <div className="inline-flex items-center gap-2 bg-neutral-950 px-3 py-1 rounded-full border border-neutral-800 text-xs text-neutral-300 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Google Maps Verified Page</span>
            </div>
            
            <div className="flex items-baseline justify-center lg:justify-start gap-3">
              <span className="text-6xl sm:text-7xl font-black text-white font-['Outfit']">4.8</span>
              <div className="text-left">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-1">Based on 184+ Solapur Reviews</p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 pt-2">
              98% of reviewers recommend Max Fitness for hygiene, coach availability, and serious training atmosphere.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-md shadow-red-600/30"
              >
                <Plus className="w-4 h-4" />
                <span>Write a Solapur Review</span>
              </button>
            </div>
          </div>

          {/* Star Distribution Breakdown */}
          <div className="lg:col-span-8 space-y-2.5 text-left">
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">Rating Distribution:</p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-semibold text-neutral-300">5 Stars</span>
                <div className="flex-1 h-3 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                  <div className="h-full bg-amber-400 rounded-full w-[86%]" />
                </div>
                <span className="w-10 text-right font-mono text-neutral-400">86%</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-semibold text-neutral-300">4 Stars</span>
                <div className="flex-1 h-3 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                  <div className="h-full bg-amber-500/80 rounded-full w-[12%]" />
                </div>
                <span className="w-10 text-right font-mono text-neutral-400">12%</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-semibold text-neutral-300">3 Stars</span>
                <div className="flex-1 h-3 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                  <div className="h-full bg-neutral-600 rounded-full w-[2%]" />
                </div>
                <span className="w-10 text-right font-mono text-neutral-400">2%</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-semibold text-neutral-300">2 Stars</span>
                <div className="flex-1 h-3 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                  <div className="h-full bg-neutral-700 rounded-full w-[0%]" />
                </div>
                <span className="w-10 text-right font-mono text-neutral-400">0%</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-semibold text-neutral-300">1 Star</span>
                <div className="flex-1 h-3 bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                  <div className="h-full bg-neutral-700 rounded-full w-[0%]" />
                </div>
                <span className="w-10 text-right font-mono text-neutral-400">0%</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Review Filter Buttons */}
      <div className="flex justify-between items-center flex-wrap gap-4 border-b border-neutral-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400 font-medium">Filter:</span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
              activeFilter === 'all' ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400'
            }`}
          >
            All Reviews ({reviewsList.length})
          </button>
          <button
            onClick={() => setActiveFilter(5)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer ${
              activeFilter === 5 ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400'
            }`}
          >
            5-Star Only
          </button>
        </div>

        <span className="text-xs text-neutral-400">
          Showing {filteredReviews.length} verified testimonials
        </span>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 text-left flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-neutral-400">{rev.date}</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed italic">
                &ldquo;{rev.comment}&rdquo;
              </p>

              {rev.tag && (
                <div className="pt-2">
                  <span className="text-[10px] font-semibold bg-neutral-950 text-neutral-300 px-2.5 py-1 rounded-md border border-neutral-800">
                    🎯 {rev.tag}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white font-['Outfit']">{rev.name}</p>
                <p className="text-[10px] text-neutral-400">{rev.memberSince || 'Inner Ring Road'}</p>
              </div>

              {rev.verified && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review Modal */}
      {isWriteModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsWriteModalOpen(false)}
        >
          <div
            className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-left shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-black text-white font-['Outfit'] mb-1">
              Add Your Max Fitness Review
            </h3>
            <p className="text-xs text-neutral-300 mb-6">
              Share your workout experience at our Inner Ring Road, Solapur center.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kadam"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Star Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
                    <option value={3}>⭐⭐⭐ 3 Stars</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">Area / Locality</label>
                  <input
                    type="text"
                    placeholder="e.g. Jule Solapur"
                    value={authorLocation}
                    onChange={(e) => setAuthorLocation(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Review</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us about the trainers, equipment, hygiene, or your fitness results..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm py-3 rounded-xl cursor-pointer shadow-lg shadow-red-600/30"
                >
                  Publish Review
                </button>
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold px-4 py-3 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Share Direct WhatsApp Feedback */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-center space-y-3">
        <p className="text-sm font-bold text-white">Have feedback or questions for Head Coach Shripad Sugare?</p>
        <a
          href={createWhatsAppLink('Hello Shripad Sir, I have a question/feedback regarding Max Fitness Solapur.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Send direct WhatsApp feedback to 7768965260</span>
        </a>
      </div>

    </div>
  );
};
