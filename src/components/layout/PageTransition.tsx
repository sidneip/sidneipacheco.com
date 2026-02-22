"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type PageTransitionProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

function PageTransition({ children, className, ...props }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3, ease: "easeOut" as const }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { PageTransition };
