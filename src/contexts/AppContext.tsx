import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { AppContextType, CartItem, Page } from '../types';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode; initialPage: Page; onPageChange: (page: Page) => void }> = ({ children, initialPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState<Page>(initialPage);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setCartOpen] = useState(false);
    
    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    const setPage = (page: Page) => {
        window.scrollTo(0, 0);
        onPageChange(page);
    };
    
    const addToCart = (item: Omit<CartItem, 'quantity'>) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
        setCartOpen(true);
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        setCart(prevCart => {
            if (quantity <= 0) {
                return prevCart.filter(item => item.id !== itemId);
            }
            return prevCart.map(item =>
                item.id === itemId ? { ...item, quantity } : item
            );
        });
    };
    
    const removeFromCart = (itemId: string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };
    
    const clearCart = () => {
        setCart([]);
    }

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cart]);

    const value: AppContextType = {
        currentPage,
        setPage,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        total,
        isCartOpen,
        setCartOpen,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
