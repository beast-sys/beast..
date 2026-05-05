import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../store/CartContext';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-black neon-border neon-glow group-hover:bg-[#3b82f6]/10 transition-colors">
                <Zap className="w-5 h-5 text-[#3b82f6]" />
              </div>
              <span className="font-display font-black tracking-tighter uppercase text-xl tracking-wider text-white">
                BEAST<span className="text-[#a855f7]">_</span>STORE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide font-medium transition-colors hover:text-[#3b82f6] ${
                    location.pathname === link.path ? 'text-[#3b82f6]' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative p-2 text-gray-300 hover:text-white transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center bg-[#a855f7] text-white text-[10px] font-bold rounded-full neon-glow"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>
              <button
                className="md:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col pt-20 px-6"
          >
            <button
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-3xl font-display font-medium border-b border-white/10 pb-4 ${
                    location.pathname === link.path ? 'text-gradient' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto mb-12">
              <p className="text-gray-500 text-sm mb-4">Follow Beast</p>
              <div className="flex gap-4">
                {/* Social icons could go here */}
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center">X</div>
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center">IG</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
