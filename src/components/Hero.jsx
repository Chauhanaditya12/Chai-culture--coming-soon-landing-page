import React from 'react';

const Hero = () => (
  <div className="my-10 max-w-2xl">
    <h1 
      className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-brown animate-fade-in-up" 
      style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
    >
      Brew the Royal Tradition
    </h1>
    <p 
      className="mt-6 text-base md:text-lg text-brand-brown/80 max-w-xl mx-auto animate-fade-in-up" 
      style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
    >
      Experience the exquisite taste of authentic Indian chai, crafted from the secret recipes of royal kitchens. Chai Culture brings you a premium instant premix for a majestic moment in every cup.
    </p>
    <div 
      className="mt-10 animate-fade-in-up" 
      style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}
    >
      <h2 className="font-serif text-4xl md:text-5xl text-brand-gold tracking-wider">
        Launching Soon
      </h2>
    </div>
  </div>
);

export default Hero;
