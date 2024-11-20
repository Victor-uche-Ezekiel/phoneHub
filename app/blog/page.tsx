'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-smartphone-technology-2024',
    title: 'The Future of Smartphone Technology: What to Expect in 2024',
    excerpt: 'From AI-powered cameras to revolutionary battery technology, discover the innovations that will shape the next generation of smartphones.',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081&auto=format&fit=crop',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Alex Johnson',
    category: 'Technology',
  },
  {
    id: 2,
    slug: 'iphone-15-pro-max-vs-samsung-s24-ultra',
    title: 'iPhone 15 Pro Max vs Samsung S24 Ultra: The Ultimate Comparison',
    excerpt: 'A detailed comparison of the two flagship smartphones, helping you make an informed decision on your next premium phone purchase.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop',
    date: 'March 12, 2024',
    readTime: '8 min read',
    author: 'Sarah Chen',
    category: 'Reviews',
  },
  {
    id: 3,
    slug: 'top-camera-phones-for-photography',
    title: 'Top Camera Phones for Photography Enthusiasts',
    excerpt: 'Explore the best smartphones for photography, from low-light performance to professional-grade features.',
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=2071&auto=format&fit=crop',
    date: 'March 10, 2024',
    readTime: '6 min read',
    author: 'Michael Smith',
    category: 'Photography',
  },
  {
    id: 4,
    slug: '5g-technology-mobile-gaming',
    title: "5G Technology: How It's Changing Mobile Gaming",
    excerpt: 'Discover how 5G networks are revolutionizing mobile gaming with lower latency and higher speeds.',
    image: 'https://images.unsplash.com/photo-1586182987320-4f376d39d787?q=80&w=2069&auto=format&fit=crop',
    date: 'March 8, 2024',
    readTime: '4 min read',
    author: 'David Park',
    category: 'Gaming',
  },
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1);

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href={`/blog/${featuredPost.slug}`} className="block group">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h1>
                  <p className="text-gray-200 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">{featuredPost.author}</div>
                      <div className="text-sm text-gray-300">Author</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Recent Posts */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recent Posts</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-sm h-full"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">{post.author}</div>
                      <div className="text-gray-600">{post.date}</div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
