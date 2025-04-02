
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuoteForm from './QuoteForm';
import { Button } from './ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface QuoteFormModalProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ 
  trigger, 
  defaultOpen = false 
}) => {
  const [open, setOpen] = React.useState(defaultOpen);

  // Function to handle form submission to Supabase
  const handleFormSubmit = async (formData: any) => {
    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([formData]);
      
      if (error) throw error;
      
      toast({
        title: "Quote request submitted!",
        description: "We'll get back to you shortly.",
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting to Supabase:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
      
      return false;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button 
            variant="blue" 
            className="animate-pulse-glow hover:shadow-[0_0_15px_rgba(23,177,232,0.5)]"
          >
            Get a Quote
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] p-0 bg-transparent border-none max-h-[90vh]">
        <QuoteForm onClose={() => setOpen(false)} isModal={true} onSupabaseSubmit={handleFormSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
