import { useNavigate } from 'react-router-dom';
import { Languages, GraduationCap, FileText, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const services = [
  {
    icon: Languages,
    title: 'Language Classes',
    color: 'orange',
    tagline: 'N4 & N5 Japanese Language Preparation',
    image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxKYXBhbmVzZSUyMGxhbmd1YWdlJTIwY2xhc3MlMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc4ODY2MTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Student raising hand in classroom',
    description:
      'Our structured Japanese language program equips students with the communication skills required for both academic and professional environments in Japan. Taught by experienced instructors, the courses cover reading, writing, listening, and speaking at JLPT N5 and N4 levels.',
    features: [
      'JLPT N5 & N4 certified curriculum',
      'Small batch classes for personalized attention',
      'Mock tests and exam preparation',
      'Language support for Student Visa eligibility',
      'SSW (Specified Skilled Worker) Working Visa language requirement coverage',
      'Flexible morning and evening batches',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Study Abroad & Visa Counseling',
    color: 'blue',
    tagline: 'Japan (Primary) · Korea (Secondary)',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZCUyMHVuaXZlcnNpdHklMjBzdHVkZW50cyUyMEphcGFufGVufDF8fHx8MTc4ODY2MTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Chureito Pagoda and Mount Fuji, Japan',
    description:
      'We provide end-to-end guidance for students planning to study in Japan or South Korea. From choosing the right institution to securing your student visa, our counselors are with you at every step — handling university shortlisting, application strategy, and visa documentation.',
    features: [
      'University and school selection for Japan & Korea',
      'Student Visa application and documentation',
      'SSW Working Visa consultation and processing',
      'Scholarship guidance and financial planning',
      'Pre-departure orientation and travel assistance',
      '97% visa success rate across all applications',
    ],
  },
  {
    icon: FileText,
    title: 'Documentation & Application Assistance',
    color: 'orange',
    tagline: 'Accurate, Complete, On-Time',
    image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMGFwcGxpY2F0aW9uJTIwcGFwZXJ3b3JrJTIwb2ZmaWNlfGVufDF8fHx8MTc4ODY2MTY2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Person writing on documents',
    description:
      'Applying to international institutions requires precise paperwork. Our team reviews and prepares every document — from Statement of Purpose and recommendation letters to bank statements and health certificates — ensuring your application meets all institutional and embassy requirements.',
    features: [
      'Statement of Purpose (SOP) writing and review',
      'Recommendation letter guidance',
      'Financial document preparation and verification',
      'University application form filling and submission',
      'Embassy documentation checklist and review',
      'Translation and notarization support',
    ],
  },
  {
    icon: Briefcase,
    title: 'Career Counseling on Foreign Land',
    color: 'blue',
    tagline: 'Building Your Future Abroad',
    image: 'https://images.unsplash.com/photo-1596754860837-506f408b0a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwcHJvZmVzc2lvbmFsJTIwbWVldGluZyUyMGFicm9hZHxlbnwxfHx8fDE3ODg2NjE2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'People in a professional career meeting',
    description:
      'Settling into a new country goes beyond academics. Our career counseling service helps students understand the job market, internship pathways, and long-term career options in Japan and Korea. We guide you from graduation planning to post-study work visa transitions.',
    features: [
      'Career pathways in Japan and Korea after studies',
      'Part-time work permit guidance while studying',
      'Post-graduation job search strategies',
      'SSW visa transition support after graduation',
      'Industry-specific career advice (IT, healthcare, hospitality)',
      'Resume and interview preparation for Japanese employers',
    ],
  },
];

export function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4 leading-tight">Our Major Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive support for every stage of your study abroad journey — from language preparation to career success on foreign land.
          </p>
        </div>
      </div>

      {/* Horizontal Overview Cards */}
      <div className="bg-gray-50 border-b border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOrange = service.color === 'orange';
              return (
                <a
                  key={index}
                  href={`#service-${index}`}
                  className={`group bg-white rounded-2xl p-6 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isOrange ? 'hover:border-orange-500' : 'hover:border-blue-900'}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${isOrange ? 'bg-orange-100 group-hover:bg-orange-500' : 'bg-blue-100 group-hover:bg-blue-900'} transition-colors duration-300`}>
                    <Icon className={`w-7 h-7 ${isOrange ? 'text-orange-600 group-hover:text-white' : 'text-blue-900 group-hover:text-white'} transition-colors duration-300`} />
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${isOrange ? 'text-orange-400' : 'text-blue-400'}`}>
                    0{index + 1}
                  </div>
                  <h3 className="text-blue-900 font-semibold text-base leading-snug">{service.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">{service.tagline}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isOrange = service.color === 'orange';
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              id={`service-${index}`}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-24"
            >
              {/* Image Panel */}
              <div className={isReversed ? 'lg:order-2' : ''}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-80 lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isOrange ? 'from-orange-900/60' : 'from-blue-900/60'} to-transparent`} />
                  {/* Icon badge */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${isOrange ? 'bg-orange-500' : 'bg-blue-800'}`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold uppercase tracking-widest opacity-80">Service {String(index + 1).padStart(2, '0')}</div>
                      <div className="text-white text-sm font-medium">{service.tagline}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={isReversed ? 'lg:order-1' : ''}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${isOrange ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-900'}`}>
                  {service.tagline}
                </div>
                <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${isOrange ? 'bg-orange-100' : 'bg-blue-100'}`}>
                        <CheckCircle className={`w-5 h-5 ${isOrange ? 'text-orange-600' : 'text-blue-900'}`} />
                      </div>
                      <span className="text-gray-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-blue-900 via-orange-600 to-blue-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Talk to our experts today and take the first step toward your study abroad dream.
          </p>
          <Button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 group text-lg px-8"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
