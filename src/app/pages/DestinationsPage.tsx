import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, GraduationCap, Briefcase, DollarSign, Clock, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const japanVisas = [
  {
    type: 'Student Visa (留学ビザ)',
    code: 'College Student Status',
    color: 'orange',
    description: 'The standard visa for students enrolling in Japanese language schools, vocational colleges, or universities.',
    eligibility: [
      'Admission letter from a recognised Japanese institution',
      'Proof of sufficient financial funds (approx. ¥2,000,000+)',
      'Valid passport with at least 6 months validity',
      'Japanese language school certificate (for language students)',
      'Medical fitness certificate',
    ],
    duration: 'Up to 2 years (renewable)',
    processing: '1–3 months',
  },
  {
    type: 'SSW Visa – Type 1 (特定技能1号)',
    code: 'Specified Skilled Worker',
    color: 'blue',
    description: 'For individuals with specific industry skills. Ideal for graduates or those who have passed the Japanese language and skills exam.',
    eligibility: [
      'Pass JLPT N4 or JFT-Basic (Japanese language)',
      'Pass sector-specific skills evaluation exam',
      'Sponsored by a registered Japanese employer',
      'Under 18 sectors including hospitality, food service, construction',
      'No family bring-along permitted (Type 1)',
    ],
    duration: 'Up to 5 years total',
    processing: '2–4 months',
  },
  {
    type: 'SSW Visa – Type 2 (特定技能2号)',
    code: 'Senior Skilled Worker',
    color: 'orange',
    description: 'For those with advanced skills in designated fields. Allows family sponsorship and path to permanent residency.',
    eligibility: [
      'Demonstrated advanced skill in Type 2 eligible sectors',
      'Higher Japanese proficiency (N3 or above recommended)',
      'Sponsored by a registered employer in an eligible industry',
      'Typically upgraded from SSW Type 1 after experience',
      'Family members can accompany',
    ],
    duration: 'Renewable indefinitely',
    processing: '2–4 months',
  },
];

const koreaVisas = [
  {
    type: 'Student Visa (D-2)',
    code: 'General Student',
    color: 'blue',
    description: 'For students admitted to a 2-year or 4-year degree program at a Korean university or graduate school.',
    eligibility: [
      'Admission letter from a Korean university',
      'Proof of tuition payment or scholarship',
      'Bank balance of KRW 9,000,000 or equivalent',
      'Valid passport',
      'Completed visa application form',
    ],
    duration: '1–2 years (renewable up to degree completion)',
    processing: '3–5 weeks',
  },
  {
    type: 'Language Training Visa (D-4)',
    code: 'Language Institute',
    color: 'orange',
    description: 'For students enrolled in Korean language institutes at universities or private language schools for a minimum of 6 months.',
    eligibility: [
      'Enrollment letter from a registered language institute',
      'Proof of funds (KRW 3,000,000+)',
      'Completed D-4 visa application',
      'Valid passport (minimum 6 months validity)',
      'Academic transcripts from previous school',
    ],
    duration: '6 months (renewable up to 2 years)',
    processing: '2–4 weeks',
  },
];

const japanHighlights = [
  { icon: GraduationCap, label: 'Top Universities', value: '800+ institutions' },
  { icon: DollarSign, label: 'Avg. Tuition/Year', value: '¥500K – ¥1.8M' },
  { icon: Briefcase, label: 'Part-time Work', value: '28 hrs/week allowed' },
  { icon: Star, label: 'Safety Index', value: 'World Top 5' },
];

const koreaHighlights = [
  { icon: GraduationCap, label: 'Top Universities', value: '400+ institutions' },
  { icon: DollarSign, label: 'Avg. Tuition/Year', value: '₩3M – ₩8M' },
  { icon: Briefcase, label: 'Part-time Work', value: '20 hrs/week allowed' },
  { icon: Star, label: 'Global Rank', value: 'QS Top 50 unis' },
];

