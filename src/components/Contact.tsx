
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text glow-text">
            Let's Build Your Sales Machine
          </h2>
          <p className="text-2xl font-medium text-leveraged-white mb-8">
            Schedule a Free Strategy Call Today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="glass-card rounded-xl p-8 border border-white/10 hover:border-leveraged-blue/30 transition-all h-full">
              <div className="calendly-inline-widget" data-url="https://calendly.com/leveragegrowthbiz/30min" style={{ minWidth: "100%", height: "600px" }}></div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="glass-card rounded-xl p-8 border border-white/10">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
                What Happens Next?
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-leveraged-blue/20 flex items-center justify-center text-leveraged-blue font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Free Strategy Session
                    </h4>
                    <p className="text-leveraged-white/80">
                      We'll discuss your business, goals, and how our services can help you scale.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-leveraged-blue/20 flex items-center justify-center text-leveraged-blue font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Custom Solution Design
                    </h4>
                    <p className="text-leveraged-white/80">
                      We'll create a tailored plan specific to your business needs and objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-leveraged-blue/20 flex items-center justify-center text-leveraged-blue font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">
                      Implementation & Results
                    </h4>
                    <p className="text-leveraged-white/80">
                      Our team executes the plan with regular optimization and reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
