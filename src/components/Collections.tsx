import { useNavigate } from 'react-router-dom';
import { Reveal } from './ui/Reveal';

import turkishImg from '../assets/images/IMG_20260201_151239.jpg';
import persianImg from '../assets/images/IMG_20260201_151148.jpg';
import indianImg from '../assets/images/IMG_20260201_151048.jpg';
import designerImg from '../assets/images/IMG_20260201_150917.jpg';

interface CollectionsProps {
  hideHeader?: boolean;
}

const collections = [
  {
    id: 'turkish',
    title: 'Turkish',
    subtitle: 'Anatolian tradition',
    description: 'Carpets from the heart of Turkey, featuring traditional motifs and natural dyes.',
    image: turkishImg,
    routeCategory: 'Turkish',
  },
  {
    id: 'persian',
    title: 'Persian',
    subtitle: 'Imperial craft',
    description: 'Intricate designs and masterful weaving techniques from the cradle of carpet making.',
    image: persianImg,
    routeCategory: 'Persian',
  },
  {
    id: 'indian',
    title: 'Indian',
    subtitle: 'Vibrant heritage',
    description: 'A celebration of colour and pattern inspired by the rich cultural tapestry of India.',
    image: indianImg,
    routeCategory: 'Indian',
  },
  {
    id: 'designer',
    title: 'Designer',
    subtitle: 'Modern luxury',
    description: 'Contemporary masterpieces that blend traditional quality with modern aesthetics.',
    image: designerImg,
    routeCategory: 'Designer',
  },
];

export const Collections = ({ hideHeader = false }: CollectionsProps) => {
  const navigate = useNavigate();
  const open = (category: string) => navigate('/gallery', { state: { category } });

  return (
    <section className="relative py-28 md:py-44">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {!hideHeader && (
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end mb-16 md:mb-24">
            <div className="md:col-span-7">
              <Reveal as="p" className="eyebrow">The collection</Reveal>
              <Reveal as="h2" className="mt-6 md:mt-8 display-lg font-light text-ink">
                Four traditions, <em className="italic text-oxblood">one floor</em> at a time
              </Reveal>
            </div>
            <Reveal className="md:col-span-4 md:col-start-9 text-[17px] text-ink/75 leading-relaxed">
              Choose a weaving heritage and walk through the pieces we hold in the showroom today.
            </Reveal>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 md:gap-x-7">
          {collections.map((c, i) => (
            <Reveal key={c.id} delay={0.05 * i} className={i % 2 === 1 ? 'lg:mt-16' : ''}>
              <button
                type="button"
                onClick={() => open(c.routeCategory)}
                aria-label={`Browse ${c.title} carpets`}
                className="group block w-full text-left"
              >
                <div className="frame">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={c.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  </div>
                </div>
                <div className="pt-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="numeral text-xl">No. 0{i + 1}</p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink/60">{c.subtitle}</p>
                  </div>
                  <div className="rule mt-4" />
                  <h3 className="mt-5 font-display font-light text-ink text-[2.75rem] md:text-5xl leading-none group-hover:text-oxblood transition-colors duration-500">{c.title}</h3>
                  <p className="mt-4 text-ink/75 leading-relaxed">{c.description}</p>
                  <span className="link-line mt-6">View pieces <span aria-hidden>&rarr;</span></span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
