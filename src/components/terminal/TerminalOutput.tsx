"use client";

import { motion } from "framer-motion";
import type { HistoryEntry } from "./commands";
import { cn } from "@/lib/utils";

interface TerminalOutputProps {
  history: HistoryEntry[];
}

export function TerminalOutput({ history }: TerminalOutputProps) {
  return (
    <div className="space-y-2" role="log" aria-live="polite" aria-label="Terminal output">
      {history.map((entry, entryIndex) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: entryIndex * 0.02 }}
        >
          {/* Command line (if there was a command) */}
          {entry.command && (
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="text-accent">visitor@portfolio</span>
              <span className="text-foreground/60">~</span>
              <span className="text-foreground/60">$</span>
              <span className="text-foreground">{entry.command}</span>
            </div>
          )}

          {/* Output lines */}
          {entry.output.map((line, lineIndex) => (
            <div
              key={`${entry.id}-${lineIndex}`}
              className={cn(
                "whitespace-pre-wrap font-mono text-sm",
                entry.isError ? "text-red-400" : "text-foreground/80"
              )}
            >
              {line || "\u00A0"}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
