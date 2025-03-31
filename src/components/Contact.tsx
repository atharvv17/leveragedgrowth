
import React from 'react';
import { Calendar, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-gray-200 text-black mb-4">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Let's Build Your Sales Machine
          </h2>
          <p className="text-2xl font-medium text-gray-700 mb-8">
            Schedule a Free Strategy Call Today
          </p>
        </div>
        
        <div className="bg-gray-100 rounded-xl p-8 border border-gray-300 animate-fade-in mb-12 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-black">
            What Happens Next?
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-leveraged-blue/80 flex items-center justify-center text-white font-bold shadow-md">
                1
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-1">
                  Free Strategy Session
                </h4>
                <p className="text-gray-700">
                  We'll discuss your business, goals, and how our services can help you scale.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-leveraged-blue/80 flex items-center justify-center text-white font-bold shadow-md">
                2
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-1">
                  Custom Solution Design
                </h4>
                <p className="text-gray-700">
                  We'll create a tailored plan specific to your business needs and objectives.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-leveraged-blue/80 flex items-center justify-center text-white font-bold shadow-md">
                3
              </div>
              <div>
                <h4 className="text-lg font-medium text-black mb-1">
                  Implementation & Results
                </h4>
                <p className="text-gray-700">
                  Our team executes the plan with regular optimization and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://calendly.com/leveragegrowthbiz/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-leveraged-blue text-black px-6 py-3 rounded-lg hover:bg-leveraged-blue/90 transition-all duration-300 font-medium text-lg shadow-md"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </a>
            
            <a 
              href="mailto:leveragegrowthbiz@gmail.com" 
              className="flex items-center gap-2 bg-transparent border border-leveraged-blue/70 text-leveraged-blue px-6 py-3 rounded-lg hover:bg-leveraged-blue/10 transition-all duration-300 font-medium text-lg shadow-md"
            >
              <Mail className="w-5 h-5" />
              leveragegrowthbiz@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
