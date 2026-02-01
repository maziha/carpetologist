import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const Collections = () => {
  const header = useScrollReveal(0.2);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const collections: Collection[] = [
    {
      id: 'turkish',
      title: 'Turkish Carpets',
      subtitle: 'Authentic Anatolian Heritage',
      description:
        'Explore carpets woven in the heart of Turkey, featuring traditional motifs, vibrant natural dyes, and centuries-old patterns that capture the essence of Anatolian culture.',
      image: 'https://images.pexels.com/photos/6045072/pexels-photo-6045072.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'handwoven',
      title: 'Handwoven Carpets',
      subtitle: 'Artisan Craftsmanship',
      description:
        'Each piece is a labor of love, handwoven by master artisans using techniques passed down through generations. These carpets embody patience, skill, and artistic devotion.',
      image: 'https://images.pexels.com/photos/4857782/pexels-photo-4857782.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'luxury',
      title: 'Designer & Luxury',
      subtitle: 'Contemporary Elegance',
      description:
        'Our luxury collection merges traditional craftsmanship with modern aesthetics. Featuring bespoke designs, premium materials, and innovative patterns for discerning interiors.',
      image: 'https://images.pexels.com/photos/6969901/pexels-photo-6969901.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'vintage',
      title: 'Vintage & Antique',
      subtitle: 'Timeless Treasures',
      description:
        'Carefully sourced vintage and antique pieces that carry stories from the past. Each carpet is a unique artifact with character, patina, and historical significance.',
      image: 'https://images.pexels.com/photos/7195299/pexels-photo-7195299.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="collections" className="relative bg-neutral-900 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`text-center mb-24 transition-all duration-1000 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-amber-50 mb-6">
            Our Collections
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8" />
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Discover curated galleries of exquisite carpets, each collection representing a
            unique intersection of heritage, artistry, and design excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => {
            const reveal = useScrollReveal(0.2);
            return (
              <div
                key={collection.id}
                ref={reveal.ref}
                className={`relative overflow-hidden rounded-sm shadow-2xl transition-all duration-1000 ${
                  reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === collection.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent transition-opacity duration-500 ${
                      hoveredId === collection.id ? 'opacity-90' : 'opacity-70'
                    }`}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <p className="text-sm tracking-widest text-amber-400 uppercase">
                    {collection.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif text-amber-50">
                    {collection.title}
                  </h3>
                  <p
                    className={`text-neutral-300 leading-relaxed transition-all duration-500 ${
                      hoveredId === collection.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {collection.description}
                  </p>
                  <button
                    className={`flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-all duration-300 ${
                      hoveredId === collection.id
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <span className="tracking-wider uppercase text-sm">Explore Collection</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
