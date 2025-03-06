import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/resources', label: 'Resources' },
    { path: '/stories', label: 'Stories' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-gradient-to-b from-gray-900/50 to-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <Heart className={`w-6 h-6 transition-colors ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`}>
              Second Chance
            </span>
          </Link>

          {/* Desktop Navigation with Hover Effects */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  hover:scale-105 ${
                  location.pathname === link.path
                    ? isScrolled 
                      ? 'bg-blue-50 text-blue-600'
                      : 'bg-white/10 text-white'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-blue-50/50 hover:text-blue-600'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300
              hover:bg-white/10 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Updated Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[64px] bg-white/95 backdrop-blur-sm shadow-lg
            transition-all duration-300 transform z-50 ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100 pointer-events-auto' 
              : '-translate-y-full opacity-0 pointer-events-none'
          }`}
          style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
        >
          <div className="py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-6 py-4 text-base font-medium transition-colors active:bg-blue-100 ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;