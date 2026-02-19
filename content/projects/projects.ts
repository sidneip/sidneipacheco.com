import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'gurupass',
    name: 'Gurupass',
    description:
      'Fitness & wellness marketplace connecting users to studios and gyms.',
    longDescription:
      'Gurupass is a fitness and wellness marketplace that connects users with a wide network of studios and gyms. The platform enables seamless class booking, membership management, and discovery of new fitness experiences across multiple disciplines and locations.',
    stack: [
      'Ruby on Rails',
      'React',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Kubernetes',
      'Docker',
    ],
    url: 'https://gurupass.com',
    featured: true,
    accentColor: '#FF6B6B',
  },
  {
    slug: 'seuguru',
    name: 'Seuguru',
    description:
      'EdTech platform connecting students with tutors for personalized learning.',
    longDescription:
      'Seuguru is an EdTech platform that bridges the gap between students and qualified tutors. It provides tools for scheduling sessions, tracking progress, and delivering personalized learning experiences tailored to each student\'s needs and goals.',
    stack: ['Ruby on Rails', 'React', 'PostgreSQL', 'Sidekiq', 'AWS'],
    featured: true,
    accentColor: '#4ECDC4',
  },
  {
    slug: 'wizu',
    name: 'Wizu',
    description:
      'Gamified financial education app teaching personal finance through interactive challenges.',
    longDescription:
      'Wizu is a gamified financial education app designed to make learning about personal finance engaging and accessible. Through interactive challenges, quizzes, and reward systems, users build essential money management skills while progressing through structured learning paths.',
    stack: [
      'React Native',
      'Expo',
      'Ruby on Rails',
      'PostgreSQL',
      'Redis',
    ],
    featured: true,
    accentColor: '#FFE66D',
  },
  {
    slug: 'magda',
    name: 'Magda',
    description:
      'Native Apache Cassandra desktop client with query editor and cluster management.',
    longDescription:
      'Magda is a native desktop client for Apache Cassandra that provides a powerful query editor, cluster monitoring, and comprehensive database management tools. Built with Rust and Tauri for a lightweight, performant experience across all major operating systems.',
    stack: ['Rust', 'Tauri', 'React', 'TypeScript', 'Cassandra'],
    featured: true,
    accentColor: '#A78BFA',
  },
  {
    slug: 'electron-pos-printer',
    name: 'electron-pos-printer',
    description:
      'Open source thermal receipt printer library for Electron apps.',
    longDescription:
      'electron-pos-printer is an open source library that simplifies thermal receipt printing in Electron applications. It supports multiple printer types, customizable templates, and provides a straightforward API for generating and sending print jobs to POS hardware.',
    stack: ['TypeScript', 'Electron', 'Node.js'],
    github: 'https://github.com/nicely/electron-pos-printer',
    featured: false,
    accentColor: '#00d4ff',
  },
];
