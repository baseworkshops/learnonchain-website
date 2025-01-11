"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    title: "Blockchain Basics Workshop",
    date: "January 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Virtual Event",
    description: "Learn the fundamentals of blockchain technology and its applications.",
    type: "Workshop",
    capacity: "200 Seats",
    image: "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Smart Contract Hackathon",
    date: "February 15-17, 2025",
    time: "48 Hours",
    location: "Hybrid: Lagos & Online",
    description: "Build innovative smart contracts and compete for amazing prizes.",
    type: "Hackathon",
    capacity: "500 Participants",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Web3 Ladies Meetup",
    date: "March 5, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Virtual",
    description: "Network with women in Web3 and learn about the latest developments.",
    type: "Meetup",
    capacity: "150 Attendees",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="upcoming-events" className="py-24 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Upcoming Events</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Register for our upcoming events and enhance your blockchain journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
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
                  <Badge
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border-white/20 text-white"
                  >
                    {event.type}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-5 h-5 mr-2 text-teal-400" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{event.description}</p>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group/button"
                  >
                    Register Now
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