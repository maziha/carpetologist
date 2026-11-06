import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
  action?: ReactNode;
}

/** Shared dark opener for inner pages: big display title left, a framed picture right. */
export const PageHero = ({ title, lead, image, imageAlt, action }: PageHeroProps) => (
  <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 md:gap-8 items-end">
      <div className="md:col-span-7">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="display-lg text-ink font-light"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-xl text-lg text-ink/75 leading-relaxed font-light"
        >
          {lead}
        </motion.p>
        {action && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10"
          >
            {action}
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-5 relative aspect-[4/5] md:aspect-[4/5] bg-[#faf7f2] p-2.5 shadow-[0_30px_44px_-26px_rgba(60,45,30,0.6)]"
      >
        <img src={image} alt={imageAlt} className="absolute inset-2.5 w-[calc(100%-20px)] h-[calc(100%-20px)] object-cover" decoding="async" fetchPriority="high" />
      </motion.div>
    </div>
  </section>
);
