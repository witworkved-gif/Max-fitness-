import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SectionTabBar } from './components/SectionTabBar';
import { HomeView } from './views/HomeView';
import { MembershipsView } from './views/MembershipsView';
import { ScheduleView } from './views/ScheduleView';
import { TrainersView } from './views/TrainersView';
import { GalleryView } from './views/GalleryView';
import { ReviewsView } from './views/ReviewsView';
import { BmiView } from './views/BmiView';
import { ContactView } from './views/ContactView';
import { Footer } from './components/Footer';
import { TrialPassModal } from './components/TrialPassModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle URL hash sync on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validSections = ['home', 'memberships', 'schedule', 'trainers', 'gallery', 'reviews', 'calculator', 'contact'];
      if (hash && validSections.includes(hash)) {
        setActiveSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-['Outfit'] selection:bg-red-600 selection:text-white">
      {/* Primary Sticky Header */}
      <Navbar
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Interactive Sub-Section Quick Bar */}
      <SectionTabBar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Distinct Dedicated View Router */}
      <main className="flex-1">
        {activeSection === 'home' && (
          <HomeView
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
            onNavigate={handleSelectSection}
          />
        )}

        {activeSection === 'memberships' && (
          <MembershipsView
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
            onNavigate={handleSelectSection}
          />
        )}

        {activeSection === 'schedule' && (
          <ScheduleView
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
          />
        )}

        {activeSection === 'trainers' && (
          <TrainersView
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
          />
        )}

        {activeSection === 'gallery' && (
          <GalleryView
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
          />
        )}

        {activeSection === 'reviews' && (
          <ReviewsView />
        )}

        {activeSection === 'calculator' && (
          <BmiView />
        )}

        {activeSection === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Footer with section links */}
      <Footer
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />

      {/* Complimentary Free 1-Day Trial Pass Modal */}
      <TrialPassModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />

      {/* Persistent Floating WhatsApp Direct Contact Action */}
      <FloatingWhatsApp />
    </div>
  );
}
