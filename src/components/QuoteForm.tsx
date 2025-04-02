
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the form schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  companyName: z.string().min(2, { message: "Company name is required" }),
  industry: z.string().min(2, { message: "Industry is required" }),
  challenges: z.array(z.string()).min(1, { message: "Select at least one challenge" }),
  services: z.array(z.string()).min(1, { message: "Select at least one service" }),
  revenue: z.string({ required_error: "Please select a revenue range" }),
  results: z.string().min(10, { message: "Please describe your desired results" }),
  contactMode: z.string({ required_error: "Please select a preferred contact method" }),
  notes: z.string().optional(),
});

// Define challenge options
const challengeOptions = [
  { id: "low-quality-leads", label: "Low-quality leads" },
  { id: "inconsistent-lead-flow", label: "Inconsistent lead flow" },
  { id: "poor-conversion", label: "Poor sales conversion rates" },
  { id: "no-structured-system", label: "No structured sales system" },
  { id: "scaling-difficulty", label: "Difficulty scaling sales team" },
  { id: "high-churn", label: "High client churn" },
  { id: "other-challenge", label: "Other" },
];

// Define service options
const serviceOptions = [
  { id: "outbound-inbound-system", label: "Outbound & inbound sales system" },
  { id: "linkedin-cold-email", label: "LinkedIn & cold email lead generation" },
  { id: "paid-ads", label: "Paid ads & appointment setting" },
  { id: "sales-funnel", label: "Sales funnel & automation setup" },
  { id: "hiring-training", label: "Hiring & training sales professionals" },
  { id: "other-service", label: "Other" },
];

// Revenue options
const revenueOptions = [
  { value: "below-2l", label: "Below ₹2L" },
  { value: "2l-5l", label: "₹2L - ₹5L" },
  { value: "5l-10l", label: "₹5L - ₹10L" },
  { value: "10l-20l", label: "₹10L - ₹20L" },
  { value: "20l-50l", label: "₹20L - ₹50L" },
  { value: "above-50l", label: "Above ₹50L" },
];

// Contact mode options
const contactModeOptions = [
  { value: "email", label: "Email" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "phone", label: "Phone Call" },
];

interface QuoteFormProps {
  onClose?: () => void;
  isModal?: boolean;
  onSupabaseSubmit?: (formData: any) => Promise<boolean>;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onClose, isModal = false, onSupabaseSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      industry: "",
      challenges: [],
      services: [],
      revenue: "",
      results: "",
      contactMode: "",
      notes: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    console.log("Form values:", values);
    
    try {
      // Use onSupabaseSubmit if provided, otherwise handle internally
      if (onSupabaseSubmit) {
        const success = await onSupabaseSubmit(values);
        if (success) {
          form.reset();
          if (onClose) onClose();
        }
      } else {
        // Default submission to Supabase
        const { error } = await supabase
          .from('quote_requests')
          .insert([values]);
        
        if (error) throw error;
        
        toast({
          title: "Quote request submitted!",
          description: "We'll get back to you shortly.",
        });
        
        form.reset();
        
        if (onClose) {
          onClose();
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine the max height based on whether it's a modal or standalone page
  const maxHeight = isModal ? "max-h-[70vh]" : "max-h-full";

  return (
    <div className="bg-leveraged-dark p-6 rounded-lg max-w-2xl mx-auto w-full relative">
      {isModal && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-leveraged-white hover:text-leveraged-blue transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>
      )}
      
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">Get a Personalized Quote</h2>
        <p className="text-leveraged-white/80">Let us know about your business and sales goals</p>
      </div>
      
      <ScrollArea className={`${maxHeight} pr-4`}>
        <div className="pr-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 98765 43210" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Company Name */}
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Industry */}
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. SaaS, E-commerce, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Revenue */}
                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Monthly Revenue</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select revenue range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {revenueOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Sales Challenges */}
              <FormField
                control={form.control}
                name="challenges"
                render={() => (
                  <FormItem>
                    <FormLabel>Biggest Sales Challenges</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {challengeOptions.map((challenge) => (
                        <FormField
                          key={challenge.id}
                          control={form.control}
                          name="challenges"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={challenge.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(challenge.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, challenge.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== challenge.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {challenge.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Services of Interest */}
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <FormLabel>Services of Interest</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {serviceOptions.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={service.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(service.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, service.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== service.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {service.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Desired Results */}
              <FormField
                control={form.control}
                name="results"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific Results Desired</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What specific outcomes are you looking to achieve?"
                        {...field}
                        className="min-h-[80px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Contact Mode */}
              <FormField
                control={form.control}
                name="contactMode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Mode of Contact</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {contactModeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Additional Notes */}
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any other information you'd like to share"
                        {...field}
                        className="min-h-[80px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-leveraged-blue text-black hover:bg-leveraged-blue/90 transition-all hover:shadow-[0_0_15px_rgba(23,177,232,0.5)]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </Button>
            </form>
          </Form>
        </div>
      </ScrollArea>
    </div>
  );
};

export default QuoteForm;
