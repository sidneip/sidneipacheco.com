"use client";

import { useState, useCallback, useRef } from "react";
import { executeCommand, getCommandSuggestions } from "@/components/terminal/commands";
import type { HistoryEntry } from "@/components/terminal/commands";
import { terminalContent } from "@content/terminal";

interface UseTerminalReturn {
  history: HistoryEntry[];
  currentInput: string;
  isProcessing: boolean;
  commandHistory: string[];
  historyIndex: number;
  setCurrentInput: (input: string) => void;
  handleSubmit: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  clearTerminal: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  focusInput: () => void;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function useTerminal(): UseTerminalReturn {
  const [history, setHistory] = useState<HistoryEntry[]>(() => [
    {
      id: generateId(),
      command: "",
      output: terminalContent.welcomeMessage,
      timestamp: new Date(),
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const clearTerminal = useCallback(() => {
    setHistory([]);
    setHistoryIndex(-1);
  }, []);

  const handleSubmit = useCallback(() => {
    if (isProcessing) return;

    const command = currentInput.trim();
    setIsProcessing(true);

    // Add command to history
    if (command) {
      setCommandHistory((prev) => [...prev, command]);
    }
    setHistoryIndex(-1);

    // Execute command
    const result = executeCommand(command);

    // Check for clear command
    if (command.toLowerCase() === "clear" || command.toLowerCase() === "cls") {
      clearTerminal();
      setCurrentInput("");
      setIsProcessing(false);
      return;
    }

    // Add to output history
    const entry: HistoryEntry = {
      id: generateId(),
      command,
      output: result.output,
      isError: result.isError,
      isHtml: result.isHtml,
      timestamp: new Date(),
    };

    setHistory((prev) => [...prev, entry]);
    setCurrentInput("");
    setIsProcessing(false);
  }, [currentInput, isProcessing, clearTerminal]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // Tab completion
      if (e.key === "Tab") {
        e.preventDefault();
        const suggestions = getCommandSuggestions(currentInput);
        if (suggestions.length === 1) {
          setCurrentInput(suggestions[0]);
        } else if (suggestions.length > 1) {
          // Show suggestions as output
          const entry: HistoryEntry = {
            id: generateId(),
            command: currentInput,
            output: ["", `Suggestions: ${suggestions.join(", ")}`, ""],
            timestamp: new Date(),
          };
          setHistory((prev) => [...prev, entry]);
        }
        return;
      }

      // History navigation
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length === 0) return;

        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);

        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex === -1) return;

        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
        return;
      }

      // Ctrl+L to clear
      if (e.ctrlKey && e.key === "l") {
        e.preventDefault();
        clearTerminal();
        return;
      }

      // Ctrl+C to cancel
      if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        setCurrentInput("");
        return;
      }
    },
    [currentInput, commandHistory, historyIndex, clearTerminal]
  );

  return {
    history,
    currentInput,
    isProcessing,
    commandHistory,
    historyIndex,
    setCurrentInput,
    handleSubmit,
    handleKeyDown,
    clearTerminal,
    inputRef,
    focusInput,
  };
}
