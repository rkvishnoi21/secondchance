import React from 'react';

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ src, alt, caption, source }) => {
  return (
    <figure className="my-8">
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
      />
      {(caption || source) && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption}
          {source && (
            <span className="block text-gray-500">
              Source: {source}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageWithCaption;
