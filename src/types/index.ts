export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  stack: string[];
  url?: string;
  github?: string;
  image?: string;
  featured: boolean;
  accentColor: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: 'Engineering' | 'Startups' | 'Travel';
  tags: string[];
  readingTime: string;
  published: boolean;
};

export type UsesItem = {
  name: string;
  description: string;
  url?: string;
};

export type UsesCategory = {
  title: string;
  items: UsesItem[];
};
