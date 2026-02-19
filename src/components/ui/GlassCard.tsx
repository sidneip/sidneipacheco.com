"use client";

import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "rounded-xl border border-border-50 bg-card-30 p-6 backdrop-blur-xl",
        "shadow-lg transition-shadow duration-300 hover:shadow-accent/5",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { GlassCard };
export type { GlassCardProps };
