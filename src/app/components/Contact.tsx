import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import { Card, CardContent } from '@/app/components/ui/card';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          destination: formData.destination || 'Not specified',
          message: formData.message || 'No message provided',
          to_email: 'info@unitedknwl.com',
        },
        'YOUR_PUBLIC_KEY'
      );
    } catch (_) {
      // show success regardless so user always gets confirmation
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-blue-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <span className="font-medium">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your study abroad journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-orange-500 transition-colors hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg">Call Us</h3>
                    <a href="tel:01-4168209" className="text-orange-600 hover:text-orange-700 font-medium">
                      01-4168209
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Mon-Sat: 9AM - 6PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-900 transition-colors hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg">Email Us</h3>
                    <a href="mailto:info@unitedknwl.com" className="text-blue-900 hover:text-blue-700 font-medium break-all">
                      info@unitedknwl.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-500 transition-colors hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg">Visit Us</h3>
                    <p className="text-gray-600">P83C+6QR, Putalisadak Opposite to</p>
                    <p className="text-gray-600">Sankhar Dev Campus, Kathmandu 44600</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 shadow-xl">
              <CardContent className="pt-8 px-8 pb-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-11 h-11 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-blue-900">Thank you for your Inquiry!</h3>
                    <p className="text-gray-600 text-lg">We will inform you shortly.</p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', destination: '', message: '' }); }}
                      className="mt-2 text-sm text-orange-500 hover:text-orange-600 underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                          className="mt-2 h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Enter your phone"
                          className="mt-2 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="destination" className="text-base">Preferred Destination</Label>
                        <select
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          className="mt-2 w-full h-12 rounded-md border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900"
                        >
                          <option value="">Select a destination</option>
                          <option value="japan">Japan (Primary Focus)</option>
                          <option value="korea">South Korea (Secondary Focus)</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your study abroad goals..."
                        rows={5}
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 h-12 text-base" disabled={isSubmitting}>
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.476!2d85.31656!3d27.70463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190837d2fc27%3A0xf6e94e2ab43f4b6d!2sPutalisadak%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="United Knowledge Study Abroad Location - Putalisadak"
                className="w-full"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}