'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Flagship Phones',
    description: 'Premium devices with cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081&auto=format&fit=crop',
    color: 'from-blue-500/10 to-cyan-500/10',
  },
  {
    id: 2,
    name: 'Mid-Range',
    description: 'Perfect balance of performance and value',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2027&auto=format&fit=crop',
    color: 'from-purple-500/10 to-pink-500/10',
  },
  {
    id: 3,
    name: 'Budget Friendly',
    description: 'Quality smartphones at affordable prices',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop',
    color: 'from-green-500/10 to-emerald-500/10',
  },
  {
    id: 4,
    name: 'Gaming Phones',
    description: 'Designed for ultimate mobile gaming experience',
    image: 'https://images.unsplash.com/photo-1662947995689-ec5165848bcd?q=80&w=1974&auto=format&fit=crop',
    color: 'from-red-500/10 to-orange-500/10',
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Browse by Category</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-medium">
            Explore our wide range of smartphones categorized to match your needs and preferences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/category/${category.id}`}>
                <div className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.color} p-6 h-[400px] transition-all duration-300 hover:shadow-lg`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                  <div className="relative h-48 mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-200 mb-4">{category.description}</p>
                    <div className="flex items-center text-white group">
                      <span className="mr-2">Explore</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
