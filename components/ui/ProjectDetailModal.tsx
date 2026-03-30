import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    industry: string;
    challenge: string;
    approach: string;
    outcome: string;
    metrics: string[];
  } | null;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, project }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-start sm:items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto pt-20 sm:pt-4 pb-4 px-2 sm:px-4"
      onClick={onClose}
    >
      {/* Modal Container with Pulsing Border */}
      <div 
        className="relative w-full max-w-5xl my-4 rounded-lg p-1 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(90deg, #C5A572 0%, #B8B8B8 50%, #C5A572 100%)',
          animation: 'pulseGlow 3s ease-in-out infinite',
          maxHeight: 'calc(100vh - 10rem)'
        }}
      >
        {/* Inner charcoal background */}
        <div className="w-full bg-charcoal rounded-lg flex flex-col overflow-hidden"
             style={{ maxHeight: 'calc(100vh - 10.5rem)' }}
        >
          {/* Close Button - TRULY FIXED on mobile */}
          <div className="sticky top-0 z-[1000] flex justify-end p-2 sm:p-4 bg-charcoal rounded-t-lg">
            <button
              onClick={onClose}
              className="p-2 sm:p-3 rounded-full bg-charcoal-light hover:bg-gold hover:text-charcoal transition-all shadow-xl"
              style={{ color: '#C5A572' }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 px-4 sm:px-6 md:px-12 pb-6 sm:pb-8 md:pb-12">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div 
                className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4 text-xs sm:text-sm font-semibold"
                style={{
                  backgroundColor: 'rgba(197, 165, 114, 0.2)',
                  color: '#C5A572',
                  border: '1px solid rgba(197, 165, 114, 0.3)'
                }}
              >
                {project.industry}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-3 sm:mb-4">
                {project.title}
              </h2>
            </div>

            {/* Main Content - 2 Column Layout */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Column 1 - Challenge */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-gold mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl">→</span>
                  The Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.challenge}
                </p>
              </div>

              {/* Column 2 - Approach */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-gold mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl">→</span>
                  Our Approach
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {project.approach}
                </p>
              </div>
            </div>

            {/* Full Width - Outcome */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-serif text-xl sm:text-2xl text-gold mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">→</span>
                The Outcome
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.outcome}
              </p>
            </div>

            {/* Metrics - 4 across on desktop (lg), 2 across on mobile/tablet */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-gold mb-4 sm:mb-6 flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">→</span>
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {project.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="p-3 sm:p-4 rounded-lg border border-gold/20 bg-charcoal-light hover:border-gold transition-all"
                  >
                    <div className="text-gray-200 text-center font-medium text-xs sm:text-sm">
                      {metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(197, 165, 114, 0.5), 0 0 40px rgba(197, 165, 114, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(184, 184, 184, 0.6), 0 0 60px rgba(184, 184, 184, 0.4);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
