import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { UsesSection } from "@/components/sections/UsesSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Navigation } from "@/components/layout/Navigation";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <TerminalSection />
        <BlogSection />
        <UsesSection />
      </main>
      <FooterSection />
    </SmoothScrollProvider>
  );
}
