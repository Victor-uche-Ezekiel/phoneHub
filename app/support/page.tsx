'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, FileQuestion, Clock, Headphones } from 'lucide-react';

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('faq');

  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 business day delivery. International shipping times vary by location.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all unopened items in their original packaging. Defective items can be returned within 90 days of purchase. Please contact our support team to initiate a return.',
    },
    {
      question: 'Do you offer warranty on phones?',
      answer: "All phones come with their manufacturer's warranty. Additionally, we offer extended warranty options that can be purchased at checkout for extra peace of mind.",
    },
    {
      question: 'Can I trade in my old phone?',
      answer: 'Yes! We have a trade-in program where you can get credit towards your new phone purchase. The trade-in value depends on the model and condition of your old device.',
    },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Call us at +1 (234) 567-8900',
      availability: 'Available 24/7',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'support@phonehub.com',
      availability: 'Response within 24 hours',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      availability: 'Available 9AM - 9PM EST',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Our support team is here to assist you with any questions or concerns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'faq'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Frequently Asked Questions
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {activeTab === 'faq' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 text-center shadow-sm"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-full">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{method.description}</p>
                    <p className="text-sm text-gray-500">{method.availability}</p>
                  </motion.div>
                ))}
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
