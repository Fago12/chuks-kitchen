import React from 'react';
import './Onboarding.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import FooterLinks from './components/FooterLinks';
import MainFooter from './components/MainFooter';

const HERO_IMAGE_DESKTOP = '/onboarding-hero.jpg';
const HERO_IMAGE_MOBILE = '/onboarding-hero-mobile.png';

const Onboarding: React.FC = () => {
    return (
        <div className="onboarding">
            <div className="onboarding__container">
                {/* Left Side (Desktop Hero) */}
                <Hero imageSrc={HERO_IMAGE_DESKTOP} />

                {/* Content Side */}
                <div className="onboarding__content">
                    {/* Mobile Hero (only visible on mobile) */}
                    <Hero imageSrc={HERO_IMAGE_MOBILE} isMobile />

                    <Header />

                    <main className="onboarding__main">
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
