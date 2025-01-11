"use client";

import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectGallery from "@/components/projects/ProjectGallery";
import SubmitProject from "@/components/projects/SubmitProject";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black">
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectGallery />
      <SubmitProject />
      <ProjectsCTA />
    </main>
  );
}