"use client";

import RoadmapHero from "@/components/roadmap/RoadmapHero";
import RoadmapTimeline from "@/components/roadmap/RoadmapTimeline";
import RoadmapVision from "@/components/roadmap/RoadmapVision";
import RoadmapCTA from "@/components/roadmap/RoadmapCTA";

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-black">
      <RoadmapHero />
      <RoadmapTimeline />
      <RoadmapVision />
      <RoadmapCTA />
    </main>
  );
}