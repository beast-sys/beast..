import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../store/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';

export function Cart() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  const shipping = subtotal > 50 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen pt-32">
      <h1 className="font-display font-black tracking-tighter uppercase text-3xl md:text-4xl text-white uppercase tracking-wider mb-8">
        Your <span className="text-[#3b82f6]">Cart</span>
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-[#050505] rounded-3xl border border-white/5">
          <p className="text-gray-400 mb-6 text-lg">Your cart is currently empty.</p>
          <Link 
            to="/products"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-[#3b82f6] transition-all duration-300"
          >
            Explore Gear
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl glass-panel border-white/10 items-center relative"
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl bg-black" />
                  
                  <div className="flex-1 text-center sm:text-left">
                    <Link to={`/product/${item.id}`} className="text-lg font-bold text-white hover:text-[#3b82f6] transition-colors">{item.name}</Link>
                    <p className="text-[#a855f7] font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-4 bg-black/50 border border-white/10 rounded-full p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-6 text-center font-medium text-white text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-4 right-4 sm:static w-10 h-10 flex items-center justify-center rounded-full text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border-white/10 sticky top-28">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 pb-6 border-b border-white/10">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span className="font-medium text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="font-medium text-white">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end border-t border-white/10 pt-6 mb-8">
                <span className="text-white font-bold uppercase tracking-wider">Total</span>
                <span className="text-3xl font-display font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Link 
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#3b82f6] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
                <ShieldCheck className="w-4 h-4" /> Secure SSL Checkout
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
