'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*  Copy Button                                                               */
/* -------------------------------------------------------------------------- */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy code to clipboard"
      className={cn(
        'absolute right-3 top-3 rounded-md px-2 py-1 text-xs font-medium transition-colors',
        'bg-white/10 text-zinc-400 hover:bg-white/20 hover:text-zinc-200',
        copied && 'text-green-400 hover:text-green-400',
      )}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Callout                                                                   */
/* -------------------------------------------------------------------------- */

type CalloutVariant = 'info' | 'warning' | 'tip';

const calloutStyles: Record<
  CalloutVariant,
  { border: string; bg: string; icon: string }
> = {
  info: {
    border: 'border-blue-500/40',
    bg: 'bg-blue-500/5',
    icon: 'i',
  },
  warning: {
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/5',
    icon: '!',
  },
  tip: {
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/5',
    icon: '*',
  },
};

function Callout({
  variant = 'info',
  children,
}: {
  variant?: CalloutVariant;
  children: React.ReactNode;
}) {
  const style = calloutStyles[variant];

  return (
    <aside
      className={cn(
        'my-6 rounded-lg border-l-4 px-5 py-4',
        style.border,
        style.bg,
      )}
      role="note"
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-current/10 text-xs font-bold"
          aria-hidden="true"
        >
          {style.icon}
        </span>
        <div className="min-w-0 text-sm leading-relaxed">{children}</div>
      </div>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/*  Heading with Anchor Link                                                  */
/* -------------------------------------------------------------------------- */

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function createHeading(level: 1 | 2 | 3 | 4) {
  const Tag = `h${level}` as const;

  function Heading({ children }: { children?: React.ReactNode }) {
    const text = typeof children === 'string' ? children : '';
    const id = slugify(text);

    return (
      <Tag id={id} className="group scroll-mt-24">
        <a
          href={`#${id}`}
          className="no-underline hover:underline"
          aria-label={`Link to ${text}`}
        >
          {children}
          <span
            className="ml-2 opacity-0 transition-opacity group-hover:opacity-60"
            aria-hidden="true"
          >
            #
          </span>
        </a>
      </Tag>
    );
  }

  Heading.displayName = `Heading${level}`;
  return Heading;
}

/* -------------------------------------------------------------------------- */
/*  Custom Image                                                              */
/* -------------------------------------------------------------------------- */

function MDXImage({
  src,
  alt,
  width,
  height,
}: {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}) {
  if (!src) return null;

  // Generate a descriptive alt from filename if not provided
  const defaultAlt = src
    .split('/')
    .pop()
    ?.replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()) || 'Blog post image';

  const imageAlt = alt || defaultAlt;

  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={imageAlt}
        width={width ?? 800}
        height={height ?? 450}
        className="rounded-lg"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      {alt && (
        <figcaption className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}

/* -------------------------------------------------------------------------- */
/*  MDX Component Map                                                         */
/* -------------------------------------------------------------------------- */

export const mdxComponents = {
  /* Headings */
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),

  /* Code blocks */
  pre: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & { children?: React.ReactNode }) => {
    // Extract the raw text content for the copy button.
    let codeText = '';
    React.Children.forEach(children, (child) => {
      if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
        const inner = child.props.children;
        if (typeof inner === 'string') {
          codeText = inner;
        }
      }
    });

    return (
      <div className="group relative my-6">
        <CopyButton text={codeText} />
        <pre
          {...props}
          className={cn(
            'overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4',
            'font-mono text-sm leading-relaxed',
            'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700',
          )}
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {children}
        </pre>
      </div>
    );
  },

  code: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) => {
    // Inline code (not inside a pre block).
    const isInline = !props.className?.includes('language-');

    if (isInline) {
      return (
        <code
          className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <code className={props.className} {...props}>
        {children}
      </code>
    );
  },

  /* Blockquote */
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement> & { children?: React.ReactNode }) => (
    <blockquote
      {...props}
      className="my-6 border-l-4 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
    >
      {children}
    </blockquote>
  ),

  /* Links */
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode;
  }) => {
    const isExternal = href?.startsWith('http');

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline decoration-blue-500/30 underline-offset-2 transition-colors hover:text-blue-400 hover:decoration-blue-400/50"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href ?? '#'}
        className="text-blue-500 underline decoration-blue-500/30 underline-offset-2 transition-colors hover:text-blue-400 hover:decoration-blue-400/50"
        {...props}
      >
        {children}
      </Link>
    );
  },

  /* Lists */
  ul: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLUListElement> & { children?: React.ReactNode }) => (
    <ul
      {...props}
      className="my-4 list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300"
    >
      {children}
    </ul>
  ),

  ol: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLOListElement> & { children?: React.ReactNode }) => (
    <ol
      {...props}
      className="my-4 list-decimal space-y-2 pl-6 text-zinc-700 dark:text-zinc-300"
    >
      {children}
    </ol>
  ),

  li: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLLIElement> & { children?: React.ReactNode }) => (
    <li {...props} className="leading-relaxed">
      {children}
    </li>
  ),

  /* Table */
  table: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableElement> & { children?: React.ReactNode }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table {...props} className="w-full text-sm">
        {children}
      </table>
    </div>
  ),

  thead: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement> & {
    children?: React.ReactNode;
  }) => (
    <thead
      {...props}
      className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
    >
      {children}
    </thead>
  ),

  th: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableCellElement> & {
    children?: React.ReactNode;
  }) => (
    <th
      {...props}
      className="px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100"
    >
      {children}
    </th>
  ),

  td: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableCellElement> & {
    children?: React.ReactNode;
  }) => (
    <td
      {...props}
      className="border-t border-zinc-200 px-4 py-3 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
    >
      {children}
    </td>
  ),

  /* Paragraph */
  p: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement> & {
    children?: React.ReactNode;
  }) => (
    <p
      {...props}
      className="my-4 leading-relaxed text-zinc-700 dark:text-zinc-300"
    >
      {children}
    </p>
  ),

  /* Horizontal rule */
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      {...props}
      className="my-8 border-zinc-200 dark:border-zinc-800"
    />
  ),

  /* Custom components */
  Image: MDXImage,
  Callout,
};
