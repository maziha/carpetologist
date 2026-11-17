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
                eyebrow="The collection"
                title="The collection"
                lead="Four weaving traditions, curated by hand and held in our Muvattupuzha showroom. Pick one to explore."
                image={heroImg}
                imageAlt="Crimson Persian carpet hung against a carved plaster wall"
            />
            <CollectionsSection hideHeader />

            <section className="floor floor-warm text-ink py-28 md:py-44">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <Reveal as="p" className="eyebrow">The service</Reveal>
                    <Reveal as="h2" className="mt-6 md:mt-8 display-md font-light max-w-3xl">How we look after you and your carpet</Reveal>
                    <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-12 md:gap-10">
                        {promises.map((p, i) => (
                            <Reveal key={p.title} delay={0.05 * i}>
                                <div className="rule" />
                                <p className="numeral mt-7 text-3xl">{['i.', 'ii.', 'iii.'][i]}</p>
                                <h3 className="mt-5 font-display font-light text-ink text-4xl md:text-[2.6rem] leading-none">{p.title}</h3>
                                <p className="mt-5 text-[17px] text-ink/75 leading-relaxed">{p.text}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <Invitation />
        </PageTransition>
    );
};
