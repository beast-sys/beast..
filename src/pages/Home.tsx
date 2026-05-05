import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, ShieldCheck, Truck, Zap, Clock } from 'lucide-react';

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-[#3b82f6]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 -left-64 w-[600px] h-[600px] bg-[#a855f7]/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse"></span>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-300">Next-Gen Tech Available Now</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              UNLEASH THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">
                POWER
              </span> OF TECH
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Equip yourself with elite gadgets, designed for the future. From high-octane gaming gear to premium audiophile sound.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#3b82f6] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/products?category=gaming" 
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider border border-white/20 hover:border-[#a855f7] hover:bg-[#a855f7]/10 transition-all duration-300"
              >
                Explore Deals
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a855f7]/20 to-[#3b82f6]/20 rounded-full blur-3xl transform -translate-y-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1042&auto=format&fit=crop" 
              alt="High performance tech setup" 
              className="relative z-10 w-full object-cover rounded-2xl border border-white/10 shadow-2xl"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
            />
            {/* Floating indicator */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-[#a855f7]/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#a855f7]" />
              </div>
              <div>
                <p className="text-white font-bold">Ultra Performance</p>
                <p className="text-gray-400 text-xs">Rated 4.9/5 by pros</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust/Features Ribbon */}
      <section className="bg-[#050505] border-y border-white/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <div className="p-3 rounded-full bg-[#3b82f6]/10">
                <Truck className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <div>
                <h3 className="text-white font-bold">Free Fast Shipping</h3>
                <p className="text-gray-500 text-sm">On all orders over $50</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <div className="p-3 rounded-full bg-[#a855f7]/10">
                <ShieldCheck className="w-6 h-6 text-[#a855f7]" />
              </div>
              <div>
                <h3 className="text-white font-bold">Secure Checkout</h3>
                <p className="text-gray-500 text-sm">256-bit encryption</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <div className="p-3 rounded-full bg-[#3b82f6]/10">
                <Clock className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <div>
                <h3 className="text-white font-bold">24/7 Support</h3>
                <p className="text-gray-500 text-sm">We're here to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display font-black tracking-tighter uppercase text-3xl md:text-4xl text-white mb-2 uppercase tracking-wide">
              Featured <span className="text-[#3b82f6]">Beasts</span>
            </h2>
            <p className="text-gray-400">Our currently trending and highest-rated gear.</p>
          </div>
          <Link to="/products" className="text-sm font-bold uppercase tracking-wider text-[#a855f7] hover:text-white flex items-center gap-1 transition-colors group">
            View All <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Limited Time Offer CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728263952-84b2c1f96452?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        
        <div className="relative max-w-3xl mx-auto px-4 text-center z-10 glass-panel p-12 rounded-3xl">
          <div className="inline-block bg-red-500 text-white font-bold px-4 py-1 rounded-full text-sm mb-6 animate-pulse">
            LIMITED TIME ONLY
          </div>
          <h2 className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl text-white mb-6 uppercase tracking-wider">
            Upgrade Your Setup.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">
              Save up to 30%
            </span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get the Beast Core series at a heavily discounted price for the next 48 hours. Don't miss out on ultimate performance.
          </p>
          <Link 
            to="/products"
            className="inline-flex items-center justify-center bg-[#a855f7] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#a000e0] neon-glow transition-all duration-300"
          >
            Claim Discount Now
          </Link>
        </div>
      </section>
    </div>
  );
}
