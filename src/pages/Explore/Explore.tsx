import React, { useState } from 'react';
import HomeHeader from '../Home/components/HomeHeader';
import MainFooter from '../Onboarding/components/MainFooter';
import ExploreHero from './components/ExploreHero';
import CategoryNav from './components/CategoryNav';
import MenuSection from '../Home/components/MenuSection';
import { DISHES } from '../../mock/dishes';
import './Explore.scss';

const categories = [
    'Popular',
    'Jollof Rice & Entrees',
    'Swallow & Soups',
    'Grills & sides',
    'Beverages',
    'Desserts'
];

const Explore: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Popular');

    // Grouping logic for the categories mentioned in Figma
    // In a real app, this would come from an API
    const getDishesByCategory = (catName: string) => {
        if (catName === 'Popular') return DISHES.filter(d => d.isChefSpecial);
        if (catName === 'Jollof Rice & Entrees') return DISHES.filter(d => d.category === 'Jollof');
        if (catName === 'Swallow & Soups') return DISHES.filter(d => d.category === 'Swallow');
        if (catName === 'Grills & sides') return DISHES.filter(d => d.category === 'Grill' || d.category === 'Sides');
        if (catName === 'Beverages') return DISHES.filter(d => d.category === 'Beverage');
        if (catName === 'Desserts') return DISHES.filter(d => d.category === 'Sweet');
        return []; // Fallback empty
    };


    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-150px 0px -70% 0px', // Adjusted to trigger when section is near top (below nav)
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const cat = categories.find(c => c.replace(/\s+/g, '-').toLowerCase() === id);
                    if (cat) {
                        setActiveCategory(cat);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all menu sections
        const sections = document.querySelectorAll('.explore-page__menu-section');
        sections.forEach(section => { observer.observe(section); });

        return () => observer.disconnect();
    }, []);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        const element = document.getElementById(category.replace(/\s+/g, '-').toLowerCase());
        if (element) {
            const headerOffset = 140; // Header(80) + StickyNav(60)
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="explore-page">
            <HomeHeader />

            <main className="explore-page__main">
                <ExploreHero />

                <div className="explore-page__content">
                    <div className="explore-page__container">
                        {/* Category Nav (Stacked/Full Width) */}
                        <section className="explore-page__section-nav">
                            <CategoryNav
                                categories={categories}
                                activeCategory={activeCategory}
                                onCategoryClick={handleCategoryClick}
                            />
                        </section>

                        {/* Menu Sections */}
                        <div className="explore-page__menu">
                            {categories.map((cat) => (
                                <section
                                    key={cat}
                                    id={cat.replace(/\s+/g, '-').toLowerCase()}
                                    className="explore-page__menu-section"
                                >
                                    <h2 className="explore-page__section-title">{cat}</h2>
                                    <MenuSection
                                        dishes={getDishesByCategory(cat)}
                                        loading={false}
                                        variant="compact"
                                    />
                                    <div className="explore-page__view-all">
                                        <a
                                            href="#"
                                            className="explore-page__view-all-link"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            View All Categories
                                        </a>
                                    </div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <MainFooter />
        </div>
    );
};

export default Explore;
