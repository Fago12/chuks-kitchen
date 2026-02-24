import React from 'react';
import SplitLayout from '../../components/layout/SplitLayout';
import MainContent from './components/MainContent';
import MainFooter from './components/MainFooter';
import './Onboarding.scss';

const HERO_IMAGE_DESKTOP = '/onboarding-hero.jpg';
const HERO_IMAGE_MOBILE = '/onboarding-hero-mobile.png';

const Onboarding: React.FC = () => {
    return (
        <div className="onboarding">
            <SplitLayout
                desktopHeroImage={HERO_IMAGE_DESKTOP}
                mobileHeroImage={HERO_IMAGE_MOBILE}
            >
                <MainContent />
            </SplitLayout>

            {/* Site-wide Footer */}
            <MainFooter />
        </div>
    );
};

export default Onboarding;
