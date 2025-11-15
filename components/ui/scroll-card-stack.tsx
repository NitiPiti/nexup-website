"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollCardItem {
  id: string | number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ScrollCardStackProps {
  items: ScrollCardItem[];
  className?: string;
}

export function ScrollCardStack({ items, className }: ScrollCardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const cardHeight = 600; // Height per card section
        const newIndex = Math.min(
          Math.floor(scrollTop / cardHeight),
          items.length - 1
        );
        setActiveIndex(newIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial call
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-y-auto overflow-x-hidden",
        "scrollbar-hide",
        className
      )}
      style={{
        scrollSnapType: "y mandatory",
      }}
    >
      <div className="sticky top-0 h-full flex items-center justify-center">
        <div className="relative w-full max-w-md mx-auto h-[300px] sm:h-[320px]">
          {items.map((item, index) => {
            const position = index - activeIndex;
            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 2;

            if (!isVisible) return null;

            const scale = isActive ? 1 : Math.max(0.85, 1 - Math.abs(position) * 0.08);
            const y = position * 60;
            const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(position) * 0.25);
            const zIndex = items.length - Math.abs(position);

            return (
              <motion.div
                key={item.id}
                className="absolute inset-0"
                style={{
                  zIndex,
                }}
                initial={false}
                animate={{
                  scale,
                  y,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-lg border bg-card text-card-foreground shadow-lg transition-all duration-300 h-[280px] sm:h-[300px] w-full",
                    isActive && "shadow-2xl ring-2 ring-[#418087]/20"
                  )}
                >
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
            );
          })}
        </div>
      </div>

      {/* Spacer divs to enable scrolling */}
      {items.map((_, index) => (
        <div
          key={`spacer-${index}`}
          className="h-[600px] flex-shrink-0"
          style={{ scrollSnapAlign: "start" }}
        />
      ))}
    </div>
  );
}

