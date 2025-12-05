import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, BarChart3, CalendarClock, UserCheck, Smartphone } from 'lucide-react';
import { Section } from './ui/Section';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Compliance First",
    description: "Automated pre-screening ensures every client is safe to treat before they even book."
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Smart Filtering",
    description: "Filters out unsuitable clients automatically."
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Instant Answers",
    description: "AI answers pricing, policy and treatment FAQs instantly 24/7."
  },
  {
    icon: <CalendarClock className="w-6 h-6" />,
    title: "Reduce Cancellations",
    description: "Drastically cut wasted slots by ensuring suitability upfront."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Omnichannel",
    description: "Works seamlessly across WhatsApp, Instagram DMs, Web and QR codes."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Clinic Insights",
    description: "Gain clarity on your client flow and potential risks with a simple dashboard."
  }
];

export const Features: React.FC = () => {
  return (
    <Section className="bg-stone-50/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-light mb-6 text-stone-900"
        >
          Complete clinic automation.
          <br />
          <span className="font-serif-accent italic text-stone-500">Without the robotic feel.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-stone-600 leading-relaxed"
        >
          uanco handles the critical pre-appointment workload so you can focus entirely on your art.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 group text-center md:text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300 mx-auto md:mx-0">
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium mb-3 text-stone-900">{feature.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};