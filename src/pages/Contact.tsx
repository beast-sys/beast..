import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="w-full pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black tracking-tighter uppercase text-4xl md:text-5xl text-white uppercase tracking-wider mb-4"
          >
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">Connection</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need support calibrating your gear? Have a business inquiry? Ping our network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5">
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckIcon className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Message Transmitted</h3>
                <p className="text-gray-400 mb-8">Our operatives will respond to your signal shortly.</p>
                <button onClick={() => setFormState('idle')} className="text-[#3b82f6] hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Subject Classification</label>
                  <select className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors appearance-none">
                    <option>Technical Support</option>
                    <option>Order Status</option>
                    <option>Partnership Inquiry</option>
                    <option>General Comms</option>
                  </select>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Identifier (Name)</label>
                    <input required type="text" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="Alias" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Signal Point (Email)</label>
                    <input required type="email" className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors" placeholder="user@domain.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Message Payload</label>
                  <textarea required rows={5} className="w-full bg-black border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none" placeholder="Enter transmission data..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-[#3b82f6] transition-all duration-300 disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'Encrypting...' : 'Transmit Message'}
                </button>
              </form>
            )}
          </div>

          {/* Info & FAQ */}
          <div className="flex flex-col justify-center space-y-12">
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-full bg-[#a855f7]/10 flex items-center justify-center shrink-0 border border-[#a855f7]/20 group-hover:bg-[#a855f7]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#a855f7]" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Direct Comms</h4>
                  <p className="text-gray-400 text-sm mb-1">Response time: &lt; 2 hours</p>
                  <a href="mailto:support@beaststore.com" className="text-[#3b82f6] hover:underline font-medium">support@beaststore.com</a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#3b82f6]" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Live Feed (WhatsApp)</h4>
                  <p className="text-gray-400 text-sm mb-1">Instant text support</p>
                  <a href="#" className="text-[#3b82f6] hover:underline font-medium">+1 (800) BEAST-01</a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">Physical Node</h4>
                  <p className="text-gray-400 text-sm">
                    2024 Neon Avenue<br />
                    Cyber District, NTY 3099<br />
                    Earth Sector
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wider mb-6">FAQ Database</h3>
              <div className="space-y-4">
                {[
                  { q: "Do you ship internationally?", a: "Yes. Our logistics network covers 150+ countries. Shipping times vary by sector." },
                  { q: "What is your return policy?", a: "30-day money-back guarantee if the hardware remains untampered. Custom builds are final sale." },
                  { q: "Can I pre-order unreleased gear?", a: "Only registered Beast VIP members have access to the zero-day pre-order network." }
                ].map((faq, i) => (
                  <div key={i} className="bg-[#050505] p-5 rounded-xl border border-white/5">
                    <h4 className="text-white font-bold mb-2 text-sm">{faq.q}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
