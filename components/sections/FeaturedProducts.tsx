'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const featuredPhones = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 1199,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop',
    features: ['A17 Pro chip', 'Pro camera system', 'Titanium design'],
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop',
    features: ['AI-powered camera', '200MP main sensor', 'S Pen included'],
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    price: 999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
    features: ['Tensor G3 chip', 'Magic Editor', 'Temperature sensor'],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Phones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium smartphones, featuring the latest technology
            and innovative designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPhones.map((phone, index) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-72">
                <Image
                  src={phone.image}
                  alt={phone.name}
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{phone.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-600">{phone.rating}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {phone.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">${phone.price}</div>
                  <Button
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6
                             inline-flex items-center gap-2 group"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
