"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTerminal } from "@/hooks/useTerminal";
import { TerminalWindow } from "./TerminalWindow";
import { TerminalOutput } from "./TerminalOutput";
import { TerminalInput } from "./TerminalInput";
import { cn } from "@/lib/utils";

interface TerminalProps {
  className?: string;
}

const quickCommands = ["help", "about", "skills", "projects", "contact", "social"];

export function Terminal({ className }: TerminalProps) {
  const {
    history,
    currentInput,
    isProcessing,
    setCurrentInput,
    handleSubmit,
    handleKeyDown,
    inputRef,
    focusInput,
  } = useTerminal();

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new output appears
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount
  useEffect(() => {
    focusInput();
  }, [focusInput]);

  const handleQuickCommand = (command: string) => {
    setCurrentInput(command);
    // Small delay to show the command before executing
    setTimeout(() => {
      inputRef.current?.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true })
      );
    }, 100);
  };

  return (
    <div className={cn("w-full", className)}>
      <TerminalWindow onClick={focusInput} className="w-full">
        {/* Scrollable content area */}
        <div
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-4 md:h-[450px] lg:h-[500px]"
        >
          <TerminalOutput history={history} />
          <div className="mt-2">
            <TerminalInput
              value={currentInput}
              onChange={setCurrentInput}
              onSubmit={handleSubmit}
              onKeyDown={handleKeyDown}
              inputRef={inputRef}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </TerminalWindow>

      {/* Quick command buttons (mobile-friendly) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 flex flex-wrap gap-2 lg:hidden"
      >
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleQuickCommand(cmd)}
            className={cn(
              "rounded-full border border-accent/30 bg-card/50 px-4 py-2",
              "text-sm font-mono text-foreground/80",
              "transition-all hover:border-accent/60 hover:bg-accent/10",
              "active:scale-95"
            )}
          >
            {cmd}
          </button>
        ))}
      </motion.div>

      {/* Keyboard hints (desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 hidden text-center text-xs text-foreground/40 lg:block"
      >
        <span className="mr-4">
          <kbd className="rounded bg-card/80 px-1.5 py-0.5 text-[10px]">Tab</kbd> autocomplete
        </span>
        <span className="mr-4">
          <kbd className="rounded bg-card/80 px-1.5 py-0.5 text-[10px]">↑↓</kbd> history
        </span>
        <span>
          <kbd className="rounded bg-card/80 px-1.5 py-0.5 text-[10px]">Ctrl+L</kbd> clear
        </span>
      </motion.div>
    </div>
  );
}
