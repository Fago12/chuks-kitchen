import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import type { Dish } from '../mock/dishes';

export interface SelectedOption {
    id: string;
    name: string;
    price: number;
}

export interface CartItem extends Dish {
    cartLineId: string; // Unique ID for this specific entry in the cart
    quantity: number;
    selectedProtein?: SelectedOption;
    selectedExtras?: SelectedOption[];
    specialInstructions?: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (dish: Dish, protein?: SelectedOption, extras?: SelectedOption[], instructions?: string, quantity?: number) => void;
    removeFromCart: (cartLineId: string) => void;
    updateQuantity: (cartLineId: string, quantity: number) => void;
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

    const addToCart = (dish: Dish, protein?: SelectedOption, extras: SelectedOption[] = [], instructions: string = '', quantity: number = 1) => {
        setCartItems(prev => {
            // If protein is not provided, try to find the default protein in the dish object
            // This ensures that adding from a card (where protein isn't selected) 
            // matches adding from details (where it defaults to the default protein)
            const effectiveProtein = protein || dish.proteins?.find(p => p.isDefault) || dish.proteins?.[0];

            // Check if an item with EXACT same customizations and instructions already exists
            const existingIndex = prev.findIndex(item => {
                const sameDish = item.id === dish.id;
                const sameProtein = item.selectedProtein?.id === effectiveProtein?.id;

                // Normalize both sides to arrays for robust comparison
                const itemExtras = item.selectedExtras || [];
                const currentExtras = extras || [];

                const sameExtras = itemExtras.length === currentExtras.length &&
                    itemExtras.every(e => currentExtras.some(ext => ext.id === e.id));

                const sameInstructions = (item.specialInstructions || '') === instructions;

                return sameDish && sameProtein && sameExtras && sameInstructions;
            });

            if (existingIndex > -1) {
                return prev.map((item, idx) =>
                    idx === existingIndex ? { ...item, quantity: item.quantity + quantity } : item
                );
            }

            // Calculate base dish price + options
            const optionsPrice = (effectiveProtein?.price || 0) + extras.reduce((acc, e) => acc + e.price, 0);
            const finalPrice = dish.price + optionsPrice;

            return [...prev, {
                ...dish,
                cartLineId: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
                price: finalPrice,
                quantity: quantity,
                selectedProtein: effectiveProtein,
                selectedExtras: extras,
                specialInstructions: instructions
            }];
        });

        // Unified UI feedback
        toast.success('Added to cart!');
    };

    const removeFromCart = (cartLineId: string) => {
        setCartItems(prev => prev.filter(item => item.cartLineId !== cartLineId));
    };

    const updateQuantity = (cartLineId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(cartLineId);
            return;
        }
        setCartItems(prev => prev.map(item =>
            item.cartLineId === cartLineId ? { ...item, quantity } : item
        ));
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
