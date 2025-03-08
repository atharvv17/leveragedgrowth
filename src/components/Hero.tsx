
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex items-center justify-center h-screen max-h-[700px] w-full pt-0 pb-0 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <p className="text-lg md:text-xl text-leveraged-blue font-medium mb-3 animate-fade-in-fast">
            The Sales Agency for High-Performance Businesses
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
            <span className="gradient-text">Done-for-You Sales & Lead Gen</span> <br className="hidden md:block" />
            <span className="text-leveraged-white">Get More Clients on Autopilot</span>
          </h1>
          
          <p className="text-lg md:text-xl text-leveraged-white/90 max-w-3xl mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
            We build and optimize your outbound/inbound sales system OR place elite sales closers in your business to increase revenue.
          </p>
          
          <a 
            href="https://calendly.com/leveragegrowthbiz/30min"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-leveraged-blue text-black font-medium text-lg hover:gap-3 transition-all hover:shadow-[0_0_20px_rgba(23,177,232,0.6)] animate-pulse-glow animate-fade-in"
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
