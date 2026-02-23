import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, blogContent, categoryColors } from "@content/blog";
import { BlogPostPage } from "./BlogPostPage";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts
    .filter((post) => post.published)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Sidnei Pacheco`,
      description: post.description,
      url: `https://sidneipacheco.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Sidnei Pacheco"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Sidnei Pacheco`,
      description: post.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug && p.published);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  const postUrl = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Blog", url: `${SITE_CONFIG.url}/blog` },
    { name: post.title, url: postUrl },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        datePublished={post.date}
        url={postUrl}
        tags={post.tags}
        image={`${SITE_CONFIG.url}/og-image.png`}
        articleBody={post.description}
      />
      <BlogPostPage
        post={post}
        content={content}
        categoryColor={categoryColors[post.category]}
      />
    </>
  );
}
