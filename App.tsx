import React from 'react';
import { BookingForm } from './components/BookingForm';
import { PainPoints } from './components/PainPoints';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { Pricing } from './components/Pricing';
import { Comparison } from './components/Comparison';
import { ROICalculator } from './components/ROICalculator';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Section } from './components/ui/Section';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-stone-200 selection:text-stone-900 relative">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-white/95 to-stone-50/95 backdrop-blur-2xl border-b border-stone-300 shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif-accent italic font-semibold text-stone-900 tracking-tight">uanco</span>
            <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2"></span>
          </div>
          <a href="#pricing" className="bg-stone-900 text-white px-5 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get Access
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 md:pt-52 md:pb-32 px-4 md:px-6 overflow-hidden">
        {/* Abstract Background Decoration - Neutral */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-40 -right-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-stone-100 rounded-full blur-3xl -z-10 opacity-60"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -bottom-24 -left-24 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-stone-200 rounded-full blur-3xl -z-10 opacity-30"
        />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left pt-6 md:pt-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-stone-900 leading-[1.1] tracking-tight">
              Goodbye admin. <br />
              <span className="font-serif-accent italic text-stone-400">Hello effortless compliance.</span>
            </h1>
            <p className="text-base md:text-xl text-stone-600 leading-relaxed max-w-lg mx-auto lg:mx-0 px-2 md:px-0">
              Automate your client pre-screening and stop losing bookings. The intelligent assistant designed to protect aesthetic practitioners and their clients with uncompromising safety standards.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-stone-100 max-w-md mx-auto lg:ml-auto w-full relative z-10">
            <h3 className="text-xl font-medium text-center mb-6">Book a Demo</h3>
            <BookingForm />
          </div>
        </div>
      </div>

      <PainPoints />
      <ProductShowcase />
      <Stats />
      <Features />
      <HowItWorks />
      <Comparison />
      <ROICalculator />
      <Pricing />
      <Faq />
      
      {/* Final CTA */}
      <Section dark className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-6">Reclaim your peace of mind.</h2>
          <p className="text-stone-400 mb-10 text-base md:text-lg">
            Stop the endless cycle of DMs. Let uanco handle the pre-screening and questions so you can focus purely on your patients.
          </p>
          <div className="bg-stone-800 p-6 md:p-8 rounded-3xl border border-stone-700">
             <BookingForm variant="dark" />
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;