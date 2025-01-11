"use client";

import { motion } from "framer-motion";
import { Milestone, Flag, Award, Users } from "lucide-react";

const milestones = [
  {
    icon: Flag,
    date: "Q1 2024",
    title: "Launch Core Platform Features",
    description: "Introducing our foundational courses and tools.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Users,
    date: "Q2 2024",
    title: "Expand Bounty Programs",
    description: "Empowering builders with rewards and recognition.",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: Milestone,
    date: "Q3 2024",
    title: "Global Partnerships",
    description: "Collaborating with global leaders to scale our reach.",
    gradient: "from-teal-500 to-purple-500",
  },
  {
    icon: Award,
    date: "Q4 2024",
    title: "Launch NFT Certification Program",
    description: "Recognizing achievements with blockchain-based certificates.",
    gradient: "from-purple-500 to-blue-500",
  },
];

export default function RoadmapTimeline() {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Roadmap</h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-teal-500/50 transform -translate-y-1/2" />

          <div className="grid grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Glowing dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-white rounded-full transform scale-50" />
                </div>

                <div className="pt-8">
                  <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    {/* Icon with gradient background */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${milestone.gradient} p-0.5 mb-4`}>
                      <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                        <milestone.icon className="w-6 h-6 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                      </div>
                    </div>

                    <span className="text-blue-400 text-sm font-semibold">{milestone.date}</span>
                    <h3 className="text-lg font-semibold mt-2 mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${milestone.gradient} p-0.5 mb-4`}>
                  <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                    <milestone.icon className="w-6 h-6 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                  </div>
                </div>

                <span className="text-blue-400 text-sm font-semibold">{milestone.date}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {milestone.title}
                </h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}