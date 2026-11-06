import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only close mobile menu on location change
    setIsMobileMenuOpen(false);
  }, [location]);

  // The bar is a pale stone strip over the floor, so the wordmark takes the ink colour.
  const textColorClass = 'text-ink';

  const navLinks = [
    { path: '/collections', label: 'Collections' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/sister-brands', label: 'Our Group' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${isScrolled || isMobileMenuOpen
        ? 'bg-[#faf7f2]/95 backdrop-blur-md py-4 shadow-[0_10px_30px_-18px_rgba(60,45,30,0.5)]'
        : 'bg-[#faf7f2]/85 backdrop-blur-md py-5 md:py-6'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-xl md:text-2xl font-serif tracking-[0.2em] md:tracking-[0.3em] hover:text-amber-500 transition-all duration-500 uppercase flex items-center ${textColorClass}`}
          >
            <span className="text-amber-500">C</span>
            <span>arpetologist</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative text-[15px] font-medium transition-colors duration-500 ${active ? 'text-oxblood' : 'text-ink/80 hover:text-oxblood'}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-oxblood transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </Link>
              );
            })}
            <Link to="/contact" className="btn btn-oxblood !px-6 !py-2.5">Visit the showroom</Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 -mr-2 ${textColorClass}`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#faf7f2] overflow-hidden"
          >
            <div className="px-6 pt-8 pb-12 space-y-5">
              {[{ path: '/', label: 'Home' }, ...navLinks].map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <Link
                    to={link.path}
                    className={`block font-display text-4xl font-light transition-colors ${location.pathname === link.path ? 'text-oxblood' : 'text-ink'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
