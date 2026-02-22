export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "milestone" | "company" | "project";
}

export const timeline: TimelineItem[] = [
  {
    year: "2009",
    title: "Started Coding",
    description: "First lines of Ruby. Fell in love with building things.",
    type: "milestone",
  },
  {
    year: "2012",
    title: "First Startup",
    description: "Co-founded my first company in São Paulo's tech scene.",
    type: "company",
  },
  {
    year: "2016",
    title: "Gurupass",
    description: "Built fitness marketplace reaching 100k+ users.",
    type: "company",
  },
  {
    year: "2019",
    title: "Seuguru",
    description: "EdTech platform connecting students with tutors.",
    type: "company",
  },
  {
    year: "2022",
    title: "Wizu",
    description: "Gamified financial education for the next generation.",
    type: "company",
  },
  {
    year: "Now",
    title: "Building Next",
    description: "Open source, advising, and exploring what's next.",
    type: "milestone",
  },
];
