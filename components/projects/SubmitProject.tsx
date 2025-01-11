"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, Code, Rocket } from "lucide-react";

export default function SubmitProject() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Have a Project to Showcase?
              </h2>
              <p className="text-xl text-gray-300">
                Submit your LearnOnchain-powered project and inspire others!
              </p>
              <ul className="space-y-4">
                {[
                  "Share your innovative solutions",
                  "Get feedback from the community",
                  "Inspire other builders",
                  "Showcase your expertise"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg h-12 group"
                  onClick={() => window.location.href = '/submit-project'}
                >
                  Submit Your Project
                  <Upload className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right side: Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Background glow effects */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.2, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ left: "20%", top: "20%" }}
                />
                <motion.div
                  className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                  }}
                  style={{ right: "20%", bottom: "20%" }}
                />
              </div>

              {/* Animated elements */}
              <div className="relative h-full">
                {/* Central circle with gradient border */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-20 blur-xl" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/20" />
                </motion.div>

                {/* Orbiting icons */}
                {[Code, Rocket].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 2,
                    }}
                    style={{
                      width: "160px",
                      height: "160px",
                    }}
                  >
                    <div
                      className="absolute bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10"
                      style={{
                        transform: `rotate(${index * 180}deg)`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </motion.div>
                ))}

                {/* Central icon */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Upload className="w-8 h-8 text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}