"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { about } from "@content/about";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Text Content */}
          <div className="lg:col-span-3">
            <RevealOnScroll>
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                {about.heading}
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Building the future,
                <br />
                <span className="text-accent">one product at a time.</span>
              </h2>
            </RevealOnScroll>

            <motion.div
              className="mt-8 space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  className="text-lg leading-relaxed text-foreground/70"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Highlights */}
            <RevealOnScroll delay={0.3}>
              <div className="mt-12 grid grid-cols-3 gap-8">
                {about.highlights.map((highlight) => (
                  <div key={highlight.label}>
                    <div className="text-4xl font-bold text-accent">
                      {highlight.value}
                    </div>
                    <div className="mt-1 text-sm text-foreground/60">
                      {highlight.label}
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Photo / Visual Element */}
          <div className="lg:col-span-2">
            <RevealOnScroll direction="right" delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border/50 bg-card/30 shadow-lg backdrop-blur-xl">
                <Image
                  src="/sidnei.jpeg"
                  alt="Sidnei Pacheco - Senior Software Engineer and CTO with 15+ years of experience building scalable products"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
