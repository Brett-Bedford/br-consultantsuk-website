import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="app min-h-screen text-white">
      {/* BIRMINGHAM BACKGROUND - Fixed on large desktop only, scrolls on mobile/tablet for iOS compatibility */}
      <div 
        className="fixed inset-0 z-0 lg:bg-fixed bg-scroll"
        style={{
          backgroundImage: 'url(/birmingham_merged.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.20
        }}
      />

      {/* Dark overlay for text contrast */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.65) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Header */}
        <header className="w-full py-6 sm:py-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-center">
            <img 
              src="/logo.svg" 
              alt="BR Consultants UK" 
              className="h-16 sm:h-20 w-auto"
              style={{ height: '80px', width: 'auto' }}
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pb-12">
          
          {/* Headline */}
          <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
              <span className="text-white">Welcome to</span>
              <br />
              <span className="font-semibold text-gold">BR Consultants UK</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Two specialist divisions. One trusted partnership.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full mx-auto">

            {/* Business Consulting Card */}
            <button
              onClick={() => navigate('/consulting')}
              className="group relative bg-charcoal-light/80 backdrop-blur-sm border border-gold/20 rounded-xl p-8 sm:p-10 text-left transition-all duration-500 hover:border-gold hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(197,165,114,0.15)] cursor-pointer"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-gold mb-3 group-hover:text-gold-light transition-colors">
                Business Consulting
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Commercial strategy, operational improvement and senior advisory for UK industrial B2B businesses ready to grow.
              </p>

              <ul className="space-y-2 mb-8">
                {['Commercial & Sales Strategy', 'Operational Improvement', 'Leadership & Capability', 'Interim & Advisory'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-gold">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                Explore Consulting
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            {/* HMO Property Lettings Card */}
            <button
              onClick={() => navigate('/hmo')}
              className="group relative bg-charcoal-light/80 backdrop-blur-sm border border-teal/20 rounded-xl p-8 sm:p-10 text-left transition-all duration-500 hover:border-teal hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(74,158,142,0.15)] cursor-pointer"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-teal rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity" />
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-teal/10 border border-teal/30 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
                <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-teal mb-3 group-hover:text-teal-light transition-colors">
                HMO Property Lettings
              </h2>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Quality shared accommodation managed with a professional, tenant-first approach. A growing portfolio of fully furnished HMO properties across the UK.
              </p>

              <ul className="space-y-2 mb-8">
                {['Fully Managed HMO Properties', 'Quality Rooms & Shared Living', 'Professional Tenancy Management', 'UK-Wide Coverage'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="text-teal">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <span className="inline-flex items-center gap-2 text-teal font-semibold group-hover:gap-3 transition-all">
                Explore Property Lettings
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              &copy; 2025 BR Consultants UK. All rights reserved. | Registered in the UK
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default LandingPage;
