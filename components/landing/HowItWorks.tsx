"use client";

import { motion } from "framer-motion";
import { UserPlus, BookOpen, Users } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create an account and explore our tailored courses.",
  },
  {
    icon: BookOpen,
    title: "Learn & Build",
    description: "Complete courses, earn certificates, and build onchain solutions.",
  },
  {
    icon: Users,
    title: "Collaborate & Earn",
    description: "Join bounties, showcase your projects, and grow your network.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How LearnOnchain Works</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-teal-500/50 transform -translate-y-1/2 hidden md:block" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 hover:border-white/20 transition-colors">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-white/5">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
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