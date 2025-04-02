
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

interface QuoteFormModalProps {
  trigger?: React.ReactNode;
}

const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ 
  trigger
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quote');
  };

  return (
    <>
      {trigger || (
        <Button 
          variant="blue" 
          className="animate-pulse-glow hover:shadow-[0_0_15px_rgba(23,177,232,0.5)]"
          onClick={handleClick}
        >
          Get a Quote
        </Button>
      )}
    </>
  );
};

export default QuoteFormModal;
