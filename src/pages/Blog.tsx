import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Info } from 'lucide-react';
import { blogData } from '../data/blogData';

const Blog = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    console.error(`Failed to load image: ${target.src}`);
    target.onerror = null; // Prevent infinite loop
    target.src = '/images/fallback.jpg'; // Default fallback image
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Educational Resources
            </h1>
            <p className="text-xl text-blue-100">
              Informational articles about recovery and support services
            </p>
          </div>
        </div>
      </section>

      {/* Educational Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center text-sm text-blue-700">
            <Info className="w-4 h-4 mr-2" />
            These articles are for educational purposes only and should not be considered medical advice
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <Link 
                key={blog.id} 
                to={`/blog/${blog.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs">
                      Educational Content
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{blog.readTime} min read</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{blog.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                  {blog.tags && (
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-sm text-blue-600">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-sm text-gray-600">
            <p>
              The information provided in these articles is for educational and informational 
              purposes only. For professional help, please consult qualified healthcare providers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
