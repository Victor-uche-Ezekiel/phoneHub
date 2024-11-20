'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Phone, ShoppingBag, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Animation variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const quickLinks = [
  {
    title: 'Browse Phones',
    description: 'Explore our collection of latest smartphones',
    icon: Phone,
    href: '/phones',
  },
  {
    title: 'View Deals',
    description: 'Check out our exclusive phone deals',
    icon: ShoppingBag,
    href: '/deals',
  },
  {
    title: 'Search Products',
    description: 'Find exactly what you\'re looking for',
    icon: Search,
    href: '/phones',
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* 404 Text */}
        <motion.div
          className="relative mb-8"
          variants={itemVariants}
        >
          <div className="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <div className="text-[250px] md:text-[350px] font-bold text-black">
              404
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Oops! This page has gone mobile
        </motion.h1>
        
        <motion.p
          className="text-gray-600 mb-8 max-w-md mx-auto"
          variants={itemVariants}
        >
          Just like a phone without service, this page seems to be disconnected. 
          Let's help you find your way back!
        </motion.p>

        {/* Quick Links */}
        <motion.div
          className="grid md:grid-cols-3 gap-4 mb-8"
          variants={itemVariants}
        >
          {quickLinks.map((link) => (
            <Link 
              key={link.title}
              href={link.href}
              className="group block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
                  <link.icon className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Home Button */}
        <motion.div variants={itemVariants}>
          <Link href="/">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                       text-white rounded-full px-8 py-2 inline-flex items-center gap-2 group transition-all 
                       duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Back to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-2xl" />
          <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl" />
        </div>
      </motion.div>
    </main>
  );
}
