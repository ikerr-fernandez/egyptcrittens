import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import StoreCart from '../components/store/StoreCart';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { addToCart } = useAppContext();

    const handleAddToCart = () => {
        addToCart({
            id: product.id.toString(),
            name: product.name,
            price: product.price,
            image: product.image,
            description: product.description,
        });
    };

    const glassCardStyle = {
        background: 'rgba(11, 15, 42, 0.6)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${product.isMostWanted ? 'rgba(212, 175, 55, 0.6)' : 'rgba(212, 175, 55, 0.3)'}`,
    };
    
    return (
        <div className="min-w-[420px] snap-center">
            <div className={`rounded-xl p-8 flex flex-col h-full relative group transition-transform duration-300 hover:-translate-y-2 ${product.isMostWanted ? 'bg-primary/20' : ''}`} style={glassCardStyle}>
                {product.isMostWanted && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-gold text-accent-foreground text-[10px] font-black px-4 py-1.5 rounded-full tracking-widest">MÁS BUSCADO</div>
                )}
                <div className="absolute top-6 right-6 text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">{product.tagline}</span>
                </div>
                <div className="aspect-[4/5] rounded-xl bg-gradient-to-b from-primary/20 to-transparent mb-8 flex items-center justify-center overflow-hidden border border-foreground/5">
                    <img alt={`Peluche ${product.name}`} className="w-4/5 h-4/5 object-contain transition-transform duration-700 group-hover:scale-110" src={product.image} />
                </div>
                <div className="flex flex-col gap-2 mb-8">
                    <span className="text-accent-gold text-[11px] font-black tracking-[0.3em] uppercase">{product.category}</span>
                    <h4 className="text-3xl font-extrabold tracking-tight">{product.name}</h4>
                    <p className="text-neon-blue font-bold text-sm tracking-wide">{product.description}</p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-accent-gold/10 pt-6">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest">Inversión</span>
                        <span className="text-2xl font-black text-accent-gold">{product.price} €</span>
                    </div>
                    <button onClick={handleAddToCart} className="bg-neon-blue text-foreground font-black px-6 py-4 rounded-lg flex items-center gap-2 transition-all active:scale-95" style={{boxShadow: '0 0 10px rgba(30, 144, 255, 0.3)'}}>
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                        <span className="text-xs uppercase tracking-widest">Añadir</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const CatalogPage: React.FC = () => {
    const { setPage, cart } = useAppContext();
    const galacticBgStyle = {
        background: 'radial-gradient(circle at 20% 30%, #4B0082 0%, transparent 50%), radial-gradient(circle at 80% 70%, #1E90FF 0%, transparent 50%), #050510',
    };

    return (
        <div className="relative min-h-screen flex flex-col text-foreground font-display" style={galacticBgStyle}>
            <StoreCart />
            <header className="flex items-center justify-between px-10 py-6 border-b border-accent-gold/10 backdrop-blur-xl sticky top-0 z-50">
                 <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage('hero')}>
                    <div className="size-10 text-accent-gold flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl">temple_hindu</span>
                    </div>
                    <h1 className="text-2xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-foreground via-accent-gold to-foreground">
                        EGYPT CRITTENS
                    </h1>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <button onClick={() => setPage('catalog')} className="cursor-pointer text-xs font-bold hover:text-accent-gold transition-colors uppercase tracking-[0.3em]">Colección</button>
                    <button onClick={() => setPage('mission')} className="cursor-pointer text-xs font-bold hover:text-accent-gold transition-colors uppercase tracking-[0.3em]">Misión</button>
                    <button onClick={() => setPage('configurator')} className="cursor-pointer text-xs font-bold hover:text-accent-gold transition-colors uppercase tracking-[0.3em]">Configurador</button>
                </nav>
                 <button onClick={() => setPage('checkout')} className="flex items-center gap-3 bg-primary/30 hover:bg-primary/50 border border-accent-gold/30 px-5 py-2.5 rounded-lg transition-all">
                    <span className="material-symbols-outlined text-accent-gold">shopping_bag</span>
                    <span className="text-xs font-black tracking-tighter text-accent-gold">{cart.reduce((t, item) => t + item.price * item.quantity, 0).toFixed(2)} €</span>
                </button>
            </header>
            <main className="flex-1 flex flex-col justify-center py-16 relative z-10">
                <div className="px-16 mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-accent-gold text-sm font-black tracking-[0.5em] uppercase mb-3">Edición Limitada</h2>
                        <h3 className="text-6xl font-black tracking-tighter leading-tight">Reliquias Galácticas</h3>
                        <p className="text-foreground/70 mt-4 max-w-2xl text-xl font-light leading-relaxed">
                            "Encuentra el equilibrio estelar con nuestros guardianes terapéuticos, bendecidos por la luz de Sirio."
                        </p>
                    </div>
                </div>
                <div className="flex overflow-x-auto gap-10 px-16 pb-16 hide-scrollbar snap-x cursor-grab active:cursor-grabbing">
                    {PRODUCTS.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
            </main>
        </div>
    );
};

export default CatalogPage;
