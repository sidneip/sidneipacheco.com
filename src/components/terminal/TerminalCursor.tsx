"use client";

import { motion } from "framer-motion";

export function TerminalCursor() {
  return (
    <motion.span
      className="inline-block h-5 w-2 bg-accent"
      animate={{ opacity: [1, 0] }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut" as const,
      }}
      aria-hidden="true"
    />
  );
}
