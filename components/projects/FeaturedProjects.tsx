"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Globe } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "DeFi Portfolio Manager",
    description: "A comprehensive dashboard for managing and tracking DeFi investments across multiple chains.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&auto=format&fit=crop&q=60",
    achievements: ["100K+ Active Users", "Featured on CoinDesk"],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    id: 2,
    title: "Cross-Chain NFT Bridge",
    description: "Seamlessly transfer NFTs between different blockchain networks with our secure bridge solution.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    achievements: ["$10M+ in Volume", "Community Choice Award"],
    gradient: "from-blue-500 to-teal-500",
  },
];

export default function FeaturedProjects() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exceptional projects that showcase the power of onchain innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-lg opacity-20 group-hover:opacity-30 transition-all duration-500 blur-xl`} />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-gray-200">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group/button"
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}