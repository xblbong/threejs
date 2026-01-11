import Navbar from "../components/layout/NavbarComponents";
import GlassOrb from "../components/canvas/GlassOrb";
import { getCertificates, getExperiences, getProjects, getSkills } from "../services/dataService";
import MouseGlow from "../components/effect/MouseGlow";
import HeroSection from "../components/sections/HeroSections/HeroSection";

export default async function HomePage() {
  const [projects, skills, experiences, certs] = await Promise.all([
    getProjects(), getSkills(), getExperiences(), getCertificates()
  ]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <MouseGlow />
      <GlassOrb />
    </>
  );
}
