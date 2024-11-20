'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronLeft, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    slug: 'future-of-smartphone-technology-2024',
    title: 'The Future of Smartphone Technology: What to Expect in 2024',
    excerpt: 'From AI-powered cameras to revolutionary battery technology, discover the innovations that will shape the next generation of smartphones.',
    content: `
      The smartphone industry is on the cusp of another revolutionary year. As we delve into 2024, several groundbreaking technologies are set to transform our mobile devices in ways we've never seen before.

      ## AI-Powered Innovation

      Artificial Intelligence is no longer just a buzzword in the smartphone industry. In 2024, we're seeing AI integration at unprecedented levels. From intelligent camera systems that can predict the perfect moment to take a photo, to smart battery management that learns from your usage patterns, AI is becoming the backbone of smartphone innovation.

      ### Key AI Features to Watch:
      - Predictive app loading based on user behavior
      - Advanced voice assistance with emotional recognition
      - Real-time translation with cultural context
      - Adaptive performance optimization

      ## Revolutionary Battery Technology

      One of the most exciting developments in 2024 is the advancement in battery technology. Manufacturers are introducing:
      - Solid-state batteries with faster charging
      - Extended battery life through AI optimization
      - Solar-charging capabilities in premium models
      - Wireless charging at greater distances

      ## Camera Systems of Tomorrow

      The camera capabilities of 2024's smartphones are pushing the boundaries of mobile photography:
      - 200MP+ sensors with advanced pixel binning
      - 8K video recording at 60fps
      - Advanced computational photography
      - Professional-grade editing tools built into native camera apps

      ## Sustainable Manufacturing

      Sustainability is becoming a core focus in smartphone manufacturing:
      - Recycled materials in construction
      - Biodegradable components
      - Energy-efficient production processes
      - Extended device lifespan through software optimization

      ## What This Means for Consumers

      These advancements promise to deliver:
      - More personalized user experiences
      - Longer-lasting devices
      - Professional-grade creative tools
      - Environmentally conscious technology

      The future of smartphone technology is not just about better specs – it's about creating devices that understand and adapt to our needs while being mindful of their environmental impact.
    `,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2081&auto=format&fit=crop',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Alex Johnson',
    category: 'Technology',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    relatedPosts: [2, 3],
  },
  {
    id: 2,
    slug: 'iphone-15-pro-max-vs-samsung-s24-ultra',
    title: 'iPhone 15 Pro Max vs Samsung S24 Ultra: The Ultimate Comparison',
    excerpt: 'A detailed comparison of the two flagship smartphones, helping you make an informed decision on your next premium phone purchase.',
    content: `
      When it comes to premium smartphones, the iPhone 15 Pro Max and Samsung Galaxy S24 Ultra stand at the pinnacle of innovation. Let's dive deep into how these flagship devices compare across various aspects.

      ## Design and Build Quality

      Both phones showcase premium materials and exceptional craftsmanship:

      ### iPhone 15 Pro Max:
      - Titanium frame
      - Ceramic Shield front
      - Textured matte glass back
      - Action Button feature

      ### Samsung S24 Ultra:
      - Armor Aluminum frame
      - Gorilla Glass Victus 2
      - Built-in S Pen
      - Flatter display design

      ## Display Technology

      The display is where both devices truly shine:

      ### iPhone 15 Pro Max:
      - 6.7-inch Super Retina XDR OLED
      - ProMotion 120Hz refresh rate
      - 2796 x 1290 resolution
      - Peak HDR brightness of 2000 nits

      ### Samsung S24 Ultra:
      - 6.8-inch Dynamic AMOLED 2X
      - Adaptive 120Hz refresh rate
      - 3088 x 1440 resolution
      - Peak brightness of 2600 nits

      ## Camera Systems

      Both phones offer exceptional photography capabilities:

      ### iPhone 15 Pro Max:
      - 48MP main sensor
      - 12MP ultra-wide
      - 12MP telephoto (5x optical zoom)
      - Advanced computational photography

      ### Samsung S24 Ultra:
      - 200MP main sensor
      - 12MP ultra-wide
      - Dual 10MP telephoto lenses
      - 100x Space Zoom

      ## Performance

      The processing power of both devices is remarkable:

      ### iPhone 15 Pro Max:
      - A17 Pro chip
      - 6-core CPU
      - 6-core GPU
      - 16-core Neural Engine

      ### Samsung S24 Ultra:
      - Snapdragon 8 Gen 3
      - Advanced AI capabilities
      - Ray tracing support
      - Enhanced NPU

      ## Battery Life and Charging

      Both devices offer all-day battery life:

      ### iPhone 15 Pro Max:
      - Up to 29 hours video playback
      - 20W wired charging
      - 15W MagSafe wireless charging
      - USB-C port

      ### Samsung S24 Ultra:
      - 5000mAh battery
      - 45W wired charging
      - 15W wireless charging
      - Reverse wireless charging

      ## Conclusion

      Both phones excel in their own ways:

      - iPhone 15 Pro Max: Better for ecosystem integration, video recording, and gaming
      - Samsung S24 Ultra: Superior for productivity, zoom photography, and customization

      Your choice should depend on your specific needs and ecosystem preferences.
    `,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop',
    date: 'March 12, 2024',
    readTime: '8 min read',
    author: 'Sarah Chen',
    category: 'Reviews',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    relatedPosts: [1, 3],
  },
  {
    id: 3,
    slug: 'top-camera-phones-for-photography',
    title: 'Top Camera Phones for Photography Enthusiasts',
    excerpt: 'Explore the best smartphones for photography, from low-light performance to professional-grade features.',
    content: `
      For photography enthusiasts, choosing the right smartphone can be as crucial as selecting a professional camera. Here's our comprehensive guide to the best camera phones available today.

      ## What Makes a Great Camera Phone?

      Before diving into specific models, let's understand the key features that make a smartphone camera truly exceptional:

      - Sensor size and quality
      - Computational photography capabilities
      - Versatility of lenses
      - Low-light performance
      - Manual controls
      - Image processing

      ## Top Picks for 2024

      ### 1. iPhone 15 Pro Max
      The iPhone 15 Pro Max continues Apple's tradition of excellence in mobile photography:
      - 48MP main sensor with pixel binning
      - Exceptional dynamic range
      - Industry-leading video capabilities
      - Powerful ProRAW format
      - Advanced Portrait mode

      ### 2. Samsung Galaxy S24 Ultra
      Samsung's flagship pushes the boundaries of mobile photography:
      - 200MP main sensor
      - Versatile zoom capabilities
      - Advanced AI processing
      - Expert RAW support
      - Professional-grade manual controls

      ### 3. Google Pixel 8 Pro
      Google's computational photography leader:
      - Outstanding HDR processing
      - Best-in-class night mode
      - Magic Editor features
      - Advanced AI enhancements
      - Unique creative tools

      ## Specialized Features

      ### Low-Light Photography
      - Pixel 8 Pro: Night Sight
      - iPhone 15 Pro Max: Night mode
      - S24 Ultra: Nightography

      ### Zoom Capabilities
      - S24 Ultra: 100x Space Zoom
      - iPhone 15 Pro Max: 5x optical zoom
      - Pixel 8 Pro: Super Res Zoom

      ### Video Features
      - iPhone 15 Pro Max: ProRes video
      - S24 Ultra: 8K recording
      - Pixel 8 Pro: Cinematic blur

      ## Professional Features

      ### Manual Controls
      - Pro mode availability
      - RAW shooting capabilities
      - Exposure compensation
      - White balance adjustment
      - Focus peaking

      ### Post-Processing
      - Built-in editing tools
      - AI-powered enhancements
      - Third-party app support
      - Cloud integration

      ## Choosing the Right Phone

      Consider these factors when selecting a camera phone:
      1. Primary use case (portraits, landscapes, etc.)
      2. Budget constraints
      3. Ecosystem preferences
      4. Storage requirements
      5. Additional features needed

      ## Tips for Mobile Photography

      To make the most of your camera phone:
      - Learn manual controls
      - Understand lighting
      - Practice composition
      - Use third-party apps
      - Regular backup of photos

      ## Conclusion

      The best camera phone depends on your specific needs:
      - iPhone 15 Pro Max: Best all-rounder
      - S24 Ultra: Best zoom capabilities
      - Pixel 8 Pro: Best computational photography

      Choose based on your photography style and requirements.
    `,
    image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?q=80&w=2071&auto=format&fit=crop',
    date: 'March 10, 2024',
    readTime: '6 min read',
    author: 'Michael Smith',
    category: 'Photography',
    authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop',
    relatedPosts: [1, 2],
  },
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find(post => post.slug === params.slug);
  const relatedPosts = post ? blogPosts.filter(p => post.relatedPosts.includes(p.id)) : [];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                             text-white rounded-full px-8 py-3">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium text-white">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-gray-600">Author</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Related Posts */}
          <section className="mt-16 pt-16 border-t">
            <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-6 shadow-sm"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                      <span className="text-sm text-gray-600">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>
        </motion.article>
      </div>
    </div>
  );
}
