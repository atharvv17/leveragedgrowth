
import React from 'react';
import ServiceCard from './ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: "RevenueEngine™",
      description: [
        "Done-for-you LinkedIn, cold email, and paid ads setup.",
        "Complete sales funnel, appointment setting, and automation.",
        "Sales scripts, email sequences, and CRM integration.",
        "Trained setters/closers to handle leads."
      ],
      forWho: "Founders, coaches, agencies, and SaaS companies that want a predictable sales pipeline.",
      pricing: [
        "$2,500–$10,000 one-time",
        "OR Monthly Retainer: $1,500+/mo"
      ],
      ctaText: "Book a Strategy Call",
      ctaLink: "#contact"
    },
    {
      title: "CloserElite™",
      description: [
        "Recruit, train & place high-ticket closers in your business.",
        "Closers get customized training for your offer & industry.",
        "Performance tracking, sales script coaching, and ongoing improvements.",
        "If a closer underperforms, we replace them for free."
      ],
      forWho: "Businesses that already have leads but need a closer to convert them into revenue.",
      ctaText: "Find a Sales Closer",
      ctaLink: "#contact"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Accelerate Your Growth
          </h2>
          <p className="text-leveraged-white/90 max-w-2xl mx-auto">
            We offer complete done-for-you solutions that drive predictable revenue and scale your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              forWho={service.forWho}
              pricing={service.pricing}
              ctaText={service.ctaText}
              ctaLink={service.ctaLink}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
