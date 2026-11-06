import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';

import showroom1 from '../assets/images/IMG_20260201_150254.jpg';
import showroom2 from '../assets/images/IMG_20260201_150615.jpg';

interface ShowroomProps {
  hideHeader?: boolean;
}

export const Showroom = ({ hideHeader = false }: ShowroomProps) => {
  return (
    <section className="relative floor floor-warm text-ink py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {!hideHeader && (
          <Reveal as="h2" className="display-lg font-light max-w-4xl">
            An hour in the showroom changes how you see a room
          </Reveal>
        )}

        <div className="mt-14 md:mt-24 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-6 grid grid-cols-2 gap-4 md:gap-6 items-start">
            <Reveal className="relative aspect-[914/1600] overflow-hidden bg-[#faf7f2] p-2.5 shadow-[0_26px_36px_-24px_rgba(60,45,30,0.55)]">
              <img src={showroom1} alt="A greige geometric carpet in a sunlit showroom setting" className="absolute inset-2.5 w-[calc(100%-20px)] h-[calc(100%-20px)] object-cover" loading="lazy" decoding="async" />
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[914/1600] overflow-hidden bg-[#faf7f2] p-2.5 shadow-[0_26px_36px_-24px_rgba(60,45,30,0.55)] mt-12 md:mt-24">
              <img src={showroom2} alt="Framed contemporary rug hung above an oak console" className="absolute inset-2.5 w-[calc(100%-20px)] h-[calc(100%-20px)] object-cover" loading="lazy" decoding="async" />
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-6 rug p-12 md:p-20 my-5">
            <h3 className="font-display italic font-light text-4xl md:text-5xl leading-none text-brass-light">The boutique experience</h3>
            <p className="mt-6 text-lg text-ivory/75 leading-relaxed max-w-xl">
              Our showroom is a curated space where time slows down. See the full inventory under museum-quality lighting, guided by people who know the history of every knot.
            </p>
            <dl className="mt-10 grid sm:grid-cols-2 gap-8">
              <div>
                <dt className="text-sm text-brass">Where</dt>
                <dd className="mt-1 text-xl font-display">Muvattupuzha, Ernakulam</dd>
              </div>
              <div>
                <dt className="text-sm text-brass">When</dt>
                <dd className="mt-1 text-xl font-display">By appointment</dd>
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
