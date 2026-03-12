import { SisterOrganizations } from '../components/SisterOrganizations';
import { Collections as CollectionsSection } from '../components/Collections';
import { PageTransition } from '../components/ui/PageTransition';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';

export const SisterBrandsPage = () => {
    return (
        <PageTransition>
            <SEO
                title="KMS Traders Group | Luxury Living Solutions Kerala"
                description="KMS Traders (Muvattupuzha) is the parent organization of Carpetologist, Horizon Ventures, and KMS Carpets. Expert flooring and landscaping solutions in Ernakulam."
            />
            <div className="bg-stone-50 min-h-screen">
                <SisterOrganizations />

                <div className="bg-neutral-900 py-40 text-white">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-amber-500 uppercase tracking-[0.4em] text-[10px] mb-6">KMS Traders Group</p>
                            <h2 className="text-5xl font-serif italic mb-10 tracking-tight">Integrated Living</h2>
                            <p className="text-neutral-400 leading-relaxed font-light mb-12 text-lg">
                                Based in Muvattupuzha, Ernakulam, Kerala — the KMS Traders group brings together Carpetologist, Horizon Ventures, and KMS Carpets, providing a holistic approach to luxury ground coverings.
                            </p>
                            <button className="group relative px-12 py-5 overflow-hidden">
                                <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase text-white transition-colors duration-500 group-hover:text-black">Download Group Brochure</span>
                                <div className="absolute inset-0 border border-white/20 group-hover:bg-white transition-all duration-500" />
                            </button>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="h-48 rounded-2xl border border-white/5 overflow-hidden"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2s]"
                                        alt="Luxury Living"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="h-72 rounded-2xl border border-white/5 overflow-hidden"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2s]"
                                        alt="Horizon Landscape"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </motion.div>
                            </div>
                            <div className="space-y-6 pt-16">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="h-72 rounded-2xl border border-white/5 overflow-hidden"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/6045093/pexels-photo-6045093.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2s]"
                                        alt="KMS Texture"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="h-48 rounded-2xl border border-white/5 overflow-hidden"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                                        className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2s]"
                                        alt="Boutique Interior"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
