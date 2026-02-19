import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    href: "https://github.com/sidneipacheco",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/sidneipacheco",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/sidneipacheco",
    label: "X",
    icon: XIcon,
  },
] as const;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/uses", label: "Uses" },
] as const;

function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t border-border", className)}>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 transition-colors hover:text-foreground"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-foreground/40">
          &copy; {new Date().getFullYear()} Sidnei Pacheco. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
