import React from 'react';
import { AlertCircle, BookOpen, Heart, Users, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Compassion",
      description: "We approach every individual with empathy and understanding"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Confidentiality",
      description: "Your privacy is our priority in accessing educational resources"
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Community",
      description: "Learn from shared experiences and educational content"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: "Cultural Sensitivity",
      description: "Resources adapted for Indian contexts and challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Educational Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-700">
            <AlertCircle className="w-4 h-4" />
            <p>This website provides educational resources and information about professional support services</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Educational Resource Hub
            </h1>
            <p className="text-xl text-blue-100">
              Providing information and resources for recovery support
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Second Chance Foundation was born from a simple belief: that everyone deserves 
                access to educational resources when facing the challenges of gambling addiction. 
                We've created an information hub where curated resources, understanding, and 
                hope come together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We provide educational resources to help individuals and families affected by 
                gambling addiction. By curating trusted information, we aim to reduce stigma 
                and provide clear pathways to professional support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
            <div className="bg-blue-50 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <BookOpen className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <span>Curate trusted educational resources from leading organizations</span>
                </li>
                <li className="flex items-start">
                  <Globe className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <span>Provide culturally relevant guidance for Indian users</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <span>Offer multilingual educational content in Hindi, Tamil, and English</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                  <span>Share information about professional support services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    {value.icon}
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">A Story of Hope</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Meet Rajiv, who found himself struggling with online cricket betting. Through 
                educational resources and professional support services, he found a path forward. 
                Today, Rajiv shares his educational journey to help others understand recovery options.
              </p>
              <Link 
                to="/stories" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;