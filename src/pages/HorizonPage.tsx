import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { Check, Layers, Ruler, Grid3X3, Mail } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import SEO from '../components/ui/SEO';

// Using the Horizon image from assets
import horizonImg from '../assets/images/IMG_20260201_150852.jpg';

// Grass variety images
import grass2514Single from '../assets/images/2514SINGLE.jpg';
import grass2514Double from '../assets/images/2514DOUBLE.jpg';
import grass2524Double from '../assets/images/2524DOUBLE.jpg';
import grass3514Double from '../assets/images/3514DOUBLE.jpg';

// PVC Mat images
import cushionMatImg from '../assets/images/Cushion.jpg';
import sMatImg from '../assets/images/SMat.jpg';

const BUSINESS_EMAIL = 'horizonventuresmvpa@gmail.com';

export const HorizonPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        selectedProduct: '',
        message: ''
    });

    const features = [
        "UV Resistant Technology",
        "Zero Water Consumption",
        "Pet & Child Friendly",
        "Hyper-Realistic Texture",
        "Efficient Drainage"
    ];

    const grassProducts = [
        {
            id: 1,
            name: "25mm Single Layer 14 Stitches",
            height: "25mm",
            layers: "Single Layer",
            stitches: "14 Stitches",
            description: "Lightweight construction suitable for spaces with minimal foot traffic.",
            image: grass2514Single,
            badge: "Value Pick"
        },
        {
            id: 2,
            name: "25mm Double Layer 14 Stitches",
            height: "25mm",
            layers: "Double Layer",
            stitches: "14 Stitches",
            description: "Enhanced durability with dual-layer backing for improved resilience.",
            image: grass2514Double,
            badge: "Reinforced Standard"
        },
        {
            id: 3,
            name: "25mm Double Layer 24 Stitches",
            height: "25mm",
            layers: "Double Layer",
            stitches: "24 Stitches",
            description: "High-density weave providing exceptional durability and a fuller, more lush appearance. Our most popular choice.",
            image: grass2524Double,
            badge: "Best Seller"
        },
        {
            id: 4,
            name: "35mm Double Layer 14 Stitches",
            height: "35mm",
            layers: "Double Layer",
            stitches: "14 Stitches",
            description: "Taller pile height for a plush, ultra-realistic lawn feel.",
            image: grass3514Double,
            badge: "Ultra Plush"
        }
    ];

    const singleColourMats = {
        thickness: ["12mm", "15mm"],
        colors: ["Red", "Green", "Grey", "Black", "Blue", "Maroon"]
    };

    const doubleColourMats = {
        thickness: "4mm",
        colors: ["Red/Black", "Green/Black", "Grey/Black", "Red/Blue", "Blue/Black", "Beige/Brown"]
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateContent = () => {
        const subject = `Horizon Ventures Enquiry - ${formData.name}`;
        const body = `Hello Horizon Ventures Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nProduct Interested: ${formData.selectedProduct || 'Not specified'}\n\nMessage:\n${formData.message || 'Interested in your products.'}\n\n---\nSent from Horizon Ventures page\n`;
        return { subject, body };
    };

    const handleEmailClick = () => {
        const { subject, body } = generateContent();
        const mailtoLink = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    };

    const isFormValid = formData.name && formData.email;

    return (
        <PageTransition>
            <SEO
                title="Artificial Grass & PVC Mats Kerala | Horizon Ventures Muvattupuzha"
                description="Best artificial grass and PVC mat showroom in Ernakulam. Horizon Ventures (KMS Traders) provides UV resistant, pet-friendly turf and durable floor mats in Kerala."
            />
            <div className="bg-neutral-900 min-h-screen text-white">
                <Navigation />

                {/* Hero */}
                <div ref={containerRef} className="relative h-[80vh] overflow-hidden">
                    <motion.div style={{ y }} className="absolute inset-0">
                        <img
                            src={horizonImg}
                            alt="Horizon Ventures Artificial Grass and PVC Mat Showroom Kerala"
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                            decoding="async"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center space-y-6"
                        >
                            <span className="text-amber-500 uppercase tracking-[0.5em] text-xs font-semibold">Horizon Ventures</span>
                            <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter">Evergreen Luxury</h1>
                            <p className="max-w-xl mx-auto text-neutral-300 font-light text-lg leading-relaxed">
                                Premium artificial grass and PVC mat solutions for modern spaces.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Grass Products Section */}
                <div className="bg-neutral-950 py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <p className="text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-6">Our Range</p>
                            <h2 className="text-5xl md:text-6xl font-serif italic mb-6">Artificial Grass</h2>
                            <p className="text-neutral-500 max-w-2xl mx-auto">
                                Four grades of premium artificial turf, each engineered for specific needs and environments.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {grassProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl"
                                >
                                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} - Premium Artificial Grass Kerala`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                                        {'badge' in product && product.badge && (
                                            <div className="absolute top-6 right-6 bg-amber-500 text-black px-4 py-2">
                                                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">{product.badge}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-6 drop-shadow-lg">{product.name}</h3>
                                        <div className="flex flex-wrap gap-6 mb-6">
                                            <div className="flex items-center gap-3 text-white/90">
                                                <Ruler size={16} className="text-amber-500" />
                                                <span className="text-sm">{product.height}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white/90">
                                                <Layers size={16} className="text-amber-500" />
                                                <span className="text-sm">{product.layers}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white/90">
                                                <Grid3X3 size={16} className="text-amber-500" />
                                                <span className="text-sm">{product.stitches}</span>
                                            </div>
                                        </div>
                                        <p className="text-white/70 text-base leading-relaxed max-w-md">
                                            {product.description}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 border-2 border-white/5 group-hover:border-amber-500/30 transition-colors duration-500 rounded-2xl" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PVC Mats */}
                <div className="bg-neutral-900 py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <div className="relative h-[300px] overflow-hidden rounded-t-2xl">
                                    <img
                                        src={cushionMatImg}
                                        alt="Durable Cushion Mats Kerala - Single Colour PVC"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                                </div>
                                <div className="bg-neutral-800/50 p-10 border border-white/5">
                                    <h3 className="text-2xl font-serif italic mb-2">Cushion Mats</h3>
                                    <p className="text-amber-500 text-sm uppercase tracking-wider mb-8">Single Colour</p>
                                    <div className="flex flex-wrap gap-3">
                                        {singleColourMats.colors.map(color => (
                                            <div key={color} className="flex items-center gap-2 px-4 py-2 bg-neutral-700/30 border border-white/10">
                                                <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: color.toLowerCase() === 'maroon' ? '#800000' : color.toLowerCase() }} />
                                                <span className="text-sm text-white">{color}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <div className="relative h-[300px] overflow-hidden rounded-t-2xl">
                                    <img
                                        src={sMatImg}
                                        alt="S-Mats Ernakulam - Double Colour Drainage Mats"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
                                </div>
                                <div className="bg-neutral-800/50 p-10 border border-white/5">
                                    <h3 className="text-2xl font-serif italic mb-2">S Mats</h3>
                                    <p className="text-amber-500 text-sm uppercase tracking-wider mb-8">Double Colour</p>
                                    <div className="flex flex-wrap gap-3">
                                        {doubleColourMats.colors.map(combo => (
                                            <div key={combo} className="flex items-center gap-2 px-4 py-2 bg-neutral-700/30 border border-white/10">
                                                <span className="text-sm text-white">{combo}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Consultation */}
                <div className="bg-neutral-950 py-32">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <h2 className="text-4xl font-serif italic">Beyond Nature</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <Check size={14} className="text-amber-500" />
                                        <span className="text-neutral-300 font-light">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-neutral-800/30 p-12 border border-white/5 space-y-8">
                            <h3 className="text-2xl font-serif">Request Consultation</h3>
                            <div className="space-y-6">
                                <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-500 outline-none transition-colors" />
                                <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-500 outline-none transition-colors" />
                                <button onClick={handleEmailClick} disabled={!isFormValid} className={`w-full py-4 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs transition-all ${isFormValid ? 'bg-white text-black hover:bg-amber-500 hover:text-white pointer-events-auto' : 'bg-neutral-700 text-neutral-500 pointer-events-none'}`}>
                                    <Mail size={14} /> Send via Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
