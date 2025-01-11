"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "support@learnonchain.com",
    href: "mailto:support@learnonchain.com",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+123-456-7890",
    href: "tel:+1234567890",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Blockchain Street, Lagos, Nigeria",
    href: "#",
    gradient: "from-teal-500 to-purple-500",
  },
];

const socialLinks = [
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    href: "#",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function ContactDetails() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Other Ways to Reach Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the most convenient way to get in touch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${info.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {info.label}
                </h3>
                <p className="text-gray-300">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.gradient} p-0.5`}>
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center group-hover:bg-white/5 transition-colors duration-300">
                  <social.icon className="w-6 h-6 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}