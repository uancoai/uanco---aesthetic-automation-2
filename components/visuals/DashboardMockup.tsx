import React from 'react';
import { MoreHorizontal, ArrowUpRight, CheckCircle2, AlertCircle, XCircle, Sparkles } from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-stone-100 font-sans w-full max-w-5xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-serif-accent font-medium text-stone-900">Clinic Overview</h3>
          <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Today's Performance</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-stone-50 overflow-hidden border border-stone-100 flex items-center justify-center">
             <span className="text-xs font-bold text-stone-600">DR</span>
          </div>
          <button className="p-2 hover:bg-stone-50 rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5 text-stone-400" />
          </button>
        </div>
      </div>

      {/* Top Widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "New Pre-Screens", value: "24", trend: "+12%", active: true },
          { label: "Safe to Book", value: "18", trend: "75% Rate", active: false },
          { label: "Manual Review", value: "3", trend: "Action Needed", active: false },
          { label: "Admin Time Saved", value: "4.5h", trend: "This Week", active: false }
        ].map((stat, idx) => (
          <div 
            key={idx} 
            className={`p-5 rounded-2xl border transition-all duration-300 ${
              stat.active 
                ? 'bg-stone-900 border-stone-900 text-white shadow-lg' 
                : 'bg-white border-stone-100 text-stone-900 hover:border-stone-200'
            }`}
          >
            <p className={`text-[10px] uppercase tracking-wider font-bold mb-3 ${stat.active ? 'text-stone-400' : 'text-stone-400'}`}>
              {stat.label}
            </p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-light tracking-tight">{stat.value}</span>
              <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${
                stat.active 
                  ? 'bg-stone-800 text-stone-300' 
                  : 'bg-stone-50 text-stone-500'
              }`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Client Log */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-medium text-stone-900">Recent Activity</h4>
            <button className="text-xs font-medium text-stone-400 hover:text-stone-900 transition-colors">View All</button>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "Sarah Jenkins", treatment: "Lip Augmentation", time: "10m", status: "Safe", statusStyle: "bg-stone-900 text-white border-stone-900" },
              { name: "Emma Thompson", treatment: "Botox (3 Areas)", time: "25m", status: "Review", statusStyle: "bg-white text-stone-900 border-stone-200", flag: "Antibiotics" },
              { name: "Jessica Li", treatment: "Profhilo", time: "1h", status: "Safe", statusStyle: "bg-stone-900 text-white border-stone-900" },
              { name: "Chloe Miller", treatment: "Tear Trough", time: "2h", status: "Unsuitable", statusStyle: "bg-stone-100 text-stone-400 border-stone-100", flag: "Pregnancy" },
            ].map((client, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-stone-50 rounded-xl transition-all duration-200 group cursor-pointer border border-transparent hover:border-stone-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 text-xs font-bold tracking-wider">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900 group-hover:text-stone-600 transition-colors">{client.name}</p>
                    <p className="text-xs text-stone-400">{client.treatment}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${client.statusStyle} shadow-sm`}>
                    {client.status}
                  </span>
                  {client.flag && (
                    <span className="text-[10px] text-stone-400 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {client.flag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Panel - Changed to Monochromatic */}
        <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sparkles className="w-32 h-32 text-stone-900" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-stone-900 rounded-md">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-stone-900">AI Insight</span>
            </div>
            
            <div className="mb-6">
              <p className="text-sm font-medium leading-relaxed text-stone-800">
                "Russian Lips" inquiries are trending up <span className="underline decoration-stone-300 decoration-2 underline-offset-2">40% this week</span>.
              </p>
              <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                Recommendation: Post your best before/after results tomorrow at 6pm for maximum engagement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-stone-100 relative z-10">
            <div className="flex justify-between items-center mb-3">
               <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Quick Stats</span>
               <ArrowUpRight className="w-3 h-3 text-stone-300" />
            </div>
            <div className="flex gap-4">
                <div>
                   <p className="text-xl font-light text-stone-900">142</p>
                   <p className="text-[10px] text-stone-400">Answers</p>
                </div>
                <div className="w-px h-8 bg-stone-100"></div>
                <div>
                   <p className="text-xl font-light text-stone-900">8</p>
                   <p className="text-[10px] text-stone-400">Bookings</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};