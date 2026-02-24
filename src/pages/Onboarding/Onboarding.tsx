import React from 'react';
import './Onboarding.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import FooterLinks from './components/FooterLinks';
import MainFooter from './components/MainFooter';

// Optimized hero image from public folder
const HERO_IMAGE = '/onboarding-hero.jpg';

const Onboarding: React.FC = () => {
    return (
        <div className="onboarding">
            <div className="onboarding__container">
                {/* Left Side (Desktop Hero) */}
                <Hero imageSrc={HERO_IMAGE} />

                {/* Right Side / Content */}
                <div className="onboarding__content">
                    <Header />

                    <main className="onboarding__main">
                        {/* Mobile Hero (only visible on mobile) */}
                        <Hero imageSrc={HERO_IMAGE} isMobile />

                        <MainContent />
                    </main>

                    <FooterLinks />
                </div>
            </div>

            {/* Site-wide Footer */}
            <MainFooter />
        </div>
    );
};

export default Onboarding;
