interface SectionDividerProps {
  accent?: 'gold' | 'teal';
}

export const SectionDivider = ({ accent = 'gold' }: SectionDividerProps) => {
  const accentColor = accent === 'teal' ? '#4A9E8E' : '#C5A572';

  return (
    <div className="w-full py-8 relative overflow-hidden">
      {/* Animated double line divider */}
      <div className="relative h-1">
        {/* Accent line - pulses and flows */}
        <div 
          className="absolute inset-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${accentColor} 50%, transparent 100%)`,
            animation: 'flowAccent 3s ease-in-out infinite'
          }}
        />
        
        {/* Silver line - pulses and flows (offset) */}
        <div 
          className="absolute inset-0 h-px top-2"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #B8B8B8 50%, transparent 100%)',
            animation: 'flowSilver 3s ease-in-out infinite 1.5s'
          }}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes flowAccent {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes flowSilver {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionDivider;
