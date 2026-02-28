import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { WhatsAppFloater } from './components/ui/WhatsAppFloater';
import { ChatBot } from './components/ui/ChatBot';

// Pages
import { Home } from './pages/Home';
import { CollectionsPage } from './pages/CollectionsPage';
import { SisterBrandsPage } from './pages/SisterBrandsPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HorizonPage } from './pages/HorizonPage';
import { KMSPage } from './pages/KMSPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/sister-brands" element={<SisterBrandsPage />} />
        <Route path="/horizon" element={<HorizonPage />} />
        <Route path="/kms" element={<KMSPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    document.title = 'Carpetologist — Luxury Carpets | KMS Traders, Muvattupuzha';
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-amber-500/30">
        <CustomCursor />
        <Navigation />
        {/* Floating Widgets */}
        <WhatsAppFloater />
        <ChatBot />

        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
