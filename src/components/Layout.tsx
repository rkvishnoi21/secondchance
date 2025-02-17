import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import AdPopup from './AdPopup';
import { useAdPopup } from '../hooks/useAdPopup';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { isOpen, closePopup } = useAdPopup();
  const hideHeaderPaths = ['/fantasy'];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" style={{ minHeight: '100vh' }}>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      <AdPopup
        isOpen={isOpen}
        onClose={closePopup}
        imageUrl="/images/popup-image.png"  // Updated correct path
        whatsappLink="https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID"
      />
    </div>
  );
};

export default Layout;
