import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import { HeroSection } from "../layout/HeroSection";
import { AboutSection } from "../layout/AboutSection";
import { StackSection } from "../layout/StackSection";
import { ProjectsSection } from "../layout/ProjectSection";
import { ContactSection } from "../layout/ContactSection";

export const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    );
};