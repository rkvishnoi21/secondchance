import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useAdPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show popup when route changes or component mounts
    setIsOpen(true);
  }, [location.pathname]);

  const closePopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    closePopup
  };
};
