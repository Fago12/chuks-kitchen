import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Dish } from '../mock/dishes';

interface CartItem extends Dish {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (dish: Dish) => void;
    removeFromCart: (dishId: string) => void;
    updateQuantity: (dishId: string, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('chuks-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('chuks-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (dish: Dish) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === dish.id);
            if (existing) {
                return prev.map(item =>
                    item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...dish, quantity: 1 }];
        });
    };

    const removeFromCart = (dishId: string) => {
        setCartItems(prev => prev.filter(item => item.id !== dishId));
    };

    const updateQuantity = (dishId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(dishId);
            return;
        }
        setCartItems(prev =>
            prev.map(item => (item.id === dishId ? { ...item, quantity } : item))
        );
    };

    const clearCart = () => setCartItems([]);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
