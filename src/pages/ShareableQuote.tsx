
import React from 'react';
import QuoteForm from '@/components/QuoteForm';
import { Link } from 'react-router-dom';

const ShareableQuote: React.FC = () => {
  return (
    <div className="min-h-screen bg-leveraged-dark flex flex-col">
      {/* Simple header */}
      <header className="py-4 px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-leveraged-white hover:text-leveraged-blue transition-colors"
        >
          <img 
            src="/lovable-uploads/960f680d-759d-4244-bee8-c8f66fa85ebb.png" 
            alt="LeveragedGrowth.co" 
            className="h-20 filter drop-shadow-[0_0_15px_rgba(23,177,232,0.6)]"
          />
        </Link>
      </header>
      
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Background effects */}
          <div className="absolute inset-0 circuit-bg opacity-30 z-0"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-leveraged-blue/20 blur-[100px] rounded-full animate-pulse-glow z-0"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full z-0"></div>
          
          <div className="relative z-10">
            <QuoteForm isModal={false} />
          </div>
        </div>
      </main>
      
      {/* Simple footer */}
      <footer className="py-4 px-6 text-center text-leveraged-white text-sm">
        <p>© {new Date().getFullYear()} LeveragedGrowth.co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShareableQuote;
