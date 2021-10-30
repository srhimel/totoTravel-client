import React from 'react';
import AboutSection from '../components/AboutSection/AboutSection';

const About = () => {
    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    About Us
                </h2>
            </div>
            <AboutSection />
        </div>
    );
};

export default About;