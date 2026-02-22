import type { UsesCategory } from '@/types';

export const usesCategories: UsesCategory[] = [
  {
    title: 'Editor & Terminal',
    items: [
      {
        name: 'Neovim',
        description:
          'My daily driver for writing code. Highly customized with LSP, Telescope, and a curated set of plugins for a fast, keyboard-driven workflow.',
        url: 'https://neovim.io',
      },
      {
        name: 'Claude Code',
        description:
          'AI-powered coding assistant from Anthropic. Helps with code generation, refactoring, and exploring complex codebases.',
        url: 'https://claude.ai',
      },
      {
        name: 'Cursor',
        description:
          'AI-assisted editor built on VS Code. I use it when I want inline AI suggestions and chat-driven development for rapid prototyping.',
        url: 'https://cursor.com',
      },
      {
        name: 'Ghostty',
        description:
          'Fast, native terminal emulator with GPU acceleration. Clean, minimal, and incredibly responsive.',
        url: 'https://ghostty.org',
      },
      {
        name: 'tmux',
        description:
          'Terminal multiplexer for managing multiple sessions and panes. Essential for keeping long-running processes and organized workspaces.',
        url: 'https://github.com/tmux/tmux',
      },
      {
        name: 'Starship',
        description:
          'Minimal, fast, and customizable shell prompt. Shows git status, language versions, and context without slowing down the terminal.',
        url: 'https://starship.rs',
      },
    ],
  },
  {
    title: 'Languages & Frameworks',
    items: [
      {
        name: 'Ruby / Rails',
        description:
          'My go-to for building web applications quickly. Rails conventions and ecosystem make it ideal for startups and rapid product development.',
        url: 'https://rubyonrails.org',
      },
      {
        name: 'TypeScript / React / Next.js',
        description:
          'The backbone of my frontend work. TypeScript for type safety, React for component architecture, and Next.js for full-stack capabilities.',
        url: 'https://nextjs.org',
      },
      {
        name: 'NestJS',
        description:
          'Progressive Node.js framework for building efficient, scalable server-side applications with TypeScript.',
        url: 'https://nestjs.com',
      },
      {
        name: 'React Native / Expo',
        description:
          'For building cross-platform mobile apps. Expo simplifies the development workflow and provides excellent tooling.',
        url: 'https://expo.dev',
      },
      {
        name: 'Rust',
        description:
          'For systems-level work and desktop applications. Memory safety without garbage collection and outstanding performance.',
        url: 'https://www.rust-lang.org',
      },
      {
        name: 'Go',
        description:
          'For performance-critical services, CLIs, and infrastructure tooling. Simple, fast compilation, and excellent concurrency primitives.',
        url: 'https://go.dev',
      },
    ],
  },
  {
    title: 'Databases',
    items: [
      {
        name: 'PostgreSQL',
        description:
          'Primary relational database. Robust, feature-rich, and excellent for complex queries and data integrity.',
        url: 'https://www.postgresql.org',
      },
      {
        name: 'MongoDB',
        description:
          'Document database for flexible schema designs. Great for rapid prototyping and specific use cases.',
        url: 'https://www.mongodb.com',
      },
      {
        name: 'Apache Cassandra',
        description:
          'Distributed NoSQL database for high availability and massive scalability. Built Magda to work with it.',
        url: 'https://cassandra.apache.org',
      },
      {
        name: 'Redis',
        description:
          'In-memory data store for caching, sessions, and real-time features. Essential for performance optimization.',
        url: 'https://redis.io',
      },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      {
        name: 'AWS (EKS, RDS, ElastiCache)',
        description:
          'Primary cloud provider. I use EKS for container orchestration, RDS for managed databases, and ElastiCache for Redis-backed caching layers.',
        url: 'https://aws.amazon.com',
      },
      {
        name: 'Kubernetes',
        description:
          'Container orchestration for production workloads. Handles scaling, deployments, and service discovery across environments.',
        url: 'https://kubernetes.io',
      },
      {
        name: 'Docker',
        description:
          'Containerization for consistent development and deployment environments. Every project starts with a Dockerfile.',
        url: 'https://www.docker.com',
      },
      {
        name: 'OrbStack',
        description:
          'Fast, lightweight Docker and Linux on macOS. Much better performance than Docker Desktop.',
        url: 'https://orbstack.dev',
      },
      {
        name: 'GitHub Actions',
        description:
          'CI/CD pipelines for automated testing, building, and deploying. Tight integration with the GitHub workflow.',
        url: 'https://github.com/features/actions',
      },
    ],
  },
  {
    title: 'Hardware',
    items: [
      {
        name: 'MacBook Pro',
        description:
          'Primary mobile development machine. Apple Silicon handles large codebases, Docker containers, and compilation with ease.',
        url: 'https://www.apple.com/macbook-pro',
      },
      {
        name: 'Mac Mini',
        description:
          'Desktop workstation for heavy workloads and always-on development tasks.',
        url: 'https://www.apple.com/mac-mini',
      },
      {
        name: 'Apple Magic Keyboard',
        description:
          'Clean, minimal keyboard that pairs seamlessly with the Mac ecosystem.',
        url: 'https://www.apple.com/shop/mac/accessories/keyboards',
      },
      {
        name: 'Logitech MX Master 3S',
        description:
          'Ergonomic mouse with a precise scroll wheel and customizable buttons. Seamless multi-device switching for a clean desk setup.',
        url: 'https://www.logitech.com/en-us/products/mice/mx-master-3s.html',
      },
    ],
  },
  {
    title: 'Apps & Services',
    items: [
      {
        name: 'Chrome',
        description:
          'Primary browser for development. DevTools, extensions ecosystem, and cross-platform sync.',
        url: 'https://www.google.com/chrome',
      },
      {
        name: 'Raycast',
        description:
          'Spotlight replacement with extensions, clipboard history, window management, and snippets. My command center for macOS.',
        url: 'https://www.raycast.com',
      },
      {
        name: 'Shortcat',
        description:
          'Keyboard-first navigation for macOS. Click any UI element without touching the mouse.',
        url: 'https://shortcat.app',
      },
      {
        name: 'Linear',
        description:
          'Project management and issue tracking. Fast, keyboard-friendly, and designed for engineering teams.',
        url: 'https://linear.app',
      },
      {
        name: 'Figma',
        description:
          'Collaborative design tool for UI/UX work. Essential for working closely with designers and prototyping ideas.',
        url: 'https://www.figma.com',
      },
      {
        name: 'Boom',
        description:
          'System-wide volume booster and equalizer for macOS. Better audio for music and calls.',
        url: 'https://www.globaldelight.com/boom',
      },
      {
        name: 'Kindle',
        description:
          'For reading technical books and staying up to date with the latest in software engineering.',
        url: 'https://www.amazon.com/kindle',
      },
    ],
  },
];
