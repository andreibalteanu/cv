import { ContactSection } from "@/sections/Contact";
import { ExperienceSection } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
