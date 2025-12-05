import React from 'react';
import { Section } from './ui/Section';
import { X, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Comparison: React.FC = () => {
  return (
    <Section className="bg-stone-50">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-light mb-4"
        >
          The uanco Effect
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-stone-500"
        >
          Recover your time and protect your business.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Without uanco */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-8 md:p-12 rounded-3xl bg-white border border-stone-200"
        >
          <h3 className="text-lg font-bold text-stone-400 mb-8 uppercase tracking-widest">Without uanco</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-stone-500">
              <X className="w-5 h-5 text-red-300 mt-0.5" />
              <span>Drowning in DMs at 10 PM</span>
            </li>
            <li className="flex items-start gap-3 text-stone-500">
              <X className="w-5 h-5 text-red-300 mt-0.5" />
              <span>Clients arriving with contraindications</span>
            </li>
            <li className="flex items-start gap-3 text-stone-500">
              <X className="w-5 h-5 text-red-300 mt-0.5" />
              <span>Lost revenue from last-minute cancellations</span>
            </li>
            <li className="flex items-start gap-3 text-stone-500">
              <X className="w-5 h-5 text-red-300 mt-0.5" />
              <span>Manual compliance checks often missed</span>
            </li>
          </ul>
        </motion.div>

        {/* With uanco */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="p-8 md:p-12 rounded-3xl bg-white border border-stone-200 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-stone-100 rounded-bl-full -mr-16 -mt-16 z-0"></div>
          <h3 className="text-lg font-bold text-stone-900 mb-8 uppercase tracking-widest relative z-10">With uanco</h3>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start gap-3 text-stone-800">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Admin workload drastically reduced</span>
            </li>
            <li className="flex items-start gap-3 text-stone-800">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Unsuitable clients filtered pre-booking</span>
            </li>
            <li className="flex items-start gap-3 text-stone-800">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Automated FAQ responses 24/7</span>
            </li>
            <li className="flex items-start gap-3 text-stone-800">
              <Check className="w-5 h-5 text-green-600 mt-0.5" />
              <span>Full compliance audit trail per client</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};