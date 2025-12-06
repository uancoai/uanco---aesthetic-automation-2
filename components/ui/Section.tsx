import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-32 px-4 md:px-12 relative overflow-hidden ${dark ? 'bg-stone-900 text-stone-50' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
};