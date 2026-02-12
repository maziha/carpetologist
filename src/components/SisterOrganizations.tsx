import { motion } from 'framer-motion';
import { Leaf, Grid3x3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local images from assets/images
import horizonImg from '../assets/images/IMG_20260201_150852.jpg';
import kmsImg from '../assets/images/IMG_20260201_150218.jpg';


interface SisterOrganizationsProps {
  hideHeader?: boolean;
}

export const SisterOrganizations = ({ hideHeader = false }: SisterOrganizationsProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-stone-50 py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >
            <p className="text-[10px] tracking-[0.5em] text-amber-600 font-medium uppercase mb-6">
              Synergy
            </p>
            <h2 className="text-6xl md:text-7xl font-serif text-neutral-900 mb-10 italic tracking-tight">
              The Group
            </h2>
            <div className="h-px w-24 mx-auto bg-amber-600/30 mb-8" />
          </motion.div>
        )}

        <div className="space-y-48">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-2xl"
            >
              <img
                src={horizonImg}
                alt="Horizon Ventures Landscape"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-900/10" />
              <div className="absolute bottom-12 left-12 flex items-center gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-white" strokeWidth={1} />
                </div>
                <span className="text-white text-[10px] tracking-[0.4em] uppercase font-light">Horizon Ventures</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-10"
            >
              <h3 className="text-5xl font-serif text-neutral-900 italic tracking-tighter leading-none">The Landscape <br /> of Tomorrow</h3>
              <p className="text-neutral-600 leading-[2] font-light text-lg">
                Horizon Ventures creates evergreen landscapes that defy the elements. Specializing in premium artificial grass solutions, we transform outdoor voids into vibrant, maintenance-free sanctuaries of emerald perfection.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => navigate('/horizon')}
                  className="px-12 py-5 bg-neutral-900 text-white text-[10px] tracking-[0.4em] uppercase hover:bg-amber-600 transition-all duration-500 rounded-none"
                >
                  Explore Solutions
                </button>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="space-y-10 order-2 md:order-1"
            >
              <h3 className="text-5xl font-serif text-neutral-900 italic tracking-tighter leading-none">Versatility in <br /> Every Weave</h3>
              <p className="text-neutral-600 leading-[2] font-light text-lg">
                Engineered for excellence, KMS Carpets offers a comprehensive catalogue of high-performance flooring. Tailoring durability with contemporary design, we provide the foundational elegance for commercial and modern residential projects.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => navigate('/kms')}
                  className="px-12 py-5 border border-neutral-900/20 text-neutral-900 text-[10px] tracking-[0.4em] uppercase hover:bg-neutral-900 hover:text-white transition-all duration-500 rounded-none"
                >
                  View Catalogue
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] order-1 md:order-2 rounded-2xl"
            >
              <img
                src={kmsImg}
                alt="KMS Carpets"
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-900/10" />
              <div className="absolute bottom-12 right-12 flex items-center gap-6 flex-row-reverse">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <Grid3x3 className="w-8 h-8 text-white" strokeWidth={1} />
                </div>
                <span className="text-white text-[10px] tracking-[0.4em] uppercase font-light">KMS Carpets</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
