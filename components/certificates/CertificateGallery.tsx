"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ArrowRight } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Blockchain Basics Course",
    description: "Issued for completing the Blockchain Basics course.",
    status: "Claimable",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    date: "December 2024",
  },
  {
    id: 2,
    title: "Introduction to DeFi",
    description: "Earned after completing the Introduction to DeFi course.",
    status: "Minted",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    date: "November 2024",
  },
  {
    id: 3,
    title: "Solidity Essentials",
    description: "Complete the course to earn this certificate.",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    progress: 75,
  },
];

export default function CertificateGallery() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your Certificates</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            View and manage your earned certificates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className={`absolute top-4 right-4 backdrop-blur-md ${
                      cert.status === 'Minted' ? 'bg-green-500/20 border-green-500/50 text-green-400' :
                      cert.status === 'Claimable' ? 'bg-blue-500/20 border-blue-500/50 text-blue-400' :
                      'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                    }`}
                  >
                    {cert.status}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{cert.description}</p>

                  <Button
                    className={`w-full ${
                      cert.status === 'Claimable' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                        : 'bg-white/10 hover:bg-white/20'
                    } group/button`}
                  >
                    {cert.status === 'Minted' ? 'View NFT' :
                     cert.status === 'Claimable' ? 'Mint NFT' :
                     'Complete Course'}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}