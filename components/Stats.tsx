import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

const stats = [
  { value: "24/7", label: "Instant response to every patient inquiry" },
  { value: "100%", label: "Of bookings pre-screened for safety" },
  { value: "10h+", label: "Average admin hours reclaimed per week" },
];

export const Stats: React.FC = () => {
  return (
    <Section className="bg-stone-900 text-stone-50 py-16 md:py-24 relative overflow-hidden">
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            className="px-4 pt-8 md:pt-0"
          >
            <div className="text-4xl md:text-6xl font-serif-accent text-white mb-4">{stat.value}</div>
            <div className="text-stone-500 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};