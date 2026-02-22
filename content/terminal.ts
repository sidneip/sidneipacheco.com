export const terminalContent = {
  prompt: "visitor@portfolio",
  hostname: "sidneipacheco.com",
  welcomeMessage: [
    "",
    "Welcome to my interactive portfolio terminal!",
    'Type "help" to see available commands.',
    "",
  ],

  about: {
    ascii: `
   _____ _     _            _
  / ____(_)   | |          (_)
 | (___  _  __| |_ __   ___ _
  \\___ \\| |/ _\` | '_ \\ / _ \\ |
  ____) | | (_| | | | |  __/ |
 |_____/|_|\\__,_|_| |_|\\___|_|
`,
    bio: [
      "Sidnei Pacheco",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "CTO & Co-Founder with 15+ years building startups",
      "in Brazil's vibrant tech ecosystem.",
      "",
      "From first lines of Ruby code to leading engineering",
      "teams, obsessed with turning ideas into products",
      "that people actually use.",
      "",
      "Currently exploring the next chapter—building,",
      "advising startups, or contributing to open source.",
    ],
  },

  skills: {
    categories: [
      {
        name: "Languages",
        color: "#00d4ff",
        items: ["TypeScript", "Ruby", "Rust", "SQL"],
      },
      {
        name: "Frameworks",
        color: "#a855f7",
        items: ["React", "Rails", "Next.js", "Node.js", "PostgreSQL", "Redis"],
      },
      {
        name: "Infrastructure",
        color: "#ec4899",
        items: ["AWS", "Kubernetes", "Docker", "CI/CD", "System Design"],
      },
    ],
  },

  projects: [
    {
      name: "Gurupass",
      role: "CTO & Co-Founder",
      period: "2016 - Present",
      description: "Fitness marketplace connecting users to gyms and studios",
    },
    {
      name: "Seuguru",
      role: "CTO & Co-Founder",
      period: "2019 - 2022",
      description: "B2B fitness management platform",
    },
    {
      name: "Wizu",
      role: "CTO & Co-Founder",
      period: "2022 - 2023",
      description: "AI-powered customer experience platform",
    },
    {
      name: "Magda",
      role: "Creator",
      period: "2024 - Present",
      description: "Desktop client for Apache Cassandra (Rust + Dioxus)",
    },
    {
      name: "electron-pos-printer",
      role: "Maintainer",
      period: "Open Source",
      description: "Electron library for POS thermal printers",
    },
  ],

  contact: {
    email: "me@sidneipacheco.com",
    location: "Brazil",
    availability: "Open to opportunities",
  },

  social: {
    github: "https://github.com/sidneip",
    linkedin: "https://linkedin.com/in/sidneipacheco",
    twitter: "https://x.com/sidneip",
  },

  neofetch: {
    os: "PortfolioOS 2024.1",
    host: "sidneipacheco.com",
    kernel: "Next.js 15 + React 19",
    uptime: "15+ years in tech",
    packages: "5 startups launched",
    shell: "TypeScript/Ruby/Rust",
    theme: "Dark Mode [Neon]",
    icons: "Lucide",
    terminal: "Interactive Shell v1.0",
  },
};
