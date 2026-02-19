import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/* ── Heading ──────────────────────────────────────── */

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
};

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
  2: "text-3xl font-bold tracking-tight sm:text-4xl",
  3: "text-2xl font-semibold tracking-tight",
  4: "text-xl font-semibold tracking-tight",
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 1, className, ...props }, ref) => {
    const Tag = `h${level}` as const;

    return (
      <Tag
        ref={ref}
        className={cn(
          "text-foreground",
          headingStyles[level],
          className,
        )}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";

/* ── Paragraph ────────────────────────────────────── */

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-foreground/80 leading-relaxed", className)}
      {...props}
    />
  ),
);

Paragraph.displayName = "Paragraph";

/* ── Code ─────────────────────────────────────────── */

type CodeProps = HTMLAttributes<HTMLElement>;

const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground",
        className,
      )}
      {...props}
    />
  ),
);

Code.displayName = "Code";

export { Heading, Paragraph, Code };
export type { HeadingProps, ParagraphProps, CodeProps };
