"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Book, Globe, Wrench } from "lucide-react";

const features = [
  {
    icon: Book,
    title: "Comprehensive Courses",
    description: "Access structured learning paths designed for all skill levels.",
  },
  {
    icon: Globe,
    title: "Onchain Solutions",
    description: "Explore practical use cases and build impactful dApps.",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description: "Leverage tools like OnchainKit, Coinbase Wallet, and more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900/50 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why LearnOnchain?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:bg-gray-800/80 transition-colors">
                <feature.icon className="w-12 h-12 mb-4 text-blue-400" />
                <h3 className="text-xl text-gray-200 font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}