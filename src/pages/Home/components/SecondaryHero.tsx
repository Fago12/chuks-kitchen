import React from 'react';
import './SecondaryHero.scss';

const SecondaryHero: React.FC = () => {
    return (
        <section className="secondary-hero">
            <div className="secondary-hero__content">
                <h2 className="secondary-hero__title">
                    Introducing Our New Menu Additions!
                </h2>
                <p className="secondary-hero__subtitle">
                    Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!
                </p>
                <button className="secondary-hero__cta">Discover what's new</button>
            </div>

            <div className="secondary-hero__bg">
                <img src="/home-hero-2.jpg" alt="Secondary Hero" />
                <div className="secondary-hero__overlay"></div>
            </div>
        </section>
    );
};

export default SecondaryHero;
