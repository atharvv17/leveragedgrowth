
import { cn } from "@/lib/utils";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading: string;
  logos: Logo[];
  className?: string;
}

export function Logos3({ heading, logos, className }: Logos3Props) {
  return (
    <section className={cn("py-12 md:py-20 bg-gradient-to-r from-leveraged-dark to-leveraged-darkAlt overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
          {heading}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="flex flex-shrink-0 items-center justify-center bg-transparent px-4 transition-opacity duration-300 opacity-80 hover:opacity-100"
            >
              <img
                src={logo.image}
                alt={`${logo.description} logo`}
                className={cn("w-auto object-contain filter brightness-110", logo.className)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
