import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';

import aboutImg from '../assets/images/IMG_20260201_151203.jpg';
import detailImg from '../assets/images/IMG_20260201_151239.jpg';

interface AboutProps {
  hideHeader?: boolean;
}

const origins = ['Anatolia', 'Isfahan', 'Kashan', 'Tabriz', 'Heriz', 'Jaipur', 'Kerala'];

const craft = [
  {
    title: 'Authentic heritage',
    text: 'Every carpet carries the motifs of the loom it came from. We trace each piece to its region, so you know the story you are bringing home.',
  },
  {
    title: 'Sourced worldwide',
    text: 'Master weavers, natural fibres and organic dyes. We work with makers across Turkey, Persia and India who still do it the slow way.',
  },
  {
    title: 'Designed to live with',
    text: 'From a 200-knot silk medallion to a quiet contemporary weave, we help you choose the carpet that finishes the room, not one that merely covers it.',
  },
];

export const About = ({ hideHeader = false }: AboutProps) => {
  return (
    <>
      <section id="about" className="relative text-ink py-24 md:py-40 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-14 md:gap-8 items-center">
          <div className="md:col-span-6 md:pr-8">
            {!hideHeader && (
              <Reveal as="h2" className="display-lg font-light">
                The art of carpetology
              </Reveal>
            )}
            <Reveal delay={0.1} className="mt-8 md:mt-10 space-y-6 text-lg leading-relaxed text-ink/80 max-w-xl">
              <p>
                A carpet is more than a floor covering. It is a canvas of culture, a testament to artistry and a bridge between heritage and the way you live now.
              </p>
              <p>
                Carpetologist was founded on a passion for preserving traditional weaving while embracing modern design. We source the finest materials and partner with master weavers, so each piece in the collection represents months of dedicated craft: natural fibres, organic dyes and patterns that function as art.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-oxblood">Request a private selection</Link>
              <Link to="/gallery" className="btn btn-ghost-dark">See the gallery</Link>
            </Reveal>
          </div>

          <div className="md:col-span-6 relative">
            <Reveal className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
              <img src={aboutImg} alt="Cream and burgundy floral carpet hung in a classical interior" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            </Reveal>
            <Reveal delay={0.25} className="hidden md:block absolute -left-16 -bottom-14 w-[38%] aspect-[3/4] overflow-hidden bg-[#faf7f2] p-3 shadow-[0_24px_40px_-22px_rgba(60,45,30,0.5)]">
              <img src={detailImg} alt="Red carpet laid in a traditional drawing room" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-label="Where our carpets come from">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="rug px-10 py-12 md:px-20 md:py-16 text-center">
            <p className="font-display italic font-light text-brass-light text-[clamp(1.4rem,3.5vw,3.4rem)] leading-tight">
              {origins.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section className="floor floor-warm py-24 md:py-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <Reveal as="h2" className="display-md font-light text-ink max-w-3xl">
            What goes into every carpet we show
          </Reveal>
          <div className="mt-16 md:mt-24 space-y-14 md:space-y-20">
            {craft.map((c, i) => (
              <Reveal key={c.title} delay={0.05 * i} className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <h3 className="md:col-span-6 font-display italic font-light text-oxblood text-[clamp(2.25rem,5vw,4.5rem)] leading-none">{c.title}</h3>
                <p className="md:col-span-5 md:col-start-8 text-lg text-ink/80 leading-relaxed">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
