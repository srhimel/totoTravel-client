import React from 'react';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';
import PlacesSection from '../components/PlacesSection/PlacesSection';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <main>
            <Hero />
            <AboutSection />
            <div style={{ background: '#f9f9f9' }}>
                <PlacesSection />
            </div>
            <ContactSection />

        </main>
    );
};

export default Home;