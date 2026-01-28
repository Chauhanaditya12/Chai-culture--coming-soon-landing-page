import React from "react";
import Logo from './components/Logo';
import Hero from './components/Hero';
import EmailForm from './components/EmailForm';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-6 text-center overflow-hidden relative font-sans">
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.02]" 
        style={{ backgroundImage: "url(/background.svg)", backgroundSize: '150px 150px' }}
      ></div>
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <header 
          className="animate-fade-in-up" 
          style={{ animationFillMode: 'backwards' }}
        >
          <Logo />
        </header>
        <main className="flex-grow flex flex-col items-center justify-center">
          <Hero />
          <EmailForm />
        </main>
        <footer 
          className="animate-fade-in-up" 
          style={{ animationFillMode: 'backwards', animationDelay: '1s' }}
        >
          <SocialLinks />
        </footer>
      </div>
    </div>
  );
}

export default App;
