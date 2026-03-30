"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProjectDetailModal } from "@/components/ui/ProjectDetailModal";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  industry: string;
  image: string;
  outcome: string;  // NEW - short outcome for card
  details?: {
    challenge: string;
    approach: string;
    outcome: string;
    metrics: string[];
  };
}

const projectData: ProjectItem[] = [
  {
    id: "commercial-growth",
    title: "Commercial Growth: £10.2m to £18.5m with +12% Margin Improvement",
    description: "Led a 5-year commercial transformation across a UK & Ireland industrial business, delivering consistent year-on-year growth from £10.2m to £18.5m and improving revenue margin by 12%.",
    industry: "Industrial Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1080&q=80",
    outcome: "£10.2m → £18.5m | +12% margin | 5 years",
    details: {
      challenge: "A UK & Ireland industrial business faced stagnant growth and declining margins. Revenue had plateaued around £10.2m with inconsistent pipeline management and no structured commercial rhythm. Territory planning was ad-hoc, and the sales team lacked clear accountability frameworks.",
      approach: "Implemented a comprehensive commercial transformation starting with the R.A.C.E operating rhythm (Review, Action, Cadence, Execution). Strengthened pipeline governance through weekly review cycles, built targeted territory and account plans with clear ownership, introduced structured forecasting, and established performance metrics tied to revenue and margin goals.",
      outcome: "Delivered consistent year-on-year growth over 5 years, scaling revenue from £10.2m to £18.5m while improving revenue margin by 12%. The business achieved predictable quarterly performance, stronger customer relationships, and a high-performing commercial culture built on accountability and execution excellence.",
      metrics: [
        "Revenue: £10.2m → £18.5m",
        "Margin improvement: +12%",
        "5-year transformation",
        "Consistent YoY growth"
      ]
    }
  },
  {
    id: "customer-experience",
    title: "Customer Experience Improvement: From Insight to Higher Satisfaction",
    description: "Led a customer experience improvement programme using a structured market survey to pinpoint pain points. Implemented targeted changes across service and support.",
    industry: "Customer Experience",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1080&q=80",
    outcome: "Response time -40% | Stock availability +25% | Complaints -60%",
    details: {
      challenge: "Customer satisfaction scores were declining with increasing complaints about service responsiveness and stock availability. The business lacked structured customer feedback mechanisms and struggled to translate customer needs into operational improvements.",
      approach: "Launched a comprehensive market survey to identify specific pain points across the customer journey. Analysed feedback to prioritise high-impact service improvements. Implemented targeted changes in service delivery, support processes, and stock management.",
      outcome: "Customer satisfaction scores improved significantly with measurable reductions in service complaints. Stock availability increased for high-demand items, and customer response times decreased by 40%. The business established a sustainable customer feedback mechanism that continues to drive continuous improvement.",
      metrics: [
        "Response time: -40%",
        "Stock availability: +25%",
        "Customer satisfaction: ↑↑",
        "Service complaints: -60%"
      ]
    }
  },
  {
    id: "recruitment",
    title: "Recruitment Performance Uplift: Higher Retention and More Placements",
    description: "Identified blockers limiting output in a recruitment business and introduced a practical execution model: clearer KPIs, operating cadence, and coaching routines.",
    industry: "Professional Services",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1080&q=80",
    outcome: "Staff retention +35% | Placement rates +28%",
    details: {
      challenge: "A recruitment business was experiencing high staff turnover, inconsistent placement rates, and unclear performance expectations. Consultants lacked structured coaching, and there was no standardised operating rhythm to drive accountability and results.",
      approach: "Conducted a thorough diagnostic to identify operational blockers affecting consultant performance. Introduced clear KPIs aligned to placement success, established weekly operating cadence with pipeline reviews, implemented structured coaching routines for skill development.",
      outcome: "Staff retention improved by 35% within the first year. Consultant throughput increased as standardised processes reduced time-to-placement. Overall placement rates rose by 28%, and the business achieved more predictable revenue performance through improved pipeline management.",
      metrics: [
        "Staff retention: +35%",
        "Placement rates: +28%",
        "Throughput: ↑↑",
        "Revenue predictability: ↑"
      ]
    }
  },
  {
    id: "process-improvement",
    title: "Process Improvement: +28% Throughput and +37% Profitability",
    description: "Mapped and rebuilt an underperforming gold plating process, identifying root causes behind defects and rework. Introduced process controls, standard work, and quality gates.",
    industry: "Manufacturing",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1080&q=80",
    outcome: "Throughput +28% | Profitability +37% | Defects -60%",
    details: {
      challenge: "A gold plating operation suffered from high defect rates, excessive rework, and poor throughput. Process documentation was minimal, quality controls were inconsistent, and profitability was significantly below industry benchmarks due to waste and inefficiency.",
      approach: "Conducted detailed process mapping to identify failure points and root causes of defects. Rebuilt the process from the ground up with clear standard work instructions, introduced quality gates at critical stages, implemented statistical process controls.",
      outcome: "Defect rates dropped by over 60%, rework virtually eliminated. Throughput increased 28% through cycle time reduction and better flow. Overall profitability improved 37% through reduced waste, higher output, and improved first-pass yield.",
      metrics: [
        "Throughput: +28%",
        "Profitability: +37%",
        "Defect rates: -60%",
        "Rework: ~0%"
      ]
    }
  },
  {
    id: "market-share",
    title: "Market Share Recovery: Targeting £500k Revenue Reclaim",
    description: "Built a focused go-to-market recovery plan following lost market share, sharpening positioning, tightening channel focus, and prioritising target accounts.",
    industry: "Industrial B2B",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1080&q=80",
    outcome: "Pipeline £500k+ | 8 accounts recovered | Win rate +45%",
    details: {
      challenge: "The business had lost significant market share to competitors, resulting in approximately £500k in lost annual revenue. Market positioning was unclear, channel strategy was fragmented, and there was no focused account targeting or pipeline recovery plan.",
      approach: "Developed a comprehensive market recovery strategy with sharpened value proposition and positioning. Identified and prioritised high-value target accounts for focused pursuit. Realigned channel strategy to concentrate resources on highest-potential routes to market.",
      outcome: "Successfully rebuilt pipeline with £500k+ in qualified opportunities within 6 months. Recovered key accounts previously lost to competition. Improved win rates through clearer positioning and focused execution.",
      metrics: [
        "Pipeline rebuilt: £500k+",
        "Key accounts recovered: 8",
        "Win rate: +45%",
        "Market share: ↑"
      ]
    }
  },
];

