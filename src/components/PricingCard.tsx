import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PricingTier } from '../types';
import { motion } from 'framer-motion';

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-2xl shadow-xl p-8 ${
        tier.isPopular ? 'border-2 border-primary ring-4 ring-primary/10' : ''
      }`}
    >
      {tier.isPopular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-accent-purple to-accent-pink text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {tier.name}
        </h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-5xl font-extrabold text-primary">${tier.price}</span>
          <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
        </div>
      </div>
      
      <ul className="mt-8 space-y-4">
        {tier.features.map((feature, index) => (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="flex items-start"
          >
            <div className="flex-shrink-0">
              <div className="p-1 rounded-full bg-primary-light/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
            </div>
            <p className="ml-3 text-base text-gray-700">{feature}</p>
          </motion.li>
        ))}
      </ul>
      
      <button className={`mt-8 w-full py-4 px-6 rounded-xl text-center font-medium group flex items-center justify-center ${
        tier.isPopular
          ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
          : 'bg-primary-light/10 text-primary hover:bg-primary-light/20'
      } transition-all duration-300`}>
        Get Started
        <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
}