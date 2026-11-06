import { useEffect, useRef, useState } from 'react';
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MagicDust } from './ui/MagicDust';

const carpetSrc = '/assets/flying-carpet.webp';
const STRIPS = 20; // slices that ripple like cloth while the carpet flies

/**
 * A single entrance, then the page is still:
 * the carpet swoops in trailing stardust, lands, and a larger rug rolls out beneath it to become the hero.
 */
export const Hero = () => {
  const reduce = useReducedMotion();
  const carpetRef = useRef<HTMLDivElement>(null);
  const [settled, setSettled] = useState(!!reduce);

  const wave = useMotionValue(reduce ? 0 : 26);
  const unroll = useMotionValue(reduce ? 1 : 0);
  const dustOff = useMotionValue(reduce ? 1 : 0);

  useEffect(() => {
    if (reduce) return;
    const controls = [
      animate(wave, 0, { duration: 3.2, delay: 0.2, ease: 'easeOut' }),
      animate(unroll, 1, { duration: 1.5, delay: 2.4, ease: [0.65, 0, 0.35, 1] }),
    ];
    const stopDust = window.setTimeout(() => dustOff.set(1), 4200);
    const done = window.setTimeout(() => setSettled(true), 4000);
    return () => {
      controls.forEach((c) => c.stop());
      window.clearTimeout(stopDust);
      window.clearTimeout(done);
    };
  }, [reduce, wave, unroll, dustOff]);

  const clip = useTransform(unroll, (v) => `inset(-30px 0 -30px ${(1 - v) * 100}%)`);
  const edge = useTransform(unroll, (v) => `${(1 - v) * 100}%`);
  const rollOpacity = useTransform(unroll, [0, 0.03, 0.97, 1], [0, 1, 1, 0]);
  const rollWidth = useTransform(unroll, [0, 1], [46, 0]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* a runner laid along the floor, rolling out from the right */}
      <div className="absolute inset-x-6 md:inset-x-12 bottom-10 md:bottom-14 h-[72px] md:h-[104px]">
        <motion.div
          aria-hidden
          className="rug absolute inset-0"
          style={{ clipPath: clip }}
        />
        <motion.div
          aria-hidden
          className="absolute top-0 bottom-0 z-[1]"
          style={{
            left: edge,
            width: rollWidth,
            opacity: rollOpacity,
            x: '-100%',
            background: 'linear-gradient(90deg, #2a0a0e 0%, #6e141c 26%, #d4a85f 50%, #8c1d27 70%, #2a0a0e 100%)',
            boxShadow: '-14px 8px 24px -8px rgba(40,20,10,0.5)',
          }}
        />
      </div>

      <MagicDust followRef={carpetRef} off={dustOff} />

      <div className="relative z-[2] max-w-[1440px] mx-auto min-h-[100dvh] px-6 md:px-12 pt-28 pb-40 md:pt-24 md:pb-36 grid md:grid-cols-12 items-center gap-8 md:gap-6">
        <div className="md:col-span-6 order-2 md:order-1">
          <motion.h1
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: reduce ? 0 : 3.3 }}
            className="display-lg text-ink font-light"
          >
            Carpets made to be inherited.
          </motion.h1>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: reduce ? 0 : 3.6 }}
          >
            <p className="mt-6 md:mt-8 max-w-md text-base md:text-lg text-ink/75 font-light leading-relaxed">
              Turkish, Persian and designer rugs, chosen knot by knot and shown under museum light in Muvattupuzha.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
              <Link to="/collections" className="btn btn-oxblood">Explore the collection</Link>
              <Link to="/contact" className="btn btn-ghost-dark">Book a private viewing</Link>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-6 order-1 md:order-2 flex justify-center md:justify-end">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.07, x: '38vw', y: '-42vh', rotateZ: 24, rotateX: 74, rotateY: -70 }}
            animate={{
              opacity: [0, 1, 1, 1, 1],
              scale: [0.07, 0.38, 0.62, 0.97, 1],
              x: ['38vw', '-30vw', '22vw', '-6vw', '0vw'],
              y: ['-42vh', '-6vh', '-20vh', '6vh', '0vh'],
              rotateZ: [24, -20, 16, -6, -2],
              rotateY: [-70, 38, -30, 12, 0],
              rotateX: [74, 52, 40, 14, 0],
            }}
            transition={{ duration: reduce ? 0 : 3.2, times: [0, 0.22, 0.5, 0.76, 1], ease: 'easeInOut' }}
            className="relative w-[46vw] max-w-[240px] md:w-auto md:max-w-none md:h-[48vh] md:mr-10"
            style={{ aspectRatio: '828 / 1175', transformPerspective: 1600 }}
          >
            <div aria-hidden className="absolute left-[8%] right-[8%] -bottom-[5%] h-[6%] rounded-[50%] bg-[#3a2a1c]/45 blur-2xl" />
            <motion.div
              ref={carpetRef}
              className={`relative w-full h-full ${settled ? 'carpet-settled' : ''}`}
              style={{ ['--wave' as string]: wave, boxShadow: '0 34px 50px -24px rgba(60,40,25,0.65)' }}
            >
              <img
                src={carpetSrc}
                alt="Hand-knotted Persian carpet in crimson with a cream floral border"
                width={828}
                height={1175}
                fetchPriority="high"
                decoding="async"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover opacity-0"
              />
              {Array.from({ length: STRIPS }, (_, i) => (
                <div
                  key={i}
                  aria-hidden
                  className="carpet-strip absolute left-0 right-0"
                  style={{
                    top: `${(i * 100) / STRIPS}%`,
                    height: `calc(${100 / STRIPS}% + 1px)`,
                    backgroundImage: `url(${carpetSrc})`,
                    backgroundSize: `100% ${STRIPS * 100}%`,
                    backgroundPosition: `0 ${(i / (STRIPS - 1)) * 100}%`,
                    animationDelay: `${-i * 0.19}s`,
                  }}
                >
                  {(i === 0 || i === STRIPS - 1) && (
                    <div
                      className={`carpet-fringe absolute left-0 right-0 h-[260%] ${i === 0 ? 'bottom-full carpet-fringe-top' : 'top-full carpet-fringe-bottom'}`}
                      style={{ animationDelay: `${-i * 0.19}s` }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
