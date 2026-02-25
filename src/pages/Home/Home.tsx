import React, { useEffect, useState } from 'react';
import HomeHeader from './components/HomeHeader';
import HomeHero from './components/HomeHero';
import CategoryGrid from './components/CategoryGrid';
import MenuSection from './components/MenuSection';
import SecondaryHero from './components/SecondaryHero';
import MainFooter from '../Onboarding/components/MainFooter';
import { dishService } from '../../services/api/dishes';
import type { Dish } from '../../mock/dishes';
import './Home.scss';

const Home: React.FC = () => {
    const [specials, setSpecials] = useState<Dish[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSpecials = async () => {
            try {
                const data = await dishService.getChefSpecials();
                setSpecials(data);
            } catch (error) {
                console.error("Failed to fetch specials:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSpecials();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <HomeHeader />

            <main className="home-page__main">
                <HomeHero />

                <section className="home-page__section">
                    <div className="home-page__container">
                        <h2 className="home-page__title">Popular Categories</h2>
                        <CategoryGrid />
                    </div>
                </section>

                <section className="home-page__section home-page__section--gray" id="dishes">
                    <div className="home-page__container">
                        <h2 className="home-page__title">Chef's Specials</h2>
                        <MenuSection dishes={specials} loading={loading} />
                    </div>
                </section>

                <SecondaryHero />
            </main>

            <MainFooter />
        </div>
    );
};

export default Home;
