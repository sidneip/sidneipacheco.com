"use client";

import { useRef, useEffect } from "react";
import { TerminalCursor } from "./TerminalCursor";

interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  isProcessing: boolean;
}

export function TerminalInput({
  value,
  onChange,
  onSubmit,
  onKeyDown,
  inputRef,
  isProcessing,
}: TerminalInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep input in view
  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
      return;
    }
    onKeyDown(e);
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-2 font-mono text-sm"
    >
      <span className="shrink-0 text-accent">visitor@portfolio</span>
      <span className="text-foreground/60">~</span>
      <span className="text-foreground/60">$</span>

      <div className="relative flex-1">
        {/* Hidden input for keyboard capture */}
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full bg-transparent text-transparent caret-transparent outline-none"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          disabled={isProcessing}
          aria-label="Terminal input"
        />

        {/* Visible text with cursor */}
        <div className="flex items-center">
          <span className="text-foreground">{value}</span>
          {!isProcessing && <TerminalCursor />}
        </div>
      </div>
    </div>
  );
}
