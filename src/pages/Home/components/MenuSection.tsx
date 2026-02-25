import React from 'react';
import DishCard from './DishCard';
import type { Dish } from '../../../mock/dishes';
import './MenuSection.scss';

interface MenuSectionProps {
    dishes: Dish[];
    loading: boolean;
    variant?: 'default' | 'compact';
}

const MenuSection: React.FC<MenuSectionProps> = ({ dishes, loading, variant = 'default' }) => {
    if (loading) {
        return (
            <div className="menu-section__loading">
                <div className="loader"></div>
                <p>Curating our best dishes for you...</p>
            </div>
        );
    }

    return (
        <div className="menu-grid">
            {dishes.map(dish => (
                <DishCard key={dish.id} dish={dish} variant={variant} />
            ))}
        </div>
    );
};

export default MenuSection;
