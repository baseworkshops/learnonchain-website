"use client";

import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import OngoingEvents from "@/components/events/OngoingEvents";
import PastEvents from "@/components/events/PastEvents";
import EventsCTA from "@/components/events/EventsCTA";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black">
      <EventsHero />
      <UpcomingEvents />
      <OngoingEvents />
      <PastEvents />
      <EventsCTA />
    </main>
  );
}