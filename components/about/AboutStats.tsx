"use client";

import { motion } from "framer-motion";
import { Users, Award, BookOpen, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Learners",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Award,
    value: "500+",
    label: "Course Completions",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Expert Instructors",
    gradient: "from-teal-500 to-purple-500",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries Reached",
    gradient: "from-purple-500 to-blue-500",
  },
];

export default function AboutStats() {
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
            LearnOnchain in Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 text-center">
                <div className={`w-16 h-16 mx-auto rounded-lg bg-gradient-to-r ${stat.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                  </div>
                </div>
                
                <motion.span 
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-gray-300 text-sm md:text-base">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}