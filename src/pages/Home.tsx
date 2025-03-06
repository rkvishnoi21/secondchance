import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, AlertCircle, Info, HeartHandshake, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  
  const educationalResources = [
    {
      title: "Educational Materials",
      description: "Access expert-reviewed information about recovery options",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      link: "/resources",
      badge: "Research-Based Content"
    },
    {
      title: "Support Information",
      description: "Learn about available professional support services",
      icon: <Phone className="w-8 h-8 text-green-600" />,
      link: "/contact",
      badge: "Professional Services"
    },
    {
      title: "Recovery Resources",
      description: "Educational articles and recovery guidance",
      icon: <HeartHandshake className="w-8 h-8 text-purple-600" />,
      link: "/blog",
      badge: "Expert Guidance"
    }
  ];

  const helplineNumbers = {
    "India": "1800 233 3330",
    "United States": "1-800-GAMBLER",
    "United Kingdom": "0808 80 20 133"
  };

  return (
    <div className="min-h-screen">
      {/* Educational Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-700">
            <AlertCircle className="w-4 h-4" />
            <p>For educational purposes only. For immediate help, contact professional healthcare providers.</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Educational Resources for Recovery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Access information about professional support services and recovery resources
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#emergency-help"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
                       hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get Professional Help
              </a>
              <Link
                to="/resources"
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold 
                       hover:bg-blue-600 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
              <p className="text-gray-600">
                Learn about recovery options and professional support services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {educationalResources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.link}
                  className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                      {resource.icon}
                    </div>
                    <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {resource.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Help Section */}
      <section id="emergency-help" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Support Services</h2>
              <p className="text-gray-600">Contact qualified healthcare providers for immediate assistance</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {Object.entries(helplineNumbers).map(([country, number]) => (
                <div key={country} className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold mb-2">{country}</h3>
                  <a
                    href={`tel:${number.replace(/\D/g, '')}`}
                    className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="font-medium">{number}</span>
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
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
                This website provides educational resources and information about professional 
                support services. It is not a substitute for professional medical advice, 
                diagnosis, or treatment. Always seek the advice of qualified healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;