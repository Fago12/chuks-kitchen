import React from 'react';

const FeatureItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
    <div className='feature-item'>
        <div className='feature-item__icon'>
            <img src={`/${icon}`} alt="" />
        </div>
        <span className='feature-item__text'>{text}</span>
    </div>
);

const MainContent: React.FC = () => {
    return (
        <div className='onboarding__text-content'>
            <h2 className='onboarding__title'>Your Authentic Taste of Nigeria</h2>
            <p className='onboarding__description'>
                Experience homemade flavors delivered fresh to your desk or home.
                We bring the rich culinary heritage of Nigeria right to your doorstep.
            </p>

            <div className='onboarding__features'>
                <FeatureItem icon="fork-knife-fill.svg" text='Freshly Prepared' />
                <FeatureItem icon="fork-knife-fill.svg" text='Support Local Business' />
                <FeatureItem icon="truck-fill.svg" text='Fast & Reliable Delivery' />
            </div>

            <div className='onboarding__actions'>
                <button className='btn btn--primary'>Start Your Order</button>
                <button className='btn btn--secondary'>Learn More About Us</button>
            </div>
        </div>
    );
};

export default MainContent;
