
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionsHero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          <p className="text-base sm:text-lg text-leveraged-blue font-medium mb-3 animate-fade-in-fast">
            Our Solutions
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Done-for-You Sales & Lead Gen Systems</span>
            <span className="block text-leveraged-white mt-2 text-xl sm:text-2xl md:text-3xl">
              Scale your business with automated, high-converting sales solutions.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-leveraged-white/90 mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            Our AI-driven & performance-based solutions help you generate leads, book calls, and close deals on autopilot.
          </p>
          
          <a 
            href="https://calendly.com/leveragegrowthbiz/30min"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-leveraged-blue text-black font-medium text-lg hover:gap-3 transition-all hover:shadow-[0_0_20px_rgba(23,177,232,0.6)] animate-pulse-glow"
            style={{ animationDelay: '400ms' }}
          >
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </a>
          
          <div className="w-full max-w-4xl mt-16 relative">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] glass-card rounded-xl overflow-hidden relative">
              <img 
                src="/lovable-uploads/b3134814-d8cd-445c-b56e-359755a54e4b.png" 
                alt="Sales Pipeline: Leads to Qualified Leads to Sales to Customers" 
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
