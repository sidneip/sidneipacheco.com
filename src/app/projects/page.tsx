import type { Metadata } from "next";
import { projects } from "@content/projects/projects";
import { ProjectsPage } from "./ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects I've worked on over the years, from startups to open source. Explore my work in Ruby, TypeScript, Rust, and more.",
  openGraph: {
    title: "Projects | Sidnei Pacheco",
    description:
      "A selection of projects I've worked on over the years, from startups to open source.",
    url: "https://sidneipacheco.com/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sidnei Pacheco",
    description:
      "A selection of projects I've worked on over the years, from startups to open source.",
  },
};

export default function Page() {
  return <ProjectsPage projects={projects} />;
}
