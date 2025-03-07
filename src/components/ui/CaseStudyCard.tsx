
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Play, Pause } from 'lucide-react';

interface CaseStudyCardProps {
  clientName: string;
  result: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  isYoutubeVideo?: boolean;
  className?: string;
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  clientName,
  result,
  description,
  imageUrl,
  videoUrl,
  isYoutubeVideo = false,
  className,
  delay = 0
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [youtubeId, setYoutubeId] = useState<string | null>(null);

  useEffect(() => {
    if (isYoutubeVideo && videoUrl) {
      // Extract YouTube video ID from URL
      const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
      if (match && match[1]) {
        setYoutubeId(match[1]);
      }
    }
  }, [isYoutubeVideo, videoUrl]);

  const handleVideoClick = () => {
    if (!videoUrl || isYoutubeVideo) return;
    
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 border border-white/10 hover:border-leveraged-blue/30 group animate-fade-in w-full",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {(imageUrl || videoUrl) && (
        <div className="aspect-[16/9] w-full relative overflow-hidden cursor-pointer" onClick={isYoutubeVideo ? undefined : handleVideoClick}>
          {isYoutubeVideo && youtubeId ? (
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : videoUrl ? (
            <>
              <video 
                ref={videoRef}
                src={videoUrl}
                poster={imageUrl}
                className="object-cover w-full h-full"
                onEnded={() => setIsPlaying(false)}
                playsInline
              />
              
              {!isPlaying && (
                <>
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
              
              {isPlaying && (
                <div className="absolute bottom-4 right-4 p-2 bg-leveraged-blue/80 rounded-full text-white">
                  <Pause size={20} />
                </div>
              )}
            </>
          ) : (
            <>
              <img 
                src={imageUrl} 
                alt={`${clientName} testimonial`} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leveraged-dark to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-leveraged-blue/80 rounded-md text-white text-sm font-medium">
                View Case Study
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
