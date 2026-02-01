import React from 'react';
import { Contact as ContactSection } from '../components/Contact';
import { PageTransition } from '../components/ui/PageTransition';
import { Showroom } from '../components/Showroom';

export const ContactPage = () => {
    return (
        <PageTransition>
            <div className="bg-white min-h-screen">
                <ContactSection />
                <Showroom />
            </div>
        </PageTransition>
    );
};
