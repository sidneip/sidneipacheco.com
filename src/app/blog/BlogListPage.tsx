"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { categoryColors } from "@content/blog/posts";

interface BlogListPageProps {
  posts: BlogPost[];
}

export function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground/60 transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Blog
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Thoughts & Ideas
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/60">
            Writing about software engineering, startups, and lessons learned
            from building products over the years.
          </p>
        </motion.div>

        {/* Posts List */}
        <div className="mt-12 space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <GlassCard className="group cursor-pointer transition-all hover:border-accent/30">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      {/* Category Badge */}
                      <span
                        className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: `${categoryColors[post.category]}20`,
                          color: categoryColors[post.category],
                        }}
                      >
                        {post.category}
                      </span>

                      {/* Title */}
                      <h2 className="mt-3 text-xl font-bold text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-2 text-foreground/60">
                        {post.description}
                      </p>

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
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-foreground/40 sm:flex-col sm:items-end sm:gap-1">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      <span className="sm:hidden">·</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
