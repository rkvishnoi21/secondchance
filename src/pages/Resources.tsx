import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Users, ArrowRight, AlertCircle, Info, 
  BookOpen, Clock, Shield 
} from 'lucide-react';
import type { ResourceCategory } from '../types/Resource';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');

  const resourceCategories: ResourceCategory[] = [
    {
      id: 'support-groups',
      title: "Support Groups Information",
      description: "Learn about available support groups and meetings",
      icon: <Users className="w-6 h-6 text-green-500" />,
      items: [
        {
          title: "Gamblers Anonymous Meetings",
          description: "Information about virtual support meetings",
          action: "https://gamblersanonymous.org/virtual-meetings/",
          actionText: "Find Meetings",
          external: true
        },
        {
          title: "Online Support Groups",
          description: "Professional group therapy information",
          action: "https://kindbridge.com/group-services/gambling/",
          actionText: "Learn More",
          external: true
        },
        {
          title: "Community Stories",
          description: "Read recovery experiences from others",
          action: "/stories",
          actionText: "View Stories",
          badge: "Educational Content"
        }
      ]
    },
    {
      id: 'immediate-help',
      title: "Professional Support Services",
      description: "Information about immediate assistance",
      icon: <Phone className="w-6 h-6 text-red-500" />,
      items: [
        {
          title: "US Support Helpline",
          description: "24/7 professional guidance - 1-800-GAMBLER",
          action: "tel:18004262537",
          actionText: "Call Now",
          urgent: true
        },
        {
          title: "UK GamCare Support",
          description: "Confidential support - 0808 8020 133",
          action: "tel:08088020133",
          actionText: "Get Help",
          urgent: true
        }
      ]
    },
    {
      id: 'educational',
      title: "Educational Resources",
      description: "Expert-reviewed information and guides",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      items: [
        {
          title: "Understanding Recovery",
          description: "Comprehensive educational articles about recovery",
          action: "/blog",
          actionText: "Read Articles",
          badge: "Expert Content"
        },
        {
          title: "Recovery Guides",
          description: "Step-by-step educational materials",
          action: "/blog/recovery-guide",
          actionText: "View Guides",
          badge: "Educational"
        }
      ]
    },
    {
      id: 'tools',
      title: "Recovery Tools",
      description: "Practical resources for support",
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      items: [
        {
          title: "Budgeting Resources",
          description: "Financial management information",
          action: "https://www.gamcare.org.uk/support/self-help/money-debt/",
          actionText: "Access Tools",
          external: true
        },
        {
          title: "Protection Tools",
          description: "Information about blocking applications",
          action: "https://betblocker.org/",
          actionText: "Learn More",
          external: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Educational Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-700">
            <AlertCircle className="w-4 h-4" />
            <p>This page provides educational resources and information about professional support services</p>
          </div>
        </div>
      </div>

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

      {/* Featured Educational Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Link to="/blog" className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all">
              <BookOpen className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Educational Articles</h3>
              <p className="text-gray-600 mb-4">Access expert-reviewed information about recovery and support options</p>
              <span className="text-blue-600 group-hover:text-blue-700 font-medium">Browse Articles →</span>
            </Link>
            
            <Link to="/stories" className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all">
              <Users className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Recovery Stories</h3>
              <p className="text-gray-600 mb-4">Learn from others' experiences and educational journeys</p>
              <span className="text-green-600 group-hover:text-green-700 font-medium">Read Stories →</span>
            </Link>
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
                                  ${('urgent' in item && item.urgent) ? 'border-l-4 border-red-500' : ''}`}
                      >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {('schedule' in item && item.schedule) && (
                          <div className="flex items-center text-gray-500 mb-4">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">{item.schedule}</span>
                          </div>
                        )}
                        <a
                          href={item.action}
                          target={('external' in item && item.external) ? "_blank" : undefined}
                          rel={('external' in item && item.external) ? "noopener noreferrer" : undefined}
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

      {/* Enhanced Educational Disclaimer */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 justify-center text-sm text-gray-600">
              <Info className="w-4 h-4" />
              <p>
                These resources are for educational and informational purposes only. 
                For medical advice, diagnosis, or treatment, please consult qualified healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;