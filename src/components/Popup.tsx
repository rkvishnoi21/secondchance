import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Container */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden
          w-full max-h-[90vh] md:max-h-[85vh]
          ${isOpen ? 'animate-scaleIn' : 'animate-scaleOut'}
          // Mobile optimization (1080x1920)
          max-w-[calc(100vw-2rem)] md:max-w-[800px]
          aspect-[9/16] md:aspect-auto md:h-auto
          transform transition-all duration-300`}
        style={{
          // For 1080x1920 screens, maintain aspect ratio
          maxHeight: window.innerWidth >= 768 ? '85vh' : 'calc(100vh - 2rem)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 
            hover:bg-white/20 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
