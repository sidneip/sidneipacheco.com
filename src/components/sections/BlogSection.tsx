"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { posts, categoryColors } from "@content/blog";

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <RevealOnScroll>
              <span className="text-sm font-medium uppercase tracking-widest text-accent">
                Blog
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Thoughts & Ideas
              </h2>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <a
              href="/blog"
              className="group hidden items-center gap-2 text-foreground/60 transition-colors hover:text-accent sm:flex"
            >
              View all posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </RevealOnScroll>
        </div>

        {/* Posts Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.filter(p => p.published).slice(0, 3).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/blog/${post.slug}`}>
              <GlassCard className="group h-full cursor-pointer">
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
                <h3 className="mt-4 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm text-foreground/60">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-3 text-xs text-foreground/40">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime} read</span>
                </div>
              </GlassCard>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-accent"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
