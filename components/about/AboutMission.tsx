"use client";

import { motion } from "framer-motion";
import { Target, Users, Globe } from "lucide-react";

const missions = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To bridge the gap in onchain education by providing communities with practical knowledge and tools to build impactful blockchain solutions.",
  },
  {
    icon: Users,
    title: "Our Vision",
    description: "A world where blockchain is accessible to everyone, enabling innovation and inclusion for a better digital future.",
  },
  {
    icon: Globe,
    title: "Our Impact",
    description: "Building a global network of skilled blockchain developers and creating sustainable solutions for real-world challenges.",
  },
];

export default function AboutMission() {
  return (
    <section id="mission" className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Purpose</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving innovation through education and community collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 p-0.5 mb-6">
                  <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                    <mission.icon className="w-8 h-8 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {mission.title}
                </h3>
                <p className="text-gray-300">{mission.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}