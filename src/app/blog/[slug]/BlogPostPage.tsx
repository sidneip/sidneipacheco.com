"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Link2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { BlogPost } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { SITE_CONFIG } from "@/lib/constants";

interface BlogPostPageProps {
  post: BlogPost;
  content: string;
  categoryColor: string;
}

export function BlogPostPage({ post, content, categoryColor }: BlogPostPageProps) {
  const shareUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const shareText = `${post.title} by @sidneip`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 lg:px-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-foreground/60 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">All Posts</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category Badge */}
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: `${categoryColor}20`,
              color: categoryColor,
            }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mt-4 text-lg text-foreground/60">{post.description}</p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-foreground/50">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} read</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-1 text-xs text-foreground/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert mt-12 max-w-none"
        >
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="mt-8 text-3xl font-bold text-foreground">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-8 text-2xl font-bold text-foreground">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mt-4 leading-relaxed text-foreground/80">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/80">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground/80">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="pl-1">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-foreground/90">{children}</em>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-accent">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="mt-4 overflow-x-auto rounded-lg border border-border/50 bg-card p-4 font-mono text-sm">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="mt-4 border-l-4 border-accent/50 pl-4 italic text-foreground/70">
                  {children}
                </blockquote>
              ),
              hr: () => <hr className="my-8 border-border/50" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </motion.article>

        {/* Share Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <GlassCard>
            <h3 className="text-lg font-semibold text-foreground">
              Share this post
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-foreground/20 px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-foreground/20 px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 rounded-lg border border-foreground/20 px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Link2 className="h-4 w-4" />
                Copy Link
              </button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
