import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { useStories } from '../context/StoryContext';

const StoryView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getStoryById } = useStories();
  
  const story = getStoryById(id!);

  if (!story) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Story not found</h2>
        <button 
          onClick={() => navigate('/stories')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Return to Stories
        </button>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: story.title,
          text: story.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={() => navigate('/stories')}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stories
          </button>
          <button
            onClick={handleShare}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Story
          </button>
        </div>

        {story.image && (
          <img 
            src={story.image} 
            alt={story.title} 
            className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
          />
        )}

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {format(new Date(story.date), 'MMMM dd, yyyy')}
          <Clock className="w-4 h-4 ml-4 mr-2" />
          {story.readTime} min read
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{story.title}</h1>
        <div className="prose max-w-none">
          {story.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {story.tags && (
          <div className="mt-8 flex flex-wrap gap-2">
            {story.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </div>
  );
};

export default StoryView;
