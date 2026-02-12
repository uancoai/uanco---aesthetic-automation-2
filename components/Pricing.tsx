import React from 'react';
import { Section } from './ui/Section';
import { Check } from 'lucide-react';
import { BookingForm } from './BookingForm';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-stone-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <span className="bg-stone-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Early Access</span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
              Early Founder Access
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Secure your clinic's automation as part of our first release group. Every account is customised to your clinic so your pre-screening and automation feel tailor-made.
            </p>
            
            <div className="space-y-8 mb-8">
              {/* Subscription Price */}
              <div className="flex items-start gap-5 justify-center lg:justify-start">
                <div className="w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex flex-col items-center justify-center flex-shrink-0 shadow-lg text-white">
                  <span className="text-[10px] text-stone-400 line-through decoration-stone-400">£99</span>
                  <span className="font-bold text-lg leading-none">£49</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-bold text-stone-900 text-lg">Monthly Subscription</p>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-stone-200 text-stone-600 px-2 py-0.5 rounded-full">Save £50</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    Lock in the founder rate of £49/month for your first three months. Standard pricing starts from £99/month after the early access period.
                  </p>
                </div>
              </div>

              {/* Setup Price */}
              <div className="flex items-start gap-5 justify-center lg:justify-start">
                <div className="w-16 h-16 rounded-full bg-white border border-stone-200 flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-[10px] text-stone-400 line-through decoration-stone-300">£150</span>
                  <span className="font-bold text-lg text-stone-900 leading-none">£0</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-bold text-stone-900 text-lg">Personalised Onboarding</p>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 rounded-full">Save £150</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    We personally build and tailor your system for your clinic. This includes setting up your treatments, adding your clinic policies, and training the assistant to match your tone of voice.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl mb-8 border border-stone-200 shadow-sm text-left">
               <p className="text-stone-800 text-sm font-medium leading-relaxed">
                 Limited early founders spots remaining. When these fill, onboarding returns to £150.
               </p>
            </div>

            <ul className="space-y-2 mb-8 inline-block text-left">
               {['Unlimited Pre-screenings', 'Compliance Dashboard', 'All Social Channels', 'Priority Support'].map(item => (
                 <li key={item} className="flex items-center gap-2 text-stone-600">
                   <div className="bg-stone-200 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-stone-700" /> 
                   </div>
                   {item}
                 </li>
               ))}
            </ul>

            <div className="text-xs text-stone-500 leading-relaxed pt-6 border-t border-stone-200">
               We require a 3-month commitment to allow for your personalised setup. After that, you can cancel anytime.
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100 relative overflow-hidden">
            <h3 className="text-2xl font-light mb-2 text-center relative z-10">Secure Your Spot</h3>
            <p className="text-center text-stone-500 mb-8 text-sm relative z-10">Enter your details to request access.</p>
            <BookingForm />
          </div>
        </div>
      </div>
    </Section>
  );
};