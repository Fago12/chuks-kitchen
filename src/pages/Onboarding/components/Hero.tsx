import React from 'react';

interface HeroProps {
    desktopImage: string;
    mobileImage?: string;
}

const Hero: React.FC<HeroProps> = ({ desktopImage, mobileImage }) => {
    return (
        <>
            <div className="onboarding__hero-desktop">
                <img src={desktopImage} alt='Nigerian meal desktop' />
            </div>
            {mobileImage && (
                <div className="onboarding__hero-mobile">
                    <img src={mobileImage} alt='Nigerian meal mobile' />
                </div>
            )}
        </>
    );
};

export default Hero;
