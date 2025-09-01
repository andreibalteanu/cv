"use client";

import { ContactSection } from "@/sections/Contact";
import { ExperienceSection } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <Header active={activeSection} setActive={setActiveSection} />
      <HeroSection setActive={setActiveSection} />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
