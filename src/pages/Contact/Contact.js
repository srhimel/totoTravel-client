import React from 'react';
import ContactSection from '../components/ContactSection/ContactSection';

const Contact = () => {
    return (
        <div>
            <div className="pt-4 pb-5 bg-dark text-white text-center">
                <h2 className="display-1 fw-bold">
                    Contact Us
                </h2>
            </div>
            <ContactSection />
        </div>
    );
};

export default Contact;