import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const PageLayout = ({ children, title, className = '' }: PageLayoutProps) => {
  return (
    <div className={`page-container ${className}`}>
      <div className="content-container">
        {title && <h1 className="section-title">{title}</h1>}
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
