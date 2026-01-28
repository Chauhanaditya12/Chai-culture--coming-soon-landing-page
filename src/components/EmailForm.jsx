import React from 'react';

const EmailForm = () => (
  <div 
    className="w-full max-w-md mt-6 animate-fade-in-up" 
    style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
  >
    <p className="mb-3 text-sm text-brand-brown/70">Be the first to know when we launch.</p>
    <form className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter your email address"
        required
        className="flex-grow px-5 py-3 bg-white/60 border border-brand-gold/50 rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none placeholder-brand-brown/60 transition-shadow shadow-sm"
      />
      <button
        type="submit"
        className="px-8 py-3 bg-brand-brown text-white font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
      >
        Notify Me
      </button>
    </form>
  </div>
);

export default EmailForm;
