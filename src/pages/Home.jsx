import  Navbar  from "../components/Navbar";
import { HeroSection } from "../layout/HeroSection";
import { AboutSection } from "../layout/AboutSection";
import { SkillsSection } from "../layout/SkillsSection";
import { ProjectsSection } from "../layout/ProjectSection";
import { ContactSection } from "../layout/ContactSection";

export const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
};