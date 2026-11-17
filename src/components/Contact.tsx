import { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface ContactProps {
  hideHeader?: boolean;
}

// Update these with your actual details
const BUSINESS_EMAIL = 'kmstraders25@gmail.com';
const WHATSAPP_NUMBER = '917558077632'; // Format: country code + number, no +

const fieldClass =
  'w-full bg-transparent border-0 border-b border-ink/30 px-0 py-3 text-lg text-ink placeholder:text-ink/35 focus:outline-none focus:border-oxblood transition-colors';
const labelClass = 'block text-[11px] font-medium uppercase tracking-[0.22em] text-ink/65 mb-1';

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

  const details = [
    { Icon: MapPin, label: 'Showroom', value: <>Muvattupuzha, Ernakulam<br />Kerala, India</> },
    { Icon: Phone, label: 'Concierge', value: <a href="tel:+917558077632" className="hover:text-oxblood transition-colors">+91 75580 77632</a> },
    { Icon: Mail, label: 'Enquiries', value: <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-oxblood transition-colors break-all">{BUSINESS_EMAIL}</a> },
  ];

  return (
    <section id="contact" className="relative pt-36 md:pt-44 pb-28 md:pb-44">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {!hideHeader && (
          <div className="mb-16 md:mb-24 max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 md:mt-8 display-lg font-light text-ink">Let&rsquo;s find the carpet for <em className="italic text-oxblood">your floor.</em></h1>
            <p className="mt-8 text-lg text-ink/75 max-w-xl leading-relaxed">
              Interested in a collection, a custom size or a visit to the showroom? Tell us a little and we will reply personally.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-12 gap-14 md:gap-10">
          <Reveal className="md:col-span-7 bg-[#fbf9f5] text-ink p-7 md:p-14 shadow-[0_1px_2px_rgba(60,45,30,0.18),0_34px_48px_-30px_rgba(60,45,30,0.6)]">
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-light mb-10">Send an enquiry</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClass}>Full name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className={fieldClass} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="interest" className={labelClass}>Area of interest</label>
                  <input type="text" id="interest" name="interest" value={formData.interest} onChange={handleChange} placeholder="Persian carpets, artificial grass…" className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your room and what you have in mind…" className={`${fieldClass} resize-none`} />
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleEmailClick}
                  disabled={!isFormValid}
                  className={`btn gap-3 ${isFormValid ? 'btn-ink' : 'bg-ink/15 text-ink/40 cursor-not-allowed'}`}
                >
                  <Mail size={16} /> Send via email
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  disabled={!isFormValid}
                  className={`btn gap-3 ${isFormValid ? 'bg-[#1f7a4d] text-white hover:bg-[#186540]' : 'bg-ink/15 text-ink/40 cursor-not-allowed'}`}
                >
                  <MessageCircle size={16} /> Send via WhatsApp
                </button>
              </div>
              <p className="text-sm text-ink/60">
                Each button opens your email app or WhatsApp with the message ready to send.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 space-y-10">
            <div><p className="eyebrow">The showroom</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-light text-ink">Visit the atelier</h2></div>
            <ul>
              {details.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-start gap-5 border-t border-ink/20 py-6 last:border-b">
                  <Icon className="w-5 h-5 mt-1 text-oxblood shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-brass-dark">{label}</p>
                    <p className="mt-2 font-display text-2xl text-ink leading-snug">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="frame h-72 md:h-80 w-full overflow-hidden">
              <iframe
                title="Carpetologist showroom on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.334860997988!2d76.5702279557532!3d9.989268241847988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e7005d68f86b%3A0xb80a03309c1f26b3!2sCarpetologist!5e0!3m2!1sen!2sin!4v1769933453667!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.6) contrast(1.05)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
