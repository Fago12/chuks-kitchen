import React from 'react';
import './ExploreHero.scss';

const ExploreHero: React.FC = () => {
    return (
        <section className="explore-hero">
            <div className="explore-hero__background">
                <img src="/explore-hero.jpg" alt="Chuks Kitchen Menu" />
                <div className="explore-hero__overlay"></div>
            </div>

            <div className="explore-hero__container">
                <div className="explore-hero__content">
                    <h1 className="explore-hero__title">Chuks Kitchen</h1>
                    <p className="explore-hero__subtitle">
                        Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExploreHero;
