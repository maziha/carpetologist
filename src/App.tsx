import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';

// Components
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { WhatsAppFloater } from './components/ui/WhatsAppFloater';
import { ChatBot } from './components/ui/ChatBot';
import StructuredData from './components/ui/StructuredData';

// Pages (Lazy Loaded)
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const CollectionsPage = lazy(() => import('./pages/CollectionsPage').then(module => ({ default: module.CollectionsPage })));
const SisterBrandsPage = lazy(() => import('./pages/SisterBrandsPage').then(module => ({ default: module.SisterBrandsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(module => ({ default: module.GalleryPage })));
const HorizonPage = lazy(() => import('./pages/HorizonPage').then(module => ({ default: module.HorizonPage })));
const KMSPage = lazy(() => import('./pages/KMSPage').then(module => ({ default: module.KMSPage })));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen bg-neutral-950 flex justify-center items-center"><div className="w-8 h-8 border-t-2 border-amber-500 rounded-full animate-spin"></div></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/sister-brands" element={<SisterBrandsPage />} />
          <Route path="/horizon" element={<HorizonPage />} />
          <Route path="/kms" element={<KMSPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <StructuredData />
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
