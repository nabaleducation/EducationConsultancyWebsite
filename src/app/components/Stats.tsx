import { Users, Building2, CheckCircle, Globe } from 'lucide-react';

const stats = [
  { 
    icon: Users,
    value: '500+', 
    label: 'Students Placed',
    description: 'Successfully placed in Japan & Korea'
  },
  { 
    icon: Building2,
    value: '12+', 
    label: 'Partner Universities/Schools',
    description: 'In Japan and Korea'
  },
  { 
    icon: CheckCircle,
    value: '97%', 
    label: 'Visa Success Rate',
    description: 'For Student & SSW visas'
  },
  { 
    icon: Globe,
    value: '2', 
    label: 'Countries',
    description: 'Japan & Korea focus'
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-orange-700 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Our Success in Numbers</h2>
          <p className="text-orange-200 text-lg">Proven track record of excellence</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-orange-300" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl mb-2">{stat.value}</div>
                  <div className="text-orange-100 mb-1">{stat.label}</div>
                  <div className="text-orange-200 text-sm">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}