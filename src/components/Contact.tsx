
import React, { useEffect } from 'react';
import { ArrowRight, Calendar, Mail } from 'lucide-react';

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
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="https://calendly.com/leveragegrowthbiz/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-leveraged-blue text-white px-6 py-3 rounded-lg hover:bg-leveraged-blue/80 transition-all duration-300 font-medium"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </a>
            
            <a 
              href="mailto:leveragegrowthbiz@gmail.com" 
              className="flex items-center gap-2 bg-transparent border border-leveraged-blue/70 text-leveraged-blue px-6 py-3 rounded-lg hover:bg-leveraged-blue/10 transition-all duration-300 font-medium"
            >
              <Mail className="w-5 h-5" />
              leveragegrowthbiz@gmail.com
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="glass-card rounded-xl p-8 border border-white/10 hover:border-leveraged-blue/30 transition-all h-full">
              <div className="calendly-inline-widget" data-url="https://calendly.com/leveragegrowthbiz/30min" style={{ minWidth: "100%", height: "500px" }}></div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="glass-card rounded-xl p-8 border border-white/10 h-full">
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
