import { useNavigate } from 'react-router-dom';
import { Languages, GraduationCap, FileText, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

const services = [
  {
    icon: Languages,
    title: 'Language Classes',
    color: 'orange',
    tagline: 'N4 & N5 Japanese Language Preparation',
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

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isOrange = service.color === 'orange';
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Icon / Visual Panel */}
              <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                <div className={`rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[320px] ${isOrange ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200'}`}>
                  <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-6 ${isOrange ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-blue-900 to-blue-800'}`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${isOrange ? 'text-orange-600' : 'text-blue-900'}`}>
                    0{index + 1}
                  </div>
                  <p className={`text-sm font-semibold uppercase tracking-widest ${isOrange ? 'text-orange-500' : 'text-blue-700'}`}>
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${isOrange ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-900'}`}>
                  Service {String(index + 1).padStart(2, '0')}
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
