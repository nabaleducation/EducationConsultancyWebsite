import { Card, CardContent } from '@/app/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Kamal Nepali',
    university: 'Study in Japan',
    course: 'Dailekh',
    text: 'United Knowledge made my dream of studying in Japan a reality. Their expert Japanese language class and guidance throughout the application and visa process was invaluable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Baliman Tamang',
    university: 'Study in Japan',
    course: 'Bhaktapur',
    text: 'The counselors here are truly exceptional. They helped me secure admission to Japan and guided me through every step of the journey with N4 & N5 classes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
  {
    name: 'Dipesh Ghale',
    university: 'Study in Japan',
    course: 'Dhading',
    text: 'Professional, knowledgeable, and supportive. The Japanese language preparation and visa support was excellent. I highly recommend United Knowledge.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Paruhang Limbu',
    university: 'Study in Japan',
    course: 'Terhathum',
    text: 'Thanks to United Knowledge, I am now studying in Japan. Their guidance was professional and personalized from language class to visa approval.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="font-medium">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who are now studying at top universities worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-900 relative overflow-hidden group">
              <CardContent className="pt-8 pb-6 px-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-blue-900" />
                </div>
                
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                
                {/* Student Info */}
                <div className="border-t pt-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white overflow-hidden">
                    <span className="text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                    <p className="text-sm text-blue-900">{testimonial.university}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}