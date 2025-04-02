
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuoteForm from './QuoteForm';
import { Button } from './ui/button';

interface QuoteFormModalProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ 
  trigger, 
  defaultOpen = false 
}) => {
  const [open, setOpen] = React.useState(defaultOpen);

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
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] p-0 bg-transparent border-none">
        <QuoteForm onClose={() => setOpen(false)} isModal={true} />
      </DialogContent>
    </Dialog>
  );
};

export default QuoteFormModal;
