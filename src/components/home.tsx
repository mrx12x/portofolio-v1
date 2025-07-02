import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ProgressBar from "./layout/ProgressBar";
import ScrollToTop from "./layout/ScrollToTop";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./projects/ProjectsSection";
import SkillsSection from "./skills/SkillsSection";
import ContactSection from "./sections/ContactSection";
import { useScrollNavigation } from "../hooks/useScrollNavigation";

const Home = () => {
  const { activeSection, showScrollToTop, scrollToSection, scrollToTop } =
    useScrollNavigation();

  return (
    <div className="relative min-h-screen bg-background">
      <ProgressBar />
      
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="pt-16">
        <section id="hero" className="min-h-screen">
          <HeroSection onScrollToProjects={() => scrollToSection("projects")} />
        </section>

        <AboutSection />

        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ProjectsSection />
          </div>
        </section>

        <section id="skills" className="py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <SkillsSection />
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />

      <ScrollToTop show={showScrollToTop} onClick={scrollToTop} />
    </div>
  );
};

export default Home;