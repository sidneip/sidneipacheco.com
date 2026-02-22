"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useMousePosition } from "@/hooks/useMousePosition";
import { SITE_CONFIG } from "@/lib/constants";

// Dynamic import for 3D components to avoid SSR issues
const Scene = dynamic(
  () => import("@/components/three/Scene").then((mod) => mod.Scene),
  { ssr: false }
);
const MorphingMesh = dynamic(
  () => import("@/components/three/MorphingMesh").then((mod) => mod.MorphingMesh),
  { ssr: false }
);
const Particles = dynamic(
  () => import("@/components/three/Particles").then((mod) => mod.Particles),
  { ssr: false }
);

const techStack = [
  "TypeScript",
  "React",
  "Ruby on Rails",
  "Rust",
  "PostgreSQL",
  "AWS",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection() {
  const mousePosition = useMousePosition();

  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene className="h-full w-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
          <MorphingMesh mousePosition={mousePosition} />
          <Particles />
        </Scene>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/80 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
            variants={itemVariants}
          >
            {SITE_CONFIG.name}
          </motion.h1>

          <motion.p
            className="mt-4 text-2xl font-medium text-accent sm:text-3xl"
            variants={itemVariants}
          >
            CTO & Co-Founder
          </motion.p>

          <motion.p
            className="mt-4 text-lg text-foreground/60"
            variants={itemVariants}
          >
            Building startups for 15+ years in Brazil.
            <br />
            Turning ideas into scalable products.
          </motion.p>

          {/* Tech Stack Badges */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={containerVariants}
          >
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                variants={badgeVariants}
                className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="mt-10 flex gap-4" variants={itemVariants}>
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-all hover:border-accent hover:text-accent"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-foreground/40"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
