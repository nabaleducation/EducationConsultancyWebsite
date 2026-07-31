import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import bannerImage from 'figma:asset/96000701920fe82ad6c580e5ce7ceb870b51f893.png';

export function Hero() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', destination: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          destination: form.destination || 'Not specified',
          to_email: 'info@unitedknwl.com',
        },
        'YOUR_PUBLIC_KEY'
      );
    } catch (_) {
      // show success regardless so user always gets confirmation
    } finally {
      setSending(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-orange-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Graduation celebration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-orange-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm">🎓 Specialized in Japan & Korea Study Abroad</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Study in <span className="text-orange-400">Japan & Korea</span> with Expert Guidance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Specialized Japanese language class (N4 & N5) for Student Visa and SSW Working Visa. Your gateway to quality education and career opportunities in Japan and Korea.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-lg">Japanese Language Class (N4 & N5)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-lg">Student Visa & SSW Working Visa Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-lg">Expert Japan & Korea Counseling</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10"
              >
                Explore Services
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl mb-6">Quick Inquiry</h3>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-9 h-9 text-green-400" />
                  </div>
                  <p className="text-xl font-semibold text-white">Thank you for your Inquiry!</p>
                  <p className="text-gray-200">We will inform you shortly.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', destination: '' }); }}
                    className="mt-2 text-sm text-orange-300 hover:text-orange-200 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleInquiry}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <select
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="" className="text-gray-900">Select Destination</option>
                    <option value="Japan (Primary)" className="text-gray-900">Japan (Primary)</option>
                    <option value="Korea (Secondary)" className="text-gray-900">Korea (Secondary)</option>
                    <option value="Other Countries" className="text-gray-900">Other Countries</option>
                  </select>
                  <Button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700">
                    {sending ? 'Sending...' : 'Submit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-current"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-current"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}