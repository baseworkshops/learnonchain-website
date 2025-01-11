"use client";

import { motion } from "framer-motion";
import { Wallet, Award, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Connect your wallet to verify your identity.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Award,
    title: "Select Certificate",
    description: "Choose a certificate and click 'Mint NFT'.",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: CheckCircle,
    title: "Complete Minting",
    description: "Pay the gas fee to complete the transaction.",
    gradient: "from-teal-500 to-purple-500",
  },
];

export default function MintingProcess() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Mint Your Certificates as NFTs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to claim your certificates on the blockchain
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-teal-500/50 transform -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>

                <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${step.gradient} p-0.5 mb-6 mx-auto`}>
                    <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}