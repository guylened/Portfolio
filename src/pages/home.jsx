import { ProjectsSection } from "../layout/projectsSection";
import { AboutMeSection } from "../layout/aboutMeSection";
import { HeroSection } from "../layout/heroSection";
import { NewsSection } from "../layout/newsSection";
import { TrainingSection } from "../layout/trainingSection";
import { SkillsSection } from "../layout/skillsSection";
import { ContactSection } from "../layout/contactSection";

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <TrainingSection />
      <AboutMeSection />
      <NewsSection />
      <ContactSection />
    </main>
  );
};
