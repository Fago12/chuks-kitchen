import React from 'react';
import './SplitLayout.scss';
import Header from '../../pages/Onboarding/components/Header';
import Hero from '../../pages/Onboarding/components/Hero';
import FooterLinks from '../../pages/Onboarding/components/FooterLinks';

interface SplitLayoutProps {
    children: React.ReactNode;
    desktopHeroImage: string;
    mobileHeroImage: string;
    showFooterLinks?: boolean;
    overlayTitle?: string;
    overlaySubtitle?: string;
    hideMobileHero?: boolean;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({
    children,
    desktopHeroImage,
    mobileHeroImage,
    showFooterLinks = true,
    overlayTitle,
    overlaySubtitle,
    hideMobileHero = false
}) => {
    return (
        <div className="split-layout">
            <div className="split-layout__container">
                {/* Left Side (Desktop Hero) */}
                <div className="split-layout__hero-desktop">
                    <Hero imageSrc={desktopHeroImage} />
                    {(overlayTitle || overlaySubtitle) && (
                        <div className="split-layout__overlay">
                            <div className="split-layout__overlay-content">
                                {overlayTitle && <h1 className="split-layout__overlay-title">{overlayTitle}</h1>}
                                {overlaySubtitle && <p className="split-layout__overlay-subtitle">{overlaySubtitle}</p>}
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Side */}
                <div className="split-layout__content">
                    {/* Mobile Hero (only visible on mobile) */}
                    {!hideMobileHero && (
                        <div className="split-layout__hero-mobile">
                            <Hero imageSrc={mobileHeroImage} isMobile />
                            {(overlayTitle || overlaySubtitle) && (
                                <div className="split-layout__overlay split-layout__overlay--mobile">
                                    <div className="split-layout__overlay-content">
                                        {overlayTitle && <h1 className="split-layout__overlay-title">{overlayTitle}</h1>}
                                        {overlaySubtitle && <p className="split-layout__overlay-subtitle">{overlaySubtitle}</p>}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <Header />

                    <main className="split-layout__main">
                        {children}
                    </main>

                    {showFooterLinks && <FooterLinks />}
                </div>
            </div>
        </div>
    );
};

export default SplitLayout;
