"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Rewind, FastForward } from "lucide-react";

export interface CarouselItem {
  id: number;
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

// Create infinite items by triplicating the array
const createInfiniteItems = (originalItems: CarouselItem[]) => {
  const items: (CarouselItem & { originalIndex: number })[] = [];
  for (let i = 0; i < 3; i++) {
    originalItems.forEach((item, index) => {
      items.push({
        ...item,
        id: parseInt(`${i}-${item.id}`),
        originalIndex: index,
      });
    });
  }
  return items;
};

const RulerLines = ({
  top = true,
  totalLines = 100,
}: {
  top?: boolean;
  totalLines?: number;
}) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);
  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);
    let height = "h-3";
    let color = "bg-gray-500 dark:bg-gray-400";
    if (isCenter) {
      height = "h-8";
      color = "bg-primary dark:bg-white";
    } else if (isFifth) {
      height = "h-4";
      color = "bg-primary dark:bg-white";
    }
    const positionClass = top ? "" : "bottom-0";
    lines.push(
      <div
        key={i}
        className={`absolute w-0.5 ${height} ${color} ${positionClass}`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }
  return <div className="relative w-full h-8 px-4">{lines}</div>;
};

export function RulerCarousel({
  originalItems,
  onActiveIndexChange,
}: {
  originalItems: CarouselItem[];
  onActiveIndexChange?: (index: number) => void;
}) {
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;
  // Start with the middle set, first item (index 0 of middle set = itemsPerSet)
  const [activeIndex, setActiveIndex] = useState(itemsPerSet);
  const [isResetting, setIsResetting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const previousIndexRef = useRef(itemsPerSet);

  const handleItemClick = (newIndex: number) => {
    if (isResetting) return;
    setIsPaused(true);
    // Find the original item index (0-8)
    const targetOriginalIndex = newIndex % itemsPerSet;
    // Find all instances of this item across the 3 copies
    const possibleIndices = [
      targetOriginalIndex, // First copy
      targetOriginalIndex + itemsPerSet, // Second copy
      targetOriginalIndex + itemsPerSet * 2, // Third copy
    ];
    // Find the closest index to current position
    let closestIndex = possibleIndices[0];
    let smallestDistance = Math.abs(possibleIndices[0] - activeIndex);
    for (const index of possibleIndices) {
      const distance = Math.abs(index - activeIndex);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    }
    previousIndexRef.current = activeIndex;
    setActiveIndex(closestIndex);
    // Resume after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handlePrevious = () => {
    if (isResetting) return;
    setIsPaused(true);
    setActiveIndex((prev) => prev - 1);
    // Resume after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleNext = () => {
    if (isResetting) return;
    setIsPaused(true);
    setActiveIndex((prev) => prev + 1);
    // Resume after 3 seconds
    setTimeout(() => setIsPaused(false), 3000);
  };

  // Handle infinite scrolling
  useEffect(() => {
    if (isResetting) return;
    // If we're in the first set, jump to the equivalent position in the middle set
    if (activeIndex < itemsPerSet) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + itemsPerSet);
        setIsResetting(false);
      }, 0);
    }
    // If we're in the last set, jump to the equivalent position in the middle set
    else if (activeIndex >= itemsPerSet * 2) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - itemsPerSet);
        setIsResetting(false);
      }, 0);
    }
  }, [activeIndex, itemsPerSet, isResetting]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isResetting) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIsPaused(true);
        setActiveIndex((prev) => prev - 1);
        setTimeout(() => setIsPaused(false), 3000);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setIsPaused(true);
        setActiveIndex((prev) => prev + 1);
        setTimeout(() => setIsPaused(false), 3000);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResetting]);

  // Calculate target position - center the active item
  // Each item is 400px wide with 100px gap = 500px total spacing
  // We want to center the active item in the viewport
  const activeItemIndex = activeIndex % itemsPerSet;
  const centerOffset = (itemsPerSet - 1) / 2; // Center position in the set
  const targetX = (centerOffset - activeItemIndex) * 500;

  // Get current page info
  const currentPage = (activeIndex % itemsPerSet) + 1;
  const totalPages = itemsPerSet;

  // Notify parent of active index changes
  useEffect(() => {
    if (onActiveIndexChange) {
      onActiveIndexChange(activeIndex % itemsPerSet);
    }
  }, [activeIndex, itemsPerSet, onActiveIndexChange]);

  // Auto-sliding functionality
  useEffect(() => {
    if (isPaused || isResetting) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2000); // Auto-slide every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused, isResetting]);

  return (
    <div 
      className="w-full min-h-[600px] flex flex-col items-center justify-center bg-transparent"
    >
      <div className="w-full flex flex-col justify-center relative">
        <div className="flex items-center justify-center">
          <RulerLines top />
        </div>
        
        {/* Combined Text and Cards Section */}
        <div className="flex items-center justify-center w-full min-h-[500px] relative overflow-hidden py-8">
          <motion.div
            className="flex items-center gap-[100px]"
            animate={{
              x: isResetting ? targetX : targetX,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1,
                  }
            }
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center"
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }
                  }
                  style={{
                    width: "400px",
                  }}
                >
                  {/* Text Title */}
                  <motion.button
                    onClick={() => handleItemClick(index)}
                    className={`text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap cursor-pointer flex items-center justify-center mb-6 ${
                      isActive
                        ? "text-primary dark:text-white"
                        : "text-muted-foreground dark:text-gray-500 hover:text-foreground dark:hover:text-gray-400"
                    }`}
                  >
                    {item.title}
                  </motion.button>
                  
                  {/* Card */}
                  {item.icon && item.description && (
                    <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-lg h-[280px] sm:h-[300px] w-full">
                      <div className="p-4 sm:p-6 h-full flex flex-col">
                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 flex-1">
                          <div className="p-3 sm:p-4 bg-[#418087]/10 rounded-full">
                            {item.icon}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        <div className="flex items-center justify-center">
          <RulerLines top={false} />
        </div>
      </div>
      
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={handlePrevious}
          disabled={isResetting}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Previous item"
        >
          <Rewind className="w-5 h-5 text-primary/80" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground dark:text-gray-400">
            {currentPage}
          </span>
          <span className="text-sm text-muted-foreground dark:text-gray-500">
            /
          </span>
          <span className="text-sm font-medium text-muted-foreground dark:text-gray-400">
            {totalPages}
          </span>
        </div>
        <button
          onClick={handleNext}
          disabled={isResetting}
          className="flex items-center justify-center cursor-pointer"
          aria-label="Next item"
        >
          <FastForward className="w-5 h-5 text-primary/80" />
        </button>
      </div>
    </div>
  );
}

