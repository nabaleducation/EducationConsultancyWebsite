import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const features = [
  'Specialized focus on Japan and Korea education',
  'Expert Japanese language class (N4 & N5 levels)',
  'Student Visa and SSW Working Visa expertise',
  'Experienced counselors with Japan/Korea knowledge',
  'High success rate in visa approvals',
  'Personalized one-on-one counseling sessions',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGNhbXB1c3xlbnwxfHx8fDE3NzM3NTMxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-5xl mb-2">10+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
              <span className="font-medium">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-6">
              Your Specialized Partner for Japan & Korea Education
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a leading education consultancy specializing in Japan (primary focus) and Korea (secondary focus). 
              With Japanese language class (N4 & N5) and expert visa support, we help students achieve their dreams of studying and working abroad.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team provides specialized guidance for both Student Visa and SSW (Specified Skilled Worker) Working Visa, 
              ensuring comprehensive support from language preparation to visa approval and beyond.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-900 transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}