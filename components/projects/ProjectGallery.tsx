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
import { Search, ArrowRight, Shield, Code, Wallet } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Decentralized Learning Hub",
    description: "A platform where users can access blockchain-related courses with NFT certifications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop&q=60",
    tags: ["Education", "NFTs"],
    status: "Completed",
    category: "Education",
  },
  {
    id: 2,
    title: "NFT Marketplace Integration",
    description: "A tool for integrating NFT marketplaces with dApps for seamless transactions.",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&auto=format&fit=crop&q=60",
    tags: ["NFTs", "Tools"],
    status: "In Progress",
    category: "NFTs",
  },
  {
    id: 3,
    title: "ChainGuardian",
    description: "A smart contract auditing tool that detects vulnerabilities in Solidity code.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=60",
    tags: ["Security", "Tools"],
    status: "Completed",
    category: "Security",
  },
  {
    id: 4,
    title: "Onchain Voting Platform",
    description: "A decentralized voting platform for transparent decision-making in DAOs.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&auto=format&fit=crop&q=60",
    tags: ["Governance", "DAOs"],
    status: "Completed",
    category: "Governance",
  },
  {
    id: 5,
    title: "Gas Fee Optimizer",
    description: "A tool that minimizes gas fees for Ethereum transactions using efficient algorithms.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&auto=format&fit=crop&q=60",
    tags: ["DeFi", "Tools"],
    status: "In Progress",
    category: "DeFi",
  },
  {
    id: 6,
    title: "Decentralized Identity Manager",
    description: "Empowers users to manage their digital identities securely and privately.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=60",
    tags: ["Identity", "Privacy"],
    status: "Completed",
    category: "Identity",
  },
  {
    id: 7,
    title: "Cross-Chain NFT Minting",
    description: "Enables users to mint NFTs across multiple blockchains with a single transaction.",
    image: "https://images.unsplash.com/photo-1643101809754-b2c8b30cb698?w=400&auto=format&fit=crop&q=60",
    tags: ["NFTs", "Cross-Chain"],
    status: "Ongoing",
    category: "NFTs",
  },
  {
    id: 8,
    title: "Charity Fund Transparency",
    description: "Tracks charity fund usage transparently on the blockchain to build trust.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&auto=format&fit=crop&q=60",
    tags: ["Impact", "Transparency"],
    status: "Completed",
    category: "Impact",
  },
  {
    id: 9,
    title: "Base dApp Kit",
    description: "A toolkit for developers to quickly build and deploy applications on Base.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=60",
    tags: ["Base", "Development"],
    status: "Completed",
    category: "Tools",
  },
  {
    id: 10,
    title: "DeFi Loan Aggregator",
    description: "Aggregates loan options from multiple DeFi platforms for users to compare.",
    image: "https://images.unsplash.com/photo-1565372195458-9de8a37e7065?w=400&auto=format&fit=crop&q=60",
    tags: ["DeFi", "Finance"],
    status: "In Progress",
    category: "DeFi",
  },
];

const categories = [
  "All",
  "DeFi",
  "NFTs",
  "Education",
  "Tools",
  "Security",
  "Governance",
  "Identity",
  "Impact",
];

const statuses = ["All", "Completed", "In Progress", "Ongoing"];
const sortOptions = ["Newest First", "Most Popular", "Highest Impact"];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest First");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Community's Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover innovative solutions built by our community
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-[200px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-full md:w-[200px] bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`
                        ${project.status === 'Completed' ? 'border-green-500/50 text-green-400' :
                          project.status === 'In Progress' ? 'border-yellow-500/50 text-yellow-400' :
                          'border-blue-500/50 text-blue-400'}
                      `}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-blue-500/50 text-blue-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-white/10 hover:border-white/20 group/button"
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