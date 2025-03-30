
import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const SolutionsCTA: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-xl p-8 md:p-12 border border-leveraged-blue/20 relative overflow-hidden">
          {/* Background glow effect */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-leveraged-blue/10 blur-[100px] rounded-full"></div>
          
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center bg-leveraged-blue/10 p-3 rounded-full mb-6">
              <Rocket size={28} className="text-leveraged-blue" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Not sure which solution is right for you?
            </h2>
            
            <p className="text-lg text-leveraged-white/90 mb-8 max-w-2xl mx-auto">
              Book a free strategy call, and we'll create a custom roadmap for your business.
            </p>
            
            <a 
              href="https://calendly.com/leveragegrowthbiz/30min"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-leveraged-blue text-black font-medium text-lg hover:gap-3 transition-all hover:shadow-[0_0_25px_rgba(23,177,232,0.7)] animate-pulse-glow"
            >
              Book a Strategy Call
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-leveraged-white/70 text-sm">
            Mobile-Responsive Design | AI-Powered Solutions | Trusted by Industry Leaders
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
