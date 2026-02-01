import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Collections } from './components/Collections';
import { SisterOrganizations } from './components/SisterOrganizations';
import { Showroom } from './components/Showroom';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.title = 'Carpetologist - Luxury Carpets & Heritage Artistry';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navigation />
      <Hero />
      <About />
      <Collections />
      <SisterOrganizations />
      <Showroom />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
