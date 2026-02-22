"use client";

import { Terminal } from "@/components/terminal";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function TerminalSection() {
  return (
    <section id="terminal" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <RevealOnScroll>
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Interactive
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore via Terminal
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
              Prefer the command line? Navigate my portfolio the hacker way.
              Try typing <code className="rounded bg-card/80 px-2 py-0.5 text-accent">help</code> to get started.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="mt-12">
            <Terminal />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
