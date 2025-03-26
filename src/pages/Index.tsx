
import React, { useEffect, useState } from 'react';
import BlurBackground from '@/components/ui/BlurBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Logos3 } from '@/components/blocks/logos3';
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

  const logoData = {
    heading: "Trusted By Industry Leaders",
    logos: [
      {
        id: "logo-1",
        description: "HighLevel",
        image: "/lovable-uploads/fbf82e2c-3092-437d-b270-8982cc7a4d0b.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-2",
        description: "Keller Williams",
        image: "/lovable-uploads/a9348d94-cf18-42f2-8350-f420f30e11d8.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-3",
        description: "Client Acquisition",
        image: "/lovable-uploads/024e9eea-fc76-4a53-bf90-03f4ce3ae40f.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-4",
        description: "Keller Williams Delhi NCR",
        image: "/lovable-uploads/94f358f3-bac6-420d-9f6b-a5c32f8a970d.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-5",
        description: "Instantly",
        image: "/lovable-uploads/219de8af-23c4-4a4e-be4b-58f1a7bad369.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-6",
        description: "NEXA Mortgage",
        image: "/lovable-uploads/d6d240ba-59dd-4a38-80e9-af2ce431dd39.png",
        className: "h-12 w-auto",
      },
      {
        id: "logo-7",
        description: "We Connect",
        image: "/lovable-uploads/83907f47-7b5e-41b6-83da-20728461efc5.png",
        className: "h-12 w-auto",
      },
    ],
  };

  return (
    <div className="relative">
      <BlurBackground />
      <Navbar />
      <Hero />
      <div className={`space-y-12 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <Logos3 {...logoData} />
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
