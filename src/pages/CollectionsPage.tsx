import { Collections as CollectionsSection } from '../components/Collections';
import { Invitation } from '../components/Invitation';
import { PageTransition } from '../components/ui/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import SEO from '../components/ui/SEO';

import heroImg from '../assets/images/IMG_20260201_151148.jpg';

const promises = [
    { title: 'Natural by nature', text: 'We favour 100% natural wool, silk and organic vegetable dyes, so a carpet is as kind to the earth as it is beautiful.' },
    { title: 'Made for your room', text: 'Bring your vision to life with a bespoke piece, cut to your space and tuned to its architectural palette.' },
    { title: 'Delivered with care', text: 'White-glove delivery and professional installation, arranged for every handpicked piece.' },
];

export const CollectionsPage = () => {
    return (
        <PageTransition>
            <SEO
                title="Premium Carpet Collection Kerala | Imported Rugs Ernakulam"
                description="Explore our exclusive collection of hand-knotted Turkish, Persian, and Silk carpets. Premium quality rugs available at Carpetologist, Muvattupuzha."
            />
            <PageHero
                title="The collection"
                lead="Four weaving traditions, curated by hand and held in our Muvattupuzha showroom. Pick one to explore."
                image={heroImg}
                imageAlt="Crimson Persian carpet hung against a carved plaster wall"
            />
            <CollectionsSection hideHeader />

            <section className="floor floor-warm text-ink py-24 md:py-40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <Reveal as="h2" className="display-md font-light max-w-3xl">How we look after you and your carpet</Reveal>
                    <div className="mt-16 md:mt-24 space-y-14 md:space-y-20">
                        {promises.map((p, i) => (
                            <Reveal key={p.title} delay={0.05 * i} className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                                <h3 className="md:col-span-6 font-display italic font-light text-oxblood text-[clamp(2.25rem,5vw,4.5rem)] leading-none">{p.title}</h3>
                                <p className="md:col-span-5 md:col-start-8 text-lg text-ink/80 leading-relaxed">{p.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <Invitation />
        </PageTransition>
    );
};
