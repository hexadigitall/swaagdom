'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Users, ShoppingBag, Star, ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #F59E0B 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Hero Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-accent-100 dark:bg-accent-900 rounded-full text-accent-700 dark:text-accent-300">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Style, Swaggadishly.</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-neutral-900 dark:text-white">Meet</span>
              <span className="block bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 bg-clip-text text-transparent">
                SWAAGDOM
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold text-accent-600 dark:text-accent-400">Discover global style, curated with intelligence and worn Swaggadishly.</span>
              {" "}From Lagos to London, Swaagdom brings African-inspired perspective to modern fashion discovery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="/style"
                className="group px-8 py-4 bg-accent-600 text-white rounded-lg font-semibold text-lg hover:bg-accent-700 transition-all duration-300 transform hover:scale-105 focus-ring flex items-center"
              >
                Level Up Your Fit 🔥
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="px-8 py-4 border-2 border-accent-600 text-accent-600 dark:text-accent-400 rounded-lg font-semibold text-lg hover:bg-accent-50 dark:hover:bg-accent-900 transition-colors focus-ring">
                See The Magic ✨
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Why SWAAGDOM Is Different 💎
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Not just another fashion app. This is where culture meets closet, where AI gets your vibe, and where your style evolution begins. No cap. 🚀
            </p>
          </motion.div>

          <motion.div
            className="mb-16 max-w-3xl mx-auto rounded-2xl border border-accent-100 dark:border-accent-900 bg-accent-50/60 dark:bg-accent-900/20 p-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">About Swaagdom</h3>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Swaagdom is an AI-powered fashion platform celebrating global style diversity through an African-inspired creative lens—premium, inclusive, and made for confident self-expression.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI That Gets Your Vibe",
                description: "No more boring recommendations. Our AI speaks your style language—from streetwear to haute couture, we understand your drip.",
                stats: "10K+ daily style matches 🔥"
              },
              {
                icon: TrendingUp, 
                title: "Global Fashion Intel",
                description: "Stay ahead of the curve. Get the latest from fashion capitals worldwide—Tokyo, Paris, New York, Lagos, London. Your trends, delivered fresh.",
                stats: "500+ weekly trend drops 📈"
              },
              {
                icon: Users,
                title: "Shop Without Limits",
                description: "Shop from vetted ethical brands that prioritize sustainability and fair trade practices across all cultures.",
                stats: "200+ ethical partners"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-accent-100 dark:bg-accent-900 rounded-xl">
                    <Icon className="h-8 w-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm font-medium text-accent-600">
                    {feature.stats}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
              Trusted by Fashion Lovers Worldwide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '50K+', label: 'Active Users' },
                { number: '1M+', label: 'Outfit Recommendations' },
                { number: '200+', label: 'Partner Brands' },
                { number: '4.9★', label: 'User Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-600 via-accent-500 to-accent-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Discover Your Beautiful Style?
            </h2>
            <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto">
              Join thousands of fashion enthusiasts celebrating diversity through AI-powered styling.
            </p>
            <Link
              href="/style"
              className="inline-flex items-center px-8 py-4 bg-white text-accent-600 rounded-lg font-semibold text-lg hover:bg-accent-50 transition-colors focus-ring"
            >
              Start with SWAAGDOM
              <Sparkles className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
