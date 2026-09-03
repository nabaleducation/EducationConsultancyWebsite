import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import logo from '@/imports/United_Logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const goToServices = () => {
    navigate('/services');
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`bg-white sticky top-0 z-50 transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a href="tel:01-4168209" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
                <Phone className="w-4 h-4" />
                <span>01-4168209</span>
              </a>
              <a href="mailto:info@unitedknwl.com" className="flex items-center gap-2 hover:text-orange-200 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@unitedknwl.com</span>
              </a>
            </div>
            <div className="text-sm">
              <span>🇯🇵 Japan & Korea Education Specialists</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="United Knowledge Study Abroad" className="h-12 md:h-16" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={goToServices} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('destinations')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Destinations
            </button>
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Our Process
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Contact Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </button>
            <button onClick={goToServices} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Services
            </button>
            <button onClick={() => scrollToSection('destinations')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Destinations
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Our Process
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-orange-600 font-medium">
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}