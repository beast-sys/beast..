import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target } from 'lucide-react';

export function About() {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black tracking-tighter uppercase text-5xl md:text-7xl text-white uppercase tracking-wider mb-6"
          >
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">Beast</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Forged in the neon-lit depths of the cyber district. We engineer and curate technology that doesn't just perform—it dominates.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-6 uppercase tracking-wide">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              At Beast Store, we believe technology should be an extension of human potential. Our mission is to strip away the mundane and provide tools that empower creators, gamers, and innovators to break their limits.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We scout the globe for the most advanced, meticulously crafted gadgets, ensuring that every product that bears the Beast seal is capable of ultra-performance.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop" alt="Tech detail" className="rounded-2xl border border-white/10" />
            <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop" alt="Hardware" className="rounded-2xl border border-white/10 mt-8" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">The Beast Advantage</h2>
            <p className="text-gray-400">Why the elite choose to gear up with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/5 text-center group hover:border-[#3b82f6]/30 transition-colors">
              <div className="w-16 h-16 mx-auto bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#3b82f6]/20 transition-colors">
                <Zap className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Unrivaled Power</h3>
              <p className="text-gray-400">We only stock gear that pushes the boundaries of current technological capabilities.</p>
            </div>
            
            <div className="glass-panel p-8 rounded-3xl border border-white/5 text-center group hover:border-[#a855f7]/30 transition-colors">
              <div className="w-16 h-16 mx-auto bg-[#a855f7]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#a855f7]/20 transition-colors">
                <Shield className="w-8 h-8 text-[#a855f7]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Ironclad Quality</h3>
              <p className="text-gray-400">Every item is rigorously tested. If it doesn't withstand our trials, we don't sell it.</p>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/5 text-center group hover:border-[#3b82f6]/30 transition-colors">
              <div className="w-16 h-16 mx-auto bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#3b82f6]/20 transition-colors">
                <Target className="w-8 h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Precision Focus</h3>
              <p className="text-gray-400">Curated selections mean you don't have to sift through garbage to find the gold.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
