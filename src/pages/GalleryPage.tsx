import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { Invitation } from '../components/Invitation';

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
            <div className="min-h-screen pt-36 md:pt-44 pb-24 md:pb-40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
                        <h1 className="md:col-span-8 display-lg font-light text-ink">The curated gallery</h1>
                        <p className="md:col-span-4 text-lg text-ink/75 leading-relaxed">
                            {GALLERY_IMAGES.length} carpets shown in real rooms. Filter by tradition and tap any piece to see it larger.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-16" role="tablist" aria-label="Filter by tradition">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                role="tab"
                                aria-selected={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 text-sm transition-colors duration-500 ${activeCategory === cat
                                    ? 'bg-oxblood text-ivory'
                                    : 'bg-[#faf7f2] text-ink/70 hover:text-ink shadow-[0_10px_18px_-14px_rgba(60,45,30,0.5)]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
                        <AnimatePresence>
                            {filteredImages.map((image) => (
                                <motion.button
                                    type="button"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    key={image.id}
                                    className="break-inside-avoid relative group block w-full text-left mb-4 md:mb-6"
                                    onClick={() => setSelectedImage(image)}
                                    aria-label={`View ${image.title}`}
                                >
                                    <div className="relative overflow-hidden bg-[#faf7f2]">
                                        <img
                                            src={image.src}
                                            alt={`${image.title}, a ${image.category.toLowerCase()} carpet`}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-auto block transition-transform duration-[1.5s] ease-out "
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-5 pt-16 bg-gradient-to-t from-ink/90 to-transparent translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-500">
                                            <p className="font-display text-2xl text-ivory leading-none">{image.title}</p>
                                            <p className="mt-1 text-sm text-brass-light">{image.category}</p>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            role="dialog"
                            aria-modal="true"
                            aria-label={selectedImage.title}
                            className="fixed inset-0 z-[1001] bg-ink/95 flex items-center justify-center p-6 md:p-12"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 md:top-8 md:right-8 p-2 text-ivory/70 hover:text-ivory transition-colors"
                                onClick={() => setSelectedImage(null)}
                                aria-label="Close"
                            >
                                <X size={36} strokeWidth={1.25} />
                            </button>

                            <motion.div
                                initial={{ scale: 0.94, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.94, opacity: 0 }}
                                className="relative max-w-5xl max-h-[88vh] w-full flex flex-col items-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="max-h-[75vh] w-auto object-contain"
                                />
                                <div className="mt-6 text-center">
                                    <h3 className="text-4xl font-display font-light text-ivory">{selectedImage.title}</h3>
                                    <p className="mt-1 text-brass-light">{selectedImage.category}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <Invitation />
        </PageTransition>
    );
};
