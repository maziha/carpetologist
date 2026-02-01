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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Only close mobile menu on location change
    setIsMobileMenuOpen(false);
  }, [location]);

  // Define routes that have light backgrounds where white text would be invisible
  const lightPages = ['/gallery', '/sister-brands', '/contact'];
  const isLightPage = lightPages.includes(location.pathname);

  // Determine text color based on scroll state and page type
  // If scrolled, always light text on dark bg.
  // If not scrolled and on a light page, dark text on transparent bg.
  // Otherwise (home/collections), light text on dark/transparent bg.
  const textColorClass = isScrolled || !isLightPage ? 'text-white' : 'text-neutral-900';
  const navTextClass = isScrolled || !isLightPage ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900';

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/sister-brands', label: 'The Group' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${isScrolled
        ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-white/5 py-4'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-serif tracking-[0.3em] hover:text-amber-500 transition-all duration-500 uppercase flex items-center ${textColorClass}`}
          >
            <span className="text-amber-500">C</span>
            <span>arpetologist</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] tracking-[0.4em] transition-all duration-500 uppercase font-light relative group ${location.pathname === link.path
                  ? 'text-amber-500'
                  : navTextClass
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  initial={false}
                  animate={{
                    width: location.pathname === link.path ? '100%' : '0%',
                  }}
                  whileHover={{ width: '100%' }}
                  className="absolute -bottom-2 left-0 h-px bg-amber-500 transition-all duration-500"
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${textColorClass}`}
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
            className="md:hidden bg-neutral-950 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-12 space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-xl font-serif italic transition-colors ${location.pathname === link.path ? 'text-amber-500' : 'text-neutral-300'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
