import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { getProductById } from '../data/products';
import { useCart } from '../store/CartContext';
import { ShieldCheck, Truck, Star, ArrowLeft, ShoppingCart, Check, AlertCircle } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl text-white font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-[#3b82f6] hover:underline">Return to Products</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const isLowStock = product.stock <= 5;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen pt-32">
      <Link to="/products" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-[#050505] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-8 group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/5 to-[#a855f7]/5 opacity-50"></div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl relative z-10 group-hover:scale-105 transition-transform duration-500" 
          />
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3b82f6]">
              {product.category}
            </span>
            {isLowStock && (
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 animate-pulse">
                <AlertCircle className="w-3 h-3" />
                ONLY {product.stock} LEFT
              </span>
            )}
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-[#a855f7] text-[#a855f7]' : 'fill-white/10 text-white/10'}`} 
                />
              ))}
            </div>
            <span className="text-white font-medium">{product.rating}</span>
            <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
          </div>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3b82f6] shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
            <div className="flex items-end gap-4 mb-6">
              <span className="text-4xl font-bold text-white">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 ${
                isAdded 
                  ? 'bg-green-500 text-white border-green-500' 
                  : 'bg-[#a855f7] text-white hover:bg-[#a000e0] neon-glow border border-transparent'
              }`}
            >
              <AnimatePresence mode="wait">
                {isAdded ? (
                  <motion.div key="added" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                    <Check className="w-5 h-5" /> Added to Cart
                  </motion.div>
                ) : (
                  <motion.div key="add" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-4 mt-8">
             <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border-white/5">
                <Truck className="w-5 h-5 text-[#3b82f6]" />
                <div>
                  <p className="text-white text-xs font-bold uppercase">Free Delivery</p>
                  <p className="text-gray-400 text-[10px]">2-4 business days</p>
                </div>
             </div>
             <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#a855f7]" />
                <div>
                  <p className="text-white text-xs font-bold uppercase">1 Year Warranty</p>
                  <p className="text-gray-400 text-[10px]">Official guarantee</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
