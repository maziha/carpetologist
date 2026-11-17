import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lead: string;
  image: string;
  imageAlt: string;
  action?: ReactNode;
}

/** Shared dark opener for inner pages: big display title left, a framed picture right. */
export const PageHero = ({ eyebrow, title, lead, image, imageAlt, action }: PageHeroProps) => (
  <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 md:gap-8 items-end">
      <div className="md:col-span-7">
        {eyebrow && <p className="eyebrow mb-6 md:mb-8">{eyebrow}</p>}
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
        className="md:col-span-4 md:col-start-9 frame"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" decoding="async" fetchPriority="high" />
        </div>
      </motion.div>
    </div>
  </section>
);
