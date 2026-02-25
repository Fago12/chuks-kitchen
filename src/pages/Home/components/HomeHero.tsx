import React from 'react';
import './HomeHero.scss';

const HomeHero: React.FC = () => {
    return (
        <section className="home-hero">
            <div className="home-hero__bg">
                <img src="/home-hero.jpg" alt="Nigerian Feast" />
                <div className="home-hero__overlay"></div>
            </div>

            <div className="home-hero__content">
                <h1 className="home-hero__title">
                    The Heart of Nigerian Home Cooking
                </h1>
                <p className="home-hero__subtitle">
                    Handcrafted with passion, delivered with care.
                </p>
                <button className="home-hero__cta">Discover what's new</button>
            </div>

            <div className="home-hero__search">
                <div className="home-hero__search-input-wrapper">
                    <svg className="home-hero__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        className="home-hero__search-input"
                        placeholder="What are you craving for today?"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
