import React from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, index) => {
      // Handle Images with simple error handling
      if (block.includes('![')) {
        const imageMatch = block.match(/!\[(.*?)\]\((.*?)\)(?:\{source:\s*(.*?)\})?/);
        if (imageMatch) {
          const [_, alt = '', src = '', __, source = ''] = imageMatch;
          return (
            <figure key={index} className="my-8">
              <img 
                src={src.trim()}
                alt={alt.trim()}
                className="w-full rounded-lg shadow-lg object-cover max-h-[500px]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/fallback.jpg';
                }}
                loading="lazy"
              />
              {source && (
                <figcaption className="mt-2 text-sm text-gray-500 text-center">
                  Source: {source.trim()}
                </figcaption>
              )}
            </figure>
          );
        }
      }

      // Basic content handling
      if (block.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{block.slice(2)}</h1>;
      }
      if (block.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{block.slice(3)}</h2>;
      }
      
      // Handle Lists
      if (block.includes('\n- ')) {
        const items = block.split('\n- ').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, i) => (
              <li key={i}>{item.trim()}</li>
            ))}
          </ul>
        );
      }

      // Regular paragraphs
      return <p key={index} className="mb-4">{block}</p>;
    });
  };

  return <div className="prose max-w-none">{renderContent(content)}</div>;
};

export default BlogContent;
