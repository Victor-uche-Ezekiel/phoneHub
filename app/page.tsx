'use client';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Categories from '@/components/sections/Categories';
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const featuredPhones = [
  {
    id: 1,
    slug: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop',
    rating: 4.9,
    reviews: 1289,
  },
  {
    id: 2,
    slug: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2071&auto=format&fit=crop',
    rating: 4.8,
    reviews: 892,
  },
  {
    id: 3,
    slug: 'google-pixel-8-pro',
    name: 'Google Pixel 8 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
    rating: 4.7,
    reviews: 567,
  },
];

export default function Home() {
  const { addItem } = useCart();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Phones</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover our handpicked selection of premium smartphones, featuring the latest technology and exceptional performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhones.map((phone, index) => (
              <motion.div
                key={phone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/phones/${phone.slug}`} className="block group">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 mb-6">
                    <Image
                      src={phone.image}
                      alt={phone.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {phone.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900">{phone.rating}</span>
                    </div>
                    <span className="text-gray-700">({phone.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      ${phone.price}
                    </span>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem({
                          id: phone.id.toString(),
                          name: phone.name,
                          price: phone.price,
                          image: phone.image,
                          slug: phone.slug,
                        });
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/phones">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium">
                View All Phones
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
