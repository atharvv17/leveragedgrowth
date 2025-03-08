
import React from 'react';
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
  return (
    <div className="relative">
      <BlurBackground />
      <Navbar />
      <Hero />
      <div>
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
