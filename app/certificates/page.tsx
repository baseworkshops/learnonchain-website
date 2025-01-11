"use client";

import CertificatesHero from "@/components/certificates/CertificatesHero";
import ConnectWallet from "@/components/certificates/ConnectWallet";
import CertificateGallery from "@/components/certificates/CertificateGallery";
import MintingProcess from "@/components/certificates/MintingProcess";
import ExploreCertificates from "@/components/certificates/ExploreCertificates";
import CertificatesCTA from "@/components/certificates/CertificatesCTA";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-black">
      <CertificatesHero />
      <ConnectWallet />
      <CertificateGallery />
      <MintingProcess />
      <ExploreCertificates />
      <CertificatesCTA />
    </main>
  );
}