import React, { useState } from 'react';
import { Camera, Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'floor', label: 'Gym Floor & Entrance' },
    { id: 'equipment', label: 'Iron & Machines' },
    { id: 'training', label: 'Workout Sessions' },
    { id: 'transformations', label: 'Transformations' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-neutral-950 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            <Camera className="w-3.5 h-3.5" />
            <span>Real Gym Floor Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Max Fitness Gym Gallery
          </h2>
          <p className="text-base text-neutral-300">
            Take a visual tour inside our Solapur facility — heavy dumbbell racks, power cages, cable stations, cardio decks, and inspiring client transformations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer aspect-[4/3] shadow-md hover:border-red-600/60 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white border border-neutral-700">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-white font-bold text-base font-['Outfit'] group-hover:text-red-400 transition-colors">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="p-6 text-left space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                    {activeItem.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit']">{activeItem.title}</h3>
                <p className="text-sm text-neutral-300">{activeItem.description}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
