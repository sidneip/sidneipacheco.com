export const skills = {
  core: [
    { name: "TypeScript", icon: "typescript" },
    { name: "Ruby", icon: "ruby" },
    { name: "Rust", icon: "rust" },
    { name: "SQL", icon: "database" },
  ],
  frameworks: [
    { name: "React", icon: "react" },
    { name: "Rails", icon: "rails" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Redis", icon: "redis" },
  ],
  infrastructure: [
    { name: "AWS", icon: "aws" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Docker", icon: "docker" },
    { name: "CI/CD", icon: "cicd" },
    { name: "System Design", icon: "system" },
  ],
};

export const skillCategories = [
  { key: "core", label: "Languages", color: "#00d4ff" },
  { key: "frameworks", label: "Frameworks", color: "#a855f7" },
  { key: "infrastructure", label: "Infrastructure", color: "#ec4899" },
] as const;
