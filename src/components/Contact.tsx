import { useState, FormEvent } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const header = useScrollReveal(0.2);
  const form = useScrollReveal(0.2);
  const info = useScrollReveal(0.2);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative bg-stone-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`text-center mb-24 transition-all duration-1000 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6">Get In Touch</h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8" />
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our collections? Interested in visiting our showroom? We'd love
            to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            ref={form.ref}
            className={`transition-all duration-1000 ${
              form.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-700 mb-2 tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-neutral-700 mb-2 tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-neutral-700 mb-2 tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm text-neutral-700 mb-2 tracking-wide">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:border-amber-600 transition-colors"
                >
                  <option value="">Select a collection</option>
                  <option value="turkish">Turkish Carpets</option>
                  <option value="handwoven">Handwoven Carpets</option>
                  <option value="luxury">Designer & Luxury</option>
                  <option value="vintage">Vintage & Antique</option>
                  <option value="showroom">Showroom Visit</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-neutral-700 mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-sm transition-colors flex items-center justify-center gap-2 tracking-wider uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send size={18} />
                    Send Enquiry
                  </>
                )}
              </button>
            </form>
          </div>

          <div
            ref={info.ref}
            className={`transition-all duration-1000 delay-300 ${
              info.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl font-serif text-neutral-900 mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-neutral-900 font-medium mb-1">Showroom Address</p>
                      <p className="text-neutral-600 leading-relaxed">
                        123 Heritage Lane
                        <br />
                        Design District, City Center
                        <br />
                        Postal Code
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-neutral-900 font-medium mb-1">Phone</p>
                      <p className="text-neutral-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-neutral-900 font-medium mb-1">Email</p>
                      <p className="text-neutral-600">info@carpetologist.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-100 p-8 rounded-sm border border-amber-200">
                <h4 className="text-xl font-serif text-neutral-900 mb-4">Schedule a Private Viewing</h4>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  For a more personalized experience, schedule a private viewing where our experts
                  can provide dedicated attention to your specific needs and preferences.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  Please mention your preferred date and time in the message above, and we'll
                  confirm your appointment.
                </p>
              </div>

              <div className="relative h-64 overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://images.pexels.com/photos/6045093/pexels-photo-6045093.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Carpetologist showroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
