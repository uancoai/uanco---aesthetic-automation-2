import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const painPoints = [
  "My DMs are out of control.",
  "I’m losing bookings because I can’t answer fast enough.",
  "Clients turn up with contraindications",
  "I'm overwhelmed with admin and it takes away the joy of my job"
];

export const PainPoints: React.FC = () => {
  return (
    <Section className="bg-stone-100 border-y border-stone-200/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">The Reality</span>
          <h2 className="text-3xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
            You became a practitioner to treat clients not to be a <span className="font-serif-accent italic text-stone-500">24/7 receptionist.</span>
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            The administrative burden for aesthetics practitioners is overwhelming. Between social media DMs, WhatsApps and compliance checks the "art" gets lost in the noise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {painPoints.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4"
            >
              <Quote className="w-5 h-5 text-stone-300 flex-shrink-0 mt-1" />
              <p className="text-stone-800 font-medium italic">"{point}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};