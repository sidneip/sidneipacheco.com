"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { usesCategories } from "@content/uses/uses";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function UsesSection() {
  const [openCategories, setOpenCategories] = useState<string[]>([
    usesCategories[0]?.title || "",
  ]);

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <section id="uses" className="py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <RevealOnScroll>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Uses
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            My Setup
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mt-4 text-lg text-foreground/60">
            Tools, hardware, and software I use daily for building products.
          </p>
        </RevealOnScroll>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {usesCategories.map((category, index) => {
            const isOpen = openCategories.includes(category.title);

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-xl border border-border bg-card/50"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-muted/50"
                >
                  <span className="text-lg font-semibold text-foreground">
                    {category.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-foreground/60" />
                  </motion.div>
                </button>

                {/* Category Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    >
                      <div className="border-t border-border px-6 py-4">
                        <div className="space-y-6">
                          {category.items.map((item, itemIndex) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: itemIndex * 0.05 }}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <h4 className="font-medium text-foreground">
                                    {item.name}
                                  </h4>
                                  <p className="mt-1 text-sm text-foreground/60">
                                    {item.description}
                                  </p>
                                </div>
                                {item.url && (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 text-foreground/40 transition-colors hover:text-accent"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
