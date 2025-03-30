
import React from 'react';
import BlurBackground from '@/components/ui/BlurBackground';
import Navbar from '@/components/Navbar';
import SolutionsHero from '@/components/SolutionsHero';
import SolutionsGrid from '@/components/SolutionsGrid';
import SolutionsCTA from '@/components/SolutionsCTA';
import Footer from '@/components/Footer';

const Solutions = () => {
  return (
    <div className="relative">
      <BlurBackground />
      <Navbar />
      <div className="space-y-16 md:space-y-24">
        <SolutionsHero />
        <SolutionsGrid />
        <SolutionsCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Solutions;
