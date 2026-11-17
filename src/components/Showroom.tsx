import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';

import showroom1 from '../assets/images/IMG_20260201_150254.jpg';
import showroom2 from '../assets/images/IMG_20260201_150615.jpg';

interface ShowroomProps {
  hideHeader?: boolean;
}

export const Showroom = ({ hideHeader = false }: ShowroomProps) => {
  return (
    <section className="relative floor floor-warm text-ink py-28 md:py-44 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {!hideHeader && (
          <>
            <Reveal as="p" className="eyebrow">The showroom</Reveal>
            <Reveal as="h2" className="mt-6 md:mt-8 display-lg font-light max-w-4xl">
              An hour here changes how you <em className="italic text-oxblood">see a room</em>
            </Reveal>
          </>
        )}

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10 md:gap-10 items-center">
          <div className="md:col-span-6 grid grid-cols-2 gap-4 md:gap-7 items-start">
            <Reveal className="frame">
              <div className="relative aspect-[914/1600] overflow-hidden">
                <img src={showroom1} alt="A greige geometric carpet in a sunlit showroom setting" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="frame mt-12 md:mt-24">
              <div className="relative aspect-[914/1600] overflow-hidden">
                <img src={showroom2} alt="Framed contemporary rug hung above an oak console" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-6 rug px-10 py-14 md:p-20 my-5">
            <p className="eyebrow">By appointment</p>
            <h3 className="mt-6 font-display italic font-light text-[2.5rem] md:text-[3.25rem] leading-none text-brass-light">The boutique experience</h3>
            <p className="mt-6 text-[17px] text-ivory/80 leading-relaxed max-w-xl">
              Our showroom is a curated space where time slows down. See the full inventory under museum-quality lighting, guided by people who know the history of every knot.
            </p>
            <dl className="mt-10 grid sm:grid-cols-2 gap-8 border-t border-brass/30 pt-8">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-brass">Where</dt>
                <dd className="mt-2 text-2xl font-display">Muvattupuzha, Ernakulam</dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.24em] text-brass">When</dt>
                <dd className="mt-2 text-2xl font-display">By appointment</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-brass">Book a viewing</Link>
              <a href="https://wa.me/917558077632" target="_blank" rel="noreferrer" className="btn btn-ghost-light">Message on WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
