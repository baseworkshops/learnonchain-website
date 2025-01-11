"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Award, ArrowRight } from "lucide-react";

const featuredBounties = [
  {
    id: 1,
    title: "Build an NFT Marketplace Integration",
    description: "Create a seamless integration with popular NFT marketplaces to enable users to browse and trade NFTs directly within our platform.",
    reward: "2 ETH",
    deadline: "14 Days",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    title: "Implement Cross-Chain Bridge",
    description: "Develop a secure cross-chain bridge solution to enable asset transfers between multiple blockchain networks.",
    reward: "3 ETH",
    deadline: "21 Days",
    gradient: "from-blue-500 to-teal-500",
  },
];

export default function FeaturedBounties() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Bounties</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            High-impact opportunities with premium rewards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredBounties.map((bounty, index) => (
            <motion.div
              key={bounty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${bounty.gradient} rounded-lg opacity-20 group-hover:opacity-30 transition-all duration-500 blur-xl`} />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {bounty.title}
                </h3>
                
                <p className="text-gray-300 mb-6">{bounty.description}</p>
                
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">{bounty.reward}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-white">Ends in {bounty.deadline}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group/button"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}