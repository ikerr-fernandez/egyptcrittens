import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const StoreCart: React.FC = () => {
    const { isCartOpen, setCartOpen, cart, total, updateQuantity, setPage } = useAppContext();

    if (!isCartOpen) return null;

    return (
        <>
            <div onClick={() => setCartOpen(false)} className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 animate-fade-in-up" style={{ animationDuration: '0.5s' }}></div>
            <div className="fixed top-0 right-0 h-screen w-full max-w-md bg-background-dark border-l border-foreground/10 shadow-2xl z-50 flex flex-col animate-slide-in-right">
                <header className="p-6 border-b border-foreground/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-accent-gold text-xl">auto_awesome</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-foreground">Tu Galaxia</h2>
                            <p className="text-xs text-accent-purple/60 uppercase tracking-widest font-semibold">Carrito de Compras</p>
                        </div>
                    </div>
                    <button onClick={() => setCartOpen(false)} className="size-10 rounded-full hover:bg-foreground/5 flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-foreground">close</span>
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">
                    {cart.length === 0 ? (
                        <div className="text-center text-foreground/50 py-20">
                            <span className="material-symbols-outlined text-5xl mb-4">rocket</span>
                            <p>Tu galaxia está vacía.</p>
                             <button onClick={() => { setPage('catalog'); setCartOpen(false); }} className="mt-4 px-4 py-2 rounded-lg bg-primary text-sm">Explorar Colección</button>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex gap-4 group">
                                <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-primary/30 border border-foreground/5">
                                    <img alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src={item.image} />
                                </div>
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="font-bold text-foreground text-base leading-tight">{item.name}</h3>
                                        <p className="text-xs text-accent-purple/70 mt-1 line-clamp-2">{item.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="size-6 rounded border border-foreground/10 flex items-center justify-center text-xs hover:bg-primary transition-colors">-</button>
                                            <span className="text-sm font-medium">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="size-6 rounded border border-foreground/10 flex items-center justify-center text-xs hover:bg-primary transition-colors">+</button>
                                        </div>
                                        <span className="text-accent-gold font-bold">{item.price.toFixed(2)} €</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 border-t border-foreground/10 bg-foreground/[0.02] space-y-4">
                     <div className="space-y-2">
                        <div className="flex justify-between text-sm text-accent-purple/60">
                            <span>Subtotal</span>
                            <span>{total.toFixed(2)} €</span>
                        </div>
                        <div className="flex justify-between text-sm text-accent-purple/60">
                            <span>Envío Galáctico</span>
                            <span className="text-emerald-400">GRATIS</span>
                        </div>
                        <div className="flex justify-between text-xl font-bold text-foreground pt-2 border-t border-foreground/5">
                            <span>Total</span>
                            <span className="text-accent-gold" style={{textShadow: '0 0 10px rgba(229, 184, 11, 0.4)'}}>{total.toFixed(2)} €</span>
                        </div>
                    </div>
                    <button disabled={cart.length === 0} onClick={() => { setPage('checkout'); setCartOpen(false); }} className="w-full bg-primary hover:bg-primary/80 text-foreground font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
                        Continuar al Checkout
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default StoreCart;
