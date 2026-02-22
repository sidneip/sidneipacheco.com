"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface ProjectsPageProps {
  projects: Project[];
}

export function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground/60 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Projects
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Things I&apos;ve built
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/60">
            A selection of projects I&apos;ve worked on over the years, from
            startups to open source contributions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <GlassCard
                  className="group h-full cursor-pointer transition-all duration-300"
                  style={
                    {
                      "--project-color": project.accentColor,
                    } as React.CSSProperties
                  }
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 20px 40px -20px ${project.accentColor}40`,
                  }}
                >
                  {/* Project Header */}
                  <div
                    className="mb-4 h-32 rounded-lg bg-gradient-to-br from-[var(--project-color)]/20 to-transparent"
                    style={{
                      borderBottom: `1px solid ${project.accentColor}30`,
                    }}
                  />

                  {/* Project Content */}
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-foreground/60">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-foreground/70">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex gap-4">
                    {project.url && (
                      <span className="flex items-center gap-1.5 text-sm text-foreground/60 transition-colors group-hover:text-accent">
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </span>
                    )}
                    {project.github && (
                      <span className="flex items-center gap-1.5 text-sm text-foreground/60 transition-colors group-hover:text-accent">
                        <Github className="h-4 w-4" />
                        Source
                      </span>
                    )}
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
