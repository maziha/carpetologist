import { Link } from 'react-router-dom';
import { PageTransition } from '../components/ui/PageTransition';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Invitation } from '../components/Invitation';
import SEO from '../components/ui/SEO';

import kmsImg from '../assets/images/IMG_20260201_150218.jpg';

const categories = [
    { title: 'Hospitality', desc: 'High-traffic elegance for hotels and lounges.' },
    { title: 'Corporate', desc: 'Acoustic comfort for modern workspaces.' },
    { title: 'Residential', desc: 'Durable luxury for high-end homes.' },
    { title: 'Custom', desc: 'Bespoke designs for unique projects.' },
];

export const KMSPage = () => {
    const mail = `mailto:kmstraders25@gmail.com?subject=${encodeURIComponent('KMS Carpets catalogue request')}`;
    return (
        <PageTransition>
            <SEO
                title="Commercial Carpets & Tiles Kerala | KMS Carpets Muvattupuzha"
                description="Luxury commercial flooring solutions for hospitality, corporate, and residential projects. KMS Carpets (KMS Traders) offers high-durability modular tiles in Kerala."
            />
            <PageHero
                eyebrow="KMS Carpets"
                title="Engineered excellence."
                lead="KMS Carpets delivers performance flooring, from modular carpet tiles to wall-to-wall expanses, quality placed precisely where it matters."
                image={kmsImg}
                imageAlt="Patterned blue rug in a bright living room"
                action={<a href={mail} className="btn btn-brass">Request the catalogue</a>}
            />

            <section className="floor floor-warm text-ink py-28 md:py-44">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <Reveal as="p" className="eyebrow">By project</Reveal>
                    <Reveal as="h2" className="mt-6 md:mt-8 display-lg font-light max-w-3xl">The catalogue</Reveal>
                    <Reveal delay={0.1} className="mt-6 max-w-xl text-lg text-ink/75 leading-relaxed">
                        A comprehensive range of performance floor coverings for every kind of project.
                    </Reveal>

                    <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-4 md:gap-6">
                        {categories.map((cat, i) => (
                            <Reveal key={cat.title} delay={0.06 * i}>
                                <Link
                                    to="/contact"
                                    className="group flex flex-col justify-between min-h-[260px] md:min-h-[340px] p-8 md:p-12 bg-[#fbf9f5] shadow-[0_1px_2px_rgba(60,45,30,0.18),0_34px_48px_-30px_rgba(60,45,30,0.6)] hover:bg-oxblood transition-colors duration-700"
                                >
                                    <div>
                                        <p className="numeral text-xl mb-5 group-hover:text-brass-light transition-colors duration-700">No. 0{i + 1}</p>
                                        <h3 className="font-display font-light text-5xl md:text-6xl text-ink group-hover:text-ivory transition-colors duration-700">{cat.title}</h3>
                                        <p className="mt-4 text-lg text-ink/70 group-hover:text-ivory/80 transition-colors duration-700">{cat.desc}</p>
                                    </div>
                                    <span className="link-line mt-10 self-start group-hover:text-brass-light">
                                        Enquire about this series <span aria-hidden>&rarr;</span>
                                    </span>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            <Invitation title="Planning a project?" lead="Share your floor plan and timeline and we will recommend the right KMS series." />
        </PageTransition>
    );
};
