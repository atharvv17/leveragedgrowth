
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-6 md:px-12 lg:px-24 bg-black border-t border-leveraged-blue/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold gradient-text">LeveragedGrowth</span>
            </a>
            <p className="text-leveraged-white/70 max-w-xs">
              Helping businesses scale with predictable sales systems and elite closers.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Navigation</h3>
            <ul className="space-y-1">
              <li><a href="#services" className="text-leveraged-white/70 hover:text-leveraged-blue transition-colors">Services</a></li>
              <li><a href="#case-studies" className="text-leveraged-white/70 hover:text-leveraged-blue transition-colors">Case Studies</a></li>
              <li><a href="#about" className="text-leveraged-white/70 hover:text-leveraged-blue transition-colors">About</a></li>
              <li><a href="#faq" className="text-leveraged-white/70 hover:text-leveraged-blue transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-leveraged-white/70 hover:text-leveraged-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
            <ul className="space-y-1">
              <li className="text-leveraged-white/70">leveragegrowthbiz@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-leveraged-blue/10 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-leveraged-white/50 text-sm">
            &copy; {currentYear} LeveragedGrowth. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="text-leveraged-white/70 hover:text-leveraged-blue transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-leveraged-white/70 hover:text-leveraged-blue transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
