import { Target, Languages, Award, Shield, GraduationCap, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

const features = [
  {
    icon: Languages,
    title: 'Japanese Language Experts',
    description: 'Specialized N4 and N5 level Japanese language class for both Student Visa and SSW Working Visa.',
  },
  {
    icon: Target,
    title: 'Japan & Korea Specialists',
    description: 'Dedicated focus on Japan (primary) and Korea (secondary) with in-depth knowledge of their education systems.',
  },
  {
    icon: GraduationCap,
    title: 'Dual Visa Support',
    description: 'Expert guidance for both Student Visa and SSW (Specified Skilled Worker) Working Visa applications.',
  },
  {
    icon: Shield,
    title: 'Trusted Experience',
    description: 'Years of experience in Japanese and Korean education with proven success in visa approvals.',
  },
  {
    icon: Award,
    title: 'High Success Rate',
    description: 'Excellent track record in student placements and visa approvals for Japan and Korea.',
  },
  {
    icon: TrendingUp,
    title: 'Career Pathways',
    description: 'Guidance on study-to-work transitions in Japan and Korea with SSW visa opportunities.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Why Choose United Knowledge?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your specialized partner for Japan and Korea education with Japanese language expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-blue-900 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                    <Icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}