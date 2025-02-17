import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { useBlog } from '../context/BlogContext';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById } = useBlog();
  
  const blog = getBlogById(id || '');

  const renderContent = (content: string) => {
    // Split by double newlines to separate paragraphs
    return content.split('\n\n').map((paragraph, index) => {
      // Check if paragraph is a header
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </h2>
        );
      }
      // Check if paragraph is a list
      if (paragraph.includes('*   ')) {
        const items = paragraph.split('*   ').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc pl-6 my-4 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700">{item.trim()}</li>
            ))}
          </ul>
        );
      }
      // Regular paragraph
      return (
        <p key={index} className="text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <button 
            onClick={() => navigate('/blog')}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>

        <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(blog.date), 'MMMM dd, yyyy')}
              <Clock className="w-4 h-4 ml-4 mr-2" />
              {blog.readTime} min read
              <div className="ml-4 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {blog.category}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none">
            {renderContent(blog.content)}
          </div>

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-gray-600">
              Written by <span className="font-semibold">{blog.author}</span>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
