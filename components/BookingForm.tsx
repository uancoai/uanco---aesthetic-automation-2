import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Loader2 } from 'lucide-react';

export const BookingForm: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Helper function to encode data for Netlify
  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "booking-contact", ...formData })
    })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: '', clinicName: '', email: '', phone: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch(error => {
        setLoading(false);
        alert("Sorry, something went wrong. Please try again or email us directly.");
        console.error(error);
      });
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-stone-400 focus:outline-none transition-all ${
    variant === 'light' 
      ? 'bg-white border-stone-200 text-stone-900 placeholder-stone-400' 
      : 'bg-stone-800 border-stone-700 text-white placeholder-stone-500'
  }`;

  if (success) {
    return (
      <div className={`text-center p-6 rounded-xl border ${variant === 'light' ? 'bg-stone-50 border-stone-200' : 'bg-stone-800 border-stone-700'}`}>
        <h4 className={`text-xl font-medium mb-2 ${variant === 'light' ? 'text-stone-900' : 'text-white'}`}>Request Received</h4>
        <p className={`text-sm ${variant === 'light' ? 'text-stone-600' : 'text-stone-300'}`}>
          Thank you for your interest. A member of the uanco team will be in touch shortly to schedule your demo.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-4 text-xs font-bold uppercase tracking-wide underline decoration-stone-400 underline-offset-4 text-stone-500 hover:text-stone-900"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto" name="booking-contact" data-netlify="true" method="POST">
      {/* Hidden input for Netlify form detection */}
      <input type="hidden" name="form-name" value="booking-contact" />
      
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
          type="text"
          name="clinicName"
          value={formData.clinicName}
          onChange={handleChange}
          placeholder="Clinic / Business Name" 
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
        {loading ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin w-4 h-4" /> Sending...</span> : 'Book a Demo'}
      </Button>
      <p className={`text-xs text-center mt-3 ${variant === 'light' ? 'text-stone-500' : 'text-stone-400'}`}>
        Limited spots available for founding clinics. No obligation.
      </p>
    </form>
  );
};