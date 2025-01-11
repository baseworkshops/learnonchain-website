"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the power of collective growth and shared knowledge.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Building with integrity and maintaining open communication.",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries and embracing new possibilities in blockchain.",
    gradient: "from-teal-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Creating opportunities for everyone to participate and learn.",
    gradient: "from-purple-500 to-blue-500",
  },
];

export default function AboutValues() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide our mission and shape our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full flex items-start space-x-6">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.gradient} p-0.5 flex-shrink-0`}>
                  <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}