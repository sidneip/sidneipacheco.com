"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const socialLinks = [
  { name: "GitHub", href: SITE_CONFIG.github, icon: Github },
  { name: "LinkedIn", href: SITE_CONFIG.linkedin, icon: Linkedin },
  { name: "Twitter", href: SITE_CONFIG.twitter, icon: Twitter },
];

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card/30 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* CTA */}
          <h3 className="text-2xl font-bold text-foreground">
            Let&apos;s connect
          </h3>
          <p className="mt-2 text-foreground/60">
            Open to new opportunities and interesting conversations.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-all hover:scale-110 hover:text-accent"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 h-px w-full max-w-xs bg-border" />

          {/* Copyright */}
          <div className="mt-8 flex items-center gap-2 text-sm text-foreground/40">
            <span>© {new Date().getFullYear()} Sidnei Pacheco</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Built with Next.js
              <span className="inline-block h-4 w-2 animate-pulse bg-accent" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
