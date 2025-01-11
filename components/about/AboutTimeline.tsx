"use client";

import { motion } from "framer-motion";
import { Milestone, Flag, Award, Users } from "lucide-react";

const milestones = [
  {
    year: "2023",
    title: "Platform Launch",
    description: "LearnOnchain begins its journey to revolutionize blockchain education.",
    icon: Flag,
  },
  {
    year: "2024",
    title: "Community Growth",
    description: "Reached 10,000+ active learners and launched advanced courses.",
    icon: Users,
  },
  {
    year: "2025",
    title: "Global Recognition",
    description: "Awarded as the leading blockchain education platform.",
    icon: Award,
  },
];

export default function AboutTimeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Key milestones in our mission to transform blockchain education
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-teal-500/50" />

          <div className="space-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <milestone.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                      
                      <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <span className="text-sm text-blue-400 font-semibold">{milestone.year}</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}