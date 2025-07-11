import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ishome, setIshome] = useState(true);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const home = document.getElementById('home');

    const observer = new IntersectionObserver(
      ([entry]) => setIshome(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (home) observer.observe(home);

    return () => {
      if (home) observer.unobserve(home);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ishome
          ? 'bg-transparent text-white border-b border-transparent'
          : 'bg-white/90 backdrop-blur-md text-gray-800 border-b border-gray-200'
        }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/minilogo.png" alt="Logo" width="40" height="40" />
            <span className="ml-3 text-xl font-bold">Modular Software Expertise</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${ishome ? 'text-white hover:text-blue-200' : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${ishome ? 'text-white' : 'text-gray-700'} hover:text-blue-600 transition-colors duration-200`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
