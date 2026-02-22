import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "why-i-still-love-ruby",
    title: "Why I Still Love Ruby",
    description:
      "A reflection on why Ruby remains my go-to language after 15 years of building products.",
    date: "2024-01-15",
    category: "Engineering",
    tags: ["ruby", "programming", "career"],
    readingTime: "5 min",
    published: true,
  },
  {
    slug: "scaling-startups-in-brazil",
    title: "Scaling Startups in Brazil",
    description:
      "Lessons learned from building and scaling multiple startups in the Brazilian market.",
    date: "2024-01-08",
    category: "Startups",
    tags: ["startups", "brazil", "entrepreneurship"],
    readingTime: "8 min",
    published: true,
  },
  {
    slug: "rust-for-web-developers",
    title: "Rust for Web Developers",
    description:
      "How I approached learning Rust coming from a Ruby and JavaScript background.",
    date: "2024-01-01",
    category: "Engineering",
    tags: ["rust", "webdev", "learning"],
    readingTime: "6 min",
    published: true,
  },
];

export const categoryColors = {
  Engineering: "#00d4ff",
  Startups: "#a855f7",
  Travel: "#f59e0b",
} as const;
