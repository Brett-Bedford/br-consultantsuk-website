import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

interface MobileCarouselSectionProps {
  children: React.ReactNode[];
  itemsPerSlide?: number;
}

export const MobileCarouselSection: React.FC<MobileCarouselSectionProps> = ({ 
  children,
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <div className="w-full">
      {/* Mobile Carousel - Show ONLY on mobile */}
      <div className="md:hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {React.Children.map(children, (child, index) => (
              <CarouselItem key={index} className="pl-4">
                {child}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
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
            {React.Children.map(children, (_, index) => (
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
      </div>

      {/* Desktop Grid - Show ONLY on desktop */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
        {children}
      </div>
    </div>
  );
};

export default MobileCarouselSection;
