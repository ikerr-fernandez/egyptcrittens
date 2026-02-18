import React from 'react';

const StoreFooter: React.FC = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-12 mt-12 border-t border-foreground/5 px-4 md:px-20 lg:px-40 py-12 bg-background-dark/50">
            <div className="flex flex-col gap-1 items-center md:items-start">
                <p className="text-xs text-foreground/40 font-medium">© 2024 Egypt Crittens S.L. All rights reserved.</p>
                <div className="flex gap-4 text-[10px] text-foreground/20 uppercase tracking-widest">
                    <span>Diseñado en Madrid</span>
                    <span>•</span>
                    <span>Fabricado en Giza-Orbit</span>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-3 bg-foreground/5 px-4 py-2 rounded-full border border-foreground/10">
                    <div className="size-2 rounded-full bg-neon-blue animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-tighter uppercase text-foreground/60">Estado en Vivo: Tierra/Parla</span>
                </div>
                <button onClick={scrollToTop} className="flex items-center gap-2 text-xs font-bold text-accent-gold/80 hover:text-accent-gold transition-colors">
                    <span>Volver Arriba</span>
                    <span className="material-symbols-outlined text-sm">expand_less</span>
                </button>
            </div>
        </footer>
    );
};

export default StoreFooter;
