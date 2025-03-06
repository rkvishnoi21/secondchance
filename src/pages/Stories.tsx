import { useState } from 'react';
import { Calendar, Clock, Share2, ChevronRight, Search } from 'lucide-react';
import { format } from 'date-fns';
import { useStories } from '../context/StoryContext';
import type { Story, StoryCategory } from '../types/Story';  // Add this import
import StorySubmissionModal from '../components/StorySubmissionModal';
import type { StorySubmissionData } from '../components/StorySubmissionModal';
import { useNavigate } from 'react-router-dom';
import { trackConversion } from '../utils/gtag';

const Stories = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const { stories, addStory } = useStories();

  const filters = [
    { id: 'all', label: 'All Stories' },
    { id: 'recovery', label: 'Recovery' },
    { id: 'inspiration', label: 'Inspiration' },
    { id: 'family', label: 'Family Support' }
  ];

  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || story.category === filter;
    return matchesSearch && matchesFilter;
  });

  const handleStorySubmit = (data: StorySubmissionData) => {
    const newStory: Story = {
      id: `story-${Date.now()}`,
      title: data.title,
      content: data.story,
      author: data.isAnonymous ? 'Anonymous' : data.name,
      date: new Date().toISOString(),
      readTime: Math.ceil(data.story.split(' ').length / 200), // Approximate reading time
      excerpt: data.story.slice(0, 150) + '...',
      category: 'recovery' as StoryCategory, // Fix the category type
      tags: ['Recovery Story', 'Personal Experience']
    };

    addStory(newStory);
    alert('Thank you for sharing your story! It has been added to our collection.');
    setIsModalOpen(false);

    // Track story submission
    trackConversion('story_submit');
  };

  const handleReadMore = (index: number) => {
    navigate(`/stories/${stories[index].id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Recovery Stories
            </h1>
            <p className="text-xl text-blue-100">
              Real stories from real people who have overcome gambling addiction. 
              Share your journey and inspire others.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
                       hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Share Your Story
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 fill-current text-gray-50" viewBox="0 0 1440 64">
            <path d="M0,64L1440,32L1440,64L0,64Z"></path>
          </svg>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Filters */}
              <div className="flex gap-2 overflow-x-auto">
                {filters.map(filterOption => (
                  <button
                    key={filterOption.id}
                    onClick={() => setFilter(filterOption.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                      ${filter === filterOption.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {filterOption.label}
                  </button>
                ))}
              </div>
              
              {/* Search */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search stories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((post, index) => (
              <article 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {post.image && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(new Date(post.date), 'MMM dd, yyyy')}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {post.readTime} min read
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => handleReadMore(index)}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <button 
                      className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50"
                      aria-label="Share story"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story Submission Modal */}
      <StorySubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleStorySubmit}
      />
    </div>
  );
};

export default Stories;