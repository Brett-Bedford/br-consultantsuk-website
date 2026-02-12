export const SectionDivider = () => {
  return (
    <div className="w-full py-8 relative overflow-hidden">
      {/* Animated double line divider */}
      <div className="relative h-1">
        {/* Gold line - pulses and flows */}
        <div 
          className="absolute inset-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #C5A572 50%, transparent 100%)',
            animation: 'flowGold 3s ease-in-out infinite'
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
        @keyframes flowGold {
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
