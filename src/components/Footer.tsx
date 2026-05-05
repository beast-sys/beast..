import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 border-b-4 border-b-[#a855f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#3b82f6]" />
              <span className="font-display font-black tracking-tighter uppercase text-xl tracking-wider text-white">
                BEAST<span className="text-[#a855f7]">_</span>STORE
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Unleashing the power of next-gen technology. We curate the most powerful, aesthetically superior gadgets for the modern tech enthusiast.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">All Products</Link></li>
              <li><Link to="/products?category=smartphones" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">Smartphones</Link></li>
              <li><Link to="/products?category=audio" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">Audio</Link></li>
              <li><Link to="/products?category=wearables" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">Wearables</Link></li>
              <li><Link to="/products?category=gaming" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">Gaming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Returns & Refunds</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <span>2024 Neon Avenue, Cyber District, NTY 3099</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <span>1-800-BEAST-TECH</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <span>support@beaststore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Beast Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
