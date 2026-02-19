"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/uses", label: "Uses" },
] as const;

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    setScrolled(currentY > 10);
    setVisible(currentY < lastScrollY.current || currentY < 80);

    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-transform duration-300",
          visible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div
          className={cn(
            "border-b border-transparent bg-background/80 backdrop-blur-md transition-colors duration-300",
            scrolled && "border-border/50",
          )}
        >
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
            >
              SP
            </Link>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/60 transition-colors hover:bg-muted hover:text-foreground md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

export { Header };
