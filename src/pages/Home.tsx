import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Collections } from '../components/Collections';
import { Showroom } from '../components/Showroom';
import { PageTransition } from '../components/ui/PageTransition';

export const Home = () => {
    return (
        <PageTransition>
            <Hero />
            <About />
            <Collections />
            <Showroom />
        </PageTransition>
    );
};
