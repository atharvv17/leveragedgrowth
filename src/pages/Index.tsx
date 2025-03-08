
import React, { useEffect, useState } from 'react';
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
  
  useEffect(() => {
    const handleScroll = () => {
      // Show content as soon as user starts scrolling
      setScrolled(window.scrollY > 5);
    };
    
    window.addEventListener('scroll', handleScroll);
    
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
    <div className="relative">
      <BlurBackground />
      <Navbar />
      <Hero />
      <div className={`space-y-12 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <LogoCarousel />
        <Services />
        <CaseStudies />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
