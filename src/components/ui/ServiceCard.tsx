
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string[];
  forWho: string;
  pricing?: string[];
  ctaText: string;
  ctaLink: string;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  forWho,
  pricing,
  ctaText,
  ctaLink,
  className,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 md:p-8 transform hover:scale-[1.01] transition-all duration-300 border border-white/10 hover:border-leveraged-blue/30 group animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white group-hover:text-leveraged-blue transition-colors">
        {title}
      </h3>
      
      <ul className="space-y-3 mb-6">
        {description.map((item, index) => (
          <li key={index} className="text-leveraged-white flex items-start">
            <span className="text-leveraged-blue mr-2 font-bold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mb-6">
        <h4 className="text-leveraged-blue font-semibold mb-2">Who it's for?</h4>
        <p className="text-leveraged-white">{forWho}</p>
      </div>
      
      <a 
        href={ctaLink}
        className="inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-leveraged-blue text-white font-medium hover:shadow-[0_0_15px_rgba(0,163,255,0.5)] transition-all animate-pulse-glow"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default ServiceCard;
