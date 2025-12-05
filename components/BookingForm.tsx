import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Loader2 } from 'lucide-react';

export const BookingForm: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Thank you for your interest! A member of uanco will be in touch shortly.");
      setFormData({ name: '', email: '', phone: '' });
    }, 1500);
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-stone-400 focus:outline-none transition-all ${
    variant === 'light' 
      ? 'bg-white border-stone-200 text-stone-900 placeholder-stone-400' 
      : 'bg-stone-800 border-stone-700 text-white placeholder-stone-500'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <input 
          required 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name" 
          className={inputClasses}
        />
      </div>
      <div>
        <input 
          required 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address" 
          className={inputClasses}
        />
      </div>
      <div>
        <input 
          required 
          type="tel" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number" 
          className={inputClasses}
        />
      </div>
      <Button 
        type="submit" 
        fullWidth 
        variant={variant === 'light' ? 'primary' : 'secondary'}
        disabled={loading}
      >
        {loading ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin w-4 h-4" /> Processing</span> : 'Book a Demo'}
      </Button>
      <p className={`text-xs text-center mt-3 ${variant === 'light' ? 'text-stone-500' : 'text-stone-400'}`}>
        Limited spots available for founding clinics. No obligation.
      </p>
    </form>
  );
};