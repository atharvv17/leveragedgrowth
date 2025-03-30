
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6 md:px-12",
        scrolled ? "bg-black/80 backdrop-blur-lg border-b border-leveraged-blue/10 shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <img 
            src="/lovable-uploads/960f680d-759d-4244-bee8-c8f66fa85ebb.png" 
            alt="LeveragedGrowth.co" 
            className="h-24 md:h-36 filter drop-shadow-[0_0_15px_rgba(23,177,232,0.6)]"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a 
                key={link.name}
                href={link.href}
                className="text-leveraged-white hover:text-leveraged-blue transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className="text-leveraged-white hover:text-leveraged-blue transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>
        
        {/* CTA Button */}
        <a 
          href="https://calendly.com/leveragegrowthbiz/30min" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-leveraged-blue text-black font-medium text-sm hover:bg-leveraged-blue/90 transition-all hover:shadow-[0_0_15px_rgba(23,177,232,0.5)] animate-pulse-glow"
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
        "fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col pt-24 px-6",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/960f680d-759d-4244-bee8-c8f66fa85ebb.png" 
            alt="LeveragedGrowth.co" 
            className="h-40 filter drop-shadow-[0_0_15px_rgba(23,177,232,0.6)]"
          />
        </div>
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a 
                key={link.name}
                href={link.href}
                className="text-leveraged-white hover:text-leveraged-blue transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className="text-leveraged-white hover:text-leveraged-blue transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <a 
            href="https://calendly.com/leveragegrowthbiz/30min"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-5 py-3 mt-4 rounded-lg bg-leveraged-blue text-black font-medium hover:bg-leveraged-blue/90 transition-all animate-pulse-glow"
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
