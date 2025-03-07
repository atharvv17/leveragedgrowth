
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14 animate-fade-in">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/fc3428f1-ae4a-470d-8c0b-b8294ec32f0c.png" 
              alt="LeveragedGrowth.co" 
              className="h-16 md:h-20 mb-6 animate-fade-in-fast"
            />
          </div>
          
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
        
        <div className="max-w-5xl mx-auto relative animate-fade-in-slow" style={{ animationDelay: '800ms' }}>
          <div className="aspect-[16/9] relative rounded-xl overflow-hidden glass-card border border-white/10 glow-border">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-tr from-leveraged-darkBlue/40 to-leveraged-blue/10 circuit-bg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-sm">
                  <p className="text-leveraged-blue font-semibold">Sales Dashboard Visualization</p>
                  <p className="text-leveraged-white/70 text-sm mt-2">Your sales funnel on autopilot</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 h-20 w-64 bg-leveraged-blue/20 blur-3xl rounded-full"></div>
          <div className="absolute -top-4 -left-4 h-20 w-40 bg-leveraged-blue/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
