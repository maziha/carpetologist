import React from 'react';
import { Collections as CollectionsSection } from '../components/Collections';
import { PageTransition } from '../components/ui/PageTransition';
import { motion } from 'framer-motion';

export const CollectionsPage = () => {
    return (
        <PageTransition>
            <div className="bg-neutral-900 min-h-screen">
                {/* We use the header inside the Collections component for consistency */}
                <CollectionsSection />

                <div className="max-w-7xl mx-auto px-6 pb-40 grid md:grid-cols-3 gap-16 border-t border-white/5 pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h4 className="text-amber-500 uppercase tracking-widest text-[10px]">Sustainability</h4>
                        <p className="text-neutral-400 font-light leading-relaxed text-sm">
                            We use 100% natural wool, silk, and organic vegetable dyes, ensuring our legacy is as kind to the earth as it is beautiful.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h4 className="text-amber-500 uppercase tracking-widest text-[10px]">Custom Commissions</h4>
                        <p className="text-neutral-400 font-light leading-relaxed text-sm">
                            Bring your vision to life with a bespoke piece, tailored to your space's specific dimensions and architectural color palette.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h4 className="text-amber-500 uppercase tracking-widest text-[10px]">Global Shipping</h4>
                        <p className="text-neutral-400 font-light leading-relaxed text-sm">
                            White-glove delivery and professional installation services available worldwide for all our handpicked masterpieces.
                        </p>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};
