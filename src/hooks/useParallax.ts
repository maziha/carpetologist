import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * A hook for smooth parallax effects using framer-motion.
 * Returns a motion value that can be applied to elements.
 */
export const useSmoothParallax = (speed: number = 0.5, direction: 'up' | 'down' = 'up') => {
  const { scrollY } = useScroll();

  // Create a smoothed version of scrollY
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const transform = useTransform(
    smoothScrollY,
    [0, 1000],
    [0, direction === 'up' ? -speed * 1000 : speed * 1000]
  );

  return transform;
};

/**
 * Element-based parallax - triggers when element enters viewport
 */
export const useScrollParallax = (range: [number, number] = [0, 1], offset: [string, string] = ["start end", "end start"]) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], range);

  return { ref, y };
};
