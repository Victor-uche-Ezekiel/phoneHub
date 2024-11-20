'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Timer, Percent, Star, Tag, Gift } from 'lucide-react';

// Sample deals data
const deals = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    originalPrice: 1199,
    discountedPrice: 999,
    discount: 17,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop',
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    rating: 4.9,
    soldCount: 145,
    remainingStock: 23,
    category: 'Flash Deal',
    features: ['A17 Pro chip', 'Pro camera system', 'Titanium design'],
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    originalPrice: 1299,
    discountedPrice: 1099,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop',
    endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    rating: 4.8,
    soldCount: 98,
    remainingStock: 45,
    category: 'Limited Time',
    features: ['AI-powered camera', '200MP main sensor', 'S Pen included'],
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    originalPrice: 999,
    discountedPrice: 799,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    rating: 4.7,
    soldCount: 76,
    remainingStock: 34,
    category: 'Flash Deal',
    features: ['Tensor G3 chip', 'Magic Editor', 'Temperature sensor'],
  },
  {
    id: 4,
    name: 'OnePlus 12',
    originalPrice: 799,
    discountedPrice: 649,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1678911820864-e5c67e784c22?q=80&w=2070&auto=format&fit=crop',
    endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
    rating: 4.6,
    soldCount: 89,
    remainingStock: 56,
    category: 'Bundle Deal',
    features: ['Snapdragon 8 Gen 3', '50MP camera', '100W charging'],
    bundleItems: ['OnePlus Buds Pro 2', 'Wireless Charger', 'Phone Case'],
  },
];

const categories = [
  { name: 'All Deals', icon: Tag },
  { name: 'Flash Deal', icon: Timer },
  { name: 'Limited Time', icon: Percent },
  { name: 'Bundle Deal', icon: Gift },
];

function CountdownTimer({ endTime }: { endTime: Date }) {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endTime.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft('Deal Ended');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex items-center gap-2 text-gray-600">
      <Timer className="w-4 h-4" />
      <span className="font-medium">{timeLeft}</span>
    </div>
  );
}

export default function DealsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Deals');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDeals = deals.filter(deal => {
    const matchesCategory = selectedCategory === 'All Deals' || deal.category === selectedCategory;
    const matchesSearch = deal.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Exclusive Phone Deals
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Don't miss out on these amazing limited-time offers
          </motion.p>
        </div>

        {/* Search and Categories */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md mx-auto block px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ name, icon: Icon }) => (
              <motion.button
                key={name}
                onClick={() => setSelectedCategory(name)}
                className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                  selectedCategory === name
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Deal Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {deal.discount}% OFF
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                <Image
                  src={deal.image}
                  alt={deal.name}
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{deal.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">${deal.discountedPrice}</span>
                      <span className="text-gray-400 line-through">${deal.originalPrice}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium text-gray-700">{deal.rating}</span>
                    </div>
                  </div>
                  <CountdownTimer endTime={deal.endTime} />
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {deal.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                  {deal.bundleItems && (
                    <li className="text-blue-600 font-medium mt-2">
                      + {deal.bundleItems.join(', ')}
                    </li>
                  )}
                </ul>

                {/* Stock and Action */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-600 text-sm">
                      <span className="text-blue-600 font-medium">{deal.soldCount}</span> sold
                    </div>
                    <div className="text-gray-600 text-sm">
                      Only <span className="text-red-500 font-medium">{deal.remainingStock}</span> left
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                             text-white rounded-full py-2 flex items-center justify-center gap-2 group transition-all 
                             duration-300 hover:shadow-lg"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDeals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No deals found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter.</p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
