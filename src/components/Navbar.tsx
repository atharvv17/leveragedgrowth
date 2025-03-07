
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-leveraged-dark/80 backdrop-blur-lg border-b border-white/5 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <img 
            src="/lovable-uploads/08c3eb96-6c27-4ca5-97af-44bdaa022844.png" 
            alt="LeveragedGrowth.co" 
            className="h-16 md:h-20 filter drop-shadow-[0_0_10px_rgba(0,163,255,0.5)]"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-leveraged-white hover:text-leveraged-blue transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <a 
          href="#contact" 
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-leveraged-blue text-white font-medium text-sm hover:bg-leveraged-blue/90 transition-all hover:shadow-[0_0_15px_rgba(0,163,255,0.5)] animate-pulse-glow"
        >
          Get a Free Consultation
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-leveraged-white hover:text-leveraged-blue transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-leveraged-darkAlt/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col pt-24 px-6",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/08c3eb96-6c27-4ca5-97af-44bdaa022844.png" 
            alt="LeveragedGrowth.co" 
            className="h-16 filter drop-shadow-[0_0_10px_rgba(0,163,255,0.5)]"
          />
        </div>
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-leveraged-white hover:text-leveraged-blue transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-5 py-3 mt-4 rounded-lg bg-leveraged-blue text-white font-medium hover:bg-leveraged-blue/90 transition-all animate-pulse-glow"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
