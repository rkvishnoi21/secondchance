import React from 'react';
import { Phone, Mail, Users, Heart, Shield, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Compassion",
      description: "We approach every individual with understanding and empathy"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Confidentiality",
      description: "Your privacy and trust are our top priorities"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Community",
      description: "We believe in the power of support and shared experiences"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "24/7 Support",
      description: "Always here when you need us most"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Second Chance Foundation
            </h1>
            <p className="text-xl text-blue-100">
              Dedicated to helping individuals overcome gambling addiction and rebuild 
              their lives through support, education, and community.
            </p>
          </div>
        </div>
        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 fill-current text-gray-50" viewBox="0 0 1440 64">
            <path d="M0,64L1440,32L1440,64L0,64Z"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 transform hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that everyone deserves a second chance at life, free from 
              the chains of addiction. Our foundation works tirelessly to provide 
              support, resources, and a community for individuals struggling with 
              gambling addiction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} 
                     className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl 
                              transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 
                                rounded-full mb-6 bg-gray-50 group-hover:bg-blue-50 
                                transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 
                               transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6" />, 
                    text: "24/7 Helpline: 1-234-567-890", 
                    href: "tel:+1234567890" },
                  { icon: <Mail className="w-6 h-6" />, 
                    text: "support@secondchance.org", 
                    href: "mailto:support@secondchance.org" }
                ].map((item, index) => (
                  <a key={index} 
                     href={item.href}
                     className="flex items-center p-4 rounded-lg border-2 border-blue-100 
                              text-gray-700 hover:border-blue-500 hover:text-blue-600 
                              transition-all duration-300">
                    <span className="inline-flex items-center justify-center w-12 h-12 
                                   rounded-full bg-blue-50 mr-4">
                      {item.icon}
                    </span>
                    <span className="text-lg font-medium">{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-8 
                          text-white hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">Start Your Recovery Journey</h3>
              <p className="text-lg text-blue-100 mb-8">
                Ready to take the first step? Our team is here to support you 24/7.
              </p>
              <button className="w-full py-4 bg-white text-blue-600 text-lg font-semibold 
                               rounded-lg hover:bg-blue-50 transition-colors duration-300 
                               shadow-lg hover:shadow-xl">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;