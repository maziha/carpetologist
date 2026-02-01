import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallax } from '../hooks/useParallax';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Showroom = () => {
  const header = useScrollReveal(0.2);
  const details = useScrollReveal(0.2);
  const parallax = useParallax(0.2);

  return (
    <section id="showroom" className="relative bg-neutral-900 py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${parallax}px)` }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          ref={header.ref}
          className={`text-center mb-24 transition-all duration-1000 ${
            header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-serif text-amber-50 mb-6">
            Visit Our Showroom
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-600 to-transparent mb-8" />
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Experience the texture, craftsmanship, and beauty of our carpets firsthand in our
            carefully curated showroom space.
          </p>
        </div>

        <div
          ref={details.ref}
          className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 delay-300 ${
            details.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-12">
            <div className="relative h-96 overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Showroom interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6045093/pexels-photo-6045093.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Carpet textures"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-sm shadow-xl border border-neutral-700">
              <h3 className="text-3xl font-serif text-amber-50 mb-8">The Experience</h3>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Step into a world where every carpet has a story. Our showroom is designed to
                help you experience the tactile beauty of handwoven artistry—feel the texture,
                see the intricate patterns up close, and understand the heritage behind each
                piece.
              </p>
              <p className="text-neutral-300 leading-relaxed mb-6">
                Our knowledgeable staff will guide you through our collections, helping you find
                the perfect carpet that complements your space and reflects your personal style.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Whether you're seeking a statement piece or a subtle accent, we invite you to
                explore our curated selections in person.
              </p>
            </div>

            <div className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-sm shadow-xl border border-neutral-700 space-y-6">
              <h3 className="text-2xl font-serif text-amber-50 mb-6">Visit Details</h3>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Location</p>
                  <p className="text-neutral-200 leading-relaxed">
                    123 Heritage Lane, Design District
                    <br />
                    City Center, Postal Code
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-neutral-200 leading-relaxed">
                    Monday - Saturday: 10:00 AM - 7:00 PM
                    <br />
                    Sunday: 12:00 PM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Contact</p>
                  <p className="text-neutral-200 leading-relaxed">
                    +1 (555) 123-4567
                    <br />
                    info@carpetologist.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
