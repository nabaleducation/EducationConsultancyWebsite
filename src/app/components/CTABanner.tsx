import { Button } from '@/app/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-orange-600 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Study in Japan or Korea?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Start your Japanese language class (N4/N5) and get expert guidance for Student Visa or SSW Working Visa. Book your free consultation today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 group text-lg px-8"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a
              href="tel:01-4168209"
              className="flex items-center gap-2 text-lg hover:text-orange-200 transition-colors"
            >
              <Phone className="w-8 h-8" />

              <div className="text-left">
                <div className="text-sm text-orange-200">Call Us Now</div>
                <div className="font-medium">01-4168209</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}