import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-2xl mb-4">United Knowledge Study Abroad</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your specialized partner for Japan and Korea education. Expert Japanese language class (N4 & N5) for Student Visa and SSW Working Visa with complete support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://moest.gov.np/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Ministry of Education Nepal
                </a>
              </li>
              <li>
                <a href="https://www.studyinjapan.go.jp/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Study In Japan
                </a>
              </li>
              <li>
                <a href="https://www.studyinkorea.go.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Study in Korea
                </a>
              </li>
              <li>
                <a href="https://jlpt.org.np/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  JLPT
                </a>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="text-white text-lg mb-4">Study Destinations</h4>
            <ul className="space-y-3">
              <li>
                <a href="#destinations" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-yellow-400">★</span> Japan (Primary)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="text-yellow-400">★</span> South Korea (Secondary)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-blue-400 transition-colors">United States</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-blue-400 transition-colors">United Kingdom</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-blue-400 transition-colors">Canada</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-blue-400 transition-colors">Australia</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" />
                <span className="text-gray-400">P83C+6QR, Putalisadak Opposite to Sankhar Dev Campus, Kathmandu 44600</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="tel:01-4168209" className="text-gray-400 hover:text-blue-400 transition-colors">
                  01-4168209
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" />
                <a href="mailto:info@unitedknwl.com" className="text-gray-400 hover:text-blue-400 transition-colors break-all">
                  info@unitedknwl.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2026 United Knowledge Study Abroad. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}