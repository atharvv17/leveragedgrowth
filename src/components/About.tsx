
import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "Proven systems used by top agencies & SaaS brands.",
    "ROI-driven strategies – we focus on sales, not just leads.",
    "Hands-free setup & training, so you don't waste time."
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our Mission
            </h2>
            <p className="text-leveraged-white/90 text-lg mb-8">
              Helping businesses scale with predictable sales systems. We believe every great product or service deserves an equally great sales process to bring it to the world.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-leveraged-white/90">
                  <span className="bg-leveraged-blue/20 p-1 rounded-full text-leveraged-blue mt-0.5">
                    <Check size={16} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-square rounded-xl overflow-hidden glass-card border border-white/10 p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-leveraged-darkBlue/40 to-leveraged-blue/10 circuit-bg"></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">Our Approach</h3>
                  <p className="text-leveraged-white/90">We don't just build systems, we deliver results</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">85%</div>
                    <p className="text-sm text-leveraged-white/80">Avg. Increase in Qualified Leads</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">40%</div>
                    <p className="text-sm text-leveraged-white/80">Avg. Boost in Conversion Rates</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">3x</div>
                    <p className="text-sm text-leveraged-white/80">ROI Within First 90 Days</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">100%</div>
                    <p className="text-sm text-leveraged-white/80">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-28 w-28 bg-leveraged-blue/20 blur-3xl rounded-full"></div>
            <div className="absolute -top-4 -left-4 h-20 w-40 bg-leveraged-blue/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
