import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@content/projects/projects";
import { ProjectDetailPage } from "./ProjectDetailPage";
import { BreadcrumbJsonLd, ProjectJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.longDescription || project.description,
    openGraph: {
      title: `${project.name} | Sidnei Pacheco`,
      description: project.longDescription || project.description,
      url: `https://sidneipacheco.com/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Sidnei Pacheco`,
      description: project.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${SITE_CONFIG.url}/projects/${project.slug}`;
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Projects", url: `${SITE_CONFIG.url}/projects` },
    { name: project.name, url: projectUrl },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ProjectJsonLd
        name={project.name}
        description={project.longDescription || project.description}
        url={projectUrl}
        technologies={project.stack}
      />
      <ProjectDetailPage project={project} />
    </>
  );
}
