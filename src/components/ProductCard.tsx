import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../data/products';
import { useCart } from '../store/CartContext';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();

  const isLowStock = product.stock <= 5;
  const isSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-[#3b82f6]/50 transition-colors duration-300 flex flex-col h-full"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isSale && (
          <span className="bg-[#a855f7] text-white text-xs font-bold px-3 py-1 rounded-full w-max">
            SALE
          </span>
        )}
        {isLowStock && (
          <span className="bg-red-500/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full w-max animate-pulse">
            ONLY {product.stock} LEFT
          </span>
        )}
      </div>

      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-black/50">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60"></div>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-[#3b82f6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10"></div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-[#3b82f6] text-[#3b82f6]" />
          <span className="text-sm text-gray-300 font-medium">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display font-black tracking-tighter uppercase text-lg text-white mb-1 group-hover:text-[#3b82f6] transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-400 line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            {isSale && (
              <span className="text-xs text-gray-500 line-through">
                ${product.originalPrice?.toFixed(2)}
              </span>
            )}
            <span className="font-bold text-xl text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#3b82f6] hover:text-black hover:border-transparent hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
