import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: '/assets/generated/truevolts-slider-1.dim_1600x600.jpg',
    alt: 'TRUEVOLTS Research Center - Advanced AI and ML training facility',
  },
  {
    src: '/assets/generated/truevolts-slider-2.dim_1600x600.jpg',
    alt: 'Professional software development training environment',
  },
  {
    src: '/assets/generated/truevolts-slider-3.dim_1600x600.jpg',
    alt: 'State-of-the-art research and innovation lab',
  },
  {
    src: '/assets/generated/truevolts-slider-4.dim_1600x600.jpg',
    alt: 'Collaborative learning spaces for academic excellence',
  },
  {
    src: '/assets/generated/truevolts-slider-5.dim_1600x600.jpg',
    alt: 'Industry-standard training infrastructure and resources',
  },
];

export default function LandingSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-muted">
      {/* Full-width responsive container with aspect ratio - no max-width constraints */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.5/1] lg:aspect-[3/1]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-background/80 hover:bg-background text-foreground rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center backdrop-blur-sm"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-background/80 hover:bg-background text-foreground rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center backdrop-blur-sm"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary w-6 sm:w-8'
                : 'bg-background/60 hover:bg-background/80 w-2 sm:w-2.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
