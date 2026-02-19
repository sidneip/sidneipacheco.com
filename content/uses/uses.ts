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
        name: 'Cursor',
        description:
          'AI-assisted editor built on VS Code. I use it when I want inline AI suggestions and chat-driven development for rapid prototyping.',
        url: 'https://cursor.com',
      },
      {
        name: 'Kitty',
        description:
          'GPU-accelerated terminal emulator. Fast, configurable, and supports ligatures and image rendering out of the box.',
        url: 'https://sw.kovidgoyal.net/kitty',
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
        name: 'Go',
        description:
          'For performance-critical services, CLIs, and infrastructure tooling. Simple, fast compilation, and excellent concurrency primitives.',
        url: 'https://go.dev',
      },
      {
        name: 'Rust',
        description:
          'For systems-level work and desktop applications. Memory safety without garbage collection and outstanding performance.',
        url: 'https://www.rust-lang.org',
      },
      {
        name: 'Python',
        description:
          'For scripting, data processing, and ML-adjacent work. Great ecosystem for automation and quick prototyping.',
        url: 'https://www.python.org',
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
        name: 'Terraform',
        description:
          'Infrastructure as code for provisioning and managing cloud resources. Keeps infrastructure reproducible and version-controlled.',
        url: 'https://www.terraform.io',
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
        name: 'MacBook Pro M3 Max',
        description:
          'Primary development machine. The M3 Max handles large codebases, Docker containers, and compilation with ease.',
        url: 'https://www.apple.com/macbook-pro',
      },
      {
        name: 'Apple Studio Display',
        description:
          '27-inch 5K Retina display. Excellent color accuracy and plenty of screen real estate for side-by-side coding.',
        url: 'https://www.apple.com/studio-display',
      },
      {
        name: 'Keychron Q1 Pro',
        description:
          'Wireless mechanical keyboard with a compact 75% layout. Customizable via QMK/VIA firmware for a personalized typing experience.',
        url: 'https://www.keychron.com/products/keychron-q1-pro',
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
        name: 'Arc Browser',
        description:
          'Chromium-based browser with a unique sidebar-driven interface. Spaces and profiles keep work and personal browsing organized.',
        url: 'https://arc.net',
      },
      {
        name: 'Raycast',
        description:
          'Spotlight replacement with extensions, clipboard history, window management, and snippets. My command center for macOS.',
        url: 'https://www.raycast.com',
      },
      {
        name: '1Password',
        description:
          'Password manager for personal and team credentials. SSH key management and CLI integration are indispensable for development.',
        url: 'https://1password.com',
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
        name: 'Notion',
        description:
          'All-in-one workspace for notes, documentation, and knowledge management. Flexible enough for personal and team use.',
        url: 'https://www.notion.so',
      },
    ],
  },
];
