import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-amber-100 mb-4">Carpetologist</h3>
            <p className="text-sm leading-relaxed">
              Where heritage meets artistry in every handwoven masterpiece.
            </p>
          </div>

          <div>
            <h4 className="text-amber-100 font-medium mb-4 tracking-wide">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-amber-300 transition-colors">Turkish Carpets</button>
              </li>
              <li>
                <button className="hover:text-amber-300 transition-colors">Handwoven</button>
              </li>
              <li>
                <button className="hover:text-amber-300 transition-colors">Designer & Luxury</button>
              </li>
              <li>
                <button className="hover:text-amber-300 transition-colors">Vintage & Antique</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-100 font-medium mb-4 tracking-wide">Sister Brands</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-amber-300 transition-colors">Horizon Ventures</button>
              </li>
              <li>
                <button className="hover:text-amber-300 transition-colors">KMS Carpets</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-100 font-medium mb-4 tracking-wide">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-amber-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-amber-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:info@carpetologist.com"
                className="text-neutral-400 hover:text-amber-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm">
              <a
                href="mailto:info@carpetologist.com"
                className="hover:text-amber-300 transition-colors"
              >
                info@carpetologist.com
              </a>
            </p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} Carpetologist. All rights reserved. Handcrafted with passion for
            timeless beauty.
          </p>
        </div>
      </div>
    </footer>
  );
};
