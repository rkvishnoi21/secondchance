import { useState } from 'react';
import { Phone, Mail, AlertCircle, Info, Globe, Flag, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    urgent: false
  });

  const indianHelplines = [
    {
      name: "Tele-MANAS",
      number: "14416",
      description: "24/7 free mental health support (Govt. of India)",
      features: ["Government Initiative", "20+ Languages"]
    },
    {
      name: "Jeevan Aastha Helpline",
      number: "1800 233 3330",
      description: "Suicide prevention and mental health counseling",
      features: ["24/7 Support", "Toll Free"]
    },
    {
      name: "Snehi Helpline",
      number: "9582208181",
      description: "Crisis intervention tele-counseling support",
      features: ["Crisis Support", "Professional Counseling"]
    },
    {
      name: "Samaritans Mumbai",
      number: "+91 84229 84528",
      description: "Emotional support for stress, depression, and crisis",
      features: ["Emotional Support", "Confidential"]
    },
  ];

  const internationalHelplines = [
    {
      name: "National Problem Gambling Helpline",
      number: "1-800-GAMBLER",
      country: "USA",
      description: "24/7 support and referrals to local resources"
    },
    {
      name: "GamCare",
      number: "0808 8020 133",
      country: "UK",
      description: "Free support, information and counseling"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Educational Disclaimer Banner */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 text-sm text-blue-700">
            <AlertCircle className="w-4 h-4" />
            <p>For immediate assistance, contact professional support services</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Professional Support Services
            </h1>
            <p className="text-xl text-blue-100">
              Access information about mental health and recovery support
            </p>
          </div>
        </div>
      </section>

      {/* Indian Helplines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Flag className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Indian Support Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {indianHelplines.map((helpline, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">{helpline.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{helpline.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {helpline.features?.map((feature, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`tel:${helpline.number.replace(/\D/g, '')}`}
                    className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <span className="font-medium">{helpline.number}</span>
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold">International Support Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {internationalHelplines.map((helpline, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2">{helpline.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{helpline.description}</p>
                  <a
                    href={`tel:${helpline.number.replace(/\D/g, '')}`}
                    className="flex items-center justify-between bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <span className="font-medium">{helpline.number}</span>
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Email Support</h2>
            <p className="text-gray-600 mb-6">
              For information about our educational resources or professional support services
            </p>
            <a
              href="mailto:support@secondchance.org"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              support@secondchance.org
            </a>
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
                <ArrowRight className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
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
                This page provides information about professional support services. For immediate 
                assistance, please contact the helplines listed above.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;