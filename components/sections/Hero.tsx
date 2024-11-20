'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/ui/counter';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] bg-fixed" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] bg-fixed" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                Rated #1 Phone Store in 2024
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
              >
                Discover Your
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Perfect Phone
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-lg md:text-xl max-w-lg"
              >
                Experience the latest in mobile technology with our curated selection of premium smartphones.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg
                           inline-flex items-center gap-2 group"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-2"
                >
                  View Deals
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-8 pt-12 mt-4 border-t"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-gray-600 font-medium mt-1">Support</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Counter
                    end={30}
                    suffix="+"
                    className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                  />
                  <div className="text-gray-600 font-medium mt-1">Brands</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <Counter
                    end={100}
                    suffix="k+"
                    className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                  />
                  <div className="text-gray-600 font-medium mt-1">Customers</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Phone Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[3rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1887&auto=format&fit=crop"
                alt="Latest iPhone"
                fill
                className="object-cover object-center transform scale-90 hover:scale-95 transition-transform duration-500"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-sm font-semibold text-gray-700 mb-1">Starting from</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$999</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="text-sm font-semibold text-gray-700 mb-1">Free shipping</div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2-Day Delivery</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
