
import React, { useEffect, useState, useRef } from 'react';
import BlurBackground from '@/components/ui/BlurBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show content as soon as user starts scrolling
      setScrolled(window.scrollY > 5);
      
      // Animate sections when they come into view
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        
        if (isVisible) {
          section.classList.add('slide-up');
          // Small delay between each section element to create cascade effect
          section.style.animationDelay = `${index * 0.1}s`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sectionsRef.current = Array.from(sections).map(section => section as HTMLDivElement);
    
    // Trigger initial scroll check
    handleScroll();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <BlurBackground />
      <Navbar />
      <Hero />
      <div className={`transition-opacity duration-1000 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-on-scroll">
          <LogoCarousel />
        </div>
        
        <div className="animate-on-scroll bg-gradient-blue section-transition" style={{"--next-bg-color": "rgba(0,0,0,1)"} as React.CSSProperties}>
          <Services />
        </div>
        
        <div className="animate-on-scroll bg-leveraged-dark section-transition" style={{"--next-bg-color": "rgba(10,35,66,1)"} as React.CSSProperties}>
          <CaseStudies />
        </div>
        
        <div className="animate-on-scroll bg-deep-blue section-transition" style={{"--next-bg-color": "rgba(0,0,0,1)"} as React.CSSProperties}>
          <About />
        </div>
        
        <div className="animate-on-scroll bg-gradient-dark section-transition" style={{"--next-bg-color": "rgba(10,14,23,1)"} as React.CSSProperties}>
          <FAQ />
        </div>
        
        <div className="animate-on-scroll bg-leveraged-dark">
          <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
