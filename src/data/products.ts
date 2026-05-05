export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: 'smartphones' | 'audio' | 'wearables' | 'gaming';
  features: string[];
  image: string;
  rating: number;
  reviews: number;
  stock: number;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Neon X Pro Smartphone',
    price: 999.99,
    originalPrice: 1199.99,
    description: 'The ultimate tech beast with a transparent back, neon LED indicators, and Snapdragon 8 Gen 3.',
    category: 'smartphones',
    features: ['120Hz OLED Display', 'Neon LED integration', '50MP AI Camera', '100W Fast Charging'],
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351cb31b?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 1245,
    stock: 5,
  },
  {
    id: 'p2',
    name: 'Quantum Sound Nova - Wireless ANC Headphones',
    price: 249.99,
    originalPrice: 299.99,
    description: 'Immerse yourself in pure silence. Next-gen active noise cancellation with 40mm beryllium drivers.',
    category: 'audio',
    features: ['Adaptive ANC', '40-hour battery life', 'Spatial Audio support', 'Glass-touch controls'],
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop',
    rating: 4.8,
    reviews: 832,
    stock: 12,
  },
  {
    id: 'p3',
    name: 'CyberWatch Titan',
    price: 349.99,
    description: 'A titanium-clad smartwatch built for the modern urban explorer. Military-grade durability.',
    category: 'wearables',
    features: ['Titanium unibody', 'Always-on Holographic Display', 'ECG & Blood Oxygen', '100m Water Resistance'],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop',
    rating: 4.7,
    reviews: 512,
    stock: 8,
  },
  {
    id: 'p4',
    name: 'Vortex Mechanical Keyboard',
    price: 179.99,
    description: 'Tactile perfection. Hot-swappable custom switches with per-key RGB and a transparent polycarbonate case.',
    category: 'gaming',
    features: ['Hot-swappable switches', 'QMK/VIA compatible', 'Gasket mount design', 'PBT Double-shot keycaps'],
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop',
    rating: 4.9,
    reviews: 420,
    stock: 3, // Scarcity
  },
  {
    id: 'p5',
    name: 'Beast Core Gaming Mouse',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Ultralight magnesium alloy chassis with a 30K DPI optical sensor. Designed for esports pros.',
    category: 'gaming',
    features: ['45g Ultralight', '30,000 DPI Sensor', 'Optical switches', '4000Hz Polling rate'],
    image: 'https://images.unsplash.com/photo-1527814050087-379381547969?q=80&w=800&auto=format&fit=crop',
    rating: 4.6,
    reviews: 318,
    stock: 25,
  },
  {
    id: 'p6',
    name: 'Sonic Pods V2',
    price: 129.99,
    description: 'Invisible comfort. Tremendous sound. The smallest hi-res audio earbuds on the market.',
    category: 'audio',
    features: ['Hi-Res Audio Wireless certified', 'Multipoint connection', 'IPX4 Water resistance', 'Wireless charging case'],
    image: 'https://images.unsplash.com/photo-1572569433114-6f3b06385a47?q=80&w=800&auto=format&fit=crop',
    rating: 4.5,
    reviews: 950,
    stock: 10,
  }
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
