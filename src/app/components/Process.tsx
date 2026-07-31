import { Search, FileCheck, Languages, Plane, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Initial Consultation',
    description: 'Free consultation for Japan/Korea study plans, Japanese language assessment, and visa options (Student/SSW).',
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    icon: Languages,
    title: 'Japanese Language Class',
    description: 'N4 and N5 level Japanese language courses tailored for Student Visa and SSW Working Visa requirements.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Application Process',
    description: 'Complete assistance with university/institution applications in Japan or Korea and documentation.',
    color: 'from-blue-700 to-blue-800',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Visa Assistance',
    description: 'Student Visa or SSW Working Visa application support with interview preparation and documentation.',
    color: 'from-blue-800 to-blue-900',
  },
  {
    number: '05',
    icon: Plane,
    title: 'Pre-Departure',
    description: 'Pre-departure briefing for Japan/Korea, accommodation assistance, and cultural orientation.',
    color: 'from-blue-900 to-blue-950',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamlined process for Japan and Korea education with Japanese language preparation
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 z-0"></div>

          {/* Steps */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-900">
                    {/* Number Badge */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow - Mobile/Tablet */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-900"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-800 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}