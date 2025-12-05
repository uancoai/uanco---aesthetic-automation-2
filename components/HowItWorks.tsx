import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { MessageSquare, Cpu, CalendarCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Client Initiates",
    text: "A client messages you on IG, WhatsApp or scans a QR code."
  },
  {
    step: "02",
    title: "AI Engagement",
    text: "uanco instantly answers questions on pricing, policies and treatments."
  },
  {
    step: "03",
    title: "Safety Pre-Screening",
    text: "The system runs a mandatory medical pre-screen to filter unsuitable clients."
  },
  {
    step: "04",
    title: "Booking or Review",
    text: "Safe clients are sent to booking. Complex cases are flagged for your review."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section className="bg-stone-900 text-stone-50 relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-light mb-6"
        >
          How it works
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-stone-400 max-w-2xl mx-auto"
        >
          A seamless flow from the first message to the treatment chair.
        </motion.p>
      </div>

      {/* Workflow Diagram Illustration */}
      <div className="max-w-5xl mx-auto mb-24 hidden md:block relative z-10">
        <div className="flex items-center justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-stone-800 -z-0"></div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-stone-800 p-6 rounded-2xl border border-stone-700 z-10 w-64 text-center"
            >
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-stone-900">
                  <MessageSquare className="w-5 h-5" />
               </div>
               <h4 className="font-medium mb-1 text-stone-200">1. Client Message</h4>
               <p className="text-xs text-stone-400">"How much is lip filler?"</p>
            </motion.div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="z-10"
            >
               <ArrowRight className="w-6 h-6 text-stone-600" />
            </motion.div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="bg-stone-100 p-6 rounded-2xl border border-white z-10 w-64 text-center shadow-lg relative"
            >
               <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <Cpu className="w-5 h-5" />
               </div>
               <h4 className="font-medium text-stone-900 mb-1">2. AI Processing</h4>
               <p className="text-xs text-stone-500">Answers + Pre-Screening</p>
            </motion.div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.6 }}
               className="z-10"
            >
               <ArrowRight className="w-6 h-6 text-stone-600" />
            </motion.div>

            <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.8 }}
               className="bg-stone-800 p-6 rounded-2xl border border-stone-700 z-10 w-64 text-center"
            >
               <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-stone-700">
                  <CalendarCheck className="w-5 h-5 text-stone-300" />
               </div>
               <h4 className="font-medium mb-1 text-stone-200">3. Practitioner</h4>
               <p className="text-xs text-stone-400">Receives Safe Client</p>
            </motion.div>
        </div>
      </div>

      <div className="relative">
        {/* Connecting Line (Mobile/Tablet vertical) */}
        <div className="md:hidden absolute top-0 left-8 h-full w-px bg-stone-800"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {steps.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className="group pl-16 md:pl-0 relative"
            >
              {/* Mobile Step Circle */}
              <div className="md:hidden absolute left-3 top-0 w-10 h-10 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-sm font-serif-accent italic text-white z-10">
                {item.step}
              </div>

              <div className="hidden md:flex w-24 h-24 rounded-full bg-stone-800 border border-stone-700 items-center justify-center text-2xl font-serif-accent italic text-white mb-8 mx-auto group-hover:bg-white group-hover:text-stone-900 transition-all duration-300 relative">
                {item.step}
              </div>
              <h3 className="text-xl font-medium mb-3 text-stone-100">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};