"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Choose a bounty that interests you",
    description: "Browse through available bounties and select one that matches your skills and interests.",
  },
  {
    title: "Complete the required tasks",
    description: "Follow the bounty specifications and create your solution using the provided guidelines.",
  },
  {
    title: "Submit your work",
    description: "Submit your completed work through the provided form for review and approval.",
  },
];

const faqs = [
  {
    question: "What types of bounties are available?",
    answer: "Bounties range from coding challenges to creative design tasks. We offer opportunities in smart contract development, UI/UX design, content creation, and more.",
  },
  {
    question: "How are rewards distributed?",
    answer: "Rewards are sent directly to your wallet upon approval of your submission. The distribution typically occurs within 48 hours of approval.",
  },
  {
    question: "Can I work on multiple bounties?",
    answer: "Yes, you can work on multiple bounties simultaneously as long as you can maintain quality and meet deadlines.",
  },
  {
    question: "What happens if my submission is rejected?",
    answer: "If your submission doesn't meet the requirements, you'll receive detailed feedback and have the opportunity to revise and resubmit your work.",
  },
];

export default function BountiesGuide() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How to Participate</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these simple steps to start earning rewards
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-6 text-white font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            
            <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white text-center">Frequently Asked Questions</h3>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/10 rounded-lg px-6 data-[state=open]:bg-white/5"
                  >
                    <AccordionTrigger className="text-white hover:text-white/90 hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}