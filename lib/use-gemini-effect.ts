"use client";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const useGeminiEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
  ];

  return { ref, pathLengths };
};






