"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TerminalWindow({ children, className, onClick }: TerminalWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "overflow-hidden rounded-xl border border-border-50",
        "bg-card-30 backdrop-blur-xl shadow-2xl",
        className
      )}
      onClick={onClick}
    >
      {/* Title bar */}
      <div className="flex h-10 items-center gap-2 border-b border-border-50 bg-card/50 px-4">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Title */}
        <div className="flex-1 text-center">
          <span className="text-xs text-foreground/50 font-mono">
            guest@sidneipacheco.com — bash
          </span>
        </div>

        {/* Spacer for symmetry */}
        <div className="w-[52px]" />
      </div>

      {/* Terminal content */}
      <div className="relative">
        {/* Subtle scanline effect */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.02]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)",
          }}
        />

        {children}
      </div>
    </motion.div>
  );
}
