import { Contact as ContactSection } from '../components/Contact';
import { PageTransition } from '../components/ui/PageTransition';
import { Showroom } from '../components/Showroom';
import SEO from '../components/ui/SEO';

export const ContactPage = () => {
    return (
        <PageTransition>
            <SEO
                title="Contact Carpetologist | Carpet Showroom Ernakulam & Muvattupuzha"
                description="Get in touch with Carpetologist (KMS Traders). Visit our premium carpet showroom in Muvattupuzha, Ernakulam. WhatsApp us at +91 7558077632 for enquiries."
            />
            <div className="bg-white min-h-screen">
                <ContactSection />
                <Showroom />
            </div>
        </PageTransition>
    );
};
