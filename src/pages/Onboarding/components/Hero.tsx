import React from 'react';

interface HeroProps {
    imageSrc: string;
    isMobile?: boolean;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, isMobile }) => {
    const className = isMobile ? 'onboarding__hero-mobile' : 'onboarding__hero-desktop';
    return (
        <div className={className}>
            <img src={imageSrc} alt='Nigerian meal' />
        </div>
    );
};

export default Hero;
