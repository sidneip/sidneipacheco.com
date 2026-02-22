import { SITE_CONFIG } from "@/lib/constants";

export function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    jobTitle: "CTO & Co-Founder",
    worksFor: {
      "@type": "Organization",
      name: "Gurupass",
    },
    sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin, SITE_CONFIG.twitter],
    knowsAbout: [
      "Software Engineering",
      "TypeScript",
      "Ruby",
      "Rust",
      "React",
      "Ruby on Rails",
      "AWS",
      "Kubernetes",
      "Startups",
    ],
    description: SITE_CONFIG.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface WebsiteJsonLdProps {
  url?: string;
}

export function WebsiteJsonLd({ url = SITE_CONFIG.url }: WebsiteJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: url,
    description: SITE_CONFIG.description,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  datePublished: string;
  url: string;
  tags?: string[];
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  url,
  tags = [],
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: datePublished,
    url: url,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
    keywords: tags,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ProjectJsonLdProps {
  name: string;
  description: string;
  url: string;
  technologies?: string[];
}

export function ProjectJsonLd({
  name,
  description,
  url,
  technologies = [],
}: ProjectJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    url: url,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
    keywords: technologies,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
