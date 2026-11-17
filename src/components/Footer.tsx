import { Instagram, Mail, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const linkClass = 'text-ink/75 hover:text-oxblood transition-colors duration-300';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="floor floor-warm text-ink/75 overflow-hidden">
      <div aria-hidden className="skirting h-5 md:h-7" />
      <div className="h-16 md:h-24" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20 md:mb-28">
          <div className="md:col-span-5 space-y-8">
            <p className="font-display text-3xl md:text-4xl font-light text-ink leading-tight max-w-md">
              Where heritage meets artistry in every imported masterpiece.
            </p>
            <p className="max-w-sm leading-relaxed">
              A part of the KMS Traders group, based in Muvattupuzha, Ernakulam, Kerala.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-ink/70 hover:text-oxblood transition-colors" aria-label="Visit our Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-ink/70 hover:text-oxblood transition-colors" aria-label="Visit our Facebook"><Facebook size={20} strokeWidth={1.5} /></a>
              <a href="mailto:kmstraders25@gmail.com" className="text-ink/70 hover:text-oxblood transition-colors" aria-label="Email Us"><Mail size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="eyebrow eyebrow-plain mb-7" style={{ fontFamily: 'Inter, sans-serif' }}>Collections</h4>
            <ul className="space-y-3">
              <li><Link to="/collections" className={linkClass}>Turkish heritage</Link></li>
              <li><Link to="/collections" className={linkClass}>Artisan weaves</Link></li>
              <li><Link to="/collections" className={linkClass}>Modern luxury</Link></li>
              <li><Link to="/gallery" className={linkClass}>Full gallery</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow eyebrow-plain mb-7" style={{ fontFamily: 'Inter, sans-serif' }}>The group</h4>
            <ul className="space-y-3">
              <li><Link to="/horizon" className={linkClass}>Horizon Ventures</Link></li>
              <li><Link to="/kms" className={linkClass}>KMS Carpets</Link></li>
              <li><Link to="/sister-brands" className={linkClass}>Our brands</Link></li>
              <li><Link to="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="eyebrow eyebrow-plain mb-7" style={{ fontFamily: 'Inter, sans-serif' }}>Visit</h4>
            <ul className="space-y-3">
              <li><a href="mailto:kmstraders25@gmail.com" className={linkClass}>kmstraders25@gmail.com</a></li>
              <li><a href="tel:+917558077632" className={linkClass}>+91 75580 77632</a></li>
              <li>Muvattupuzha, Ernakulam<br />Kerala, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-10 md:pb-16">
        <img src="/brand/carpetologist-logo-dark-on-light.svg" alt="Carpetologist" className="w-full h-auto block" />
      </div>

      <div className="bg-[#faf7f2]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-ink/60">
          <p>&copy; {currentYear} KMS Traders — Carpetologist. Muvattupuzha, Ernakulam, Kerala.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-oxblood transition-colors">Privacy</a>
            <a href="#" className="hover:text-oxblood transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
