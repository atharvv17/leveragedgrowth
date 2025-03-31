
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="flex items-center justify-center min-h-[650px] sm:min-h-[750px] w-full pt-32 sm:pt-40 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background particle effect */}
      <div className="absolute inset-0 circuit-bg opacity-30"></div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-leveraged-blue/20 blur-[100px] rounded-full animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center z-10">
        <div className="flex flex-col items-center text-center max-w-xs sm:max-w-sm md:max-w-3xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-leveraged-blue font-medium mb-3 sm:mb-4 animate-fade-in-fast">
            The Sales Agency for High-Performance Businesses
          </p>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" style={{ textShadow: '0 0 20px rgba(23, 177, 232, 0.3)' }}>
            <div className="gradient-text text-balance mb-2">Done-for-You Sales & Lead Gen</div>
            <div className="text-leveraged-white text-balance">Get More Clients on Autopilot</div>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl text-leveraged-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            We build and optimize your outbound/inbound sales system OR place elite sales closers in your business to increase revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a 
              href="https://calendly.com/leveragegrowthbiz/30min"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-leveraged-blue text-black font-medium text-base sm:text-lg hover:gap-3 transition-all hover:shadow-[0_0_25px_rgba(23,177,232,0.6)] animate-pulse-glow"
            >
              Get a Free Consultation
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-transparent border border-leveraged-blue/50 text-leveraged-blue font-medium text-base sm:text-lg hover:bg-leveraged-blue/10 transition-all"
            >
              Explore Solutions
              <ArrowRight size={18} />
            </a>
          </div>
          
          {/* Subtle bounce arrow indicating scroll */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
            <ArrowRight size={24} className="text-leveraged-blue/70 transform rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
