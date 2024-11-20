'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Award, Clock, Phone } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '100k+',
      label: 'Happy Customers',
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: '24/7',
      label: 'Customer Support',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      value: '1000+',
      label: 'Phone Models',
    },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
      bio: 'With over 15 years in the mobile industry, John leads PhoneHub with innovation and customer focus.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
      bio: 'Sarah ensures every customer receives exceptional service and support throughout their journey.',
    },
    {
      name: 'Michael Chen',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
      bio: 'Michael brings cutting-edge technology expertise to make phone shopping seamless and enjoyable.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About PhoneHub
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Your trusted destination for premium smartphones and exceptional service since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-500 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1964&auto=format&fit=crop"
                alt="PhoneHub Store"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                At PhoneHub, we're committed to providing our customers with the latest and greatest in mobile technology. 
                Our mission is to make the phone buying experience simple, enjoyable, and rewarding.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">✓</div>
                  <span>Curated selection of premium devices</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">✓</div>
                  <span>Expert guidance and support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white">✓</div>
                  <span>Competitive prices and exclusive deals</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              The passionate individuals behind PhoneHub's success, dedicated to bringing you the best mobile experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
