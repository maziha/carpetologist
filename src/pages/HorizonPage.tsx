import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { Check, Layers, Ruler, Grid3X3, Mail, MessageCircle, Phone } from 'lucide-react';
import { Navigation } from '../components/Navigation';

// Using the Horizon image from assets
import horizonImg from '../assets/images/IMG_20260201_150852.jpg';

// Grass variety images - upload these to src/assets/images/
import grass2514Single from '../assets/images/2514SINGLE.jpg';
import grass2514Double from '../assets/images/2514DOUBLE.jpg';
import grass2524Double from '../assets/images/2524DOUBLE.jpg';
import grass3514Double from '../assets/images/3514DOUBLE.jpg';

// PVC Mat images
import cushionMatImg from '../assets/images/Cushion.jpg';
import sMatImg from '../assets/images/SMat.jpg';

const BUSINESS_EMAIL = 'horizonventuresmvpa@gmail.com';
const WHATSAPP_NUMBER_1 = '918848463033';
const WHATSAPP_NUMBER_2 = '919778763033';

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

    // PVC Mats - Single Colour (Cushion Mats)
    const singleColourMats = {
        thickness: ["12mm", "15mm"],
        colors: ["Red", "Green", "Grey", "Black", "Blue", "Maroon"]
    };

    // PVC Mats - Double Colour (S Mats)
    const doubleColourMats = {
        thickness: "4mm",
        colors: ["Red/Black", "Green/Black", "Grey/Black", "Red/Blue", "Blue/Black", "Beige/Brown"]
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateContent = () => {
        const subject = `Horizon Ventures Enquiry - ${formData.name}`;
        const body = `Hello Horizon Ventures Team,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Product Interested: ${formData.selectedProduct || 'Not specified'}

Message:
${formData.message || 'Interested in your products.'}

---
Sent from Horizon Ventures page
`;
        return { subject, body };
    };

    const handleEmailClick = () => {
        const { subject, body } = generateContent();
        const mailtoLink = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    };

    const handleWhatsAppClick = (number: string) => {
        const { subject, body } = generateContent();
        const whatsappMessage = `*${subject}*\n\n${body}`;
        const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
    };

    const isFormValid = formData.name && formData.email;

    // All product options for the form dropdown
    const allProducts = [
        ...grassProducts.map(p => p.name),
        ...singleColourMats.colors.flatMap(c => singleColourMats.thickness.map(t => `Cushion Mat - ${c} (${t})`)),
        ...doubleColourMats.colors.map(c => `S Mat - ${c} (${doubleColourMats.thickness})`)
    ];

    return (
        <PageTransition>
            <div className="bg-neutral-900 min-h-screen text-white">
                <Navigation />

                {/* Hero */}
                <div ref={containerRef} className="relative h-[80vh] overflow-hidden">
                    <motion.div style={{ y }} className="absolute inset-0">
                        <img
                            src={horizonImg}
                            alt="Horizon Ventures Artificial Grass"
                            className="w-full h-full object-cover"
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
                                    className="group relative overflow-hidden"
                                >
                                    {/* Image with dark overlay backdrop */}
                                    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Dark gradient backdrop for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                                        {/* Badge */}
                                        {'badge' in product && product.badge && (
                                            <div className="absolute top-6 right-6 bg-amber-500 text-black px-4 py-2">
                                                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold">{product.badge}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                        {/* Product Name */}
                                        <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-6 drop-shadow-lg">{product.name}</h3>

                                        {/* Specs */}
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

                                        {/* Description */}
                                        <p className="text-white/70 text-base leading-relaxed max-w-md">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Border effect */}
                                    <div className="absolute inset-0 border-2 border-white/5 group-hover:border-amber-500/30 transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PVC Mats Section */}
                <div className="bg-neutral-900 py-32">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-20"
                        >
                            <p className="text-[10px] tracking-[0.5em] text-amber-500 uppercase mb-6">Floor Solutions</p>
                            <h2 className="text-5xl md:text-6xl font-serif italic mb-6">PVC Mats</h2>
                            <p className="text-neutral-500 max-w-2xl mx-auto">
                                Durable and stylish PVC mats available in single and double colour options.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Single Colour - Cushion Mats */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative h-[300px] overflow-hidden">
                                    <img
                                        src={cushionMatImg}
                                        alt="Cushion Mats"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

                                    {/* Badges */}
                                    <div className="absolute top-6 right-6 flex gap-2">
                                        <span className="bg-amber-500 text-black px-3 py-1 text-[9px] tracking-[0.15em] uppercase font-semibold">Heavy Duty</span>
                                        <span className="bg-white text-black px-3 py-1 text-[9px] tracking-[0.15em] uppercase font-semibold">Top Choice</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-neutral-800/50 p-10 border border-white/5">
                                    <h3 className="text-2xl font-serif italic mb-2">Cushion Mats</h3>
                                    <p className="text-amber-500 text-sm uppercase tracking-wider mb-8">Single Colour</p>

                                    <div className="mb-8">
                                        <p className="text-neutral-400 text-sm mb-4">Available Thickness:</p>
                                        <div className="flex gap-4">
                                            {singleColourMats.thickness.map(t => (
                                                <span key={t} className="px-4 py-2 bg-neutral-700/50 text-white text-sm">{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-neutral-400 text-sm mb-4">Available Colours:</p>
                                        <div className="flex flex-wrap gap-3">
                                            {singleColourMats.colors.map(color => (
                                                <div key={color} className="flex items-center gap-2 px-4 py-2 bg-neutral-700/30 border border-white/10">
                                                    <div
                                                        className="w-4 h-4 rounded-full border border-white/20"
                                                        style={{
                                                            backgroundColor: color.toLowerCase() === 'maroon' ? '#800000' : color.toLowerCase()
                                                        }}
                                                    />
                                                    <span className="text-sm text-white">{color}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Double Colour - S Mats */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden"
                            >
                                {/* Image */}
                                {/* Image */}
                                <div className="relative h-[300px] overflow-hidden">
                                    <img
                                        src={sMatImg}
                                        alt="S Mats"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

                                    {/* Badges */}
                                    <div className="absolute top-6 right-6 flex gap-2">
                                        <span className="bg-emerald-500 text-black px-3 py-1 text-[9px] tracking-[0.15em] uppercase font-semibold">Dual-Tone</span>
                                        <span className="bg-rose-500 text-white px-3 py-1 text-[9px] tracking-[0.15em] uppercase font-semibold">Trending</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-neutral-800/50 p-10 border border-white/5">
                                    <h3 className="text-2xl font-serif italic mb-2">S Mats</h3>
                                    <p className="text-amber-500 text-sm uppercase tracking-wider mb-8">Double Colour</p>

                                    <div className="mb-8">
                                        <p className="text-neutral-400 text-sm mb-4">Thickness:</p>
                                        <span className="px-4 py-2 bg-neutral-700/50 text-white text-sm">{doubleColourMats.thickness}</span>
                                    </div>

                                    <div>
                                        <p className="text-neutral-400 text-sm mb-4">Available Colour Combinations:</p>
                                        <div className="flex flex-wrap gap-3">
                                            {doubleColourMats.colors.map(combo => {
                                                const [c1, c2] = combo.split('/');
                                                return (
                                                    <div key={combo} className="flex items-center gap-2 px-4 py-2 bg-neutral-700/30 border border-white/10">
                                                        <div className="flex">
                                                            <div
                                                                className="w-3 h-4 border-l border-t border-b border-white/20 rounded-l-full"
                                                                style={{ backgroundColor: c1.toLowerCase() === 'beige' ? '#f5f5dc' : c1.toLowerCase() }}
                                                            />
                                                            <div
                                                                className="w-3 h-4 border-r border-t border-b border-white/20 rounded-r-full"
                                                                style={{ backgroundColor: c2.toLowerCase() === 'brown' ? '#8B4513' : c2.toLowerCase() }}
                                                            />
                                                        </div>
                                                        <span className="text-sm text-white">{combo}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Beyond Nature + Consultation */}
                <div className="bg-neutral-950 py-32">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <h2 className="text-4xl font-serif italic">Beyond Nature</h2>
                            <p className="text-neutral-400 leading-loose">
                                Horizon Ventures redefines outdoor living with artificial grass that mimics the lush aesthetics of natural lawns without the maintenance.
                                Engineered for durability and designed for elegance, our solutions sustain their vibrant emerald hue through all seasons.
                            </p>
                            <div className="grid grid-cols-1 gap-6">
                                {features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                                            <Check size={14} className="text-amber-500" />
                                        </div>
                                        <span className="text-neutral-300 font-light">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="pt-8 border-t border-white/10 space-y-4">
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <Mail size={16} className="text-amber-500" />
                                    <span className="text-sm">{BUSINESS_EMAIL}</span>
                                </div>
                                <div className="flex items-center gap-4 text-neutral-400">
                                    <Phone size={16} className="text-amber-500" />
                                    <span className="text-sm">+91 88484 63033 / +91 97787 63033</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-800/30 p-12 border border-white/5 space-y-8">
                            <h3 className="text-2xl font-serif">Request Consultation</h3>
                            <p className="text-neutral-500 text-sm">Transform your space today.</p>

                            <div className="space-y-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-500 outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-500 outline-none transition-colors"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-500 outline-none transition-colors"
                                />
                                <select
                                    name="selectedProduct"
                                    value={formData.selectedProduct}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-500 outline-none transition-colors appearance-none"
                                >
                                    <option value="" className="bg-neutral-900">Select Product</option>
                                    <optgroup label="Artificial Grass" className="bg-neutral-900">
                                        {grassProducts.map(p => (
                                            <option key={p.id} value={p.name} className="bg-neutral-900">{p.name}</option>
                                        ))}
                                    </optgroup>
                                    <optgroup label="Cushion Mats (Single Colour)" className="bg-neutral-900">
                                        {singleColourMats.colors.flatMap(c =>
                                            singleColourMats.thickness.map(t => (
                                                <option key={`${c}-${t}`} value={`Cushion Mat - ${c} (${t})`} className="bg-neutral-900">
                                                    {c} - {t}
                                                </option>
                                            ))
                                        )}
                                    </optgroup>
                                    <optgroup label="S Mats (Double Colour)" className="bg-neutral-900">
                                        {doubleColourMats.colors.map(c => (
                                            <option key={c} value={`S Mat - ${c} (${doubleColourMats.thickness})`} className="bg-neutral-900">
                                                {c} - {doubleColourMats.thickness}
                                            </option>
                                        ))}
                                    </optgroup>
                                </select>
                                <textarea
                                    name="message"
                                    placeholder="Additional details (optional)"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-500 outline-none transition-colors resize-none"
                                />

                                <div className="space-y-3 pt-4">
                                    <button
                                        onClick={handleEmailClick}
                                        disabled={!isFormValid}
                                        className={`w-full py-4 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-xs transition-all ${isFormValid
                                            ? 'bg-white text-black hover:bg-amber-500 hover:text-white cursor-pointer'
                                            : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                                            }`}
                                    >
                                        <Mail size={14} />
                                        Send via Email
                                    </button>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            onClick={() => handleWhatsAppClick(WHATSAPP_NUMBER_1)}
                                            disabled={!isFormValid}
                                            className={`py-4 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[10px] transition-all ${isFormValid
                                                ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
                                                : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                                                }`}
                                        >
                                            <MessageCircle size={14} />
                                            88484 63033
                                        </button>
                                        <button
                                            onClick={() => handleWhatsAppClick(WHATSAPP_NUMBER_2)}
                                            disabled={!isFormValid}
                                            className={`py-4 flex items-center justify-center gap-2 uppercase tracking-[0.15em] text-[10px] transition-all ${isFormValid
                                                ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
                                                : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                                                }`}
                                        >
                                            <MessageCircle size={14} />
                                            97787 63033
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </PageTransition>
    );
};
