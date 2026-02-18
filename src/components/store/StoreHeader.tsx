import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { Page } from '../../types';

const StoreHeader: React.FC = () => {
    const { setPage, setCartOpen, cart } = useAppContext();
    const navLinks: { label: string; page: Page }[] = [
        { label: 'Misión', page: 'mission' },
        { label: 'Colecciones', page: 'catalog' },
        { label: 'Universo', page: 'infrastructure' },
        { label: 'Configurador', page: 'configurator' },
    ];
    
    return (
        <header className="relative z-50 flex items-center justify-between px-10 py-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('hero')}>
                <div className="text-accent-gold">
                    <span className="material-symbols-outlined text-3xl">deployed_code</span>
                </div>
                <h2 className="font-headline text-xl font-black tracking-widest text-foreground">EGYPT CRITTENS</h2>
            </div>
            <nav className="hidden md:flex items-center gap-10">
                {navLinks.map(link => (
                    <button key={link.page} onClick={() => setPage(link.page)} className="text-xs uppercase tracking-[0.2em] font-bold text-foreground/70 hover:text-accent-gold transition-colors">
                        {link.label}
                    </button>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <button onClick={() => setCartOpen(true)} className="relative bg-foreground/5 hover:bg-foreground/10 p-2 rounded-full transition-all border border-foreground/10">
                    <span className="material-symbols-outlined text-foreground text-xl">shopping_bag</span>
                    {cart.length > 0 && (
                         <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-gold text-xs font-bold text-accent-foreground">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
                    )}
                </button>
                <div className="size-10 rounded-full bg-primary/40 border border-primary overflow-hidden">
                    <img className="w-full h-full object-cover" alt="Avatar de usuario" src="https://picsum.photos/40/40" />
                </div>
            </div>
        </header>
    );
};

export default StoreHeader;
