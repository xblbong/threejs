import Navbar from "../components/layout/NavbarComponents";
import GlassOrb from "../components/canvas/GlassOrb";
import { getCertificates, getExperiences, getProjects, getSkills } from "../services/dataService";
import MouseGlow from "../components/effect/MouseGlow";
import HeroSection from "../components/sections/HeroSections/HeroSection";
import { Project } from "../types";
import MyProjectsSection from "../components/sections/MyProject/MyProjectsSection";

const dummyProjects: Project[] = [
  {
    id: "1",
    title: "Klinik rumah swadaya",
    description: "Platform layanan konsultasi dan bantuan teknis gratis dari Kementerian PUPR untuk membantu masyarakat membangun atau memperbaiki rumah agar layak huni secara swadaya.",
    image_url: "/image/project/7.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind"],
    link_demo: "https://krs.perumahan.pu.go.id/",
    link_github: "https://github.com"
  },
  {
    id: "2",
    title: "PT. Nusantech",
    description: "PT. Solusi Teknologi Nusantara (Nusantech) adalah perusahaan penyedia layanan IT dan riset teknologi yang berfokus pada transformasi digital",
    image_url: "image/project/nusantech.png",
    tech_stack: ["Next.js", "TypeScript", "Tailwind"],
    link_demo: "https://nusantech.com/en",
    link_github: "https://github.com"
  },
  {
    id: "3",
    title: "AI Image Generator",
    description: "Text-to-image platform using OpenAI API with a futuristic purple silhouette theme.",
    image_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
    tech_stack: ["Next.js", "Supabase", "OpenAI"],
    link_demo: "https://example.com",
    link_github: "https://github.com"
  },
];

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
      <MyProjectsSection projects={dummyProjects} />
    </>
  );
}
