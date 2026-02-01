import { motion } from 'framer-motion';
import { Sparkles, HandMetal, Award } from 'lucide-react';

// Import local image for About section
import aboutImg from '../assets/images/IMG_20260201_151203.jpg';

interface AboutProps {
  hideHeader?: boolean;
}

export const About = ({ hideHeader = false }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } // Fixed previous lint error: ease string type
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: 'Authentic Heritage',
      description: 'Every carpet tells a story of Turkish craftsmanship passed down through generations.',
    },
    {
      icon: HandMetal,
      title: 'Global Collections',
      description: 'Meticulously sourced from skilled artisans using time-honored techniques and natural materials.',
    },
    {
      icon: Award,
      title: 'Luxury Design',
      description: 'Curated collections that elevate interiors with timeless elegance and artistic expression.',
    },
  ];

  return (
    <section id="about" className="relative bg-white py-40 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >
            <p className="text-[10px] tracking-[0.6em] text-amber-600 uppercase mb-6">Discovery</p>
            <h2 className="text-6xl md:text-7xl font-serif text-neutral-900 mb-10 italic tracking-tight">
              Art of Carpetology
            </h2>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600/30 to-transparent mb-10" />
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-[1.8] font-light font-sans">
              At Carpetologist, we believe that a carpet is more than a floor covering—it is a
              canvas of culture, a testament to artistry, and a bridge between heritage and
              contemporary living.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-32 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="relative h-[700px] overflow-hidden">
              <img
                src={aboutImg}
                alt="Carpet detail"
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-neutral-900/5" />
            </div>
            {/* Artistic border overlay */}
            <div className="absolute -inset-4 border border-amber-600/20 translate-x-8 translate-y-8 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-12"
          >
            <h3 className="text-5xl font-serif text-neutral-900 italic tracking-tight">Our Philosophy</h3>
            <div className="space-y-8 text-neutral-600 font-light font-sans leading-[1.9] text-lg">
              <p>
                Founded on a passion for preserving traditional weaving arts while embracing modern
                design sensibilities, Carpetologist sources the finest materials and partners with
                master weavers across Turkey.
              </p>
              <p>
                Each piece in our collection represents months of dedicated craftsmanship, where
                natural fibers, organic dyes, and intricate patterns come together to create
                functional art.
              </p>
              <div className="pt-8">
                <button className="group relative px-10 py-5 overflow-hidden">
                  <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase text-neutral-900 transition-colors duration-500 group-hover:text-white">Request Private Selection</span>
                  <div className="absolute inset-0 border border-neutral-900/20 group-hover:bg-neutral-900 transition-all duration-500" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-12 bg-stone-50 border border-stone-100 backdrop-blur-sm hover:bg-white hover:border-amber-200 transition-all duration-700 shadow-sm"
            >
              <div className="mb-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                <feature.icon className="w-12 h-12 text-amber-600" strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-serif text-neutral-900 italic mb-4 tracking-tight">{feature.title}</h4>
              <p className="text-neutral-500 group-hover:text-neutral-600 font-light font-sans text-sm leading-relaxed transition-colors duration-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
