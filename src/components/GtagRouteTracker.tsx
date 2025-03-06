import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/gtag';

const GtagRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track every page view with the specific path
    trackPageView(location.pathname);
    
    // Log for verification
    console.log('Page tracked:', location.pathname);
  }, [location]);

  return null;
};

export default GtagRouteTracker;
