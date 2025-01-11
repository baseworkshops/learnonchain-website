"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Award, ArrowRight } from "lucide-react";

const bounties = [
  {
    id: 1,
    title: "Build a DeFi Dashboard",
    description: "Create a responsive dashboard for tracking DeFi investments and yields.",
    reward: "0.5 ETH",
    deadline: "7 days",
    status: "Available",
    category: "Development",
  },
  {
    id: 2,
    title: "Smart Contract Security Audit",
    description: "Perform a comprehensive security audit of our latest smart contracts.",
    reward: "1.2 ETH",
    deadline: "14 days",
    status: "In Progress",
    category: "Security",
  },
  {
    id: 3,
    title: "NFT Marketplace Integration",
    description: "Integrate popular NFT marketplaces into our platform.",
    reward: "2 ETH",
    deadline: "21 days",
    status: "Available",
    category: "Development",
  },
  // Add more bounties as needed
];

const categories = ["All", "Development", "Design", "Security", "Content"];
const statuses = ["All", "Available", "In Progress", "Completed"];

export default function BountiesList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBounties = bounties.filter((bounty) => {
    const matchesCategory = selectedCategory === "All" || bounty.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || bounty.status === selectedStatus;
    const matchesSearch = bounty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         bounty.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section id="bounties" className="py-24 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Available Bounties</h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search bounties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 text-white"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[200px] bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger className="w-[200px] bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>{status}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Bounties Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredBounties.map((bounty, index) => (
            <motion.div
              key={bounty.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {bounty.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Ends in {bounty.deadline}</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`
                      ${bounty.status === 'Available' ? 'border-green-500/50 text-green-400' :
                        bounty.status === 'In Progress' ? 'border-yellow-500/50 text-yellow-400' :
                        'border-blue-500/50 text-blue-400'}
                    `}
                  >
                    {bounty.status}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-6">{bounty.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">{bounty.reward}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/10 hover:border-white/20 group/button"
                  >
                    View Details
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