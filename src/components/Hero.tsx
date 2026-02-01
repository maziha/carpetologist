import { useParallax } from '../hooks/useParallax';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const parallax1 = useParallax(0.5);
  const parallax2 = useParallax(0.3);
  const parallax3 = useParallax(0.15);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-neutral-900">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${parallax1}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/6045253/pexels-photo-6045253.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            filter: 'brightness(0.4)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-10"
        style={{ transform: `translateY(${parallax2}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/40 to-neutral-900/80" />
      </div>

      <div
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ transform: `translateY(${parallax3}px)` }}
      >
        <div className="max-w-5xl space-y-8">
          <h1 className="text-6xl md:text-8xl font-serif text-amber-50 tracking-wide leading-tight">
            Carpetologist
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 font-light tracking-widest uppercase">
            Where Heritage Meets Artistry
          </p>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Discover authentic Turkish carpets, handwoven masterpieces, and luxury designer
            collections that transform spaces into timeless works of art.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 text-amber-200 hover:text-amber-100 transition-all animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};
