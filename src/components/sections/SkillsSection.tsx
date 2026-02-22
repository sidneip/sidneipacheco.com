"use client";

import { motion } from "framer-motion";
import { skills, skillCategories } from "@content/skills";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function SkillsSection() {
  return (
    <section className="relative overflow-hidden bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <RevealOnScroll>
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Skills & Tools
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Technologies I work with
            </h2>
          </RevealOnScroll>
        </div>

        {/* Skills Rings - Desktop */}
        <div className="relative mt-16 hidden lg:block">
          <div className="relative mx-auto h-[500px] w-[500px]">
            {/* Center Element */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-background shadow-lg shadow-accent/20">
              <span className="text-3xl font-bold text-accent">SP</span>
            </div>

            {/* Rings */}
            {skillCategories.map((category, ringIndex) => {
              const categorySkills =
                skills[category.key as keyof typeof skills];
              const radius = 120 + ringIndex * 80;
              const duration = 60 + ringIndex * 30;

              return (
                <motion.div
                  key={category.key}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                  }}
                  animate={{ rotate: ringIndex % 2 === 0 ? 360 : -360 }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear" as const,
                  }}
                >
                  {/* Ring Circle */}
                  <div
                    className="absolute inset-0 rounded-full border opacity-20"
                    style={{ borderColor: category.color }}
                  />

                  {/* Skills on Ring */}
                  {categorySkills.map((skill, skillIndex) => {
                    const angle =
                      (skillIndex / categorySkills.length) * Math.PI * 2 -
                      Math.PI / 2;
                    const x = Math.cos(angle) * radius + radius;
                    const y = Math.sin(angle) * radius + radius;

                    return (
                      <motion.div
                        key={skill.name}
                        className="absolute"
                        style={{
                          left: x,
                          top: y,
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          rotate: ringIndex % 2 === 0 ? -360 : 360,
                        }}
                        transition={{
                          duration,
                          repeat: Infinity,
                          ease: "linear" as const,
                        }}
                        whileHover={{ scale: 1.2, zIndex: 50 }}
                      >
                        <div
                          className="whitespace-nowrap rounded-full border bg-background px-3 py-1.5 text-sm font-medium shadow-lg transition-all hover:shadow-xl"
                          style={{
                            borderColor: `${category.color}50`,
                            boxShadow: `0 4px 20px -5px ${category.color}30`,
                          }}
                        >
                          {skill.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 flex justify-center gap-8">
            {skillCategories.map((category) => (
              <div key={category.key} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-sm text-foreground/60">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid - Mobile */}
        <div className="mt-12 lg:hidden">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-8"
            >
              <h3
                className="mb-4 text-sm font-medium uppercase tracking-widest"
                style={{ color: category.color }}
              >
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key as keyof typeof skills].map(
                  (skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className="rounded-full border bg-background px-4 py-2 text-sm"
                      style={{
                        borderColor: `${category.color}30`,
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
