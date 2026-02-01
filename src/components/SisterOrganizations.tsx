import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Grid3x3 } from 'lucide-react';

export const SisterOrganizations = () => {
  const header = useScrollReveal(0.2);
  const horizon = useScrollReveal(0.2);
  const kms = useScrollReveal(0.2);

  return (
    <section id="sisters" className="relative bg-stone-100 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`text-center mb-24 transition-all duration-1000 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6">
            Our Family of Brands
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8" />
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Beyond luxury carpets, we offer comprehensive flooring and ground cover solutions
            through our sister organizations.
          </p>
        </div>

        <div className="space-y-16">
          <div
            ref={horizon.ref}
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              horizon.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative h-96 overflow-hidden rounded-sm shadow-2xl order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/589/garden-grass-lawn-mower.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Horizon Ventures grass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
              <div className="absolute top-8 left-8">
                <Leaf className="w-12 h-12 text-green-300" strokeWidth={1.5} />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-4xl font-serif text-neutral-900">Horizon Ventures</h3>
              <p className="text-xl text-green-700 font-light tracking-wide">
                Natural & Artificial Grass Solutions
              </p>
              <p className="text-neutral-700 leading-relaxed text-lg">
                Horizon Ventures specializes in premium turf grass solutions for residential,
                commercial, and landscaping projects. We offer a comprehensive range of natural
                grass varieties and high-quality artificial alternatives that bring life and
                beauty to outdoor spaces.
              </p>
              <p className="text-neutral-700 leading-relaxed text-lg">
                From sports fields to garden lawns, our products combine durability,
                sustainability, and aesthetic appeal to create verdant landscapes that endure.
              </p>
            </div>
          </div>

          <div
            ref={kms.ref}
            className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
              kms.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-6 order-1">
              <h3 className="text-4xl font-serif text-neutral-900">KMS Carpets</h3>
              <p className="text-xl text-amber-700 font-light tracking-wide">
                Practical Floor Solutions for Everyday Living
              </p>
              <p className="text-neutral-700 leading-relaxed text-lg">
                KMS Carpets brings functional excellence to everyday floor covering needs.
                Specializing in doormats, bathroom mats, small runners, and utility carpets, we
                provide practical solutions without compromising on quality or design.
              </p>
              <p className="text-neutral-700 leading-relaxed text-lg">
                Our products are designed for high-traffic areas, offering durability, ease of
                maintenance, and affordable elegance for homes, offices, and commercial spaces.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden rounded-sm shadow-2xl order-2">
              <img
                src="https://images.pexels.com/photos/6207820/pexels-photo-6207820.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="KMS Carpets utility mats"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent" />
              <div className="absolute top-8 left-8">
                <Grid3x3 className="w-12 h-12 text-amber-300" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
