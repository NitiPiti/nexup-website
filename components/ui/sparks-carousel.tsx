// components/ui/sparks-carousel.tsx
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class names

// Define the type for a single item in the carousel
export interface SparkItem {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Define the props for the main component
export interface SparksCarouselProps {
  title: string;
  subtitle: string;
  items: SparkItem[];
}

export const SparksCarousel = React.forwardRef<
  HTMLDivElement,
  SparksCarouselProps
>(({ title, subtitle, items }, ref) => {
  const controls = useAnimation();
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  // Function to scroll the carousel
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.8; // Scroll by 80% of the visible width
      const newScrollLeft =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      
      // Pause auto-play when user manually scrolls
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
    }
  };

  // Auto-scroll functionality with seamless transition
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const autoScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const scrollAmount = clientWidth * 0.8;
        const newScrollLeft = scrollLeft + scrollAmount;
        
        if (newScrollLeft + clientWidth >= scrollWidth - 10) {
          // If at the end, seamlessly scroll back to start
          carouselRef.current.scrollTo({ left: 0, behavior: "auto" });
        } else {
          carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(autoScroll, 1500); // Auto-scroll every 1.5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Effect to check scroll position and update button states
  React.useEffect(() => {
    const checkScrollPosition = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setIsAtStart(scrollLeft < 10);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);
      }
    };

    const currentRef = carouselRef.current;
    if (currentRef) {
        // Initial check
        checkScrollPosition();
        currentRef.addEventListener("scroll", checkScrollPosition);
    }
    
    // Check again on window resize
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollPosition);
      }
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [items]);

  return (
    <section ref={ref} className="w-full py-8" aria-labelledby="sparks-title">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        {(title || subtitle) && (
          <div className="mb-6 flex items-center justify-between">
            <div>
              {title && (
                <a href="#" className="group inline-flex items-center">
                  <h2 id="sparks-title" className="text-2xl md:text-3xl font-bold tracking-tight text-card-foreground">
                    {title}
                  </h2>
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              )}
              {subtitle && <p className="mt-1 text-muted-foreground">{subtitle}</p>}
            </div>
          </div>
        )}

        {/* Carousel Section */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            ref={carouselRef}
            className="flex w-full space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="group w-[280px] sm:w-[300px] md:w-[320px] h-[260px] sm:h-[280px] flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md h-full">
                  <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 flex-1">
                      <div className="p-3 sm:p-4 bg-[#418087]/10 rounded-full">
                        {item.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold leading-tight text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {!isAtStart && (
            <button
              onClick={() => scroll("left")}
              className={cn(
                "absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm border text-foreground shadow-md transition-opacity hover:bg-background/90 disabled:opacity-0"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
          {!isAtEnd && (
            <button
              onClick={() => scroll("right")}
              className={cn(
                "absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm border text-foreground shadow-md transition-opacity hover:bg-background/90 disabled:opacity-0"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
});

SparksCarousel.displayName = "SparksCarousel";
