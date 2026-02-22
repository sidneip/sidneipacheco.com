import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/llm.txt", "/llm-full.txt"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/llm.txt", "/llm-full.txt"],
      },
      {
        userAgent: "Claude-Web",
        allow: ["/", "/llm.txt", "/llm-full.txt"],
      },
      {
        userAgent: "Anthropic-AI",
        allow: ["/", "/llm.txt", "/llm-full.txt"],
      },
    ],
    sitemap: "https://sidneipacheco.com/sitemap.xml",
  };
}
