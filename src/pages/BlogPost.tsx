import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, AlertCircle, ExternalLink } from 'lucide-react';
import { useBlog } from '../context/BlogContext';
import BlogContent from '../components/BlogContent';

const BlogPost = () => {
  const { id } = useParams();
  const { getBlogById } = useBlog();
  const blog = getBlogById(id || '');

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
            Return to Educational Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Educational Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-700">
            <AlertCircle className="w-4 h-4" />
            <p>This content is for educational and informational purposes only</p>
            <a 
              href="https://www.ncpgambling.org/help-treatment/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Find Professional Help <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Educational Resources
          </Link>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
              Educational Content
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(blog.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {blog.readTime} min read
            </div>
          </div>

          {/* Content */}
          <BlogContent content={blog.content} />

          {/* Bottom Disclaimer */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-3">Educational Disclaimer</h2>
            <p className="text-gray-600 text-sm">
              This article is for informational purposes only and should not be considered medical 
              advice. Always seek the help of qualified healthcare providers or mental health 
              professionals for diagnosis and treatment.
            </p>
          </div>

          {/* Professional Help CTA */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Need Professional Support?</h2>
            <p className="text-gray-600 mb-4">
              If you're seeking professional help, there are qualified experts available 24/7.
            </p>
            <a 
              href="https://www.ncpgambling.org/help-treatment/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Find Professional Resources <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
