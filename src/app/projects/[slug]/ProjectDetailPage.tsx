"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";

interface ProjectDetailPageProps {
  project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 lg:px-8">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-foreground/60 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">All Projects</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Project Header Visual */}
          <div
            className="mb-8 h-48 rounded-2xl bg-gradient-to-br sm:h-64"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.accentColor}30 0%, transparent 50%, ${project.accentColor}10 100%)`,
              borderBottom: `2px solid ${project.accentColor}40`,
            }}
          />

          {/* Title and Description */}
          <h1
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: project.accentColor }}
          >
            {project.name}
          </h1>

          <p className="mt-4 text-xl text-foreground/80">
            {project.longDescription || project.description}
          </p>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 font-medium text-accent transition-all hover:border-accent/50 hover:bg-accent/20"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-6 py-3 font-medium text-foreground/80 transition-all hover:border-foreground/40 hover:bg-muted"
              >
                <Github className="h-4 w-4" />
                View Source
              </a>
            )}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <GlassCard>
            <h2 className="text-lg font-semibold text-foreground">
              Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-4 py-2 text-sm font-medium"
                  style={{
                    borderColor: `${project.accentColor}40`,
                    backgroundColor: `${project.accentColor}10`,
                    color: project.accentColor,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <GlassCard>
            <h2 className="text-lg font-semibold text-foreground">
              About This Project
            </h2>
            <div className="mt-4 space-y-4 text-foreground/70">
              <p>{project.longDescription}</p>
              <p>
                As CTO and Co-Founder, I was responsible for the technical
                architecture, team leadership, and ensuring scalability of the
                platform from day one.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Back to Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
