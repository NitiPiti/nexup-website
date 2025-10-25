"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  animationNum?: number;
  customVariants?: any;
  timelineRef?: React.RefObject<HTMLDivElement>;
}

export function TimelineContent({
  as: Component = "div",
  children,
  className = "",
  animationNum = 0,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const defaultVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 50,
      opacity: 0,
    },
  };

  const variants = customVariants || defaultVariants;

  const MotionComponent = motion[Component as keyof typeof motion] as any;
  
  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
    >
      {children}
    </MotionComponent>
  );
}




