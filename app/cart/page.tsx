'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <div className="w-24 h-24 mb-8 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
            <ShoppingCart className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Start exploring our collection of premium phones and add your favorites to the cart!
          </p>
          <Link href="/phones">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Browse Phones
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <span className="text-gray-600">({items.length} {items.length === 1 ? 'item' : 'items'})</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-6">
                    <Link href={`/phones/${item.slug}`} className="flex items-center gap-6 flex-grow group">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                        <p className="text-blue-600 font-bold">${item.price}</p>
                      </div>
                    </Link>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium text-gray-900">{item.quantity}</span>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 rounded-full bg-white shadow-sm hover:bg-gray-50 hover:shadow-md transition-all"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="h-10 w-10 rounded-full bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-900">Free</span>
                  </div>
                  
                  <div className="h-px bg-gray-100 my-4"></div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mt-6">
                    Proceed to Checkout
                  </Button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    Free shipping on all orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
