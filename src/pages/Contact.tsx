import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    urgent: false
  });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 Helpline",
      content: "1-234-567-890",
      description: "Available anytime, day or night",
      action: "tel:+1234567890",
      urgent: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      content: "support@secondchance.org",
      description: "We'll respond within 24 hours",
      action: "mailto:support@secondchance.org"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Support Hours",
      content: "24/7 Support Available",
      description: "Our team is always here to help"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              We're Here to Help
            </h1>
            <p className="text-xl text-blue-100">
              Reach out anytime - your recovery journey starts with a conversation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 fill-current text-gray-50" viewBox="0 0 1440 64">
            <path d="M0,64L1440,32L1440,64L0,64Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300
                          ${info.urgent ? 'border-l-4 border-blue-500' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                {info.action ? (
                  <a 
                    href={info.action}
                    className="text-blue-600 font-medium text-lg hover:text-blue-700"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium text-lg">{info.content}</p>
                )}
                <p className="text-gray-600 mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="urgent"
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  checked={formData.urgent}
                  onChange={(e) => setFormData({...formData, urgent: e.target.checked})}
                />
                <label htmlFor="urgent" className="ml-2 text-gray-700">
                  This is urgent - I need immediate support
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;