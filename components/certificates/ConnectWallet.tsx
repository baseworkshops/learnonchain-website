"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, ChevronRight } from "lucide-react";

const wallets = [
  {
    name: "MetaMask",
    icon: "https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?w=400&auto=format&fit=crop&q=60",
    description: "Connect using MetaMask browser extension",
  },
  {
    name: "WalletConnect",
    icon: "https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?w=400&auto=format&fit=crop&q=60",
    description: "Scan with your mobile wallet",
  },
  {
    name: "Coinbase Wallet",
    icon: "https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?w=400&auto=format&fit=crop&q=60",
    description: "Connect using Coinbase Wallet",
  },
];

export default function ConnectWallet() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Securely Connect Your Wallet
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your preferred wallet to start claiming your certificates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {wallets.map((wallet, index) => (
            <motion.div
              key={wallet.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5 mb-6 mx-auto">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {wallet.name}
                </h3>
                <p className="text-gray-400 text-center mb-6">{wallet.description}</p>
                
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group/button"
                >
                  Connect
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}