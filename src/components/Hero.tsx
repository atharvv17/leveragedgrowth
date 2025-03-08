
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex items-center justify-center h-screen w-full pt-0 pb-0 px-6 md:px-12 lg:px-24 relative max-h-[750px]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <p className="text-xl md:text-2xl text-leveraged-blue font-medium mb-5 animate-fade-in-fast">
            The Sales Agency for High-Performance Businesses
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-7 leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
            <span className="gradient-text">Done-for-You Sales & Lead Gen</span> <br className="hidden md:block" />
            <span className="text-leveraged-white">Get More Clients on Autopilot</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-leveraged-white/90 max-w-4xl mb-10 animate-fade-in" style={{ animationDelay: '400ms' }}>
            We build and optimize your outbound/inbound sales system OR place elite sales closers in your business to increase revenue.
          </p>
          
          <a 
            href="https://calendly.com/leveragegrowthbiz/30min"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-leveraged-blue text-black font-medium text-xl hover:gap-3 transition-all hover:shadow-[0_0_20px_rgba(23,177,232,0.6)] animate-pulse-glow animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            Get a Free Consultation
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
