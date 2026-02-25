import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Dish } from '../mock/dishes';

export interface SelectedOption {
    id: string;
    name: string;
    price: number;
}

export interface CartItem extends Dish {
    quantity: number;
    selectedProtein?: SelectedOption;
    selectedExtras?: SelectedOption[];
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (dish: Dish, protein?: SelectedOption, extras?: SelectedOption[]) => void;
    removeFromCart: (cartItemId: string) => void;
    updateQuantity: (cartItemId: string, quantity: number) => void;
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

    const addToCart = (dish: Dish, protein?: SelectedOption, extras: SelectedOption[] = []) => {
        setCartItems(prev => {
            // Check if an item with EXACT same customizations already exists
            const existingIndex = prev.findIndex(item => {
                const sameDish = item.id === dish.id;
                const sameProtein = item.selectedProtein?.id === protein?.id;
                const sameExtras = item.selectedExtras?.length === extras.length &&
                    item.selectedExtras.every(e => extras.some(ext => ext.id === e.id));
                return sameDish && sameProtein && sameExtras;
            });

            if (existingIndex > -1) {
                return prev.map((item, idx) =>
                    idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            // Calculate base dish price + options
            const optionsPrice = (protein?.price || 0) + extras.reduce((acc, e) => acc + e.price, 0);
            const finalPrice = dish.price + optionsPrice;

            return [...prev, {
                ...dish,
                price: finalPrice, // Store the price with options for easier total calculation
                quantity: 1,
                selectedProtein: protein,
                selectedExtras: extras
            }];
        });
    };

    const removeFromCart = (index: number | string) => {
        setCartItems(prev => {
            if (typeof index === 'number') {
                return prev.filter((_, idx) => idx !== index);
            }
            // Fallback for ID-based removal (legacy support)
            return prev.filter(item => item.id !== index);
        });
    };

    const updateQuantity = (index: number | string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(index);
            return;
        }
        setCartItems(prev => {
            if (typeof index === 'number') {
                return prev.map((item, idx) => (idx === index ? { ...item, quantity } : item));
            }
            // Fallback for ID-based update
            return prev.map(item => (item.id === index ? { ...item, quantity } : item));
        });
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

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
