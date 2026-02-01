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
              Where heritage meets artistry in every imported masterpiece. Since 1978, we have been the bridge between Anatolian mastery and global interiors.
            </p>
            <div className="flex gap-8">
              <motion.a whileHover={{ y: -3 }} href="#" className="text-neutral-500 hover:text-white transition-colors"><Instagram size={18} strokeWidth={1.5} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-neutral-500 hover:text-white transition-colors"><Facebook size={18} strokeWidth={1.5} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="text-neutral-500 hover:text-white transition-colors"><Mail size={18} strokeWidth={1.5} /></motion.a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-[10px] text-amber-500 font-sans tracking-[0.4em] uppercase mb-12">Collections</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.4em] uppercase font-light">
              <li><Link to="/collections" className="hover:text-amber-400 transition-all duration-300">Turkish Heritage</Link></li>
              <li><Link to="/collections" className="hover:text-amber-400 transition-all duration-300">Artisan Weaves</Link></li>
              <li><Link to="/collections" className="hover:text-amber-400 transition-all duration-300">Modern Luxury</Link></li>
              <li><Link to="/collections" className="hover:text-amber-400 transition-all duration-300">Antiques</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] text-amber-500 font-sans tracking-[0.4em] uppercase mb-12">Organization</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.4em] uppercase font-light">
              <li><Link to="/sister-brands" className="hover:text-amber-400 transition-all duration-300">Horizon Ventures</Link></li>
              <li><Link to="/sister-brands" className="hover:text-amber-400 transition-all duration-300">KMS Carpets</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-all duration-300">Showroom</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-[10px] text-amber-500 font-sans tracking-[0.4em] uppercase mb-12">Contact</h4>
            <div className="space-y-4 text-[10px] tracking-[0.3em] font-light">
              <p className="text-neutral-300">kmstraders25@gmail.com</p>
              <p className="text-neutral-300">+1 (555) 123-4567</p>
            </div>
            <div className="pt-4">
              <p className="text-[9px] text-neutral-600 leading-relaxed uppercase tracking-widest">
                123 Heritage Lane, Design District<br />City Center, PC 0012
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] tracking-[0.5em] uppercase text-neutral-700">
            &copy; {currentYear} Carpetologist. Handcrafted Heritage.
          </p>
          <div className="flex gap-12 text-[9px] tracking-[0.4em] uppercase text-neutral-700">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
