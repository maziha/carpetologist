import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local image for Hero
import heroBg from '../assets/images/IMG_20260201_150937.jpg'; // Using a high-res aesthetic image from the gallery

export const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-neutral-950">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: y1, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: 'brightness(0.35) contrast(1.1)',
          }}
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950" />

      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ y: y2, opacity }}
      >
        <div className="max-w-5xl space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-[10px] md:text-xs text-amber-500 font-sans tracking-[0.8em] uppercase">
              The Collection
            </p>
            <h1 className="text-7xl md:text-9xl font-serif text-white tracking-tighter leading-[0.9] italic">
              Carpetologist
            </h1>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
            className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light font-sans tracking-wide"
          >
            Meticulously sourced, inspired by history. Discover the timeless elegance of authentic global artistry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-12"
          >
            <button
              onClick={() => navigate('/collections')}
              className="group relative px-16 py-6 bg-white text-black text-[10px] tracking-[0.5em] uppercase overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Explore Collection</span>
              <div className="absolute inset-0 bg-amber-600 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[8px] tracking-[0.4em] uppercase text-neutral-500 rotate-90 mb-8 whitespace-nowrap">Scroll to explore</span>
          <button className="text-amber-500/50 hover:text-amber-500 transition-all animate-bounce">
            <ChevronDown size={32} strokeWidth={1} />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
