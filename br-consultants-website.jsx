import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// BackgroundPaths Component with Gold and Silver
function FloatingPaths({ position, color }: { position: number; color: string }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={color}
                        strokeWidth={path.width}
                        strokeOpacity={0.15 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.4 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

function BackgroundPaths() {
    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0">
                <FloatingPaths position={1} color="#D4AF37" />  
                <FloatingPaths position={-1} color="#C0C0C0" /> 
            </div>
        </div>
    );
}

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'contact'];
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#1a1a1a] text-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #E5C158; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-lg z-50 border-b border-[#D4AF37]/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
          <div className="font-serif text-2xl font-semibold text-[#D4AF37] tracking-wider">
            BR CONSULTANTS UK
          </div>
          <ul className="hidden md:flex gap-8">
            {['home', 'about', 'team', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm tracking-wide transition-colors ${
                    activeSection === section ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-[#D4AF37]'
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section with Background Paths */}
      <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black">
        <div className="absolute inset-0 opacity-30">
          <BackgroundPaths />
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-white via-[#D4AF37] to-[#E5C158] bg-clip-text text-transparent">
                Senior Experience.
              </span>
              <span className="block font-bold mt-4 bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
                Practical Delivery.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light">
              Practical commercial and operational consulting for UK businesses ready to grow. 
              Senior-level support for leadership teams who want clarity, focus and results — without consultancy theatre.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-[#D4AF37] text-[#1a1a1a] font-semibold rounded hover:bg-[#E5C158] transition-all transform hover:-translate-y-1 hover:shadow-2xl shadow-[#D4AF37]/30"
              >
                Book a Conversation
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded hover:bg-[#D4AF37]/10 transition-all transform hover:-translate-y-1"
              >
                Our Approach
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#D4AF37] mb-4">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl">
            Deep expertise in commercial strategy, operational improvement, leadership development and interim advisory. 
            Real-world experience that delivers tangible results.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Commercial & Sales Strategy',
                description: 'Senior-level counsel on market strategy, revenue growth and commercial planning. Focus on rapid expansion, aligned incentives and clear paths to execution.',
                points: ['Sales structure design', 'Route to market strategy', 'Incentive and comp planning', 'Gap analysis and expansion']
              },
              {
                title: 'Operational Improvement',
                description: 'Hands-on leadership to streamline processes, eliminate friction and build capability. Designed for scale, engineered for speed.',
                points: ['Process optimization', 'Restructuring and turnarounds', 'Performance management (P, L, KPIs)', 'Capacity planning']
              },
              {
                title: 'Leadership & Capability',
                description: 'Build leaders, develop teams and scale your organizational muscle. We focus on sustainable growth, not just quick wins.',
                points: ['Senior leadership development', 'Board advisory and C-suite sparring', 'Talent assessment', 'Change management']
              },
              {
                title: 'Interim & Advisory',
                description: 'Senior strategic counsel when you need it. First-in-field advice, turnaround support and hands-on delivery for key initiatives.',
                points: ['Interim commercial leadership', 'M&A commercial due diligence', 'New market entry', 'Project delivery & PMO']
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] border border-[#D4AF37]/20 p-8 rounded-lg hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-300"
              >
                <h3 className="font-serif text-2xl md:text-3xl text-[#D4AF37] mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="text-[#D4AF37] text-xl font-bold">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BR Section */}
      <section className="py-24 px-6 bg-[#3a3a3a]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#D4AF37] mb-4">
            Why BR Consultants UK
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl">
            Focused on UK markets and engineering-led environments. Built for practical, outcome-focused delivery — not academic theory.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Senior Partners Only',
                description: 'No junior substitutes. You get experienced leaders who\'ve been in operational roles — Brett and Ranj bring decades of hands-on expertise, not just frameworks.'
              },
              {
                title: 'Hands-On, Real-World Leadership',
                description: 'We\'ve led teams, closed deals, scaled revenue and turned around underperforming divisions. Our experience isn\'t theoretical — it\'s proven in practice.'
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
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#2a2a2a] p-6 rounded-lg border border-transparent hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute left-0 top-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-300"></div>
                <h3 className="font-serif text-xl md:text-2xl text-[#D4AF37] mb-3 group-hover:translate-x-2 transition-transform">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:translate-x-2 transition-transform">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-[#1a1a1a]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#D4AF37] mb-4">
            Meet the Team
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl">
            Brett and Ranj have been senior leaders in their respective fields, with deep experience in commercial operations and strategic delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                name: 'Brett Rothwell',
                title: 'Partner in Commercial Specialism',
                description: 'Brett brings UK commercial experience to the team — transformative work in private sector consulting and sales growth. Expert in sales org development and go-to-market engineering. Focused, aggressive, detail-savvy.'
              },
              {
                name: 'Ranjit Bhogal',
                title: 'Partner in Commercial Specialism',
                description: 'Ranj is a seasoned applications strategist and implementation specialist with extensive operational leadership experience. Expert in customer-first interfaces and operational methods that grow revenue efficiently. Aggressive. Astute. On-point.'
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6 overflow-hidden rounded-lg border-2 border-[#D4AF37] bg-gray-800 aspect-[3/4]">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {/* Placeholder for images */}
                    <span className="text-4xl">{member.name[0]}</span>
                  </div>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-[#D4AF37] mb-2">{member.name}</h3>
                <p className="text-[#C0C0C0] text-lg md:text-xl italic mb-6">{member.title}</p>
                <p className="text-gray-400 leading-relaxed max-w-lg mx-auto">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#3a3a3a]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-[#D4AF37] mb-4">
            Let's Start With a Conversation
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl">
            Curious if we can help? Drop us a line. We'll set up a no-commitment conversation and map out what success might look like for your business.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#D4AF37] mb-6">Contact</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ready to get started? We're eager to learn about your business and see how we can help.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-[#D4AF37] font-semibold md:min-w-[140px]">Email (Brett):</span>
                  <a href="mailto:brett@brconsultantsuk.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors break-all">
                    brett@brconsultantsuk.com
                  </a>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-[#D4AF37] font-semibold md:min-w-[140px]">Email (Ranj):</span>
                  <a href="mailto:ranj@brconsultantsuk.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors break-all">
                    ranj@brconsultantsuk.com
                  </a>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <span className="text-[#D4AF37] font-semibold md:min-w-[140px]">General:</span>
                  <a href="mailto:enquiries@brconsultantsuk.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors break-all">
                    enquiries@brconsultantsuk.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#D4AF37] mb-4">Office</h3>
                <p className="text-gray-400">
                  BR Consultants UK<br />
                  London, United Kingdom
                </p>
              </div>
            </div>

            <div className="bg-[#2a2a2a] p-6 md:p-8 rounded-lg border border-[#D4AF37]/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-[#C0C0C0] mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded focus:border-[#D4AF37] focus:outline-none text-white transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[#C0C0C0] mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded focus:border-[#D4AF37] focus:outline-none text-white transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[#C0C0C0] mb-2 font-medium">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded focus:border-[#D4AF37] focus:outline-none text-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#C0C0C0] mb-2 font-medium">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-600 rounded focus:border-[#D4AF37] focus:outline-none text-white transition-colors resize-y min-h-[150px]"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-10 py-4 bg-[#D4AF37] text-[#1a1a1a] font-semibold rounded hover:bg-[#E5C158] transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-[#D4AF37]/30"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-[#D4AF37]/10">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-gray-400 text-sm md:text-base">
            &copy; 2025 BR Consultants UK. All rights reserved. | Registered in the UK
          </p>
        </div>
      </footer>
    </div>
  );
}
