import type { Metadata } from "next";
import { posts } from "@content/blog/posts";
import { BlogListPage } from "./BlogListPage";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software engineering, startups, and building products. Written by Sidnei Pacheco.",
  openGraph: {
    title: "Blog | Sidnei Pacheco",
    description:
      "Thoughts on software engineering, startups, and building products.",
    url: "https://sidneipacheco.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sidnei Pacheco",
    description:
      "Thoughts on software engineering, startups, and building products.",
  },
};

export default function Page() {
  return <BlogListPage posts={posts.filter((p) => p.published)} />;
}
