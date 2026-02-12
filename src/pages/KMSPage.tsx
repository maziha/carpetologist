import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageTransition } from '../components/ui/PageTransition';
import { Download, ArrowRight } from 'lucide-react';
import { Navigation } from '../components/Navigation';


// Using the KMS Carpets image
import kmsImg from '../assets/images/IMG_20260201_150218.jpg';

export const KMSPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const categories = [
        { title: "Hospitality", desc: "High-traffic elegance for hotels & lounges" },
        { title: "Corporate", desc: "Acoustic comfort for modern workspaces" },
        { title: "Residential", desc: "Durable luxury for high-end homes" },
        { title: "Custom", desc: "Bespoke designs for unique projects" }
    ];

    return (
        <PageTransition>
            <div className="bg-stone-100 min-h-screen">
                <Navigation />

                {/* Hero */}
                <div ref={containerRef} className="relative h-[70vh] overflow-hidden">
                    <motion.div style={{ y }} className="absolute inset-0">
                        <img
                            src={kmsImg}
                            alt="KMS Carpets Commercial Solutions"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-stone-900/30" />
                    </motion.div>

                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="bg-white/10 backdrop-blur-md p-12 border border-white/20 text-center max-w-2xl">
                            <span className="text-white uppercase tracking-[0.4em] text-xs font-semibold mb-4 block">KMS Carpets</span>
                            <h1 className="text-5xl md:text-7xl font-serif text-white italic mb-6">Engineered Excellence</h1>
                            <button className="flex items-center gap-4 mx-auto text-white group">
                                <span className="uppercase tracking-[0.2em] text-xs">Scroll to Catalogue</span>
                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Catalogue Grid */}
                <div className="max-w-7xl mx-auto px-6 py-32">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-serif text-neutral-900 mb-6">The Catalogue</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto">
                            Explore our comprehensive range of performance floor coverings.
                            From modular carpet tiles to wall-to-wall expanses, KMS delivers quality precisely where it matters.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white p-12 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-200 rounded-2xl"
                            >
                                <div className="h-full flex flex-col justify-between space-y-8">
                                    <div>
                                        <h3 className="text-3xl font-serif italic text-neutral-900 mb-3">{cat.title}</h3>
                                        <p className="text-neutral-500 font-light">{cat.desc}</p>
                                    </div>
                                    <div className="w-full h-px bg-stone-200 group-hover:bg-amber-500 transition-colors duration-500" />
                                    <div className="flex justify-between items-center text-neutral-400 group-hover:text-amber-600">
                                        <span className="uppercase tracking-widest text-[10px]">View Series</span>
                                        <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <button className="bg-neutral-900 text-white px-10 py-5 flex items-center gap-4 mx-auto hover:bg-neutral-800 transition-colors">
                            <Download size={18} />
                            <span className="uppercase tracking-[0.2em] text-xs">Download Full 2026 Catalogue</span>
                        </button>
                    </div>
                </div>


            </div>
        </PageTransition>
    );
};