export function DestinationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-orange-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Study Destinations</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 leading-tight">Explore Your Destination</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Detailed information on studying in Japan and Korea — universities, living costs, culture, and every visa type you need to know.
          </p>
          {/* Destination quick-jump */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#japan" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-2 transition-colors">
              <span className="text-lg">🇯🇵</span><span className="font-medium">Japan</span>
            </a>
            <a href="#korea" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-5 py-2 transition-colors">
              <span className="text-lg">🇰🇷</span><span className="font-medium">South Korea</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────── JAPAN ─────────────────────────── */}
      <section id="japan" className="scroll-mt-20">
        {/* Japan Hero Image + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-72 lg:h-auto min-h-[420px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748737349671-00a4173b8a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMGNoZXJyeSUyMGJsb3Nzb20lMjBzYWt1cmElMjBsYW5kbWFya3xlbnwxfHx8fDE3ODg2NjE5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Tokyo Tower with cherry blossoms"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 to-transparent lg:hidden" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Primary Destination</span>
            </div>
          </div>
          <div className="bg-blue-950 text-white px-8 py-14 lg:px-14 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🇯🇵</span>
              <h2 className="text-3xl md:text-4xl">Study in Japan</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Japan offers a world-class education system, cutting-edge technology, and a rich cultural experience. As our primary focus destination, we have deep expertise in Japanese university admissions, language school placements, and visa processing.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              From bustling Tokyo to historic Kyoto, Japanese institutions welcome international students with strong scholarship programs, English-medium courses, and vibrant campus life — all supported by one of the world's safest societies.
            </p>
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {japanHighlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <Icon className="w-5 h-5 text-orange-400 mb-1" />
                    <div className="text-white font-semibold text-lg">{h.value}</div>
                    <div className="text-gray-400 text-xs">{h.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Study in Japan */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">Why Japan?</div>
              <h3 className="text-3xl text-blue-900 mb-6">Why Choose Japan for Your Studies?</h3>
              <div className="space-y-4">
                {[
                  'Globally recognised degrees accepted by top employers worldwide',
                  'Strong demand for skilled foreign workers through SSW visa program',
                  'Japanese N4/N5 language class opens doors to student and work visas',
                  'Low crime rate and high quality of life for international students',
                  'Opportunities to work part-time up to 28 hours per week',
                  'Rich cultural immersion with anime, tech, cuisine, and tradition',
                  'Numerous scholarships including MEXT government scholarships',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-orange-100 rounded-full p-0.5 flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736087426836-d85a24f70c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxUb2t5byUyMEphcGFuJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMGNpdHl8ZW58MXx8fHwxNzg4NjYxOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Japanese university campus in autumn"
                className="w-full h-80 lg:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-blue-900 font-medium text-sm">Partner institutions across Tokyo, Osaka, Nagoya & more</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Japan Visa Types */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium mb-3">Japan Visa Guide</div>
              <h3 className="text-3xl text-blue-900">Visa Types for Japan</h3>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">We assist with all three major visa categories for Japan — choose the one that fits your goals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {japanVisas.map((visa, i) => {
                const isOrange = visa.color === 'orange';
                return (
                  <div key={i} className={`bg-white rounded-2xl border-2 overflow-hidden shadow-md hover:shadow-xl transition-shadow ${isOrange ? 'border-orange-200' : 'border-blue-200'}`}>
                    <div className={`px-6 py-5 ${isOrange ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-blue-900 to-blue-800'}`}>
                      <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{visa.code}</div>
                      <h4 className="text-white text-lg font-semibold leading-snug">{visa.type}</h4>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{visa.description}</p>
                      <div className="space-y-2 mb-5">
                        {visa.eligibility.map((e, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isOrange ? 'text-orange-500' : 'text-blue-700'}`} />
                            <span className="text-gray-600 text-sm">{e}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 pt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium text-gray-700">{visa.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-500">Processing:</span>
                          <span className="font-medium text-gray-700">{visa.processing}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── KOREA ─────────────────────────── */}
      <section id="korea" className="scroll-mt-20">
        {/* Korea Hero Image + Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-blue-900 text-white px-8 py-14 lg:px-14 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🇰🇷</span>
              <h2 className="text-3xl md:text-4xl">Study in South Korea</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              South Korea has emerged as a top study destination in Asia — combining academic excellence, K-culture, and strong employment prospects. As our secondary destination, we provide complete guidance from Korean university applications to visa processing.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Home to globally ranked universities like KAIST, Yonsei, and Korea University, South Korea offers affordable tuition, generous government scholarships (GKS), and a dynamic cosmopolitan lifestyle.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {koreaHighlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <Icon className="w-5 h-5 text-orange-400 mb-1" />
                    <div className="text-white font-semibold text-lg">{h.value}</div>
                    <div className="text-gray-400 text-xs">{h.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative h-72 lg:h-auto min-h-[420px] order-1 lg:order-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1625640776489-4186592c6f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTZW91bCUyMEtvcmVhJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwY2FtcHVzfGVufDF8fHx8MTc4ODY2MTk3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Korean university campus walkway"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6">
              <span className="bg-blue-800 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Secondary Destination</span>
            </div>
          </div>
        </div>

        {/* Why Study in Korea */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553292770-c3d14b814242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxKYXBhbiUyMHN0dWRlbnQlMjB2aXNhJTIwcGFzc3BvcnQlMjB0cmF2ZWx8ZW58MXx8fHwxNzg4NjYxOTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Senso-ji temple Japan"
                className="w-full h-80 lg:h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0" />
                  <span className="text-blue-900 font-medium text-sm">Universities in Seoul, Busan, Incheon & beyond</span>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium mb-4">Why Korea?</div>
              <h3 className="text-3xl text-blue-900 mb-6">Why Choose South Korea for Your Studies?</h3>
              <div className="space-y-4">
                {[
                  'Home to world-class universities ranked in the global top 50',
                  'Korean Government Scholarship (GKS) covers full tuition + stipend',
                  'English-taught degree programs widely available',
                  'K-pop, K-drama and cultural immersion unlike anywhere else',
                  'Affordable tuition compared to the US, UK, and Australia',
                  'Part-time work up to 20 hrs/week on student visa',
                  'Strong tech and business job market for international graduates',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-0.5 flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Korea Visa Types */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-3">Korea Visa Guide</div>
              <h3 className="text-3xl text-blue-900">Visa Types for South Korea</h3>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">We guide you through both major Korea student visa categories depending on your study plan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {koreaVisas.map((visa, i) => {
                const isOrange = visa.color === 'orange';
                return (
                  <div key={i} className={`bg-white rounded-2xl border-2 overflow-hidden shadow-md hover:shadow-xl transition-shadow ${isOrange ? 'border-orange-200' : 'border-blue-200'}`}>
                    <div className={`px-6 py-5 ${isOrange ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-blue-900 to-blue-800'}`}>
                      <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">{visa.code}</div>
                      <h4 className="text-white text-lg font-semibold">{visa.type}</h4>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{visa.description}</p>
                      <div className="space-y-2 mb-5">
                        {visa.eligibility.map((e, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isOrange ? 'text-orange-500' : 'text-blue-700'}`} />
                            <span className="text-gray-600 text-sm">{e}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 pt-4 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium text-gray-700">{visa.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-500">Processing:</span>
                          <span className="font-medium text-gray-700">{visa.processing}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-br from-blue-900 via-orange-600 to-blue-900 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Not Sure Which Destination Is Right for You?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Book a free consultation with our counselors and we'll help you choose the best destination based on your goals, budget, and language level.
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
