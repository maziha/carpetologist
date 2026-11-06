import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'li' | 'span';
}

/** Rises and fades in once as it enters the viewport. */
export const Reveal = ({ children, delay = 0, y = 12, className, as = 'div' }: RevealProps) => {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.6, delay: Math.min(delay, 0.1), ease: 'easeOut' }}
      className={className}
    >
      {children}
    </Tag>
  );
};
