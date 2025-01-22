"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Muhammad Amoo",
    role: "Founder & CEO",
    image: "/images/druxamb.png",
    bio: "Software Developer | base Global builder | Enterpreneur.",
    social: {
      twitter: "https://twitter.com/druxamb/",
      linkedin: "https://www.linkedin.com/in/druxamb/",
      github: "https://github.com/druxamb/",
    },
  },
  {
    name: "Kc Pele",
    role: "Co-Founder & CTO",
    image: "/images/kcpele.png",
    bio: "Devrel | Developer Advocate | Software Developer | Volunteer | Mentor.",
    social: {
      twitter: "https://twitter.com/kc_pele/",
      linkedin: "https://www.linkedin.com/in/kc-pele-95a665204",
      github: "https://github.com/kcpele/",
    },
  },
  {
    name: "Ibrahim Amoo",
    role: "Co-Founder & CMO",
    image: "/images/luckywemo.png",
    bio: "Blockchain dev | Technical Project Manager | Marketer.",
    social: {
      twitter: "https://twitter.com/luckywemo/",
      linkedin: "https://ng.linkedin.com/in/amoo-ibrahim-760a931a6",
      github: "https://github.com/luckywemo/",
    },
  },
];

export default function AboutTeam() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate individuals dedicated to revolutionizing blockchain education
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}