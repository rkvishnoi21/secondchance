import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PhoneCall, Users, BookOpen, Heart, ArrowRight, LifeBuoy, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <PhoneCall className="w-6 h-6 text-blue-500" />,
      title: "24/7 Support",
      description: "Access immediate help through our helpline anytime, anywhere.",
      link: "/contact"
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Support Groups",
      description: "Join our community of people supporting each other through recovery.",
      link: "/resources#groups"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      title: "Resources",
      description: "Access comprehensive guides and educational materials.",
      link: "/resources"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Personal Stories",
      description: "Read inspiring recovery stories from our community members.",
      link: "/stories"
    }
  ];

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/+917426809487?text=Hi,%20I%20Want%20New%20ID";
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
       
      </div>
      {/* Hero Section with Gradient Animation */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 animate-gradient-x">
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-0"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-blue-500/10 rounded-full px-4 py-2 inline-flex items-center mb-6">
              <LifeBuoy className="w-4 h-4 text-blue-200 mr-2" />
              <span className="text-blue-100 text-sm">24/7 Support Available</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Your Journey to Recovery Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100">
              We provide support, resources, and community for individuals 
              seeking freedom from gambling addiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                I Want ID
              </button>
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Help Now
              </Link>
              <Link 
                to="/resources" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24 fill-current text-gray-50" viewBox="0 0 1440 48">
            <path d="M0 48h1440V0c-211.7 35.4-546.7 53-1005 53-154.2 0-298.3-5.9-435-17.7V48z" />
          </svg>
        </div>
      </section>

      {/* Features Section with Animated Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">
                How We Can Help
              </h2>
              <p className="text-xl text-gray-600">
                Supporting your recovery journey every step of the way
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => navigate(feature.link)}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
                           transform hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 
                                bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Overlay */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Take the First Step?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Our support team is available 24/7 to help you begin your journey to recovery.
              You don't have to face this alone.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;