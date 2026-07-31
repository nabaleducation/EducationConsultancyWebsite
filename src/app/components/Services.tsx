import { GraduationCap, FileText, Globe, Languages, BookOpen, Award } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

const services = [
  {
    icon: Languages,
    title: 'Japanese Language Class',
    description: 'Comprehensive N4 and N5 level Japanese language courses for Student Visa and SSW Working Visa preparation.',
  },
  {
    icon: GraduationCap,
    title: 'Study in Japan',
    description: 'Expert guidance for studying in Japan - our primary focus. University selection, application support, and visa assistance.',
  },
  {
    icon: Globe,
    title: 'Study in Korea',
    description: 'Specialized services for studying in Korea - our secondary focus. Complete support from university selection to visa approval.',
  },
  {
    icon: FileText,
    title: 'Visa Counseling',
    description: 'End-to-end Student Visa and SSW (Specified Skilled Worker) Working Visa support with high success rates.',
  },
  {
    icon: BookOpen,
    title: 'Application Assistance',
    description: 'Complete support for applications to Japanese and Korean universities, including documentation and SOP writing.',
  },
  {
    icon: Award,
    title: 'Career Counseling',
    description: 'Personalized counseling for academic and career paths in Japan and Korea, including work opportunities.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-blue-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <span className="font-medium">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Our Specialized Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Focused expertise in Japan and Korea education with Japanese language class
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOrange = index % 2 === 0;
            return (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-2 ${isOrange ? 'hover:border-orange-500' : 'hover:border-blue-900'} hover:-translate-y-2 bg-white`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${isOrange ? 'from-orange-100 to-orange-200 group-hover:from-orange-500 group-hover:to-orange-600' : 'from-blue-100 to-blue-200 group-hover:from-blue-900 group-hover:to-blue-800'} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 ${isOrange ? 'text-orange-600' : 'text-blue-900'} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}