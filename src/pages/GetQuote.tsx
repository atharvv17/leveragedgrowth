
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const GetQuote: React.FC = () => {
  const shareableUrl = `${window.location.origin}/quote`;
  
  const copyShareableLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    toast({
      title: "Link copied!",
      description: "Shareable quote link has been copied to clipboard.",
    });
  };

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
            {/* Share button */}
            <div className="flex justify-end mb-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-leveraged-blue border-leveraged-blue/30 hover:bg-leveraged-blue/10"
                onClick={copyShareableLink}
              >
                <Share2 size={16} />
                Share Quote Form
              </Button>
            </div>
            
            <QuoteForm isModal={false} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetQuote;
