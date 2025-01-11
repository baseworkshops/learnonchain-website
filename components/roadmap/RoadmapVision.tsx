"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, Globe } from "lucide-react";

const goals = [
  {
    icon: Brain,
    title: "Integrating AI for Adaptive Learning",
    description: "Personalized learning experiences powered by artificial intelligence.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Expanding Onchain Education to 1 Million Users",
    description: "Scaling our platform to reach learners worldwide.",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: Rocket,
    title: "Empowering Local Communities",
    description: "Building custom tools and resources for diverse communities.",
    gradient: "from-teal-500 to-purple-500",
  },
];

export default function RoadmapVision() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Beyond 2024</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our vision for the future of onchain education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
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
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${goal.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                    <goal.icon className="w-8 h-8 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {goal.title}
                </h3>
                <p className="text-gray-300">{goal.description}</p>

                {/* Interactive element */}
                <div className="mt-6 flex items-center text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}