
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
      {/* Main background with pattern overlay */}
      <div className="absolute inset-0 bg-leveraged-dark">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(23,177,232,0.1)_25%,rgba(23,177,232,0.1)_50%,transparent_50%,transparent_75%,rgba(23,177,232,0.1)_75%,rgba(23,177,232,0.1))] bg-[length:24px_24px]"></div>
      </div>

      {/* Floating blurred elements */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-leveraged-blue/10 blur-[100px] rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] bg-leveraged-darkBlue/20 blur-[100px] rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[20%] w-[20%] h-[20%] bg-leveraged-blue/5 blur-[80px] rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Subtle color shifting gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-leveraged-darkBlue/5 via-transparent to-leveraged-blue/5 animate-gradient-shift"></div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 circuit-bg opacity-[0.15]"></div>
    </div>
  );
};

export default BlurBackground;
