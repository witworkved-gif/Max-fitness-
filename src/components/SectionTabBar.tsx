import React from 'react';
import { Home, Tag, Clock, Users, Image as ImageIcon, Star, Calculator, MapPin } from 'lucide-react';

interface SectionTabBarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const SectionTabBar: React.FC<SectionTabBarProps> = ({ activeSection, onSelectSection }) => {
  const tabs = [
    { id: 'home', label: 'Overview', icon: Home },
    { id: 'memberships', label: 'Memberships', icon: Tag, highlight: 'Best Value' },
    { id: 'schedule', label: 'Batches & Shifts', icon: Clock },
    { id: 'trainers', label: 'Coaches', icon: Users },
    { id: 'gallery', label: 'Floor Gallery', icon: ImageIcon },
    { id: 'reviews', label: 'Google 4.8★', icon: Star, star: true },
    { id: 'calculator', label: 'BMI & Diet', icon: Calculator },
    { id: 'contact', label: 'Location & Map', icon: MapPin },
  ];

  return (
    <div className="bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800/80 sticky top-[73px] sm:top-[77px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none">
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider shrink-0 hidden lg:inline mr-1">
            Section:
          </span>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onSelectSection(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-102'
                    : 'bg-neutral-950/70 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${tab.star && !isActive ? 'text-amber-400 fill-amber-400' : ''}`} />
                <span>{tab.label}</span>
                {tab.highlight && !isActive && (
                  <span className="text-[9px] bg-red-950 text-red-400 border border-red-800/40 px-1.5 py-0.2 rounded uppercase font-extrabold">
                    {tab.highlight}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
