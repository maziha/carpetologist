import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Collections } from '../components/Collections';
import { Showroom } from '../components/Showroom';
import { PageTransition } from '../components/ui/PageTransition';
import SEO from '../components/ui/SEO';

export const Home = () => {
    return (
        <PageTransition>
            <SEO
                title="Luxury Carpets in Ernakulam | Best Rugs Kerala"
                description="Experience the finest collection of luxury carpets and rugs in Kerala. Visit Carpetologist (KMS Traders) showroom in Muvattupuzha for premium Turkish and Persian carpets."
            />
            <Hero />
            <About />
            <Collections />
            <Showroom />
        </PageTransition>
    );
};
