import React from 'react';
import './SplitLayout.scss';

interface SplitLayoutProps {
    children: React.ReactNode;
    header: React.ReactNode;
    hero: React.ReactNode;
    footer?: React.ReactNode;
    showFooterLinks?: boolean;
    overlayTitle?: string;
    overlaySubtitle?: string;
    hideMobileHero?: boolean;
    contentClassName?: string;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({
    children,
    header,
    hero,
    footer,
    showFooterLinks = true,
    overlayTitle,
    overlaySubtitle,
    hideMobileHero = false,
    contentClassName
}) => {
    const renderOverlay = (isMobile = false) => {
        if (!overlayTitle && !overlaySubtitle) return null;

        return (
            <div className={`split-layout__overlay ${isMobile ? 'split-layout__overlay--mobile' : ''}`}>
                <div className="split-layout__overlay-content">
                    {overlayTitle && <h2 className="split-layout__overlay-title">{overlayTitle}</h2>}
                    {overlaySubtitle && <p className="split-layout__overlay-subtitle">{overlaySubtitle}</p>}
                </div>
            </div>
        );
    };

    return (
        <div className="split-layout">
            <div className="split-layout__container">
                {/* Left Side (Desktop Hero) */}
                <div className="split-layout__hero-desktop">
                    {hero}
                    {renderOverlay()}
                </div>

                {/* Content Side */}
                <div className="split-layout__content">
                    {/* Mobile Hero (only visible on mobile via CSS) */}
                    {!hideMobileHero && (
                        <div className="split-layout__hero-mobile-wrapper">
                            {hero}
                            {renderOverlay(true)}
                        </div>
                    )}
                    {header}

                    <main className={`split-layout__main ${contentClassName || ''}`}>
                        {children}
                    </main>

                    {showFooterLinks && footer}
                </div>
            </div>
        </div>
    );
};

export default SplitLayout;
