import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/app/components/ui/sonner';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { WhyChooseUs } from '@/app/components/WhyChooseUs';
import { Destinations } from '@/app/components/Destinations';
import { Stats } from '@/app/components/Stats';
import { Process } from '@/app/components/Process';
import { About } from '@/app/components/About';
import { Testimonials } from '@/app/components/Testimonials';
import { CTABanner } from '@/app/components/CTABanner';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { ServicesPage } from '@/app/pages/ServicesPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Destinations />
        <Process />
        <About />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Toaster />
    </HashRouter>
  );
}
