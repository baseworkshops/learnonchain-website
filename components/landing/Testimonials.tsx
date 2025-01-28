"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "LearnOnchain helped me land my first blockchain job!",
    author: "Defi Devrel",
    role: "Blockchain Developer",
    image: "/images/defidevrel.png",
  },
  {
    quote: "The tools and courses are top-notch and easy to follow.",
    author: "Emmanuel Enebeli",
    role: "Developer Marketing",
    image: "/images/kokocodes.png",
  },
  {
    quote: "I've built two dApps and earned rewards through bounties.",
    author: "Defi Princess",
    role: "Web3 Engineer",
    image: "/images/defiprincess.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 bg-gray-800/50 backdrop-blur-lg border-gray-700 h-full flex flex-col">
                <Quote className="w-8 h-8 text-blue-400 mb-4" />
                <p className="text-gray-300 mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-300">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}