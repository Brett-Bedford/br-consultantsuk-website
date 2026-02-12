import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

interface MobileNavProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ['home', 'about', 'projects', 'team', 'contact'];

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <>
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gold/10 transition-colors"
        style={{ color: '#C5A572' }}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            style={{ top: '86px' }}
          />

          {/* Menu Panel */}
          <div
            className="fixed top-[86px] right-0 w-64 bg-charcoal border-l border-gold/20 shadow-2xl z-50 md:hidden"
            style={{
              height: 'calc(100vh - 86px)',
              animation: 'slideInRight 0.3s ease-out'
            }}
          >
            <nav className="flex flex-col p-6 gap-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`text-left px-4 py-3 rounded-lg capitalize font-medium transition-all ${
                    activeSection === section
                      ? 'bg-gold/20 text-gold'
                      : 'text-gray-400 hover:bg-gold/10 hover:text-gold'
                  }`}
                  style={{ fontSize: '17px' }}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          {/* Animation */}
          <style>{`
            @keyframes slideInRight {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default MobileNav;
