import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { BlogPost } from '@/types';

/**
 * NOTE: gray-matter must be installed as a direct dependency.
 * Run: npm install gray-matter
 */

type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: BlogPost['category'];
  tags: string[];
  published: boolean;
};

/** Returns the absolute path to the blog content directory. */
function getBlogDir(): string {
  return path.join(process.cwd(), 'content', 'blog');
}

/** Recursively collects all .mdx file paths under a directory. */
function getMdxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Derives a slug from a file path relative to the blog directory.
 * e.g. content/blog/engineering/my-post.mdx -> "engineering/my-post"
 */
function getSlugFromPath(filePath: string): string {
  const blogDir = getBlogDir();
  const relative = path.relative(blogDir, filePath);
  return relative.replace(/\.mdx$/, '');
}

/**
 * Reads all .mdx files from content/blog/**, parses frontmatter,
 * calculates reading time, and returns posts sorted by date descending.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogDir = getBlogDir();

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = getMdxFiles(blogDir);
  const posts: BlogPost[] = [];

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);
    const frontmatter = data as BlogFrontmatter;

    posts.push({
      slug: getSlugFromPath(filePath),
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      category: frontmatter.category,
      tags: frontmatter.tags ?? [],
      readingTime: readingTime(raw).text,
      published: frontmatter.published ?? false,
    });
  }

  return posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Compiles and returns the MDX source and frontmatter for a single blog post.
 */
export async function getBlogPost(slug: string) {
  const filePath = path.join(getBlogDir(), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source: raw,
    options: { parseFrontmatter: true },
  });

  return {
    content,
    frontmatter: {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      category: frontmatter.category,
      tags: frontmatter.tags ?? [],
      readingTime: readingTime(raw).text,
      published: frontmatter.published ?? false,
    } satisfies BlogPost,
  };
}

/** Returns all blog posts matching a given category. */
export async function getPostsByCategory(
  category: BlogPost['category'],
): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.category === category);
}

/** Returns all unique categories from published posts. */
export async function getAllCategories(): Promise<BlogPost['category'][]> {
  const posts = await getAllBlogPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}