export const ProjectsGallery = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;
    
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  const handleProjectClick = (project: ProjectItem) => {
    if (project.details) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  // Close modal when navigation occurs
  useEffect(() => {
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    // Listen for custom navigation event
    window.addEventListener('navigate', handleCloseModal);
    
    return () => {
      window.removeEventListener('navigate', handleCloseModal);
    };
  }, []);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-6" style={{ color: '#C5A572' }}>
              Selected Projects
            </h2>
            <div className="max-w-full mb-8">
              <p className="text-xl text-gray-300 mb-4">
                Real results from recent engagements. We focus on measurable commercial and operational outcomes.
              </p>
              <p className="text-lg text-gray-400">
                Each project represents hands-on delivery with UK businesses — from stagnant growth and operational inefficiency 
                to predictable performance and sustainable improvement. Click any project to see the full story: the challenge, 
                our approach, and the concrete outcomes delivered.
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <div className="max-w-7xl w-full px-6">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projectData.map((item) => (
                  <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    {/* ENTIRE CARD IS CLICKABLE */}
                    <div 
                      className="group rounded-xl h-full cursor-pointer"
                      onClick={() => handleProjectClick(item)}
                    >
                      <div className="relative h-full min-h-[32rem] overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                           style={{ 
                             backgroundColor: '#2a2a2a',
                             borderColor: 'rgba(197, 165, 114, 0.2)'
                           }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="absolute h-full w-full object-cover opacity-40 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
                        
                        {/* "Click for Info" Badge - TOP RIGHT - KEPT AS VISUAL CUE */}
                        <div className="absolute top-6 right-6 z-10">
                          <div 
                            className="px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300"
                            style={{
                              backgroundColor: 'rgba(197, 165, 114, 0.9)',
                              color: '#1a1a1a',
                              boxShadow: '0 4px 12px rgba(197, 165, 114, 0.3)'
                            }}
                          >
                            Click for Info →
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="mb-3 px-3 py-1 rounded text-xs font-semibold inline-block"
                               style={{
                                 backgroundColor: 'rgba(197, 165, 114, 0.2)',
                                 color: '#C5A572',
                                 border: '1px solid rgba(197, 165, 114, 0.3)'
                               }}>
                            {item.industry}
                          </div>
                          
                          <div className="mb-4 text-2xl font-serif font-semibold leading-tight" style={{ color: '#C5A572' }}>
                            {item.title}
                          </div>
                          
                          {/* NEW - OUTCOME LINE */}
                          <div className="mb-4 font-semibold" style={{ color: '#C5A572', fontSize: '15px' }}>
                            Outcome: {item.outcome}
                          </div>
                          
                          <div className="text-gray-300 leading-relaxed text-sm">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Navigation Controls - Consistent with other carousels */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="bg-charcoal-light border hover:border-gold text-gold disabled:opacity-30"
            style={{ borderColor: 'rgba(197, 165, 114, 0.2)' }}
          >
            <ArrowLeft className="size-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {projectData.map((_, index) => (
              <button
                key={index}
                className="h-2 w-2 rounded-full transition-colors"
                style={{
                  backgroundColor: currentSlide === index ? '#C5A572' : 'rgba(197, 165, 114, 0.2)'
                }}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="bg-charcoal-light border hover:border-gold text-gold disabled:opacity-30"
            style={{ borderColor: 'rgba(197, 165, 114, 0.2)' }}
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject ? {
          title: selectedProject.title,
          industry: selectedProject.industry,
          challenge: selectedProject.details?.challenge || '',
          approach: selectedProject.details?.approach || '',
          outcome: selectedProject.details?.outcome || '',
          metrics: selectedProject.details?.metrics || []
        } : null}
      />
    </>
  );
};

export default ProjectsGallery;
