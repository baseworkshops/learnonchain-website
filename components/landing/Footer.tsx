"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, MessageCircle } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Bounties", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Events", href: "#" },
  ],
  social: [
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Discord", href: "#", icon: MessageCircle },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />

      <div className="container mx-auto px-4 relative">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-4"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                LearnOnchain
              </h2>
              <p className="text-gray-400 mb-6">
                Empowering the next generation of blockchain builders through education and innovation.
              </p>
            </motion.div>

            {/* Company links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 md:col-start-6"
            >
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2"
            >
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-2"
            >
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {footerLinks.social.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 py-6"
        >
          <p className="text-center text-gray-400 text-sm">
            © 2025 LearnOnchain. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}