import { useState, useEffect } from 'react';

export const TrackRecordCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trackRecords = [
    {
      text: "£10.2m → £18.5m growth | +12% margin | 5-year transformation",
      project: "Commercial Growth"
    },
    {
      text: "Response time -40% | Stock availability +25% | Complaints -60%",
      project: "Customer Experience"
    },
    {
      text: "Staff retention +35% | Placement rates +28% | Predictable revenue",
      project: "Recruitment Performance"
    },
    {
      text: "Throughput +28% | Profitability +37% | Defects -60%",
      project: "Process Improvement"
    },
    {
      text: "Pipeline £500k+ rebuilt | 8 accounts recovered | Win rate +45%",
      project: "Market Share Recovery"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trackRecords.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="px-6 sm:px-8 py-4 rounded-lg relative overflow-visible w-full sm:w-auto max-w-full"
      style={{
        backgroundColor: 'rgba(42, 42, 42, 0.8)',
        border: '1px solid rgba(197, 165, 114, 0.3)',
        minHeight: '60px',
        display: 'inline-block'
      }}
    >
      {/* Animated Track Records */}
      {trackRecords.map((record, index) => (
        <div
          key={index}
          style={{
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            display: currentIndex === index ? 'block' : 'none'
          }}
        >
          <p 
            className="text-gray-300 text-xs sm:text-sm md:text-base sm:whitespace-nowrap"
            style={{
              lineHeight: '1.5'
            }}
          >
            <span style={{ color: '#C5A572', fontWeight: '600' }}>Track record:</span> {record.text}
          </p>
        </div>
      ))}

      {/* Dots Indicator */}
      <div 
        className="mt-2"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        {trackRecords.map((_, index) => (
          <div
            key={index}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#C5A572' : 'rgba(197, 165, 114, 0.3)',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackRecordCarousel;
