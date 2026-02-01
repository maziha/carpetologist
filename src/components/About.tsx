import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles, HandMetal, Award } from 'lucide-react';

export const About = () => {
  const section1 = useScrollReveal(0.2);
  const section2 = useScrollReveal(0.2);
  const section3 = useScrollReveal(0.2);

  const features = [
    {
      icon: Sparkles,
      title: 'Authentic Heritage',
      description:
        'Every carpet tells a story of Turkish craftsmanship passed down through generations.',
    },
    {
      icon: HandMetal,
      title: 'Handwoven Mastery',
      description:
        'Meticulously crafted by skilled artisans using time-honored techniques and natural materials.',
    },
    {
      icon: Award,
      title: 'Luxury Design',
      description:
        'Curated collections that elevate interiors with timeless elegance and artistic expression.',
    },
  ];

  return (
    <section id="about" className="relative bg-neutral-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={section1.ref}
          className={`text-center mb-24 transition-all duration-1000 ${
            section1.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6">
            The Art of Carpetology
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8" />
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            At Carpetologist, we believe that a carpet is more than a floor covering—it is a
            canvas of culture, a testament to artistry, and a bridge between heritage and
            contemporary living.
          </p>
        </div>

        <div
          ref={section2.ref}
          className={`grid md:grid-cols-2 gap-16 items-center mb-32 transition-all duration-1000 delay-300 ${
            section2.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative h-96 md:h-[600px] overflow-hidden rounded-sm shadow-2xl">
            <img
              src="https://images.pexels.com/photos/7534565/pexels-photo-7534565.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Handwoven carpet detail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-4xl font-serif text-neutral-900">Our Philosophy</h3>
            <p className="text-neutral-700 leading-relaxed text-lg">
              Founded on a passion for preserving traditional weaving arts while embracing modern
              design sensibilities, Carpetologist sources the finest materials and partners with
              master weavers across Turkey and beyond.
            </p>
            <p className="text-neutral-700 leading-relaxed text-lg">
              Each piece in our collection represents months of dedicated craftsmanship, where
              natural fibers, organic dyes, and intricate patterns come together to create
              functional art that enriches your living spaces.
            </p>
            <p className="text-neutral-700 leading-relaxed text-lg">
              We curate only what speaks to us—carpets with soul, character, and the power to
              transform a room into a sanctuary of warmth and beauty.
            </p>
          </div>
        </div>

        <div
          ref={section3.ref}
          className={`grid md:grid-cols-3 gap-12 transition-all duration-1000 delay-500 ${
            section3.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-8 bg-white rounded-sm shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">
                <feature.icon className="w-12 h-12 text-amber-700" strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-serif text-neutral-900">{feature.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
