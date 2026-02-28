import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

// Import local images from assets/images
import showroom1 from '../assets/images/IMG_20260201_150254.jpg';
import showroom2 from '../assets/images/IMG_20260201_150615.jpg';
import showroomBg from '../assets/images/IMG_20260201_150545.jpg';

interface ShowroomProps {
  hideHeader?: boolean;
}

export const Showroom = ({ hideHeader = false }: ShowroomProps) => {
  return (
    <section className="relative bg-stone-50 py-40 overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={showroomBg}
          className="w-full h-full object-cover"
          alt="Showroom bg"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >
            <p className="text-[10px] tracking-[0.6em] text-amber-600 uppercase mb-6">
              The Gallery
            </p>
            <h2 className="text-6xl md:text-8xl font-serif text-neutral-900 mb-10 italic tracking-tighter">
              An Immersion in Art
            </h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-24">
          <div className="grid grid-cols-2 gap-8 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] shadow-2xl overflow-hidden mt-20 rounded-2xl"
            >
              <img
                src={showroom1}
                alt="Showroom gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[450px] shadow-2xl overflow-hidden rounded-2xl"
            >
              <img
                src={showroom2}
                alt="Carpet selection"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
              />
            </motion.div>
          </div>

          <div className="space-y-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-16 border border-stone-200 relative group shadow-sm"
            >
              <div className="absolute top-0 right-0 p-8">
                <span className="text-[8px] tracking-[0.5em] text-amber-600/40 uppercase">A-01</span>
              </div>
              <h3 className="text-3xl font-serif text-neutral-900 mb-10 italic tracking-wide">The Boutique Experience</h3>
              <p className="text-neutral-600 leading-[2] text-sm font-light font-sans mb-10">
                Our showroom is a curated space where time slows down. Discover our full inventory under museum-quality lighting, guided by experts who understand the history of every knot.
              </p>
              <div className="flex items-center gap-10">
                <div className="flex flex-col gap-2">
                  <span className="text-amber-600 text-xs font-serif italic">Location</span>
                  <span className="text-neutral-400 text-[10px] tracking-widest uppercase">Muvattupuzha, Ernakulam</span>
                </div>
                <div className="h-10 w-px bg-stone-200" />
                <div className="flex flex-col gap-2">
                  <span className="text-amber-600 text-xs font-serif italic">Availability</span>
                  <span className="text-neutral-400 text-[10px] tracking-widest uppercase">By Appointment</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-amber-600/50 transition-colors duration-500">
                  <MapPin size={18} className="text-amber-600" strokeWidth={1} />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">View Map</p>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-amber-600/50 transition-colors duration-500">
                  <Clock size={18} className="text-amber-600" strokeWidth={1} />
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">Open Hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
