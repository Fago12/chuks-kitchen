import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { DISHES } from '../../mock/dishes';
import { useCart } from '../../context/CartContext';
import type { SelectedOption } from '../../context/CartContext';
import HomeHeader from '../Home/components/HomeHeader';
import MainFooter from '../Onboarding/components/MainFooter';
import IconButton from '../../components/common/IconButton';
import './DishDetails.scss';

const DishDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const dish = DISHES.find(d => d.id === id);

    const [selectedProtein, setSelectedProtein] = useState<SelectedOption | undefined>(
        dish?.proteins?.find(p => p.isDefault) || dish?.proteins?.[0]
    );
    const [selectedExtras, setSelectedExtras] = useState<SelectedOption[]>([]);
    const [quantity, setQuantity] = useState(1);
    const [specialInstructions, setSpecialInstructions] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!dish) {
        return (
            <div className="dish-details-error">
                <h2>Dish not found</h2>
                <button onClick={() => navigate('/explore')}>Back to Explore</button>
            </div>
        );
    }

    const handleExtraToggle = (extra: SelectedOption) => {
        setSelectedExtras(prev =>
            prev.some(e => e.id === extra.id)
                ? prev.filter(e => e.id !== extra.id)
                : [...prev, extra]
        );
    };

    const totalPrice = (dish.price + (selectedProtein?.price || 0) + selectedExtras.reduce((acc, e) => acc + e.price, 0)) * quantity;

    const handleAddToCart = () => {
        addToCart(dish, selectedProtein, selectedExtras, specialInstructions);
        // Optionally navigate to cart or show success
        alert('Added to cart!');
    };

    return (
        <div className="dish-page">
            <HomeHeader />

            <main className="dish-details">
                <div className="dish-details__container">
                    {/* Hero / Image Section */}
                    <div className="dish-details__visual">
                        <img src={dish.image} alt={dish.name} className="dish-details__image" />
                    </div>

                    {/* Content Section */}
                    <div className="dish-details__content">
                        <button className="dish-details__close" onClick={() => navigate(-1)} aria-label="Go back">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="dish-details__info">
                            <h1 className="dish-details__title">{dish.name}</h1>
                            <p className="dish-details__price">₦{dish.price.toLocaleString()}</p>
                            <p className="dish-details__description">
                                {dish.longDescription || dish.description}
                            </p>

                            {dish.tags && (
                                <div className="dish-details__tags">
                                    {dish.tags.map((tag, idx) => (
                                        <div key={idx} className={`dish-details__tag dish-details__tag--${tag.type}`}>
                                            <img src="/timer.svg" alt="" className="dish-details__tag-icon" />
                                            {tag.text}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Options Section */}
                        <div className="dish-details__options">
                            {dish.proteins && dish.proteins.length > 0 && (
                                <section className="dish-details__section">
                                    <h2 className="dish-details__section-title">Choose Your Protein</h2>
                                    <div className="dish-details__list">
                                        {dish.proteins.map(p => (
                                            <label
                                                key={p.id}
                                                className={`dish-details__option dish-details__option--radio ${selectedProtein?.id === p.id ? 'dish-details__option--selected' : ''}`}
                                            >
                                                <div className="dish-details__radio-container">
                                                    <input
                                                        type="radio"
                                                        name="protein"
                                                        checked={selectedProtein?.id === p.id}
                                                        onChange={() => setSelectedProtein(p)}
                                                        className="dish-details__radio-input"
                                                    />
                                                    <img src="/radio.svg" alt="" className="dish-details__radio-icon" />
                                                </div>
                                                <div className="dish-details__option-content">
                                                    <span className="dish-details__option-name">{p.name}</span>
                                                    <div className="dish-details__option-right">
                                                        {p.isDefault && <span className="dish-details__default">(Default)</span>}
                                                        {p.price > 0 && <span className="dish-details__option-price">+₦{p.price.toLocaleString()}</span>}
                                                    </div>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {dish.extras && dish.extras.length > 0 && (
                                <section className="dish-details__section">
                                    <h2 className="dish-details__section-title">Extra Sides (Optional)</h2>
                                    <div className="dish-details__list">
                                        {dish.extras.map(e => (
                                            <label key={e.id} className="dish-details__option dish-details__option--checkbox">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedExtras.some(ext => ext.id === e.id)}
                                                    onChange={() => handleExtraToggle(e)}
                                                />
                                                <div className="dish-details__option-content">
                                                    <span className="dish-details__option-name">{e.name}</span>
                                                    <span className="dish-details__option-price">+₦{e.price.toLocaleString()}</span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </section>
                            )}

                            <section className="dish-details__section">
                                <h2 className="dish-details__section-title">Special Instructions</h2>
                                <textarea
                                    className="dish-details__instructions"
                                    placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhhh food is tasty"
                                    value={specialInstructions}
                                    onChange={(e) => setSpecialInstructions(e.target.value)}
                                />
                            </section>

                            {/* Action Area below instructions */}
                            <section className="dish-details__actions">
                                <div className="dish-details__quantity">
                                    <IconButton
                                        icon="minus"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        ariaLabel="Decrease quantity"
                                        size="medium"
                                    />
                                    <span className="dish-details__quantity-value">{quantity}</span>
                                    <IconButton
                                        icon="plus"
                                        onClick={() => setQuantity(quantity + 1)}
                                        ariaLabel="Increase quantity"
                                        size="medium"
                                    />
                                </div>

                                <button className="dish-details__add-btn" onClick={handleAddToCart}>
                                    Add to Order • ₦{totalPrice.toLocaleString()}
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <MainFooter />
        </div>
    );
};

export default DishDetails;
