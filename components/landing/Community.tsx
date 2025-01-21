"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: MessageCircle,
    label: "Discord",
    href: "https://discord.gg/32uuVnv8dy",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/onchainlearn",
    gradient: "from-gray-600 to-gray-400",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/onchainlearn",
    gradient: "from-blue-400 to-blue-600",
  },
];

export default function Community() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Be Part of the Movement
            </h2>
            <p className="text-xl text-gray-300">
              Join a thriving community of blockchain enthusiasts and builders
            </p>
          </motion.div>

          {/* Community card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            
            <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 md:p-12 border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side: Illustration */}
                <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
                    alt="Community Collaboration"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Right side: Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Connect & Collaborate
                  </h3>
                  <p className="text-gray-300">
                    Join our vibrant community of developers, designers, and blockchain enthusiasts. Share ideas, get help, and collaborate on exciting projects.
                  </p>
                  
                  {/* Social links */}
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group/link"
                      >
                        <Button
                          variant="outline"
                          className="bg-white/5 border-white/10 hover:border-white/20 text-white/20 space-x-2"
                        >
                          <link.icon className={`w-4 h-4 bg-gradient-to-r ${link.gradient} bg-clip-text text-transparen`} />
                          <span>{link.label}</span>
                        </Button>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}