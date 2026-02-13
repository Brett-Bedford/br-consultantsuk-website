import { useState, useEffect } from 'react';
import { ProjectsGallery } from '../components/ui/projects-gallery';
import { ContactForm } from '../components/ui/ContactForm';
import { SectionDivider } from '../components/ui/SectionDivider';
import { TrackRecordCarousel } from '../components/ui/TrackRecordCarousel';
import { MobileNav } from '../components/ui/MobileNav';
import { MobileCarouselSection } from '../components/ui/MobileCarouselSection';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Dispatch custom event to close any open modals
    window.dispatchEvent(new Event('navigate'));
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Dark overlay for text contrast - lightened to show background better */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.65) 100%)'
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-lg z-50 border-b border-gold/10">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center max-w-7xl">
            <button 
              onClick={() => scrollToSection('home')}
              data-nav-link
              className="logo cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ height: '70px', display: 'flex', alignItems: 'center' }}
            >
              <img 
                src="/logo.svg" 
                alt="BR Consultants UK" 
                style={{ 
                  height: '70px',
                  width: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </button>
            
            {/* Desktop Navigation */}
            <ul className="nav-links hidden md:flex gap-8">
              {['home', 'about', 'projects', 'team', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    data-nav-link
                    className={`capitalize text-base font-medium tracking-wide transition-colors ${
                      activeSection === section ? 'text-gold' : 'text-gray-400 hover:text-gold'
                    }`}
                    style={{ fontSize: '17px' }}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            <MobileNav activeSection={activeSection} scrollToSection={scrollToSection} />
          </div>
        </nav>

        {/* Hero Section - IMPROVED WITH MOBILE FIX */}
        <section 
          id="home" 
          className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6"
        >
          <div className="text-center max-w-5xl mx-auto w-full">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light mb-6 tracking-tight">
              <span className="block text-white">
                Senior Experience.
              </span>
              <span className="block font-bold mt-4 text-gold">
                Practical Delivery.
              </span>
            </h1>
            
            {/* NEW - Who It's For - MOBILE RESPONSIVE */}
            <p className="text-base sm:text-lg font-medium mb-4 px-4" style={{ color: '#D4B896' }}>
              For MDs, Sales Directors & Ops Leaders in UK industrial B2B
            </p>
            
            {/* MOBILE RESPONSIVE TEXT */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light px-4">
              Practical commercial and operational consulting for UK businesses ready to grow. 
              Senior-level support for leadership teams who want clarity, focus and results — without consultancy theatre.
            </p>

            <div className="flex gap-4 sm:gap-6 justify-center flex-wrap mb-8 px-4">
              {/* UPDATED - Better CTA Labels */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-10 py-3 sm:py-4 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all transform hover:-translate-y-1 hover:shadow-2xl text-sm sm:text-base"
              >
                Book a 15-min Call
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-gold text-gold font-semibold rounded hover:bg-gold/10 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
              >
                View Selected Projects
              </button>
            </div>

            {/* NEW - Auto-Rotating Track Record Carousel - MOBILE RESPONSIVE */}
            <div className="flex justify-center px-4">
              <TrackRecordCarousel />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* About Section - OUTCOME-FOCUSED */}
        <section 
          id="about" 
          className="py-24 px-6 relative"
        >
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-gold mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-7xl">
              Growth stuck? Margin under pressure? Teams misaligned? 
              We fix the commercial and operational levers that move performance — then build the leadership and rhythms to sustain it.
            </p>

            <MobileCarouselSection>
              {[
                {
                  title: 'Commercial & Sales Strategy',
                  outcome: 'You want: Predictable revenue growth and margin you can defend.',
                  intro: 'We help you:',
                  points: [
                    'Build pipeline discipline that sticks (not spreadsheet theatre)',
                    'Design comp plans that align behavior to results',
                    'Create territory plans with clear ownership and accountability',
                    'Stop revenue leaks and missed targets'
                  ]
                },
                {
                  title: 'Operational Improvement',
                  outcome: 'You want: Lower costs, faster throughput, less firefighting.',
                  intro: 'We help you:',
                  points: [
                    'Eliminate waste and bottlenecks in production',
                    'Build sustainable operating rhythms (not just heroics)',
                    'Turn around underperforming operations',
                    'Scale capacity without proportional headcount'
                  ]
                },
                {
                  title: 'Leadership & Capability',
                  outcome: 'You want: Leaders who can execute, not just strategise.',
                  intro: 'We help you:',
                  points: [
                    'Develop commercial and operational muscle in your team',
                    'Build C-suite confidence in handling complex challenges',
                    'Create succession plans that actually work',
                    'Drive change without burning people out'
                  ]
                },
                {
                  title: 'Interim & Advisory',
                  outcome: 'You want: Senior expertise when you need it, without permanent hires.',
                  intro: 'We help you:',
                  points: [
                    'Navigate M&A commercial diligence and integration',
                    'Enter new markets with structured go-to-market plans',
                    'Deliver turnarounds and restructurings',
                    'Lead critical projects that cannot fail'
                  ]
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-charcoal-light/90 backdrop-blur-sm border border-gold/20 p-8 rounded-lg hover:border-gold hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <h3 className="font-serif text-3xl text-gold mb-4">{service.title}</h3>
                  <p className="text-gray-200 mb-4 italic font-medium" style={{ fontSize: '17px' }}>
                    {service.outcome}
                  </p>
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.intro}
                  </p>
                  <ul className="space-y-3">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold text-xl font-bold mt-0.5">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </MobileCarouselSection>
          </div>
        </section>

        <SectionDivider />

        {/* Why BR Section */}
        <section 
          className="py-24 px-6 relative"
        >
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-gold mb-4">
              Why BR Consultants UK
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-7xl">
              We are ex-industry leaders who have run P&Ls, built teams, and delivered tangible commercial results — not academics or career consultants. We bring the practical experience and straight-talking approach you need to fix what is broken and scale what works.
            </p>

            <MobileCarouselSection>
              {[
                {
                  title: 'Senior Partners Only',
                  description: 'No junior substitutes. You get experienced leaders who have been in operational roles — Brett and Ranj bring decades of hands-on expertise, not just frameworks.'
                },
                {
                  title: 'Hands-On, Real-World Leadership',
                  description: 'We have led teams, closed deals, scaled revenue and turned around underperforming divisions. Our experience is not theoretical — it is proven in practice.'
                },
                {
                  title: 'UK Market Engineering Focus',
                  description: 'Deep understanding of UK commercial environments, engineering-heavy businesses and the dynamics of scaling practical products in competitive markets.'
                },
                {
                  title: 'Practical, Outcome-Focused',
                  description: 'Our delivery is outcome-focused, not based on billable hours. We define success, execute against it and deliver results — not academic theory.'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-charcoal-light/90 backdrop-blur-sm p-6 rounded-lg border border-transparent hover:border-gold transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-300"></div>
                  <h3 className="font-serif text-2xl text-gold mb-3 group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:translate-x-2 transition-transform">
                    {item.description}
                  </p>
                </div>
              ))}
            </MobileCarouselSection>
          </div>
        </section>

        <SectionDivider />

        {/* Projects Section */}
        <section id="projects">
          <ProjectsGallery />
        </section>

        <SectionDivider />

        {/* Team Section - IMPROVED WITH BULLETS */}
        <section 
          id="team" 
          className="py-24 px-6 relative"
        >
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-gold mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-7xl">
              Brett and Ranj have been senior leaders in their respective fields, with deep experience in commercial operations and strategic delivery. 
              Together, they bring a combined depth of expertise you will not find elsewhere.
            </p>

            <MobileCarouselSection>
              {[
                {
                  name: 'Brett Bedford',
                  title: 'Partner | Commercial Growth & Go-to-Market',
                  image: '/Brett.jpg',
                  summary: 'Ex-MD with hands-on engineering-sector expertise. Known for practical delivery and straight-talking, people-first leadership.',
                  points: [
                    'Revenue growth & margin improvement across UK & Ireland',
                    'Pipeline discipline, commercial rhythm & R.A.C.E operating model',
                    'High-performing sales & service teams in industrial B2B'
                  ],
                  email: 'brett@brconsultantsuk.com',
                  linkedin: 'https://www.linkedin.com/in/brett-bedford-13226751'
                },
                {
                  name: 'Ranjit Singh',
                  title: 'Partner | Operational & Manufacturing Process Improvement',
                  image: '/ranjit.jpg',
                  summary: 'Entrepreneurial and commercially astute. Known for setting up clear processes and operating rhythms that stick.',
                  points: [
                    'Process improvement & throughput optimisation in manufacturing',
                    'Turnaround delivery & operational restructuring',
                    'Practical execution models without unnecessary complexity'
                  ],
                  email: 'ranj@brconsultantsuk.com',
                  linkedin: null // NO LINKEDIN
                }
              ].map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 overflow-hidden rounded-lg border-2 border-gold mx-auto max-w-md">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto aspect-[3/4] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  
                  <h3 className="font-serif text-4xl text-gold mb-2">{member.name}</h3>
                  <p className="text-silver text-xl italic mb-6">{member.title}</p>
                  
                  {/* NEW - Summary + Bullets */}
                  <p className="text-gray-300 leading-relaxed max-w-lg mx-auto mb-6">
                    {member.summary}
                  </p>
                  
                  <ul className="text-left max-w-lg mx-auto space-y-3 mb-6">
                    {member.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold text-xl font-bold mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* NEW - Contact Links */}
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold hover:text-charcoal transition-all"
                    >
                      <MdEmail className="text-xl" />
                      Email {member.name.split(' ')[0]}
                    </a>
                    
                    {/* LinkedIn - Brett Only */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all"
                      >
                        <FaLinkedin className="text-xl" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </MobileCarouselSection>
          </div>
        </section>

        <SectionDivider />

        {/* Contact Section - MOBILE RESPONSIVE */}
        <section 
          id="contact" 
          className="py-16 sm:py-24 px-4 sm:px-6 relative"
        >
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gold mb-4">
              Let's Start With a Conversation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 sm:mb-16 max-w-7xl">
              Curious if we can help? If you are serious about improving performance, let us start with a short discovery call. We will define the outcomes, surface the barriers, and outline a practical plan — then you decide if we are a fit.
            </p>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div className="contact-info">
                <h3 className="font-serif text-2xl sm:text-3xl text-gold mb-4 sm:mb-6">Contact</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Ready to get started? We are eager to learn about your business and see how we can help.
                </p>
                
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-gold font-semibold text-sm sm:text-base sm:min-w-[140px]">Email (Brett):</span>
                    <a href="mailto:brett@brconsultantsuk.com" className="text-gray-200 hover:text-gold transition-colors text-sm sm:text-base break-all">
                      brett@brconsultantsuk.com
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-gold font-semibold text-sm sm:text-base sm:min-w-[140px]">Email (Ranj):</span>
                    <a href="mailto:ranj@brconsultantsuk.com" className="text-gray-200 hover:text-gold transition-colors text-sm sm:text-base break-all">
                      ranj@brconsultantsuk.com
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-gold font-semibold text-sm sm:text-base sm:min-w-[140px]">General:</span>
                    <a href="mailto:info@brconsultantsuk.com" className="text-gray-200 hover:text-gold transition-colors text-sm sm:text-base break-all">
                      info@brconsultantsuk.com
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-gold mb-3 sm:mb-4">Office</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    BR Consultants UK<br />
                    Birmingham, United Kingdom
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-charcoal-dark border-t border-gold/10">
          <div className="container mx-auto max-w-7xl text-center">
            <p className="text-gray-400">
              &copy; 2025 BR Consultants UK. All rights reserved. | Registered in the UK
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
