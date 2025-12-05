import React from 'react';

export const MobileChatMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-stone-900 dark:border-stone-900 bg-stone-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      <div className="h-[32px] w-[3px] bg-stone-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-stone-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-stone-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-stone-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      
      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-[#FAF9F6] flex flex-col relative">
        {/* Dynamic Island Area */}
        <div className="absolute top-0 w-full h-8 bg-white/50 backdrop-blur-md z-20 border-b border-stone-100/50"></div>

        {/* Chat Header */}
        <div className="pt-12 pb-4 px-4 bg-white border-b border-stone-100 flex items-center gap-3 shadow-sm z-10">
          <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center">
            <span className="text-white text-[10px] font-serif-accent italic">u</span>
          </div>
          <div>
            <p className="text-xs font-bold text-stone-900">uanco Assistant</p>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] text-stone-400">Replies instantly</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10"></div>
            
            {/* Message 1 (User) */}
            <div className="flex justify-end">
                <div className="bg-stone-800 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-xs leading-relaxed shadow-sm">
                    Does lip filler hurt?
                </div>
            </div>

            {/* Message 2 (Bot) */}
            <div className="flex justify-start">
                <div className="bg-white text-stone-600 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] text-xs leading-relaxed shadow-sm border border-stone-100">
                    We prioritise your comfort. We apply a strong numbing cream beforehand, so most clients only feel a slight pinch or pressure.
                </div>
            </div>

            {/* Message 3 (User) */}
            <div className="flex justify-end">
                <div className="bg-stone-800 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-xs leading-relaxed shadow-sm">
                    How long does the swelling last?
                </div>
            </div>

            {/* Message 4 (Bot) */}
            <div className="flex justify-start">
                <div className="bg-white text-stone-600 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] text-xs leading-relaxed shadow-sm border border-stone-100">
                    Swelling is typically mild and settles within 24-48 hours. We recommend booking at least 2 weeks before any major events just to be safe.
                </div>
            </div>
            
            {/* Message 5 (User) */}
            <div className="flex justify-end opacity-60">
                <div className="bg-stone-800 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-xs leading-relaxed shadow-sm">
                    That's great. How much is 1ml?
                </div>
            </div>
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-stone-100 mb-4">
            <div className="h-10 bg-stone-100 rounded-full w-full flex items-center px-4 text-xs text-stone-400">
                Type a message...
            </div>
        </div>
      </div>
    </div>
  );
};