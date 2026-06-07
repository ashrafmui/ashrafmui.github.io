"use client"

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import SkillsSection from "@/components/Skills";
import ExperienceSection from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import { COLORS } from "@/components/shared/theme";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ background: COLORS.bg }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}