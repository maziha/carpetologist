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
    <section className="relative py-24 md:py-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {!hideHeader && (
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end mb-14 md:mb-20">
            <Reveal as="h2" className="md:col-span-7 display-lg font-light text-ink">
              Four traditions, one floor at a time
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9 text-lg text-ink/75 leading-relaxed">
              Choose a weaving heritage and walk through the pieces we hold in the showroom today.
            </Reveal>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {collections.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => open(c.routeCategory)}
              aria-label={`Browse ${c.title} carpets`}
              className="group text-left"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#faf7f2] p-2.5 shadow-[0_26px_36px_-24px_rgba(60,45,30,0.55)]"><div className="relative w-full h-full overflow-hidden">
                <img src={c.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
              </div></div>
              <div className="pt-5">
                <p className="text-sm text-oxblood">{c.subtitle}</p>
                <h3 className="mt-1 font-display font-light text-ink text-4xl md:text-5xl leading-none group-hover:text-oxblood transition-colors duration-300">{c.title}</h3>
                <p className="mt-3 text-ink/75 leading-relaxed">{c.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
