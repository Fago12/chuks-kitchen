import React from 'react';
import { useCart } from '../../../context/CartContext';
import type { Dish } from '../../../mock/dishes';
import './DishCard.scss';

interface DishCardProps {
    dish: Dish;
    variant?: 'default' | 'compact';
}

const DishCard: React.FC<DishCardProps> = ({ dish, variant = 'default' }) => {
    const { addToCart } = useCart();

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className={`dish-card ${variant === 'compact' ? 'dish-card--compact' : ''}`}>
            <div className="dish-card__image-wrapper">
                <img src={dish.image} alt={dish.name} className="dish-card__image" />
            </div>

            <div className="dish-card__content">
                <h3 className="dish-card__name">{dish.name}</h3>
                <p className="dish-card__description">{dish.description}</p>

                <div className="dish-card__footer">
                    <span className="dish-card__price">{formatCurrency(dish.price)}</span>
                    <button
                        className="dish-card__add-btn"
                        onClick={() => addToCart(dish)}
                        aria-label="Add to cart"
                    >
                        {variant !== 'compact' && 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
