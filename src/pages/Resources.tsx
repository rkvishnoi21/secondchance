import React, { useState } from 'react';
import { Book, HeartHandshake, Phone, Clock, Download, Users, ArrowRight } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const resourceCategories = [
    {
      id: 'immediate-help',
      title: "Immediate Help",
      description: "24/7 support and crisis resources",
      icon: <Phone className="w-6 h-6 text-red-500" />,
      items: [
        {
          title: "Crisis Helpline",
          description: "Available 24/7 for immediate support",
          action: "tel:+1234567890",
          actionText: "Call Now",
          urgent: true
        },
        {
          title: "Online Chat Support",
          description: "Chat with a counselor anytime",
          action: "#",
          actionText: "Start Chat"
        }
      ]
    },
    {
      id: 'support-groups',
      title: "Support Groups",
      description: "Join our community sessions",
      icon: <Users className="w-6 h-6 text-green-500" />,
      items: [
        {
          title: "Daily Online Meetings",
          description: "Join our virtual support groups",
          schedule: "Every day at 10 AM & 7 PM",
          action: "#",
          actionText: "Join Meeting"
        },
        {
          title: "Family Support Group",
          description: "For family and friends",
          schedule: "Weekends at 3 PM",
          action: "#",
          actionText: "Learn More"
        }
      ]
    },
    {
      id: 'self-help',
      title: "Self-Help Resources",
      description: "Tools for your recovery journey",
      icon: <Book className="w-6 h-6 text-blue-500" />,
      items: [
        {
          title: "Recovery Workbook",
          description: "Step-by-step recovery guide",
          type: "PDF",
          action: "#",
          actionText: "Download"
        },
        {
          title: "Progress Tracker",
          description: "Daily monitoring tool",
          type: "Interactive",
          action: "#",
          actionText: "Access Tool"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Recovery Resources
            </h1>
            <p className="text-xl text-blue-100">
              Access tools, support, and guidance for your recovery journey
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 fill-current text-gray-50" viewBox="0 0 1440 64">
            <path d="M0,64L1440,32L1440,64L0,64Z"></path>
          </svg>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-8 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors
                    ${activeTab === 'all' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  All Resources
                </button>
                {resourceCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors
                      ${activeTab === cat.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {resourceCategories
              .filter(cat => activeTab === 'all' || activeTab === cat.id)
              .map((category, idx) => (
                <div key={idx} className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h2>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300
                                  ${item.urgent ? 'border-l-4 border-red-500' : ''}`}
                      >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {item.schedule && (
                          <div className="flex items-center text-gray-500 mb-4">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{item.schedule}</span>
                          </div>
                        )}
                        <a
                          href={item.action}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          {item.actionText}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;