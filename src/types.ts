export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    tagline: string;
    isMostWanted?: boolean;
}

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    description: string;
}

export type Page = 'hero' | 'catalog' | 'configurator' | 'mission' | 'infrastructure' | 'checkout';

export interface AppContextType {
    currentPage: Page;
    setPage: (page: Page) => void;
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
    total: number;
    isCartOpen: boolean;
    setCartOpen: (isOpen: boolean) => void;
}

export interface ConfiguredPlushie {
    childName: string;
    plushieName: string;
    color: string;
    density: number;
    relics: string[];
}
