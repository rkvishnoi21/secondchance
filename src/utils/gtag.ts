declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const GOOGLE_ADS_ID = 'AW-16909456919';
export const PAGE_VIEW_CONVERSION_ID = 'AW-16909456919/MtWJCJqR7KYaEJesh_8-';

export const trackPageView = (pagePath: string) => {
  // Basic page view tracking
  window.gtag?.('event', 'page_view', {
    page_path: pagePath
  });

  // Specific conversion tracking for important pages
  if (pagePath === '/contact' || pagePath === '/resources') {
    window.gtag?.('event', 'conversion', {
      'send_to': PAGE_VIEW_CONVERSION_ID,
      'value': 1.0,
      'currency': 'USD'
    });
  }
};

export const trackConversion = (type: 'story_submit' | 'resource_access' | 'help_view') => {
  const conversionValues = {
    story_submit: 2.0,
    resource_access: 1.5,
    help_view: 1.0
  };

  window.gtag?.('event', 'conversion', {
    'send_to': PAGE_VIEW_CONVERSION_ID,
    'value': conversionValues[type],
    'currency': 'USD'
  });
};

export const trackEvent = (eventName: string, params = {}) => {
  window.gtag?.('event', eventName, params);
};
