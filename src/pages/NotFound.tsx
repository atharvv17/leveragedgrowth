
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import BlurBackground from '@/components/ui/BlurBackground';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-leveraged-dark text-leveraged-white relative">
      <BlurBackground />
      <div className="text-center max-w-xl p-8 glass-card rounded-xl animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-leveraged-white mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-leveraged-blue text-white font-medium transition-all hover:gap-3 hover:shadow-[0_0_15px_rgba(0,163,255,0.5)] animate-pulse-glow">
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
