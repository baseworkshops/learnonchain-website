"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const pastEvents = [
  {
    id: 1,
    title: "ETHAccra Workshop",
    date: "October 2024",
    location: "Accra, Ghana",
    description: "A hands-on workshop exploring Ethereum development and local blockchain initiatives.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
    attendees: 150,
  },
  {
    id: 2,
    title: "Onchain Summer Hackathon",
    date: "August 2024",
    location: "Global Virtual Event",
    description: "A global virtual hackathon bringing together developers to build innovative blockchain solutions.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60",
    attendees: 500,
  },
];

export default function PastEvents() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Past Events</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the highlights from our previous events
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
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
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{event.description}</p>

                  <Button
                    variant="outline"
                    className="w-full border-white/10 hover:border-white/20 group/button"
                  >
                    View Highlights
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