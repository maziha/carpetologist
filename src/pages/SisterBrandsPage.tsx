import { SisterOrganizations } from '../components/SisterOrganizations';
import { Invitation } from '../components/Invitation';
import { PageTransition } from '../components/ui/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import SEO from '../components/ui/SEO';

import heroImg from '../assets/images/IMG_20260201_150545.jpg';

const gallery = [
    { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Luxury living room interior', cls: 'aspect-[4/3]' },
    { src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Landscaped garden lawn', cls: 'aspect-[3/4] md:mt-16' },
    { src: 'https://images.pexels.com/photos/6045093/pexels-photo-6045093.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Close view of woven floor texture', cls: 'aspect-[3/4]' },
    { src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Boutique interior with warm lighting', cls: 'aspect-[4/3] md:mt-16' },
];

export const SisterBrandsPage = () => {
    return (
        <PageTransition>
            <SEO
                title="KMS Traders Group | Luxury Living Solutions Kerala"
                description="KMS Traders (Muvattupuzha) is the parent organization of Carpetologist, Horizon Ventures, and KMS Carpets. Expert flooring and landscaping solutions in Ernakulam."
            />
            <PageHero
                title="Three brands, one ground."
                lead="Carpetologist, Horizon Ventures and KMS Carpets share a single promise: beautiful, durable surfaces for every space, indoors and out."
                image={heroImg}
                imageAlt="Textured beige carpet in a calm living room"
            />
            <SisterOrganizations hideHeader />

            <section className="floor floor-warm text-ink py-24 md:py-40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-14 md:gap-8 items-center">
                    <div className="md:col-span-5">
                        <Reveal as="h2" className="display-md font-light">Integrated living</Reveal>
                        <Reveal delay={0.1} className="mt-8 text-lg text-ink/80 leading-relaxed max-w-md">
                            Based in Muvattupuzha, Ernakulam, Kerala, the KMS Traders group brings Carpetologist, Horizon Ventures and KMS Carpets together for a holistic approach to luxury ground coverings.
                        </Reveal>
                    </div>
                    <div className="md:col-span-6 md:col-start-7 grid grid-cols-2 gap-4 md:gap-6">
                        {gallery.map((g, i) => (
                            <Reveal key={g.src} delay={0.08 * i} className={`${g.cls} overflow-hidden relative bg-ivory-deep`}>
                                <img src={g.src} alt={g.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <Invitation />
        </PageTransition>
    );
};
