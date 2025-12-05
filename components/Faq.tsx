import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Do I need to be techy to use this?",
    answer: "Not at all. We handle the full setup within 24 hours. Once installed it runs automatically in the background."
  },
  {
    question: "Does it replace my booking system?",
    answer: "No. uanco sits *before* your booking system. It acts as a gatekeeper ensuring only safe suitable clients make it to your booking calendar."
  },
  {
    question: "Will my clients know it's AI?",
    answer: "It feels like a natural conversation. While we believe in transparency the tone is warm professional and indistinguishable from a high-end concierge."
  },
  {
    question: "Is it compliant with UK regulations?",
    answer: "Yes. uanco helps you meet the increasing documentation requirements from insurers and regulators by creating a digital audit trail for every interaction."
  },
  {
    question: "Can I cancel anytime?",
    answer: "There is a 3-month minimum commitment to allow for your personalised setup. After that, you can cancel anytime."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-stone-100 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg text-stone-800 font-medium">{faq.question}</span>
                <span className="text-stone-400">
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-stone-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};