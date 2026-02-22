"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@content/timeline";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-card/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Journey
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            15+ years of building
          </h2>
        </RevealOnScroll>

        {/* Timeline Container */}
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-purple-500 to-pink-500"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Timeline Items */}
          <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Dot */}
                <div
                  className={`relative z-10 mb-4 flex h-4 w-4 items-center justify-center rounded-full ${
                    item.year === "Now"
                      ? "bg-accent shadow-lg shadow-accent/50"
                      : "bg-border"
                  }`}
                >
                  {item.year === "Now" && (
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/50" />
                  )}
                </div>

                {/* Year */}
                <span
                  className={`text-2xl font-bold ${
                    item.year === "Now" ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="mt-2 font-semibold text-foreground">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-foreground/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
