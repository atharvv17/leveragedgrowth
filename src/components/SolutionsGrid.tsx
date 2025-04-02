
import React from 'react';
import SolutionCard from './ui/SolutionCard';
import { Globe, CreditCard, Phone, Linkedin, GitBranch, BookOpen } from 'lucide-react';

const SolutionsGrid: React.FC = () => {
  const solutions = [
    {
      title: "SalesSites™",
      subtitle: "High-Converting Websites & Landing Pages",
      icon: <Globe className="text-blue-400" size={24} />,
      description: ["Optimized for conversions, not just design.", "AI chatbot integration for real-time lead capture.", "Custom-built landing pages with tracking."],
      ctaText: "Get a Free Consultation",
      ctaLink: "https://calendly.com/leveragegrowthbiz/30min",
      accentColor: "blue-400"
    },
    {
      title: "SalesBoost™",
      subtitle: "Paid Ads & Performance Marketing",
      icon: <CreditCard className="text-purple-400" size={24} />,
      description: ["Full Meta, Google & LinkedIn Ads management.", "Data-driven ad creatives & landing page optimization.", "Automated lead nurturing & tracking."],
      ctaText: "Book a Call",
      ctaLink: "https://calendly.com/leveragegrowthbiz/30min",
      accentColor: "purple-400"
    },
    {
      title: "AI Caller™",
      subtitle: "AI-Powered Sales Calls & Appointment Setting",
      icon: <Phone className="text-green-400" size={24} />,
      description: ["AI-powered cold calling & follow-ups.", "Natural-sounding AI voice agents for qualification.", "Full CRM & calendar integration."],
      ctaText: "Try AI Caller Today",
      ctaLink: "https://calendly.com/leveragegrowthbiz/30min",
      accentColor: "green-400"
    },
    {
      title: "SalesNetwork™",
      subtitle: "Social Selling & LinkedIn Outreach",
      icon: <Linkedin className="text-blue-500" size={24} />,
      description: ["LinkedIn profile optimization & authority positioning.", "AI-driven direct outreach & engagement strategy.", "DM scripts & content calendar for nurturing leads."],
      ctaText: "Get Started Today",
      ctaLink: "https://calendly.com/leveragegrowthbiz/30min",
      accentColor: "blue-500"
    },
    {
      title: "SalesFlow™",
      subtitle: "Sales Funnel Automation",
      icon: <GitBranch className="text-amber-400" size={24} />,
      description: ["Automated sales funnels for lead nurturing & closing.", "Integration with email, chatbots & CRMs.", "Performance analytics to optimize conversions."],
      ctaText: "Start Automating Your Sales",
      ctaLink: "https://calendly.com/leveragegrowthbiz/30min",
      accentColor: "amber-400"
    },
    {
      title: "SalesMastery™",
      subtitle: "Sales Team Training & Coaching",
      icon: <BookOpen className="text-rose-400" size={24} />,
      description: ["1-on-1 coaching for founders & sales teams.", "Sales psychology, objection handling & closing techniques.", "Roleplay sessions & sales scripts for optimization."],
      ctaText: "Get Sales Coaching",
      ctaLink: "https://calendly.com/leveragegrowthbiz/30min",
      accentColor: "rose-400"
    }
  ];
  
  return (
    <section className="px-6 lg:px-24 relative md:px-[16px] my-0 py-px">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
            OUR SOLUTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Comprehensive Sales Systems
          </h2>
          <p className="text-leveraged-white/90 max-w-2xl mx-auto">
            Choose the perfect sales solution to accelerate your business growth and automate your revenue.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={index} 
              title={solution.title} 
              subtitle={solution.subtitle} 
              icon={solution.icon} 
              description={solution.description} 
              ctaText={solution.ctaText} 
              ctaLink={solution.ctaLink} 
              accentColor={solution.accentColor} 
              delay={index * 100} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
