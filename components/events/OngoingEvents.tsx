"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Users, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const ongoingEvent = {
  id: 1,
  title: "Base Buildathon",
  description: "Join hundreds of developers building the future of decentralized applications on Base. Compete for prizes and learn from industry experts.",
  endTime: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hours from now
  participants: "250+ Builders",
  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
};

function useCountdown(endTime: Date) {
  const [timeLeft, setTimeLeft] = useState<string>("Loading...");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return "Event Ended";
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${hours}h ${minutes}m ${seconds}s`;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return timeLeft;
}

export default function OngoingEvents() {
  const timeLeft = useCountdown(ongoingEvent.endTime);

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Happening Now</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            
            <div className="relative bg-white/5 backdrop-blur-md rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={ongoingEvent.image}
                  alt={ongoingEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge
                  className="absolute top-4 right-4 bg-red-500/20 backdrop-blur-md border-red-500/50 text-red-400"
                >
                  Live Now
                </Badge>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4 md:mb-0">
                    {ongoingEvent.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Timer className="w-5 h-5 text-red-400" />
                    <span>Ends in: {timeLeft}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{ongoingEvent.description}</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center text-gray-300 mb-4 sm:mb-0">
                    <Users className="w-5 h-5 mr-2 text-blue-400" />
                    <span>{ongoingEvent.participants}</span>
                  </div>
                  
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group/button"
                  >
                    Participate Live
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}