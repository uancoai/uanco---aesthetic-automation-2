import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-serif-accent text-white italic">uanco</h2>
          <p className="text-sm mt-2">The standard for aesthetic safety.</p>
        </div>
        
        <div className="text-sm flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-xs text-stone-600">
          © {new Date().getFullYear()} uanco Automation Ltd.
        </div>
      </div>
    </footer>
  );
};