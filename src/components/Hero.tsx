
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14 animate-fade-in">
          <p className="text-lg md:text-xl text-leveraged-blue font-medium mb-4 animate-fade-in-fast">
            The Sales Agency for High-Performance Businesses
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text animate-fade-in" style={{ animationDelay: '200ms' }}>
            Done-for-You Sales & Lead Gen <br className="hidden md:block" />
            <span className="text-white">Get More Clients on Autopilot</span>
          </h1>
          
          <p className="text-lg md:text-xl text-leveraged-white/90 max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
            We build and optimize your outbound/inbound sales system OR place elite sales closers in your business to increase revenue.
          </p>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-leveraged-blue text-white font-medium text-lg hover:gap-3 transition-all hover:shadow-[0_0_20px_rgba(0,163,255,0.6)] animate-pulse-glow animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            Get a Free Consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
