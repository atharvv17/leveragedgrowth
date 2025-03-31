import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
const SolutionsHero: React.FC = () => {
  return <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-24 relative md:px-[74px] overflow-hidden">
      {/* Background particle effect */}
      <div className="absolute inset-0 circuit-bg opacity-30"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 -right-40 w-96 h-96 bg-leveraged-blue/20 blur-[100px] rounded-full animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="inline-flex items-center bg-leveraged-blue/10 px-4 py-2 rounded-full mb-6">
              <Zap size={16} className="text-leveraged-blue mr-2" />
              <span className="text-sm font-medium text-leveraged-blue">Power Your Sales Pipeline</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              <span className="block gradient-text mb-3">Comprehensive Sales</span>
              <span className="block text-leveraged-white">Solutions That Convert</span>
            </h1>
            
            <p className="text-leveraged-white/80 text-lg mb-8 max-w-xl">
              Choose from our suite of specialized sales solutions designed to automate your lead generation and conversion process, helping you scale faster with less effort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/leveragegrowthbiz/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-leveraged-blue text-black font-medium hover:gap-3 transition-all hover:shadow-[0_0_20px_rgba(23,177,232,0.6)] animate-pulse-glow">
                Book a Strategy Call
                <ArrowRight size={18} />
              </a>
              
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-leveraged-blue/50 text-leveraged-blue font-medium hover:bg-leveraged-blue/10 transition-all">
                Learn More
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center items-center floating">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-leveraged-blue/20 to-blue-500/20 blur-xl rounded-full transform scale-90 opacity-70"></div>
              <img alt="Sales Pipeline Visualization" className="relative z-10 rounded-xl max-w-full border border-leveraged-blue/30 shadow-[0_0_30px_rgba(23,177,232,0.3)]" src="/lovable-uploads/7b24660b-d305-4e8b-8c5e-e65bc58bdb96.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionsHero;