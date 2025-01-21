"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Hands-on Projects with Real-World Applications",
  "Join a Thriving Community of Builders",
  "Opportunities to Earn through Bounties and Events",
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gray-900/30 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock Your Potential</h2>
          <p className="text-xl text-gray-400 mb-12">
            Transform your skills and contribute to the onchain revolution.
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <p className="text-lg text-gray-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}