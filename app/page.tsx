"use client";

import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyBlockchain from "@/components/landing/WhyBlockchain";
import Metrics from "@/components/landing/Metrics";
import UseCases from "@/components/landing/UseCases";
import Community from "@/components/landing/Community";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <WhyBlockchain />
      <Metrics />
      <UseCases />
      <Community />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}