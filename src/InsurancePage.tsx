import { useState } from 'react';

export function InsurancePage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Birmingham background - matching main site */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/birmingham_merged.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.06,
          zIndex: 0,
        }}
      />

      {/* Dark overlay for contrast */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(26, 26, 26, 0.4) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content container */}
      <div
        className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8"
      >
        {/* Logo / Company name header */}
        <div className="mb-4 sm:mb-6 text-center">
          <img
            src="/logo.svg"
            alt="BR Consultants UK"
            className="h-10 sm:h-14 mx-auto mb-2"
            style={{ objectFit: 'contain' }}
          />
          <h1
            className="text-sm sm:text-base tracking-widest uppercase"
            style={{ color: '#C5A572', fontFamily: 'Georgia, serif' }}
          >
            Confirmation of Insurance
          </h1>
        </div>

        {/* Certificate image container */}
        <div
          className="relative w-full flex-1 flex items-center justify-center"
          style={{ maxWidth: '850px' }}
        >
          {/* Subtle gold border frame */}
          <div
            className="relative w-full rounded-sm overflow-hidden"
            style={{
              border: '1px solid rgba(197, 165, 114, 0.25)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4), 0 0 60px rgba(197, 165, 114, 0.05)',
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(2px)',
            }}
          >
            {/* Loading state */}
            {!imageLoaded && (
              <div
                className="flex items-center justify-center py-32"
                style={{ color: '#C5A572' }}
              >
                <svg
                  className="animate-spin h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              </div>
            )}

            {/* Certificate image */}
            <img
              src="/Insurance_Policy.png"
              alt="BR Consultants UK - Confirmation of Liability Insurance - Markel International Insurance Company Limited"
              className={`w-full h-auto block transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                maxHeight: 'calc(100vh - 160px)',
                objectFit: 'contain',
              }}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 sm:mt-6 text-center">
          <p
            className="text-xs sm:text-sm"
            style={{ color: 'rgba(197, 165, 114, 0.5)' }}
          >
            BR Consultants UK &bull; Policy No. CE62612
          </p>
        </div>
      </div>
    </div>
  );
}
