import { Instagram, Mail, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-white/5 text-neutral-500 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-32 relative">
          {/* Brand Column */}
          <div className="space-y-10 col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif text-white tracking-[0.4em] uppercase">Carpetologist</h3>
            <p className="text-sm leading-relaxed font-light font-sans text-neutral-400">
              A part of the KMS Traders group, based in Muvattupuzha, Ernakulam, Kerala. Where heritage meets artistry in every imported masterpiece.
            </p>
            <div className="flex gap-8">
              <motion.a whileHover={{ y: -3 }} href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Visit our Instagram"><Instagram size={18} strokeWidth={1.5} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Visit our Facebook"><Facebook size={18} strokeWidth={1.5} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Email Us"><Mail size={18} strokeWidth={1.5} /></motion.a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] text-amber-500 font-sans tracking-[0.4em] uppercase mb-12">Collections</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.4em] uppercase font-light">
              <li><Link to="/collections" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">Turkish Heritage</Link></li>
              <li><Link to="/collections" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">Artisan Weaves</Link></li>
              <li><Link to="/collections" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">Modern Luxury</Link></li>
              <li><Link to="/collections" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">Antiques</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-amber-500 font-sans tracking-[0.4em] uppercase mb-12">KMS Traders Group</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.4em] uppercase font-light">
              <li><Link to="/horizon" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">Horizon Ventures</Link></li>
              <li><Link to="/kms" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">KMS Carpets</Link></li>
              <li><Link to="/sister-brands" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">Our Brands</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-amber-500 transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-[10px] text-amber-500 font-sans tracking-[0.4em] uppercase mb-12">Contact</h4>
            <div className="space-y-4 text-[10px] tracking-[0.3em] font-light">
              <p className="text-neutral-300">kmstraders25@gmail.com</p>
              <p className="text-neutral-300">+91 75580 77632</p>
            </div>
            <div className="pt-4">
              <p className="text-[9px] text-neutral-400 leading-relaxed uppercase tracking-widest">
                Muvattupuzha, Ernakulam<br />Kerala, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] tracking-[0.5em] uppercase text-neutral-400">
            &copy; {currentYear} KMS Traders — Carpetologist. Muvattupuzha, Ernakulam, Kerala.
          </p>
          <div className="flex gap-12 text-[9px] tracking-[0.4em] uppercase text-neutral-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="Privacy Policy">Privacy</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Terms of Service">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
