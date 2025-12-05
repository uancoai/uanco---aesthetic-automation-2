import React from 'react';
import { Section } from './ui/Section';
import { DashboardMockup } from './visuals/DashboardMockup';
import { MobileChatMockup } from './visuals/MobileChatMockup';
import { ClientCardMockup } from './visuals/ClientCardMockup';
import { motion } from 'framer-motion';

export const ProductShowcase: React.FC = () => {
  return (
    <Section className="bg-white overflow-visible pt-10 pb-32">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-4 block">The Platform</span>
        <h2 className="text-3xl md:text-5xl font-light text-stone-900 mb-6">
          Powerful compliance. <br/>
          <span className="font-serif-accent italic text-stone-500">Elegant design.</span>
        </h2>
        <p className="text-stone-600 text-lg">
          See how uanco transforms chaotic DMs into a streamlined, professional workflow.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Background blobs for depth - Neutral */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-stone-50 rounded-full blur-3xl -z-10 opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-stone-100 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
          {/* Left Col: Dashboard & Card */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative">
                    <DashboardMockup />
                </div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start ml-0 md:ml-12">
               <div className="max-w-xs pt-12 text-center md:text-left">
                  <h3 className="text-xl font-medium mb-3">Client Profiles</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Instantly see who is safe for you to treat. High-risk clients are flagged automatically, protecting your reputation.
                  </p>
               </div>
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-auto"
               >
                   <ClientCardMockup />
               </motion.div>
            </div>
          </div>

          {/* Right Col: Mobile Chat */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end mt-12 lg:mt-0">
             <div className="mb-8 text-center lg:text-right max-w-xs">
                <h3 className="text-xl font-medium mb-3">Natural Conversations</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Your AI assistant handles pricing queries and medical pre-screening in a tone that feels human, not robotic.
                </p>
             </div>
             <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             >
                <MobileChatMockup />
             </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
};