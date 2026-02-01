import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

interface ContactProps {
  hideHeader?: boolean;
}

// Update these with your actual details
const BUSINESS_EMAIL = 'kmstraders25@gmail.com';
const WHATSAPP_NUMBER = '917558077632'; // Format: country code + number, no +

export const Contact = ({ hideHeader = false }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateEmailContent = () => {
    const subject = `Enquiry from ${formData.name} - ${formData.interest || 'General'}`;
    const body = `Hello Carpetologist Team,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Area of Interest: ${formData.interest || 'Not specified'}

Message:
${formData.message}

---
Sent from carpetologist.com contact form
`;
    return { subject, body };
  };

  const handleEmailClick = () => {
    const { subject, body } = generateEmailContent();
    const mailtoLink = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleWhatsAppClick = () => {
    const { subject, body } = generateEmailContent();
    const whatsappMessage = `*${subject}*\n\n${body}`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="relative bg-white py-40">
      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <p className="text-[10px] tracking-[0.6em] text-amber-600 uppercase mb-6">
              Connect
            </p>
            <h2 className="text-6xl md:text-7xl font-serif text-neutral-900 mb-8 italic tracking-tight">Get In Touch</h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8" />
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light font-sans">
              Interested in our collections or visiting our showroom? We'd love to hear from you.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="space-y-10 bg-stone-50 p-12 border border-stone-100 shadow-sm relative group">
              <div className="absolute top-0 right-0 p-8">
                <span className="text-[8px] tracking-[0.5em] text-amber-600/40 uppercase">Enquiry Form</span>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <label htmlFor="name" className="block text-[10px] text-amber-600 uppercase tracking-[0.3em]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-neutral-900 focus:outline-none focus:border-amber-600 transition-colors font-light font-sans"
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="email" className="block text-[10px] text-amber-600 uppercase tracking-[0.3em]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-neutral-900 focus:outline-none focus:border-amber-600 transition-colors font-light font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label htmlFor="phone" className="block text-[10px] text-amber-600 uppercase tracking-[0.3em]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-neutral-900 focus:outline-none focus:border-amber-600 transition-colors font-light font-sans"
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="interest" className="block text-[10px] text-amber-600 uppercase tracking-[0.3em]">
                    Area of Interest
                  </label>
                  <input
                    type="text"
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    placeholder="e.g., Persian Carpets, Artificial Grass..."
                    className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-neutral-900 focus:outline-none focus:border-amber-600 transition-colors font-light font-sans placeholder:text-neutral-400 placeholder:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="message" className="block text-[10px] text-amber-600 uppercase tracking-[0.3em]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-0 py-3 bg-transparent border-b border-stone-200 text-neutral-900 focus:outline-none focus:border-amber-600 transition-colors resize-none font-light font-sans placeholder:text-neutral-400 placeholder:text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  onClick={handleEmailClick}
                  disabled={!isFormValid}
                  className={`group relative h-16 overflow-hidden transition-all duration-500 flex items-center justify-center gap-3 ${isFormValid
                    ? 'bg-neutral-900 hover:bg-amber-600 cursor-pointer'
                    : 'bg-neutral-300 cursor-not-allowed'
                    }`}
                >
                  <Mail size={16} className="text-white" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white">
                    Send via Email
                  </span>
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  disabled={!isFormValid}
                  className={`group relative h-16 overflow-hidden transition-all duration-500 flex items-center justify-center gap-3 ${isFormValid
                    ? 'bg-green-600 hover:bg-green-700 cursor-pointer'
                    : 'bg-neutral-300 cursor-not-allowed'
                    }`}
                >
                  <MessageCircle size={16} className="text-white" />
                  <span className="text-[9px] tracking-[0.3em] uppercase text-white">
                    Send via WhatsApp
                  </span>
                </button>
              </div>

              <p className="text-[10px] text-neutral-400 text-center pt-2">
                Click a button to open your email client or WhatsApp with the message ready to send.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-16 flex flex-col justify-center"
          >
            <div className="space-y-12">
              <h3 className="text-4xl font-serif text-neutral-900 italic tracking-tight">Visit The Atelier</h3>

              <div className="space-y-10">
                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-amber-600/30 transition-colors duration-500">
                    <MapPin className="w-5 h-5 text-amber-600" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-amber-600 uppercase tracking-[0.3em] font-medium">Headquarters</p>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light font-sans">
                      123 Heritage Lane, Design District<br />
                      Postal Code, City Center
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-amber-600/30 transition-colors duration-500">
                    <Phone className="w-5 h-5 text-amber-600" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-amber-600 uppercase tracking-[0.3em] font-medium">Concierge</p>
                    <p className="text-sm text-neutral-600 font-light font-sans">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-12 h-12 rounded-full border border-stone-100 flex items-center justify-center group-hover:border-amber-600/30 transition-colors duration-500">
                    <Mail className="w-5 h-5 text-amber-600" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] text-amber-600 uppercase tracking-[0.3em] font-medium">Enquiries</p>
                    <p className="text-sm text-neutral-600 font-light font-sans uppercase">kmstraders25@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map Section - Integrated directly into Contact component */}
              <div className="h-64 w-full overflow-hidden border border-stone-200 mt-8 relative group">
                <div className="absolute inset-0 bg-stone-50 z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.334860997988!2d76.5702279557532!3d9.989268241847988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e7005d68f86b%3A0xb80a03309c1f26b3!2sCarpetologist!5e0!3m2!1sen!2sin!4v1769933453667!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
