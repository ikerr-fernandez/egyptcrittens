import React from 'react';
import StoreHeader from '../components/store/StoreHeader';
import StoreCart from '../components/store/StoreCart';
import PartnersCarousel from '../components/store/PartnersCarousel';
import { useAppContext } from '../contexts/AppContext';

const HeroPage: React.FC = () => {
  const { setPage } = useAppContext();

  const galacticGradientStyle = {
    background: 'radial-gradient(circle at center, #2e004d 0%, #1b0f23 40%, #0B0F2A 100%)'
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col text-foreground" style={galacticGradientStyle}>
            <StoreCart />
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] -left-20 w-96 h-96 border border-accent-gold/20 opacity-20 rotate-12" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] border border-accent-gold/20 opacity-10 -rotate-6" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '100px 100px', opacity: 0.1 }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full"></div>
            </div>
            
            <StoreHeader />

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center bg-inherit">
                <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 border border-primary bg-primary/10 backdrop-blur-sm animate-fade-in-up rounded-sm shadow-2xl opacity-65" style={{ animationDelay: '100ms' }}>
                    <span className="material-symbols-outlined text-accent-neon text-sm">auto_awesome</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-accent-neon">NUEVA COLECCIÓN RENOVADA</span>
                </div>

                <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-tight mb-6 max-w-5xl animate-fade-in-up" style={{ animationDelay: '300ms' }}>Damos calma.
Creamos recuerdos.<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-foreground to-accent-gold">calma.</span> <br />
                    Creamos historias.
                </h1>

                <p className="max-w-xl text-lg text-foreground/60 font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '500ms' }}>EGYPT CRITTENS:  Una marca donde los grandes laboratorios se mezclan con el antiguo Egipto y la ternura.

        </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <button onClick={() => setPage('configurator')} className="group relative flex min-w-[200px] items-center justify-center overflow-hidden rounded-lg bg-accent-gold px-8 py-4 transition-all hover:scale-105 active:scale-95">
                        <span className="relative z-10 font-display text-sm font-black uppercase tracking-widest text-accent-foreground">Crea tu peluche</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground/0 via-foreground/20 to-foreground/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                    <button onClick={() => setPage('mission')} className="group flex min-w-[200px] items-center justify-center rounded-lg border border-accent-neon/50 px-8 py-4 transition-all hover:bg-accent-neon/10 hover:border-accent-neon">
                        <span className="font-display text-sm font-black uppercase tracking-widest text-accent-neon">DESCUBRE NUESTRO COMPROMISO 
            </span>
                    </button>
                </div>
            </main>

            <footer className="relative z-10 px-10 py-6 flex justify-between items-end border-t border-foreground/5 bg-background-dark/30 backdrop-blur-md">
                <div className="flex gap-12">
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] uppercase tracking-widest text-accent-gold font-bold">Materiales</span>
                        <span className="text-xs text-foreground/70">Seda Galáctica & Algodón Premium</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[9px] uppercase tracking-widest text-accent-gold font-bold">Envío</span>
                        <span className="text-xs text-foreground/70">​4-10 días laborales </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-foreground/30">
                    <span className="text-[10px] font-bold">
          </span>
                    


                    <span className="text-[10px] font-bold">
          </span>
                </div>
            </footer>

            <PartnersCarousel />
        </div>);};
export default HeroPage;