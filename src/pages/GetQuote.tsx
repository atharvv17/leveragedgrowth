
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';

const GetQuote: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-leveraged-dark">
      <Navbar />
      
      {/* Main content */}
      <main className="flex-grow pt-32 md:pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Background particle effect */}
          <div className="absolute inset-0 circuit-bg opacity-30 z-0"></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-leveraged-blue/20 blur-[100px] rounded-full animate-pulse-glow z-0"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full z-0"></div>
          
          <div className="relative z-10">
            <QuoteForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetQuote;
