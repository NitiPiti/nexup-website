"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={item?.link}
          href={item?.link || "#"}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="relative z-20 h-full w-full p-4 overflow-hidden bg-transparent border-none">
            {/* FlickeringGrid Background */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
              <FlickeringGrid 
                squareSize={3}
                gridGap={4}
                flickerChance={0.2}
                color="rgb(65, 128, 135)"
                maxOpacity={0.4}
              />
            </div>
            
            <CardContent className="p-4 relative z-10">
              <div className="flex flex-col items-center text-center space-y-4">
                {item.icon}
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};
