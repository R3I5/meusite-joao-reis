import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/layout/home/HeroSection";
import { AboutSection } from "../components/layout/home/AboutSection";
import { SkillsSection } from "../components/layout/home/SkillsSection";
import { ProjectsSection } from "../components/layout/home/ProjectsSection";
import { ContactSection } from "../components/layout/home/ContactSection";
// Removi o ThemeToggle e o StarBackground (que você pediu para tirar antes)

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};