
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurBackgroundProps {
  className?: string;
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({ className }) => {
  return (
    <div className={cn(
      "fixed inset-0 -z-10 overflow-hidden",
      className
    )}>
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-leveraged-blue/20 blur-[100px] rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] bg-leveraged-darkBlue/30 blur-[100px] rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-leveraged-blue/10 blur-[80px] rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute inset-0 circuit-bg opacity-30"></div>
    </div>
  );
};

export default BlurBackground;
