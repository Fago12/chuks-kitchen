import React from 'react';
import { useNavigate, Link } from 'react-router';
import { useCart } from '../../context/CartContext';
import HomeHeader from '../Home/components/HomeHeader';
import MainFooter from '../Onboarding/components/MainFooter';
import './Cart.scss';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const getCustomizationString = (item: import('../../context/CartContext').CartItem) => {
        const parts = [];
        if (item.selectedProtein) parts.push(item.selectedProtein.name);
        if (item.selectedExtras && item.selectedExtras.length > 0) {
            parts.push(...item.selectedExtras.map((e: import('../../context/CartContext').SelectedOption) => e.name));
        }
        return parts.length > 0 ? parts.join(', ') : 'No customizations';
    };

    return (
        <div className="cart-page">
            <HomeHeader />

            <main className="cart-content">
                <div className="cart-container">
                    <div className="cart-card">
                        <h1 className="cart-title">Your Cart</h1>
                        <div className="cart-items-wrapper">
                            {cartItems.length > 0 ? (
                                <div className="cart-items-list">
                                    {cartItems.map((item) => (
                                        <div key={item.cartLineId} className="cart-item">
                                            <div className="cart-item__image-container">
                                                <img src={item.image} alt={item.name} className="cart-item__image" />
                                            </div>

                                            <div className="cart-item__info">
                                                <div className="cart-item__details">
                                                    <h3 className="cart-item__name">{item.name}</h3>
                                                    <p className="cart-item__customizations">
                                                        {getCustomizationString(item)}
                                                    </p>
                                                </div>

                                                <div className="cart-item__controls">
                                                    <button
                                                        className="cart-item__btn cart-item__btn--plus"
                                                        onClick={() => updateQuantity(item.cartLineId, item.quantity + 1)}
                                                        aria-label="Increase quantity"
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                            <path d="M12 5v14M5 12h14" />
                                                        </svg>
                                                    </button>

                                                    <span className="cart-item__quantity">{item.quantity}</span>

                                                    <button
                                                        className="cart-item__btn cart-item__btn--minus"
                                                        onClick={() => updateQuantity(item.cartLineId, item.quantity - 1)}
                                                        aria-label="Decrease quantity"
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                            <path d="M5 12h14" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <div className="cart-item__price-info">
                                                    <span className="cart-item__price">{formatCurrency(item.price * item.quantity)}</span>
                                                </div>

                                                <button
                                                    className="cart-item__remove"
                                                    onClick={() => removeFromCart(item.cartLineId)}
                                                    aria-label="Remove item"
                                                >
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                        <path d="M18 6L6 18M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="cart-empty">
                                    <p>Your cart is empty.</p>
                                    <button className="cart-empty__btn" onClick={() => navigate('/explore')}>
                                        Start Ordering
                                    </button>
                                </div>
                            )}
                        </div>

                        <Link to="/explore" className="cart-add-more">
                            <span className="cart-add-more__plus">+</span>
                            Add more items from Chuks Kitchen
                        </Link>
                    </div>
                </div>
            </main>

            <MainFooter />
        </div>
    );
};

export default Cart;
