import React from 'react';
import SplitLayout from '../../components/layout/SplitLayout';
import Hero from './components/Hero';
import Header from './components/Header';
import FooterLinks from './components/FooterLinks';
import MainContent from './components/MainContent';
import MainFooter from './components/MainFooter';
import './Onboarding.scss';

const HERO_IMAGE_DESKTOP = '/onboarding-hero.jpg';

const Onboarding: React.FC = () => {
    return (
        <div className="onboarding-wrapper">
            <SplitLayout
                header={<Header />}
                hero={<Hero imageSrc={HERO_IMAGE_DESKTOP} />}
                footer={<FooterLinks />}
                contentClassName="onboarding__main"
            >
                <div className="onboarding">
                    <MainContent />
                </div>
            </SplitLayout>

            {/* Site-wide Footer */}
            <MainFooter />
        </div>
    );
};

export default Onboarding;
