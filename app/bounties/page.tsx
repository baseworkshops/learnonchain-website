"use client";

import BountiesHero from "@/components/bounties/BountiesHero";
import BountiesList from "@/components/bounties/BountiesList";
import FeaturedBounties from "@/components/bounties/FeaturedBounties";
import BountiesGuide from "@/components/bounties/BountiesGuide";
import BountiesCTA from "@/components/bounties/BountiesCTA";

export default function BountiesPage() {
  return (
    <main className="min-h-screen bg-black">
      <BountiesHero />
      <FeaturedBounties />
      <BountiesList />
      <BountiesGuide />
      <BountiesCTA />
    </main>
  );
}