export interface ExperienceItem {
  name: string;
  role: string;
  period: string;
  current?: boolean;
  type: "founder" | "employee" | "advisor" | "freelance";
}

export const experience: ExperienceItem[] = [
  {
    name: "Gurupass",
    role: "CTO & Co-Founder",
    period: "2016 - Present",
    current: true,
    type: "founder",
  },
  {
    name: "Seuguru",
    role: "CTO & Co-Founder",
    period: "2019 - 2022",
    type: "founder",
  },
  {
    name: "Wizu",
    role: "CTO & Co-Founder",
    period: "2022 - 2023",
    type: "founder",
  },
  {
    name: "Magda",
    role: "Creator",
    period: "2024 - Present",
    current: true,
    type: "founder",
  },
  {
    name: "electron-pos-printer",
    role: "Maintainer",
    period: "Open Source",
    type: "founder",
  },
];

export const experienceStats = {
  yearsExperience: "15+",
  startupsBuilt: "5+",
  teamsLed: "50+",
};
