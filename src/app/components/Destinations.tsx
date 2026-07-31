import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin, Building2, ArrowRight, Star } from 'lucide-react';

const destinations = [
  {
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRva3lvJTIwY2l0eXxlbnwxfHx8fDE3NzM4MjQ0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    universities: '800+',
    description: 'Our PRIMARY focus - Quality education with advanced technology and rich culture. Japanese language class (N4/N5) for Student & SSW Visa.',
    highlights: ['Student Visa', 'SSW Working Visa', 'N4 & N5 Classes', 'Technology Hub'],
    isPrimary: true,
  },
  {
    country: 'South Korea',
    image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGtvcmVhJTIwc2VvdWx8ZW58MXx8fHwxNzczODI0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    universities: '350+',
    description: 'Our SECONDARY focus - Innovative education system with D2 Visa (degree) and D4 Visa (language). TOPIK classes available.',
    highlights: ['D2 Visa (Degree)', 'D4 Visa (Language)', 'TOPIK Classes', 'K-Culture Hub'],
    isPrimary: false,
  },
  // Hidden for later use - uncomment to restore
  // {
  //   country: 'USA',
  //   image: 'https://images.unsplash.com/photo-1671709362458-53c8354565b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0ElMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczODI0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  //   universities: '4,000+',
  //   description: 'Home to world-renowned universities and diverse academic programs.',
  //   highlights: ['Top-ranked universities', 'Research opportunities', 'Diverse culture'],
  //   isPrimary: false,
  // },
  // {
  //   country: 'UK',
  //   image: 'https://images.unsplash.com/photo-1519664699825-ddb2c64076bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSyUyMGxvbmRvbiUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzczODI0NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  //   universities: '395+',
  //   description: 'Rich academic heritage with globally recognized degrees.',
  //   highlights: ['Historic institutions', 'Shorter programs', 'Global recognition'],
  //   isPrimary: false,
  // },
  // {
  //   country: 'Canada',
  //   image: 'https://images.unsplash.com/photo-1572139196518-1aff88d41595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBUb3JvbnRvJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MzgyNDQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  //   universities: '220+',
  //   description: 'Affordable education with excellent post-study work opportunities.',
  //   highlights: ['PR opportunities', 'Affordable tuition', 'Safe environment'],
  //   isPrimary: false,
  // },
  // {
  //   country: 'Australia',
  //   image: 'https://images.unsplash.com/photo-1718185795639-c442aff612cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjBTeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc3MzgyNDQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  //   universities: '100+',
  //   description: 'High quality of life and world-class research institutions.',
  //   highlights: ['Work while studying', 'Excellent weather', 'Top universities'],
  //   isPrimary: false,
  // },
];

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="font-medium">Study Destinations</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Study Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized in Japan & Korea, with support for other global destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border-2 hover:border-blue-900 ${destination.isPrimary ? 'ring-4 ring-blue-300' : ''}`}>
              {destination.isPrimary && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-white" />
                  {destination.country === 'Japan' ? 'PRIMARY FOCUS' : 'SECONDARY FOCUS'}
                </div>
              )}
              <div className="aspect-[4/3] overflow-hidden relative">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <h3 className="text-2xl">{destination.country}</h3>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-4 h-4 text-blue-300" />
                  <p className="text-blue-200 text-sm">{destination.universities} Universities</p>
                </div>
                <p className="text-white/90 text-sm mb-4">{destination.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight, idx) => (
                    <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-blue-300 hover:text-blue-200 flex items-center gap-2 group/btn"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}