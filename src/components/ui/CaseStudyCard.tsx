
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface CaseStudyCardProps {
  clientName: string;
  result: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  className?: string;
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  clientName,
  result,
  description,
  imageUrl,
  videoUrl,
  className,
  delay = 0
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
    // In a real implementation, you would play the video here
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 border border-white/10 hover:border-leveraged-blue/30 group animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {imageUrl && (
        <div className="aspect-[16/9] w-full relative overflow-hidden cursor-pointer" onClick={handleVideoClick}>
          {isPlaying ? (
            <div className="w-full h-full bg-leveraged-dark flex items-center justify-center">
              {/* This would be replaced with an actual video player in production */}
              <p className="text-leveraged-white text-sm">Video would play here</p>
            </div>
          ) : (
            <>
              <img 
                src={imageUrl} 
                alt={`${clientName} testimonial`} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leveraged-dark to-transparent opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-leveraged-blue/90 rounded-full p-4 shadow-lg transform transition-transform group-hover:scale-110">
                  <Play size={24} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-leveraged-blue/80 rounded-md text-white text-sm font-medium">
                Watch Testimonial
              </div>
            </>
          )}
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{clientName}</h3>
        <p className="text-leveraged-blue font-semibold mb-4">{result}</p>
        <p className="text-leveraged-white/90">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
