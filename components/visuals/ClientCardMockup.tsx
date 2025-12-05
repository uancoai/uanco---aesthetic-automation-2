import React from 'react';
import { User, Calendar, AlertTriangle, FileText, Check } from 'lucide-react';

export const ClientCardMockup: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-100 p-6 w-full max-w-sm relative">
       {/* Decorative backdrop elements */}
       <div className="absolute -top-3 -right-3 w-20 h-20 bg-rose-50 rounded-full blur-xl opacity-50"></div>

       <div className="flex items-start justify-between mb-6 relative z-10">
         <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center">
                <User className="w-5 h-5 text-stone-400" />
            </div>
            <div>
                <h3 className="font-serif-accent text-lg font-medium text-stone-900">Emily Davis</h3>
                <p className="text-xs text-stone-500">emily.davis@example.com</p>
            </div>
         </div>
         <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wider rounded-full border border-amber-100">
            Review
         </span>
       </div>

       <div className="space-y-4 relative z-10">
          <div className="p-3 bg-stone-50 rounded-xl">
             <p className="text-[10px] uppercase text-stone-400 font-bold tracking-wider mb-2">Requested Treatment</p>
             <div className="flex items-center gap-2 text-stone-800 text-sm font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-900"></div>
                Lip Dissolve & Refill
             </div>
          </div>

          <div className="space-y-3">
             <p className="text-[10px] uppercase text-stone-400 font-bold tracking-wider">Pre-Screen Results</p>
             
             <div className="flex justify-between items-center text-sm pb-2 border-b border-stone-100">
                <span className="text-stone-600">Over 18?</span>
                <span className="flex items-center gap-1 text-emerald-600 font-medium text-xs"><Check className="w-3 h-3" /> Yes</span>
             </div>
             <div className="flex justify-between items-center text-sm pb-2 border-b border-stone-100">
                <span className="text-stone-600">Pregnancy/Nursing?</span>
                <span className="flex items-center gap-1 text-emerald-600 font-medium text-xs"><Check className="w-3 h-3" /> No</span>
             </div>
             <div className="flex justify-between items-center text-sm pb-2 border-b border-stone-100 bg-amber-50/50 -mx-2 px-2 rounded-lg">
                <span className="text-stone-800 font-medium">Previous Filler?</span>
                <span className="flex items-center gap-1 text-amber-600 font-medium text-xs"><AlertTriangle className="w-3 h-3" /> Yes (Migration)</span>
             </div>
          </div>

          <div className="pt-2">
            <button className="w-full py-2.5 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors shadow-lg">
                Approve for Booking
            </button>
            <button className="w-full py-2.5 mt-2 text-stone-500 text-xs hover:text-stone-900 transition-colors">
                Request Photos
            </button>
          </div>
       </div>
    </div>
  );
};
