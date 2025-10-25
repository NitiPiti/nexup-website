"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "./text-reveal-card";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gray-50 dark:bg-gray-900 font-sans"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <div className="flex justify-center mb-8">
          <TextRevealCard
            text="Transform Your Support in Minutes"
            revealText="Your Journey to NexUp AI"
            className="w-full max-w-4xl"
          >
            <TextRevealCardDescription>
              Set up your AI chatbots effortlessly and start saving time and resources immediately. Here's how we help you get there:
            </TextRevealCardDescription>
          </TextRevealCard>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start pt-8 md:pt-20 md:gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Title Section */}
            <div className="flex-shrink-0 w-48 md:w-72 lg:w-96">
              <div className="relative">
                <div className="h-10 absolute left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center z-10">
                  <div className="h-4 w-4 rounded-full bg-[#418087] border-2 border-white dark:border-black" />
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#418087] dark:text-[#418087] pl-16 md:pl-20 leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Smooth Text Content */}
            <div className="flex-1 pl-4 md:pl-0">
              <div className="max-w-2xl">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title === "Data Collection" && "Import Your Resources"}
                    {item.title === "AI Training" && "Smart Processing"}
                    {item.title === "Customization" && "Personalize Your Bot"}
                    {item.title === "Deployment" && "Go Live"}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.title === "Data Collection" && "Upload documents, sync websites, or connect Google Drive"}
                    {item.title === "AI Training" && "Advanced AI analyzes and understands your content"}
                    {item.title === "Customization" && "Customize appearance, behavior, and responses"}
                    {item.title === "Deployment" && "Deploy across multiple channels instantly"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                    {item.title === "Data Collection" && "Easily import your existing knowledge base with support for multiple formats including PDFs, Word docs, web pages, and more. Our system automatically processes and indexes your content for optimal AI performance."}
                    {item.title === "AI Training" && "Our sophisticated AI algorithms process your content, understanding context, relationships, and key concepts to create an intelligent knowledge base that can answer complex questions accurately."}
                    {item.title === "Customization" && "Tailor your chatbot's personality, visual design, and response style to match your brand. Set up custom workflows, integrate with your existing systems, and configure advanced features."}
                    {item.title === "Deployment" && "Launch your AI chatbot on your website, mobile app, or messaging platforms. Monitor performance with detailed analytics and continuously improve based on user interactions."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-300 dark:via-gray-600 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#418087] via-[#418087] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
