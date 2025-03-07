
import React from 'react';
import CaseStudyCard from './ui/CaseStudyCard';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      clientName: "Tech Agency X",
      result: "Generated $50K in 60 days",
      description: "Implemented an outbound LinkedIn strategy that brought 15 qualified leads and 5 new clients in the first two months.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      // Sample video URL - you should replace this with an actual video URL
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessman-working-at-his-desk-with-a-laptop-in-new-york-41917-large.mp4" 
    },
    {
      clientName: "SaaS Platform Y",
      result: "Increased conversion rate by 35%",
      description: "Placed a trained sales closer who transformed their sales process and dramatically improved their demo-to-close ratio.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      // Sample video URL - you should replace this with an actual video URL
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessperson-at-a-business-meeting-in-a-modern-office-42333-large.mp4"
    },
    {
      clientName: "Coaching Business Z",
      result: "Scaled to $30K monthly recurring",
      description: "Built a complete sales system from scratch, including lead generation, appointment setting, and closing sequences.",
      imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      // Sample video URL - you should replace this with an actual video URL
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-32502-large.mp4"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-6 md:px-12 lg:px-24 relative bg-leveraged-darkAlt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Success Stories
          </h2>
          <p className="text-leveraged-white/90 max-w-2xl mx-auto">
            Watch what our clients have to say about their experience working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              clientName={caseStudy.clientName}
              result={caseStudy.result}
              description={caseStudy.description}
              imageUrl={caseStudy.imageUrl}
              videoUrl={caseStudy.videoUrl}
              delay={index * 200}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-leveraged-blue text-leveraged-blue font-medium hover:bg-leveraged-blue/10 transition-all hover:gap-3"
          >
            See More Success Stories
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
