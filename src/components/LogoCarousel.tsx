
import React, { useEffect, useRef } from 'react';

interface LogoItem {
  id: number;
  name: string;
  imagePath: string;
}

const LogoCarousel: React.FC = () => {
  const logos: LogoItem[] = [
    {
      id: 1,
      name: "HighLevel",
      imagePath: "/lovable-uploads/fbf82e2c-3092-437d-b270-8982cc7a4d0b.png"
    },
    {
      id: 2,
      name: "Keller Williams",
      imagePath: "/lovable-uploads/a9348d94-cf18-42f2-8350-f420f30e11d8.png"
    },
    {
      id: 3,
      name: "Client Acquisition",
      imagePath: "/lovable-uploads/024e9eea-fc76-4a53-bf90-03f4ce3ae40f.png"
    },
    {
      id: 4,
      name: "Keller Williams Delhi NCR",
      imagePath: "/lovable-uploads/94f358f3-bac6-420d-9f6b-a5c32f8a970d.png"
    },
    {
      id: 5,
      name: "Instantly",
      imagePath: "/lovable-uploads/219de8af-23c4-4a4e-be4b-58f1a7bad369.png"
    },
    {
      id: 6,
      name: "NEXA Mortgage",
      imagePath: "/lovable-uploads/d6d240ba-59dd-4a38-80e9-af2ce431dd39.png"
    },
    {
      id: 7,
      name: "We Connect",
      imagePath: "/lovable-uploads/83907f47-7b5e-41b6-83da-20728461efc5.png"
    },
  ];

  const logoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create infinite loop effect for logos
    const container = logoContainerRef.current;
    if (!container) return;
    
    const scrollWidth = container.scrollWidth;
    
    let scrollPosition = 0;
    const speed = 0.7; // Pixels per frame - slightly slower for better visibility
    
    const scroll = () => {
      if (!container) return;
      
      scrollPosition += speed;
      
      // Reset position to create seamless loop when we've scrolled through first set
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };
    
    const animation = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  // Duplicate logos to create seamless infinite scroll effect
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-leveraged-dark to-leveraged-darkAlt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
          Trusted By Industry Leaders
        </h2>
        
        <div className="relative">
          {/* Fade effect on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-leveraged-dark to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-leveraged-dark to-transparent"></div>
          
          {/* Logo slider */}
          <div 
            ref={logoContainerRef}
            className="flex items-center py-8 overflow-hidden"
          >
            <div className="flex space-x-24 md:space-x-32 lg:space-x-40">
              {allLogos.map((logo, index) => (
                <div 
                  key={`${logo.id}-${index}`} 
                  className="flex-shrink-0 flex items-center justify-center bg-transparent px-4"
                >
                  <img 
                    src={logo.imagePath} 
                    alt={`${logo.name} logo`}
                    className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 filter brightness-110"
                    style={{ maxWidth: '140px' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
