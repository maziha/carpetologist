import { useState } from 'react';
import { PageTransition } from '../components/ui/PageTransition';
import { Check, Layers, Ruler, Grid3X3, Mail } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { PageHero } from '../components/ui/PageHero';
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
            <div className="min-h-screen text-ink">
                <PageHero
                    eyebrow="Horizon Ventures"
                    title={<>Evergreen <em className="italic text-oxblood">luxury.</em></>}
                    lead="Premium artificial grass and PVC mat solutions for modern spaces."
                    image={horizonImg}
                    imageAlt="Horizon Ventures Artificial Grass and PVC Mat Showroom Kerala"
                />

                {/* Grass Products Section */}
                <div className="py-28 md:py-44">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                        <div className="grid md:grid-cols-12 gap-6 items-end mb-16 md:mb-24">
                            <div className="md:col-span-7">
                                <Reveal as="p" className="eyebrow">The turf</Reveal>
                                <Reveal as="h2" className="mt-6 md:mt-8 display-lg font-light">Artificial grass</Reveal>
                            </div>
                            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 text-[17px] text-ink/75 leading-relaxed">
                                Four grades of premium turf, each engineered for a specific need and environment.
                            </Reveal>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 md:gap-x-10 md:gap-y-24">
                            {grassProducts.map((product, index) => (
                                <Reveal key={product.id} delay={0.06 * index}>
                                    <div className="frame relative">
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={`${product.name} - Premium Artificial Grass Kerala`}
                                                className="absolute inset-0 w-full h-full object-cover"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        {'badge' in product && product.badge && (
                                            <div className="absolute top-6 left-6 bg-[#fbf9f5] text-oxblood px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em]">
                                                {product.badge}
                                            </div>
                                        )}
                                    </div>
                                    <div className="pt-7">
                                        <p className="numeral text-xl">No. 0{index + 1}</p>
                                        <div className="rule mt-4" />
                                        <h3 className="mt-5 font-display font-light text-ink text-3xl md:text-[2.5rem] leading-tight">{product.name}</h3>
                                        <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[12px] font-medium uppercase tracking-[0.16em] text-ink/70">
                                            <span className="flex items-center gap-2"><Ruler size={15} strokeWidth={1.5} className="text-brass-dark" />{product.height}</span>
                                            <span className="flex items-center gap-2"><Layers size={15} strokeWidth={1.5} className="text-brass-dark" />{product.layers}</span>
                                            <span className="flex items-center gap-2"><Grid3X3 size={15} strokeWidth={1.5} className="text-brass-dark" />{product.stitches}</span>
                                        </div>
                                        <p className="mt-5 text-[17px] text-ink/75 leading-relaxed max-w-md">{product.description}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PVC Mats */}
                <div className="floor floor-warm py-28 md:py-44">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                        <Reveal as="p" className="eyebrow">The mats</Reveal>
                        <Reveal as="h2" className="mt-6 md:mt-8 display-md font-light max-w-3xl mb-14 md:mb-20">Mats built for doorways, decks and workshops</Reveal>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <Reveal className="frame">
                                <div className="relative h-[300px] overflow-hidden">
                                    <img src={cushionMatImg} alt="Durable Cushion Mats Kerala - Single Colour PVC" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                </div>
                                <div className="p-8 md:p-10">
                                    <h3 className="font-display font-light text-4xl">Cushion mats</h3>
                                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-brass-dark mt-3 mb-7">Single colour · {singleColourMats.thickness.join(' or ')}</p>
                                    <ul className="flex flex-wrap gap-2">
                                        {singleColourMats.colors.map(color => (
                                            <li key={color} className="flex items-center gap-2 px-4 py-2 bg-[#ece5d8] text-sm">
                                                <span className="w-3.5 h-3.5 rounded-full ring-1 ring-ink/25" style={{ backgroundColor: color.toLowerCase() === 'maroon' ? '#800000' : color.toLowerCase() }} />
                                                {color}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>

                            <Reveal delay={0.1} className="frame">
                                <div className="relative h-[300px] overflow-hidden">
                                    <img src={sMatImg} alt="S-Mats Ernakulam - Double Colour Drainage Mats" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                </div>
                                <div className="p-8 md:p-10">
                                    <h3 className="font-display font-light text-4xl">S mats</h3>
                                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-brass-dark mt-3 mb-7">Double colour · {doubleColourMats.thickness}</p>
                                    <ul className="flex flex-wrap gap-2">
                                        {doubleColourMats.colors.map(combo => (
                                            <li key={combo} className="px-4 py-2 bg-[#ece5d8] text-sm">{combo}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Consultation */}
                <div className="py-28 md:py-44">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-14 md:gap-8 items-start">
                        <div className="md:col-span-6 space-y-10">
                            <div>
                                <Reveal as="p" className="eyebrow">Why Horizon</Reveal>
                                <Reveal as="h2" className="mt-6 md:mt-8 display-md font-light">Beyond <em className="italic text-oxblood">nature</em></Reveal>
                            </div>
                            <ul>
                                {features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-5 text-2xl font-display border-t border-ink/20 py-5 last:border-b">
                                        <Check size={18} className="text-oxblood shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 rug p-12 md:p-16 my-5 space-y-6">
                            <p className="eyebrow">Consultation</p>
                            <h3 className="font-display italic font-light text-4xl md:text-[2.75rem] leading-none text-brass-light">Request a consultation</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="hz-name" className="block text-sm text-ivory/70 mb-2">Name *</label>
                                    <input id="hz-name" type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" className="w-full bg-white/5 px-4 py-3.5 text-ivory focus:bg-white/10 focus:ring-2 focus:ring-brass outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="hz-email" className="block text-sm text-ivory/70 mb-2">Email *</label>
                                    <input id="hz-email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" className="w-full bg-white/5 px-4 py-3.5 text-ivory focus:bg-white/10 focus:ring-2 focus:ring-brass outline-none transition-colors" />
                                </div>
                                <button onClick={handleEmailClick} disabled={!isFormValid} className={`btn w-full ${isFormValid ? 'btn-brass' : 'bg-white/10 text-ivory/40 cursor-not-allowed'}`}>
                                    <Mail size={16} /> Send via email
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
