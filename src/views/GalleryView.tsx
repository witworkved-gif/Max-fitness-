import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, Dumbbell, Shield, CheckCircle } from 'lucide-react';
import { GALLERY_ITEMS, GYM_DETAILS } from '../data/gymData';
import { GalleryItem } from '../types';

interface GalleryViewProps {
  onOpenTrialModal: () => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenTrialModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'facility', label: 'Gym Floor & Entrance' },
    { id: 'equipment', label: 'Heavy Iron & Machines' },
    { id: 'training', label: 'Training In Action' },
    { id: 'transformations', label: 'Member Transformations' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  return (
    <div className="py-10 animate-in fade-in duration-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 bg-purple-950/80 border border-purple-800/40 text-purple-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Inside Max Fitness Solapur</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-['Outfit'] tracking-tight">
          Facility Tour & Equipment Gallery
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          Inspect our spacious training floor on Inner Ring Road, featuring commercial grade Olympic benches, heavy dumbbell racks up to 40kg, plate-loaded strength stations, and real member results.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center overflow-x-auto pb-2 scrollbar-none">
        <div className="bg-neutral-900/90 border border-neutral-800 p-1.5 rounded-2xl inline-flex gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-red-500/50 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
            
            <div className="absolute bottom-0 inset-x-0 p-5 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded">
                {item.category}
              </span>
              <h4 className="text-base font-bold text-white font-['Outfit'] mt-1.5 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-neutral-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Equipment Inventory Showcase */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-10 text-left space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
              <Dumbbell className="w-5 h-5 text-red-500 -rotate-45" />
              Equipment & Facility Specifications
            </h3>
            <p className="text-xs text-neutral-400">
              High-durability biomechanic machinery tuned for progressive hypertrophy and joint safety.
            </p>
          </div>
          <span className="text-xs font-semibold bg-red-950 text-red-400 border border-red-800/40 px-3 py-1 rounded-full w-fit">
            Solapur Inner Ring Rd
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-neutral-300">
          <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 space-y-1.5">
            <p className="font-bold text-white">Free Weights Zone</p>
            <ul className="space-y-1 text-neutral-400">
              <li>• Rubber Hex Dumbbells: 2.5kg to 40kg</li>
              <li>• Olympic Bars (20kg brass bushing)</li>
              <li>• 1000kg+ Cast Iron & Bumper Plates</li>
            </ul>
          </div>

          <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 space-y-1.5">
            <p className="font-bold text-white">Power & Racks</p>
            <ul className="space-y-1 text-neutral-400">
              <li>• Heavy Steel Power Squat Cage</li>
              <li>• Flat, Incline & Decline Benches</li>
              <li>• Deadlift Platform with sound dampening</li>
            </ul>
          </div>

          <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 space-y-1.5">
            <p className="font-bold text-white">Cable & Hypertrophy</p>
            <ul className="space-y-1 text-neutral-400">
              <li>• Dual Adjustable Cable Cross Tower</li>
              <li>• Lat Pulldown & Seated Cable Row</li>
              <li>• Leg Press 45° (500kg load capacity)</li>
            </ul>
          </div>

          <div className="bg-neutral-950 p-4 rounded-2xl border border-neutral-800/80 space-y-1.5">
            <p className="font-bold text-white">Cardio & Hygiene</p>
            <ul className="space-y-1 text-neutral-400">
              <li>• Commercial Motorized Treadmills</li>
              <li>• Spin Bikes for HIIT cardio conditioning</li>
              <li>• Lockers, Changing Rooms & Water Station</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-neutral-950">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 text-left bg-neutral-900 border-t border-neutral-800">
              <span className="text-[10px] uppercase font-bold text-red-400 bg-red-950/80 px-2.5 py-0.5 rounded border border-red-800/40">
                {selectedPhoto.category}
              </span>
              <h3 className="text-xl font-bold text-white font-['Outfit'] mt-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={onOpenTrialModal}
          className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/30 cursor-pointer"
        >
          Book Free 1-Day Trial To Visit In Person
        </button>
      </div>

    </div>
  );
};
