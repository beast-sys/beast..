import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../store/CartContext';
import { CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const shipping = subtotal > 50 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsProcessing(true);
      // Simulate API call
      setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
        clearCart();
      }, 2000);
    }
  };

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center bg-[#0a0a0a] border border-white/10 p-12 rounded-3xl max-w-md w-full mx-4">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-2xl text-white font-bold mb-4">Checkout Error</h1>
          <p className="text-gray-400 mb-8">You cannot proceed to checkout with an empty cart.</p>
          <Link to="/products" className="bg-[#3b82f6] text-black px-6 py-3 rounded-full font-bold uppercase hover:bg-white transition-colors">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-[#0a0a0a] border border-white/10 p-12 rounded-3xl max-w-md w-full mx-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <CheckCircle2 className="w-20 h-20 text-[#3b82f6] mx-auto mb-6" />
          </motion.div>
          <h1 className="text-3xl text-white font-display font-black tracking-tighter uppercase mb-2 uppercase tracking-wider">Order Confirmed</h1>
          <p className="text-gray-400 text-sm mb-8">Thank you for your purchase. Your tech is being prepared for hyper-fast transit.</p>
          <button 
            onClick={() => navigate('/')} 
            className="w-full bg-white text-black px-6 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[#3b82f6] transition-colors"
          >
            Return to Base
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Area */}
        <div className="lg:col-span-2">
          <Link to="/cart" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </Link>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mb-10 overflow-hidden">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-colors ${
                  step === num ? 'bg-[#a855f7] text-white border-transparent' : 
                  step > num ? 'bg-white/10 text-white border-transparent' : 'bg-transparent text-gray-500 border-gray-600'
                }`}>
                  {num}
                </div>
                {num < 3 && (
                  <div className={`h-px flex-1 ${step > num ? 'bg-white/20' : 'bg-white/5'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-[#050505] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Contact Info</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">First Name</label>
                    <input required type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Last Name</label>
                    <input required type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                  <input required type="email" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="john@example.com" />
                </div>
                <button type="submit" className="w-full bg-[#a855f7] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#a000e0] neon-glow transition-all mt-4">
                  Continue to Shipping
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Shipping Details</h2>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Address</label>
                  <input required type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="123 Neon Street" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">City</label>
                    <input required type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="Cyber City" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Zip Code</label>
                    <input required type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="10001" />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 bg-transparent border border-white/20 text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="flex-1 bg-[#a855f7] text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#a000e0] neon-glow transition-all">
                    Continue to Payment
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Payment Method</h2>
                <div className="space-y-4">
                  <label className="block relative border border-[#3b82f6] bg-[#3b82f6]/5 p-4 rounded-xl cursor-pointer">
                    <input type="radio" name="payment" className="absolute top-4 right-4" defaultChecked />
                    <span className="block font-bold text-white mb-1">Credit Card</span>
                    <span className="block text-sm text-gray-400">Visa, Mastercard, Amex</span>
                  </label>
                  <label className="block relative border border-white/10 bg-black p-4 rounded-xl cursor-pointer opacity-60">
                    <input type="radio" name="payment" className="absolute top-4 right-4" disabled />
                    <span className="block font-bold text-white mb-1 flex items-center gap-2">Crypto <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Coming Soon</span></span>
                  </label>
                </div>
                
                <div className="pt-4 border-t border-white/10 mt-6">
                   <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="col-span-2">
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Card Number</label>
                      <input type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div>
                       <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Expiry Date</label>
                      <input type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="MM/YY" />
                    </div>
                    <div>
                       <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">CVC</label>
                      <input type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="123" />
                    </div>
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setStep(2)} className="flex-1 bg-transparent border border-white/20 text-white py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
                    Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="flex-[2] bg-[#3b82f6] text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                  >
                    {isProcessing ? 'Processing Crypto-Link...' : `Pay $${total.toFixed(2)}`}
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>

        {/* Mini Summary */}
        <div className="lg:col-span-1 border-t lg:border-t-0 border-white/10 pt-12 lg:pt-0">
          <div className="sticky top-28 bg-[#0a0a0a] p-8 rounded-3xl border border-white/5">
            <h3 className="font-bold text-white uppercase tracking-wider mb-6">Order Items ({items.length})</h3>
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {items.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-black" />
                  <div className="flex-1">
                    <p className="text-sm text-white font-semibold line-clamp-1">{item.name}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                    <p className="text-sm text-[#3b82f6] font-bold mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 space-y-2">
               <div className="flex justify-between text-sm text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between items-end pt-4 mt-2 border-t border-white/10">
                  <span className="text-white font-bold uppercase">Total</span>
                  <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
