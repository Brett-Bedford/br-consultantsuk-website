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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)'
      }}
      onClick={onClose}
    >
      {/* Modal Window */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: '90vh',
          borderRadius: '12px',
          overflow: 'hidden',
          animation: 'modalFadeIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pulsing Border Container */}
        <div
          style={{
            padding: '4px',
            background: 'linear-gradient(90deg, #C5A572 0%, #B8B8B8 50%, #C5A572 100%)',
            backgroundSize: '200% 100%',
            borderRadius: '12px',
            animation: 'borderPulse 3s ease-in-out infinite',
            boxShadow: '0 0 40px rgba(197, 165, 114, 0.4)'
          }}
        >
          {/* Inner Content */}
          <div
            style={{
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#2a2a2a',
                color: '#C5A572',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#C5A572';
                e.currentTarget.style.color = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2a2a2a';
                e.currentTarget.style.color = '#C5A572';
              }}
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div style={{ padding: '48px' }}>
              {/* Header */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(197, 165, 114, 0.2)',
                    color: '#C5A572',
                    border: '1px solid rgba(197, 165, 114, 0.3)',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}
                >
                  {project.industry}
                </div>
                <h2
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: '#C5A572',
                    marginBottom: '16px',
                    lineHeight: '1.2'
                  }}
                >
                  {project.title}
                </h2>
              </div>

              {/* Two Column Layout */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '32px',
                  marginBottom: '32px'
                }}
              >
                {/* Challenge */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '24px',
                      color: '#C5A572',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{ fontSize: '32px' }}>→</span>
                    The Challenge
                  </h3>
                  <p
                    style={{
                      color: '#d1d1d1',
                      lineHeight: '1.7',
                      fontSize: '16px'
                    }}
                  >
                    {project.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '24px',
                      color: '#C5A572',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{ fontSize: '32px' }}>→</span>
                    Our Approach
                  </h3>
                  <p
                    style={{
                      color: '#d1d1d1',
                      lineHeight: '1.7',
                      fontSize: '16px'
                    }}
                  >
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Outcome - Full Width */}
              <div style={{ marginBottom: '32px' }}>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '24px',
                    color: '#C5A572',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ fontSize: '32px' }}>→</span>
                  The Outcome
                </h3>
                <p
                  style={{
                    color: '#d1d1d1',
                    lineHeight: '1.7',
                    fontSize: '16px'
                  }}
                >
                  {project.outcome}
                </p>
              </div>

              {/* Metrics */}
              <div>
                <h3
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '24px',
                    color: '#C5A572',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ fontSize: '32px' }}>→</span>
                  Key Metrics
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px'
                  }}
                >
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      style={{
                        padding: '24px',
                        borderRadius: '8px',
                        backgroundColor: '#2a2a2a',
                        border: '1px solid rgba(197, 165, 114, 0.2)',
                        textAlign: 'center',
                        color: '#d1d1d1',
                        fontWeight: '500',
                        transition: 'border-color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#C5A572';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(197, 165, 114, 0.2)';
                      }}
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes borderPulse {
            0%, 100% {
              background-position: 0% 50%;
              box-shadow: 0 0 40px rgba(197, 165, 114, 0.4);
            }
            50% {
              background-position: 100% 50%;
              box-shadow: 0 0 40px rgba(184, 184, 184, 0.4);
            }
          }
          
          @keyframes modalFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
