
import React from 'react';
import CaseStudyCard from './ui/CaseStudyCard';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      clientName: "From Struggling Sales to $40K/Month – Kieran's Success Story",
      result: "",
      description: "Kieran scaled his agency to $40K/month by implementing a proven outbound and inbound sales system and hiring top-tier closers, turning inconsistent sales into a predictable, high-converting revenue machine.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/watch?v=I8n9f9D157c",
      isYoutubeVideo: true
    },
    {
      clientName: "How Brandon Scaled His B2B Sales Coaching Business with LeveragedGrowth",
      result: "",
      description: "Brandon, a B2B sales coach, struggled with inconsistent lead flow and low conversion rates. LeveragedGrowth helped him streamline his sales process, generate high-quality inbound and outbound leads, and recruit top-tier closers to handle calls. Within months, he saw a massive increase in booked appointments and revenue growth.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/watch?v=SfD6BD-NaO0",
      isYoutubeVideo: true
    },
    {
      clientName: "How Belteki Hit $10K in His First Month with LeveragedGrowth",
      result: "",
      description: "Belteki, a B2B consultant, struggled with setting up a predictable sales system and closing high-ticket clients. LeveragedGrowth helped him implement an automated outbound and inbound lead generation strategy, optimize his sales process, and recruit elite closers to handle calls. In just one month, he hit $10K in revenue, setting the foundation for long-term scalability.",
      imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "https://www.youtube.com/watch?v=9t_SkFg-4As",
      isYoutubeVideo: true
    }
  ];

  return (
    <section id="case-studies" className="py-10 px-6 md:px-12 lg:px-24 relative bg-leveraged-darkAlt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
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
        
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              clientName={caseStudy.clientName}
              result={caseStudy.result}
              description={caseStudy.description}
              imageUrl={caseStudy.imageUrl}
              videoUrl={caseStudy.videoUrl}
              isYoutubeVideo={caseStudy.isYoutubeVideo}
              delay={index * 200}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center animate-fade-in">
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
