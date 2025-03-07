
import React from 'react';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  clientName: string;
  result: string;
  description: string;
  imageUrl?: string;
  className?: string;
  delay?: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  clientName,
  result,
  description,
  imageUrl,
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300 border border-white/10 hover:border-leveraged-blue/30 group animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {imageUrl && (
        <div className="aspect-[16/9] w-full relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${clientName} case study`} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-leveraged-dark to-transparent opacity-80"></div>
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
