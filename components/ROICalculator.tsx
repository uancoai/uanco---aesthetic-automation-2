import React, { useState, useMemo } from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Clock, Wallet, Info } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  const [avgPrice, setAvgPrice] = useState(250);
  const [monthlyEnquiries, setMonthlyEnquiries] = useState(120);
  const [adminTimePerLead, setAdminTimePerLead] = useState(15);
  const [monthlyUnsuitable, setMonthlyUnsuitable] = useState(8);

  const calculations = useMemo(() => {
    // 1. Time Saved Calculation
    const monthlyMinutesSaved = monthlyEnquiries * adminTimePerLead;
    const monthlyHoursSaved = Math.round((monthlyMinutesSaved / 60) * 10) / 10;
    
    // 2. Money Saved (Time Value)
    // "Calculated by the hour based on their average treatment"
    // Logic: Hours saved * Hourly Rate (Avg Price)
    const timeValueSaved = monthlyHoursSaved * avgPrice;

    // 3. Slot Protection Value (Opportunity Cost)
    // Revenue saved by not having an unsuitable client fill a slot
    const slotProtectionValue = monthlyUnsuitable * avgPrice;

    // Total Value
    const totalMonthlyValue = timeValueSaved + slotProtectionValue;

    return {
      totalMonthlyValue,
      monthlyHoursSaved,
    };
  }, [avgPrice, monthlyEnquiries, adminTimePerLead, monthlyUnsuitable]);

  const LabelWithTooltip = ({ label, tooltip }: { label: string, tooltip: string }) => (
    <div className="flex items-center gap-2 mb-4 group relative w-fit">
      <label className="text-sm font-medium text-stone-600">{label}</label>
      <div className="relative flex items-center justify-center">
        <Info className="w-3.5 h-3.5 text-stone-300 hover:text-stone-500 transition-colors cursor-help" />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-stone-900 text-white text-[11px] leading-relaxed rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-20 pointer-events-none transform translate-y-1 group-hover:translate-y-0 text-center">
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900"></div>
        </div>
      </div>
    </div>
  );

  const SliderInput = ({ label, tooltip, value, setValue, min, max, unit = "", prefix = "" }: any) => (
    <div className="mb-8">
      <div className="flex justify-between items-end">
        <LabelWithTooltip label={label} tooltip={tooltip} />
        <span className="text-xl font-light text-stone-900 font-serif-accent mb-4">
          {prefix}{value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-900 hover:accent-stone-700 transition-all"
      />
    </div>
  );

  return (
    <Section className="bg-white border-t border-stone-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-stone-900 mb-4"
          >
            Your Monthly ROI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-500"
          >
            Calculate the value of your time reclaimed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Inputs */}
          <div className="lg:col-span-7 bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100">
            <h3 className="text-lg font-medium text-stone-900 mb-8">Calculator Inputs (Monthly)</h3>
            
            <SliderInput 
              label="Average Hourly Revenue"
              tooltip="Your average revenue per treatment/hour. We use this to calculate the monetary value of the admin time you save."
              value={avgPrice} 
              setValue={setAvgPrice} 
              min={50} 
              max={1000} 
              prefix="£" 
            />
            
            <SliderInput 
              label="Monthly Client Enquiries"
              tooltip="Total number of DMs, messages, and booking requests you receive across all channels per month."
              value={monthlyEnquiries} 
              setValue={setMonthlyEnquiries} 
              min={10} 
              max={500} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SliderInput 
                label="Admin Mins per Client"
                tooltip="Time spent manually replying, screening medical history, and booking a single client."
                value={adminTimePerLead} 
                setValue={setAdminTimePerLead} 
                min={1} 
                max={60}
                unit="m"
              />
              <SliderInput 
                label="Unsuitable Clients / Month"
                tooltip="Number of clients per month who enquire but shouldn't book (e.g. pregnant, medical issues)."
                value={monthlyUnsuitable} 
                setValue={setMonthlyUnsuitable} 
                min={0} 
                max={50} 
              />
            </div>

            <div className="flex items-start gap-3 mt-6 p-4 bg-white rounded-xl border border-stone-100">
              <Info className="w-5 h-5 text-stone-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-xs text-stone-500 leading-relaxed">
                  The value calculation assumes that for every hour of admin saved, you could be performing a treatment at your average hourly rate.
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div 
              className="bg-stone-900 text-stone-50 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-3xl"></div>
              
              <div className="relative z-10">
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2 block">Total Monthly Value</span>
                <div className="text-5xl md:text-6xl font-serif-accent text-white mb-2">
                  £{calculations.totalMonthlyValue.toLocaleString()}
                </div>
                <p className="text-stone-400 text-sm mb-8 border-b border-stone-800 pb-8">
                  Combined value of admin time saved + appointment slots protected.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{calculations.monthlyHoursSaved} Hours Saved</p>
                      <p className="text-xs text-stone-500">Per month (Admin Automation)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-stone-100 p-6 rounded-3xl border border-stone-200"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
               <div className="flex items-start gap-4">
                 <div className="p-2 bg-white rounded-full shadow-sm">
                   <Wallet className="w-5 h-5 text-stone-900" />
                 </div>
                 <div>
                   <h4 className="font-serif-accent text-lg text-stone-900 italic mb-2">The "Admin Tax"</h4>
                   <p className="text-sm text-stone-600 leading-relaxed">
                     You are currently spending <strong>{calculations.monthlyHoursSaved} hours</strong> a month on unpaid admin. That's £{(calculations.monthlyHoursSaved * avgPrice).toLocaleString()} of billable time lost.
                   </p>
                 </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
};