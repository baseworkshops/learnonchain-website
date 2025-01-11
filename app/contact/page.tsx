"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <ContactHero />
      <ContactForm />
      <ContactDetails />
      <ContactCTA />
    </main>
  );
}