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
      <section id="about" className="relative text-ink py-28 md:py-44 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16 md:gap-8 items-center">
          <div className="md:col-span-5">
            {!hideHeader && (
              <>
                <Reveal as="p" className="eyebrow">The house</Reveal>
                <Reveal as="h2" className="mt-6 md:mt-8 display-lg font-light">
                  The art of <em className="italic text-oxblood">carpetology</em>
                </Reveal>
              </>
            )}
            <Reveal delay={0.1} className="mt-8 md:mt-10 max-w-lg">
              <p className="font-display text-2xl md:text-[1.75rem] leading-snug text-ink">
                A carpet is more than a floor covering. It is a canvas of culture, a testament to artistry and a bridge between heritage and the way you live now.
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-ink/75">
                Carpetologist was founded on a passion for preserving traditional weaving while embracing modern design. We source the finest materials and partner with master weavers, so each piece in the collection represents months of dedicated craft: natural fibres, organic dyes and patterns that function as art.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link to="/contact" className="btn btn-oxblood">Request a private selection</Link>
              <Link to="/gallery" className="link-line">See the gallery <span aria-hidden>&rarr;</span></Link>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7 relative md:pl-10">
            <Reveal className="frame">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={aboutImg} alt="Cream and burgundy floral carpet hung in a classical interior" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </Reveal>
            <Reveal delay={0.25} className="frame hidden md:block absolute -left-10 -bottom-16 w-[40%]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={detailImg} alt="Red carpet laid in a traditional drawing room" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-label="Where our carpets come from">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="rug px-10 py-14 md:px-20 md:py-20 text-center">
            <p className="eyebrow eyebrow-plain">From the looms of</p>
            <p className="mt-6 font-display italic font-light text-brass-light text-[clamp(1.4rem,3.4vw,3.3rem)] leading-tight">
              {origins.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      <section className="floor floor-warm py-28 md:py-44">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <Reveal as="p" className="eyebrow">The standard</Reveal>
          <Reveal as="h2" className="mt-6 md:mt-8 display-md font-light text-ink max-w-3xl">
            What goes into every carpet we show
          </Reveal>
          <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-12 md:gap-10">
            {craft.map((c, i) => (
              <Reveal key={c.title} delay={0.05 * i}>
                <div className="rule" />
                <p className="numeral mt-7 text-3xl">{['i.', 'ii.', 'iii.'][i]}</p>
                <h3 className="mt-5 font-display font-light text-ink text-4xl md:text-[2.6rem] leading-none">{c.title}</h3>
                <p className="mt-5 text-[17px] text-ink/75 leading-relaxed">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
