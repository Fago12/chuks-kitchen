import React from 'react';
import { CATEGORIES } from '../../../mock/dishes';
import './CategoryGrid.scss';

const CategoryGrid: React.FC = () => {
    return (
        <div className="category-grid">
            {CATEGORIES.map((category, index) => (
                <div key={index} className="category-card">
                    <div className="category-card__image-wrapper">
                        <img src={category.image} alt={category.name} />
                    </div>
                    <div className="category-card__footer">
                        <h3 className="category-card__name">{category.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryGrid;
