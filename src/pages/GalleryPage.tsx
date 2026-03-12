import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { X, ZoomIn } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/ui/SEO';

import img1 from '../assets/images/IMG_20260201_151952.jpg';
import img2 from '../assets/images/IMG_20260201_150136.jpg';
import img3 from '../assets/images/IMG_20260201_150218.jpg';
import img4 from '../assets/images/IMG_20260201_150254.jpg';
import img5 from '../assets/images/IMG_20260201_150433.jpg';
import img6 from '../assets/images/IMG_20260201_150516.jpg';
import img7 from '../assets/images/IMG_20260201_150545.jpg';
import img8 from '../assets/images/IMG_20260201_150615.jpg';
import img9 from '../assets/images/IMG_20260201_150646.jpg';
import img10 from '../assets/images/IMG_20260201_150729.jpg';
import img11 from '../assets/images/IMG_20260201_150814.jpg';
import img12 from '../assets/images/IMG_20260201_150852.jpg';
import img13 from '../assets/images/IMG_20260201_150917.jpg';
const img14 = '/assets/heroBg.webp';
import img15 from '../assets/images/IMG_20260201_150953.jpg';
import img16 from '../assets/images/IMG_20260201_151018.jpg';
import img17 from '../assets/images/IMG_20260201_151048.jpg';
import img18 from '../assets/images/IMG_20260201_151104.jpg';
import img19 from '../assets/images/IMG_20260201_151121.jpg';
import img20 from '../assets/images/IMG_20260201_151148.jpg';
import img21 from '../assets/images/IMG_20260201_151203.jpg';
import img22 from '../assets/images/IMG_20260201_151239.jpg';
import img23 from '../assets/images/IMG_20260201_151305.jpg';
import img24 from '../assets/images/IMG_20260201_151326.jpg';

const CATEGORIES = ["All", "Turkish", "Persian", "Indian", "Designer"];

const GALLERY_IMAGES = [
    { id: 1, src: img1, category: "Designer", title: "Nordic Loom" },
    { id: 2, src: img2, category: "Designer", title: "Sahara Ridge" },
    { id: 3, src: img3, category: "Designer", title: "Urban Weave" },
    { id: 4, src: img4, category: "Designer", title: "Abstract Mist" },
    { id: 5, src: img5, category: "Turkish", title: "Vintage Patina" },
    { id: 6, src: img6, category: "Designer", title: "Sunburst Geo" },
    { id: 7, src: img7, category: "Indian", title: "Dune Texture" },
    { id: 8, src: img8, category: "Designer", title: "Expressionist Stroke" },
    { id: 9, src: img9, category: "Indian", title: "Zen Border" },
    { id: 10, src: img10, category: "Designer", title: "Monochrome Frame" },
    { id: 11, src: img11, category: "Indian", title: "Soft Geometry" },
    { id: 12, src: img12, category: "Indian", title: "Natural Fiber" },
    { id: 13, src: img13, category: "Designer", title: "Modern Abstract" },
    { id: 14, src: img14, category: "Designer", title: "Contemporary Grey" },
    { id: 15, src: img15, category: "Designer", title: "Graphite Weave" },
    { id: 16, src: img16, category: "Designer", title: "Silver Lining" },
    { id: 17, src: img17, category: "Indian", title: "Textured Cream" },
    { id: 18, src: img18, category: "Persian", title: "Classic Medallion" },
    { id: 19, src: img19, category: "Persian", title: "Royal Heritage" },
    { id: 20, src: img20, category: "Persian", title: "Royal Tabriz" },
    { id: 21, src: img21, category: "Persian", title: "Imperial Isfahan" },
    { id: 22, src: img22, category: "Turkish", title: "Crimson Kashan" },
    { id: 23, src: img23, category: "Persian", title: "Azure Heriz" },
    { id: 24, src: img24, category: "Turkish", title: "Ottoman Palace" }
];

export const GalleryPage = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
    const [filteredImages, setFilteredImages] = useState(GALLERY_IMAGES);

    useEffect(() => {
        if (location.state && location.state.category) {
            setActiveCategory(location.state.category);
        }
    }, [location]);

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredImages(GALLERY_IMAGES);
        } else {
            setFilteredImages(GALLERY_IMAGES.filter(img => img.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <PageTransition>
            <SEO
                title="Curated Rug Gallery | Imported Carpet Designs Kerala"
                description="View our curated gallery of luxury carpets. From Turkish kilims to Persian masterpieces, find the perfect design for your home in Ernakulam."
            />
            <div className="bg-stone-50 min-h-screen pt-40 pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <p className="text-[10px] tracking-[0.5em] text-amber-600 uppercase mb-6">
                            The Collection
                        </p>
                        <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-8 italic tracking-tight">
                            Curated Gallery
                        </h2>
                        <div className="h-px w-24 mx-auto bg-amber-600/30 mb-12" />

                        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-500 pb-2 border-b border-transparent ${activeCategory === cat
                                        ? 'text-amber-600 border-amber-600'
                                        : 'text-neutral-400 hover:text-neutral-900'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    key={image.id}
                                    className="break-inside-avoid relative group cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="relative overflow-hidden bg-neutral-200 rounded-2xl aspect-[16/11] md:aspect-square lg:aspect-[3/4]">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-all duration-500" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full">
                                                <ZoomIn className="text-white w-6 h-6" strokeWidth={1.5} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <span className="text-xs font-serif italic text-neutral-900">{image.title}</span>
                                        <span className="text-[9px] uppercase tracking-widest text-neutral-400">{image.category}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[1001] bg-neutral-950/95 flex items-center justify-center p-6 md:p-12"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={40} strokeWidth={1} />
                            </button>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="max-h-[75vh] w-auto object-contain shadow-2xl rounded-2xl"
                                />
                                <div className="mt-8 text-center space-y-2">
                                    <h3 className="text-3xl font-serif italic text-white">{selectedImage.title}</h3>
                                    <div className="flex items-center justify-center gap-4">
                                        <span className="h-px w-8 bg-amber-600/50"></span>
                                        <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500">{selectedImage.category}</p>
                                        <span className="h-px w-8 bg-amber-600/50"></span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </PageTransition>
    );
};
