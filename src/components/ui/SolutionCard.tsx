
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionCardProps {
  title: string;
  icon: React.ReactNode;
  description: string[];
  ctaText: string;
  ctaLink: string;
  accentColor: string;
  delay?: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  icon,
  description,
  ctaText,
  ctaLink,
  accentColor,
  delay = 0
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 h-full flex flex-col transform hover:scale-[1.02] transition-all duration-300 border border-white/5 hover:border-white/10 group animate-fade-in",
        `hover:shadow-[0_0_30px_${accentColor}25]`
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className={cn("p-2 rounded-lg", `bg-${accentColor}/10`)}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-leveraged-blue transition-colors">
          {title}
        </h3>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {description.map((item, index) => (
          <li key={index} className="text-leveraged-white/90 flex items-start">
            <span className="text-leveraged-blue mr-2 font-bold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href={ctaLink}
        className={cn(
          "inline-flex items-center justify-center w-full px-5 py-3 rounded-lg bg-leveraged-blue text-black font-medium hover:shadow-[0_0_15px_rgba(23,177,232,0.5)] transition-all mt-auto group-hover:gap-1",
        )}
      >
        {ctaText}
        <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
      </a>
    </div>
  );
};

export default SolutionCard;
