
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients start seeing initial results within 2-4 weeks of implementation. However, substantial ROI typically comes within 60-90 days as the system builds momentum and our team optimizes based on the data collected."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in B2B services, SaaS, professional services, coaching, consulting, and high-ticket service offerings. Our approach works particularly well for businesses with offerings valued at $2,000 or more."
    },
    {
      question: "What if I'm not happy with the results?",
      answer: "We stand behind our work with a results guarantee. If you don't see measurable improvements within the first 90 days, we'll continue working at no additional cost until you do. Our business thrives on your success, not just project fees."
    },
    {
      question: "What's the difference between DFY sales and hiring a closer?",
      answer: "Our DFY sales system builds a complete lead generation and conversion pipeline, including all tools, automations, and personnel. Hiring a closer is focused specifically on converting existing leads you're already generating. Many clients start with a closer and later upgrade to the full system."
    },
    {
      question: "Do you handle specific industries?",
      answer: "While our methodologies work across various B2B sectors, we have particular expertise in technology, professional services, consulting, and education. During our strategy call, we'll assess if we're the right fit for your specific industry."
    }
  ];
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-24 relative bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="inline-block text-sm font-semibold py-1 px-3 rounded-full bg-leveraged-blue/10 text-leveraged-blue mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-leveraged-white/90 max-w-2xl mx-auto">
            Get answers to common questions about our services and approach.
          </p>
        </div>
        
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl border transition-all duration-300 overflow-hidden animate-fade-in",
                openIndex === index 
                  ? "border-leveraged-blue/40 glow-border" 
                  : "border-leveraged-blue/5 hover:border-leveraged-blue/20"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">{faq.question}</h3>
                <span className={cn(
                  "text-leveraged-blue transition-transform duration-300",
                  openIndex === index ? "rotate-180" : ""
                )}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <div 
                className={cn(
                  "transition-all duration-300 overflow-hidden",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-leveraged-white/80">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
