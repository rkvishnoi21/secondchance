import React from 'react';
import { X } from 'lucide-react';

interface AdPopupProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  whatsappLink: string;
}

const AdPopup: React.FC<AdPopupProps> = ({ isOpen, onClose, imageUrl, whatsappLink }) => {
  if (!isOpen) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      // Only close if clicking the overlay, not the image
      onClose();
    }
  };

  const handleImageClick = () => {
    window.location.href = whatsappLink;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleClick}
    >
      <div className="relative w-full max-w-[90vw] md:max-w-[500px] animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10 border border-gray-200"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <img
          src={imageUrl}
          alt="Advertisement"
          onClick={handleImageClick}
          className="w-full h-auto rounded-xl shadow-2xl cursor-pointer transform transition-transform hover:scale-[1.02] duration-300"
        />
      </div>
    </div>
  );
};

export default AdPopup;
