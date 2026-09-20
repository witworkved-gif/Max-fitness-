import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquare, ThumbsUp, Plus, User } from 'lucide-react';
import { GYM_REVIEWS, GYM_DETAILS } from '../data/gymData';
import { GymReview } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<GymReview[]>(GYM_REVIEWS);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  
  // New review form states
  const [reviewerName, setReviewerName] = useState('');
  const [ratingVal, setRatingVal] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewTag, setReviewTag] = useState('General Fitness');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewComment.trim()) return;

    const newReview: GymReview = {
      id: `rev-${Date.now()}`,
      name: reviewerName.trim(),
      rating: ratingVal,
      date: 'Just now',
      comment: reviewComment.trim(),
      tag: reviewTag,
      verified: true,
      memberSince: 'Solapur Member'
    };

    setReviewsList([newReview, ...reviewsList]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setIsWriteModalOpen(false);
      setReviewerName('');
      setReviewComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 bg-neutral-900/40 border-t border-neutral-800 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-950/80 border border-amber-800/40 text-amber-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>4.8 Rating on Google</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            What Solapur Says About Max Fitness
          </h2>
          <p className="text-base text-neutral-300">
            Real feedback from members who show up every morning and evening on Inner Ring Road to build their best habits.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score Big Display */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-neutral-800 pb-6 md:pb-0 md:pr-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl font-black text-white font-['Outfit'] tracking-tight">4.8</span>
                <span className="text-xl text-neutral-400 font-bold">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-neutral-200">Verified Google Business Rating</p>
              <p className="text-xs text-neutral-400 mt-1">Based on {reviewsList.length + 179} ratings in Solapur</p>
              
              <button
                id="write-google-review-btn"
                onClick={() => setIsWriteModalOpen(true)}
                className="mt-4 inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-red-600/20 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Write a Review</span>
              </button>
            </div>

            {/* Rating Breakdown Bars */}
            <div className="md:col-span-8 space-y-2 text-left">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-neutral-400 font-medium">5 Star</span>
                <div className="flex-1 bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '88%' }} />
                </div>
                <span className="w-10 text-right text-neutral-300 font-bold">88%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-neutral-400 font-medium">4 Star</span>
                <div className="flex-1 bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '10%' }} />
                </div>
                <span className="w-10 text-right text-neutral-300 font-bold">10%</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 text-neutral-400 font-medium">3 Star</span>
                <div className="flex-1 bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '2%' }} />
                </div>
                <span className="w-10 text-right text-neutral-300 font-bold">2%</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="w-12">2 Star</span>
                <div className="flex-1 bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-10 text-right font-bold">0%</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="w-12">1 Star</span>
                <div className="flex-1 bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '0%' }} />
                </div>
                <span className="w-10 text-right font-bold">0%</span>
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 text-left flex flex-col justify-between hover:border-neutral-700 transition-all shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400">{rev.date}</span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-white font-['Outfit']">{rev.name}</p>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </div>
                  <p className="text-[11px] text-neutral-400">{rev.memberSince || 'Verified Solapur Lifter'}</p>
                </div>

                <span className="text-[10px] bg-red-950 text-red-400 border border-red-900/50 px-2 py-0.5 rounded-md font-semibold">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal to Write a Review */}
        {isWriteModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setIsWriteModalOpen(false)}
          >
            <div
              className="bg-neutral-900 border border-neutral-800 max-w-md w-full rounded-2xl p-6 shadow-2xl text-left relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                Share Your Experience at Max Fitness
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Your feedback helps our Solapur fitness community grow!
              </p>

              {submittedMessage ? (
                <div className="p-6 bg-emerald-950/60 border border-emerald-800 rounded-xl text-center space-y-2">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <p className="text-white font-bold">Thank you for your review!</p>
                  <p className="text-xs text-emerald-300">Your review has been posted to our rating board.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kadam"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setRatingVal(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= ratingVal ? 'fill-amber-400' : 'text-neutral-600'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-amber-400 ml-2">{ratingVal} / 5 Stars</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Focus Area</label>
                    <select
                      value={reviewTag}
                      onChange={(e) => setReviewTag(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="Weight Loss">Weight Loss & Transformation</option>
                      <option value="Strength & Hypertrophy">Strength & Muscle Gain</option>
                      <option value="Diet Consultation">Diet & Nutrition Guidance</option>
                      <option value="Women Fitness">Women Fitness Batch</option>
                      <option value="General Fitness">General Fitness & Environment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">Your Review</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Share what you like about the equipment, coaches, or atmosphere..."
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsWriteModalOpen(false)}
                      className="text-xs text-neutral-400 hover:text-white px-4 py-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-lg shadow-red-600/20"
                    >
                      Post Review
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
