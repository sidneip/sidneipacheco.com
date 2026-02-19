"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/60 transition-colors hover:bg-muted hover:text-foreground",
          className,
        )}
        aria-label="Toggle theme"
      >
        <span className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/60 transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all duration-300",
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
        style={{ position: isDark ? "absolute" : "relative" }}
      />
      <Moon
        className={cn(
          "h-5 w-5 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0",
        )}
        style={{ position: isDark ? "relative" : "absolute" }}
      />
    </button>
  );
}

export { ThemeToggle };
