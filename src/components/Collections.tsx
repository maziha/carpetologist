import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import local images from assets/images
import turkishImg from '../assets/images/IMG_20260201_151239.jpg';
import persianImg from '../assets/images/IMG_20260201_151148.jpg';
import indianImg from '../assets/images/IMG_20260201_151048.jpg';
import designerImg from '../assets/images/IMG_20260201_150917.jpg';

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  routeCategory: string; // Add route parameter for filtered gallery
}

interface CollectionsProps {
  hideHeader?: boolean;
}

export const Collections = ({ hideHeader = false }: CollectionsProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();

  const collections: Collection[] = [
    {
      id: 'turkish',
      title: 'Turkish',
      subtitle: 'Anatolian Tradition',
      description:
        'Carpets from the heart of Turkey, featuring traditional motifs and natural dyes.',
      image: turkishImg,
      routeCategory: 'Turkish',
    },
    {
      id: 'persian',
      title: 'Persian',
      subtitle: 'Imperial Craft',
      description:
        'Intricate designs and masterful weaving techniques from the cradle of carpet making.',
      image: persianImg,
      routeCategory: 'Persian'
    },
    {
      id: 'indian',
      title: 'Indian',
      subtitle: 'Vibrant Heritage',
      description:
        'A celebration of color and patterns inspired by the rich cultural tapestry of India.',
      image: indianImg,
      routeCategory: 'Indian'
    },
    {
      id: 'designer',
      title: 'Designer',
      subtitle: 'Modern Luxury',
      description:
        'Contemporary masterpieces that blend traditional quality with modern aesthetics.',
      image: designerImg,
      routeCategory: 'Designer'
    },
  ];

  const handleExplore = (category: string) => {
    // Navigate to gallery with state or query param. For simplicity let's use state if GalleryPage supported it, or just hash/search.
    // Since GalleryPage uses local state for activeCategory, passing state via navigation is cleanest.
    navigate('/gallery', { state: { category } });
  };

  return (
    <section className="relative bg-neutral-900 py-32">
      <div className="max-w-7xl mx-auto px-6">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <p className="text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-4">
              Curated Selection
            </p>
            <h2 className="text-6xl md:text-7xl font-serif text-white mb-8 italic tracking-tight">
              The Legacy
            </h2>
            <div className="h-px w-24 mx-auto bg-white/10 mb-8" />
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative overflow-hidden group shadow-2xl rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleExplore(collection.routeCategory)}
            >
              <div className="relative h-96 md:h-[650px] overflow-hidden">
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  animate={{ scale: hoveredId === collection.id ? 1.05 : 1 }}
                  transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/60 transition-all duration-700" />
                <div className="absolute inset-0 border border-white/5 m-4 rounded-2xl" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-12 space-y-6">
                <motion.p
                  animate={{ y: hoveredId === collection.id ? 0 : 5, opacity: hoveredId === collection.id ? 1 : 0.7 }}
                  className="text-[10px] tracking-[0.4em] text-amber-400 uppercase font-sans"
                >
                  {collection.subtitle}
                </motion.p>
                <h3 className="text-4xl font-serif text-white italic tracking-tight">
                  {collection.title}
                </h3>

                <AnimatePresence>
                  {hoveredId === collection.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-neutral-400 leading-relaxed font-light font-sans mb-8">
                        {collection.description}
                      </p>
                      <button
                        className="flex items-center gap-6 text-white group/btn"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent double clicking if parent is clickable
                          handleExplore(collection.routeCategory)
                        }}
                      >
                        <span className="tracking-[0.4em] uppercase text-[9px]">Explore Gallery</span>
                        <div className="relative w-12 h-px bg-white/30 overflow-hidden">
                          <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute inset-0 bg-amber-500"
                          />
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
