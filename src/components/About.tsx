
import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "Proven systems used by top agencies & SaaS brands.",
    "ROI-driven strategies – we focus on sales, not just leads.",
    "Hands-free setup & training, so you don't waste time."
  ];

  const founders = [
    {
      name: "Sikander",
      title: "The Service Delivery Maestro",
      image: "/lovable-uploads/b2f07395-cb44-489f-9e44-8b70fe3a5766.png",
      bio: "With extensive experience working with international clients, Sikander has mastered the art of lead generation and sales optimization. His expertise lies in delivering exceptional results, ensuring every client gets a highly effective, done-for-you sales system that drives consistent revenue growth. His ability to streamline operations and maximize conversions makes him a powerhouse in service delivery and client success."
    },
    {
      name: "Atharv",
      title: "The B2B Growth Architect",
      image: "/lovable-uploads/b8ba4229-5a8c-484d-986c-cc68d861168f.png", 
      bio: "A B2B growth expert, Atharv has helped multiple companies build high-performing acquisition processes that fuel predictable, scalable growth. He has successfully scaled agencies, coaching businesses, and consulting firms, refining their sales strategies and closing systems to maximize revenue. His expertise in B2B sales, lead generation, and automation makes him a key driver behind LeveragedGrowth's success."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Our Mission
            </h2>
            <p className="text-leveraged-white/90 text-lg mb-8">
              Helping businesses scale with predictable sales systems. We believe every great product or service deserves an equally great sales process to bring it to the world.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-leveraged-white/90">
                  <span className="bg-leveraged-blue/20 p-1 rounded-full text-leveraged-blue mt-0.5">
                    <Check size={16} />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-square rounded-xl overflow-hidden glass-card border border-white/10 p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-leveraged-darkBlue/40 to-leveraged-blue/10 circuit-bg"></div>
              <div className="relative z-10 flex flex-col h-full justify-center items-center">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold gradient-text mb-2">Our Approach</h3>
                  <p className="text-leveraged-white/90">We don't just build systems, we deliver results</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">85%</div>
                    <p className="text-sm text-leveraged-white/80">Avg. Increase in Qualified Leads</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">40%</div>
                    <p className="text-sm text-leveraged-white/80">Avg. Boost in Conversion Rates</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">3x</div>
                    <p className="text-sm text-leveraged-white/80">ROI Within First 90 Days</p>
                  </div>
                  
                  <div className="glass-card rounded-lg p-5 text-center hover:border-leveraged-blue/30 transition-colors border border-white/10">
                    <div className="text-leveraged-blue font-bold text-3xl mb-2">100%</div>
                    <p className="text-sm text-leveraged-white/80">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-28 w-28 bg-leveraged-blue/20 blur-3xl rounded-full"></div>
            <div className="absolute -top-4 -left-4 h-20 w-40 bg-leveraged-blue/10 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* Meet the Founders Section */}
        <div className="mt-24 animate-fade-in">
          <div className="text-center mb-12">
            <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
              THE TEAM
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Meet the Founders
            </h2>
            <p className="text-leveraged-white/90 max-w-2xl mx-auto">
              Together, Sikander & Atharv have built LeveragedGrowth to help businesses achieve seamless sales automation, top-tier client acquisition, and predictable revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {founders.map((founder, index) => (
              <div 
                key={index} 
                className="glass-card border border-white/10 rounded-xl overflow-hidden hover:border-leveraged-blue/30 transition-all group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={`${founder.name} - ${founder.title}`} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                    <p className="text-leveraged-blue font-medium">{founder.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-leveraged-white/90">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
