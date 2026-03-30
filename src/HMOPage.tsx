import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionDivider } from '../components/ui/SectionDivider';
import { ContactForm } from '../components/ui/ContactForm';
import { PropertyCarousel } from '../components/ui/PropertyCarousel';

function HMOPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'properties', 'why-us', 'contact'];
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
    setMobileMenuOpen(false);
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

      {/* Dark overlay for text contrast */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.65) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-lg z-50 border-b border-teal/10">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center max-w-7xl">
            <button 
              onClick={() => navigate('/')}
              className="logo cursor-pointer hover:opacity-80 transition-opacity" 
              style={{ height: '70px', display: 'flex', alignItems: 'center' }}
            >
              <img 
                src="/logo_teal.png" 
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
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'properties', label: 'Properties' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'contact', label: 'Contact' },
              ].map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`text-base font-medium tracking-wide transition-colors ${
                      activeSection === section.id ? 'text-teal' : 'text-gray-400 hover:text-teal'
                    }`}
                    style={{ fontSize: '17px' }}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-teal/10 transition-colors text-teal"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-charcoal border-t border-teal/10">
              <div className="flex flex-col p-4 gap-1">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'properties', label: 'Properties' },
                  { id: 'why-us', label: 'Why Us' },
                  { id: 'contact', label: 'Contact' },
                ].map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      activeSection === section.id
                        ? 'bg-teal/20 text-teal'
                        : 'text-gray-400 hover:bg-teal/10 hover:text-teal'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section 
          id="home" 
          className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6"
        >
          <div className="text-center max-w-5xl mx-auto w-full">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light mb-6 tracking-tight">
              <span className="block text-white">
                Quality Rooms.
              </span>
              <span className="block font-bold mt-4 text-teal">
                Professional Management.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg font-medium mb-4 px-4 text-teal-light">
              Professionally Managed HMO Property Lettings Across the UK
            </p>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light px-4">
              BR Consultants UK manages a growing portfolio of high-quality shared accommodation 
              for working professionals, key workers and students. Every property in our portfolio is fully furnished, 
              professionally maintained and managed with a genuine commitment to tenant wellbeing.
            </p>

            <div className="flex gap-4 sm:gap-6 justify-center flex-wrap mb-8 px-4">
              <button 
                onClick={() => scrollToSection('properties')}
                className="px-6 sm:px-10 py-3 sm:py-4 bg-teal text-white font-semibold rounded hover:bg-teal-light transition-all transform hover:-translate-y-1 hover:shadow-2xl text-sm sm:text-base"
              >
                View Our Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-teal text-teal font-semibold rounded hover:bg-teal/10 transition-all transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Register Your Interest
              </button>
            </div>
          </div>
        </section>

        <SectionDivider accent="teal" />

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-teal mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-7xl">
              BR Consultants UK owns and manages a portfolio of HMO (House in Multiple Occupation) properties 
              across the UK. Our properties are designed to provide high-quality, comfortable shared living spaces 
              for working professionals, students and key workers. We take full responsibility for every aspect 
              of property management — from furnishing and maintenance through to tenant support and compliance — 
              so that our residents enjoy a hassle-free, well-managed living experience.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Quality Accommodation',
                  description: 'Every room in our portfolio is furnished to a high standard with quality beds, modern furniture and thoughtful touches. We invest in our properties because we believe good accommodation makes a real difference to people\'s daily lives.',
                  icon: (
                    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                {
                  title: 'Professional Management',
                  description: 'You will deal directly with our dedicated property management team — not a call centre. We pride ourselves on being responsive, approachable and proactive. Maintenance issues are dealt with promptly by our trusted network of tradespeople.',
                  icon: (
                    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: 'Fully Compliant',
                  description: 'Every property in our portfolio is fully licensed, fire-safety certified, gas and electrically checked, and meets all current HMO regulatory requirements. We maintain rigorous standards because your safety and wellbeing are non-negotiable.',
                  icon: (
                    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )
                },
                {
                  title: 'All Bills Included*',
                  description: 'Your rent includes utilities, broadband and council tax — one straightforward monthly payment with no hidden charges or surprise bills. (*Subject to a fair use policy.)',
                  icon: (
                    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Flexible Tenancy Terms',
                  description: 'We understand that circumstances vary. Whether you need a short-term arrangement while relocating for work or a longer-term tenancy, we offer flexible terms designed to suit your individual situation.',
                  icon: (
                    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: 'UK-Wide Locations',
                  description: 'Our portfolio spans properties in well-connected locations across the UK, chosen for their proximity to transport links, local amenities and major employers. We are actively expanding into new areas — register your interest for your preferred location.',
                  icon: (
                    <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-charcoal-light/90 backdrop-blur-sm border border-teal/15 p-6 rounded-lg hover:border-teal/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl text-teal mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider accent="teal" />

        {/* Properties Section */}
        <section id="properties" className="py-24 px-6 relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-teal mb-4">
              Our Property Portfolio
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-7xl">
              Below are examples of typical properties within our managed portfolio. Each property type is designed 
              to meet the needs of a specific tenant group — whether you are a working professional, a student, 
              or a key worker. Our portfolio is continually growing as we add new properties across the UK.
            </p>
            <p className="text-base text-gray-400 mb-16 max-w-7xl">
              Properties in our portfolio are in high demand. If your preferred property type or location is not 
              currently available, we encourage you to register your interest below and join our waiting list. 
              We will contact you as soon as a suitable room becomes available in your chosen area.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Professional House Shares',
                  description: 'Stylish, contemporary rooms with quality furnishings, well-equipped shared kitchens and comfortable communal lounges. Our professional house shares are designed for working adults who expect a clean, well-maintained home environment without the complications of managing their own tenancy agreements and bills.',
                  images: [
                    { src: '/Property_1_Bedroom.png', label: 'Bedroom' },
                    { src: '/Property_1_Kitchen.png', label: 'Kitchen' },
                    { src: '/Property_1_Lounge.png', label: 'Lounge' },
                  ],
                  features: ['Double bed', 'Modern kitchen', 'Communal lounge', 'All bills included*']
                },
                {
                  title: 'Student Accommodation',
                  description: 'Purpose-configured rooms with dedicated study desks, fully equipped shared kitchens and social study lounges. Our student properties are designed to support academic success and social wellbeing — providing a productive, comfortable living environment that feels like a proper home, not just a room.',
                  images: [
                    { src: '/Property_2_Bedroom.png', label: 'Bedroom' },
                    { src: '/Property_2_Kitchen.png', label: 'Kitchen' },
                    { src: '/Property_2_Lounge.png', label: 'Study Lounge' },
                  ],
                  features: ['Study desk & chair', 'Shared kitchen', 'Social study lounge', 'All bills included*']
                },
                {
                  title: 'Key Worker Housing',
                  description: 'Thoughtfully designed for NHS staff, emergency services and other shift workers who need a restful home after demanding hours. Quality beds with blackout blinds for day sleeping, fully equipped kitchens for meal prep, and relaxing communal spaces to unwind with housemates or enjoy quiet downtime.',
                  images: [
                    { src: '/Property_3_Bedroom.png', label: 'Bedroom' },
                    { src: '/Property_3_Kitchen.png', label: 'Kitchen' },
                    { src: '/Property_3_Lounge.png', label: 'Lounge' },
                  ],
                  features: ['Blackout blinds', 'Quiet environment', 'Fully equipped kitchen', 'All bills included*']
                }
              ].map((property, index) => (
                <div 
                  key={index}
                  className="bg-charcoal-light/90 backdrop-blur-sm border border-teal/15 rounded-lg overflow-hidden hover:border-teal/40 transition-all duration-300"
                >
                  <PropertyCarousel images={property.images} />

                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-teal mb-2">{property.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {property.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-xs text-teal"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full py-2.5 border border-teal/30 text-teal font-medium rounded hover:bg-teal/10 transition-all text-sm"
                    >
                      Enquire About Similar Properties
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Fair use note + CTA */}
            <p className="text-gray-500 text-xs mt-6 text-center">
              *All bills included subject to a fair use policy. Full details provided at the point of tenancy agreement.
            </p>

            <div className="text-center mt-10">
              <p className="text-gray-400 mb-4">
                Looking for something specific? Register your interest and preferred location and we will 
                add you to our waiting list for the next available property in your area.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-teal text-white font-semibold rounded hover:bg-teal-light transition-all"
              >
                Register Your Interest
              </button>
            </div>
          </div>
        </section>

        <SectionDivider accent="teal" />

        {/* Why Us Section */}
        <section id="why-us" className="py-24 px-6 relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold text-teal mb-4">
              Why Choose BR Lettings
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-7xl">
              We are not a faceless letting agency or an absentee landlord. BR Consultants UK is a professional 
              property management business run by experienced business owners who understand that a well-managed property 
              starts with treating tenants as valued customers. Our approach is built on accountability, transparency 
              and a genuine commitment to maintaining properties to the highest standard.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Hands-On, Accountable Management',
                  description: 'Every property in our portfolio is managed directly by our team. You will always have a named point of contact who knows your property and can make decisions. No call centres, no ticket queues — just direct, responsive communication with people who care about getting things right.'
                },
                {
                  title: 'Rapid Maintenance Response',
                  description: 'We take a proactive approach to property maintenance, not a reactive one. When issues do arise, they are dealt with promptly by our trusted network of qualified tradespeople. We do not leave problems unresolved or pass them between departments — we own the issue and see it through.'
                },
                {
                  title: 'Fair, Transparent & Honest',
                  description: 'Clear tenancy agreements with no hidden charges or surprise fees. We believe the best tenant relationships are built on transparency and mutual respect. What you see is what you get — straightforward pricing, honest communication, and a fair approach to every aspect of your tenancy.'
                },
                {
                  title: 'Invested in Our Communities',
                  description: 'We are genuinely invested in the communities our properties are in. That means well-maintained homes that neighbours can be proud of, careful tenant referencing, and a commitment to being a responsible, long-term presence in every area we operate.'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-charcoal-light/90 backdrop-blur-sm p-6 rounded-lg border border-transparent hover:border-teal/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 w-1 h-0 bg-teal group-hover:h-full transition-all duration-300" />
                  <h3 className="font-serif text-2xl text-teal mb-3 group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:translate-x-2 transition-transform">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider accent="teal" />

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-teal mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 sm:mb-16 max-w-7xl">
              Whether you are looking for a room in one of our managed properties, would like to register your interest 
              for a specific area, or have a property you would like us to manage on your behalf — our team is here to help. 
              Complete the form below or contact us directly, and a member of our property management team will respond 
              within one working day.
            </p>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div className="contact-info">
                {/* Agent Photo & Info */}
                <div className="flex items-center gap-5 mb-8 p-5 bg-charcoal-light/60 rounded-lg border border-teal/15">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-teal/30 flex-shrink-0">
                    <img 
                      src="/contact_agent.jpg" 
                      alt="Property Management Team" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-teal font-semibold text-base sm:text-lg">Your Point of Contact</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-1">
                      Our dedicated property management team is on hand to answer your questions, 
                      arrange viewings, and help you find the right room.
                    </p>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-teal mb-4 sm:mb-6">Contact Details</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  If you would prefer to contact us directly, please use the details below. For enquiries about 
                  available rooms, please include your preferred location and move-in date so we can provide 
                  the most relevant information.
                </p>
                
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-teal font-semibold text-sm sm:text-base sm:min-w-[140px]">Email:</span>
                    <a href="mailto:properties@brconsultantsuk.com" className="text-gray-200 hover:text-teal transition-colors text-sm sm:text-base break-all">
                      properties@brconsultantsuk.com
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-teal mb-3 sm:mb-4">Coverage</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    BR Consultants UK — Property Lettings<br />
                    Properties managed across the United Kingdom<br />
                    <span className="text-gray-500 text-xs mt-2 block">
                      We are actively expanding our portfolio. If we do not yet have properties in your area, 
                      register your interest and we will notify you when availability opens up.
                    </span>
                  </p>
                </div>
              </div>

              <ContactForm accent="teal" toEmail="properties@brconsultantsuk.com" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 bg-charcoal-dark border-t border-teal/10">
          <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 BR Consultants UK. All rights reserved. | Registered in the UK
            </p>
            <button 
              onClick={() => navigate('/')}
              className="text-teal text-sm hover:text-teal-light transition-colors"
            >
              ← Back to BR Consultants UK
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HMOPage;
