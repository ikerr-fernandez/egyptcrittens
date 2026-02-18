import React from 'react';
import StoreHeader from '../components/store/StoreHeader';
import StoreCart from '../components/store/StoreCart';

interface LocationMarkerProps {
    top: string;
    left: string;
    isHub: boolean;
    name: string;
    status: string;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ top, left, isHub, name, status }) => {
    return (
        <div className="absolute group/pin cursor-pointer" style={{ top, left }}>
            <div className="relative flex items-center justify-center">
                {isHub ? <>
                    <div className="absolute inset-0 size-8 bg-accent-gold/20 rounded-full animate-ping"></div>
                    <div className="size-6 bg-accent-gold rounded-full border-4 border-background-dark flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover/pin:scale-125 transition-transform">
                        <span className="material-symbols-outlined text-[12px] text-accent-foreground font-bold">home</span>
                    </div>
                </> : <div className="size-4 bg-neon-blue rounded-full border-2 border-background-dark flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.6)] group-hover/pin:scale-125 transition-transform"></div>}
            </div>
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 opacity-0 group-hover/pin:opacity-100 transition-all pointer-events-none">
                <div className="bg-background-dark/95 border border-accent-gold/40 p-4 rounded-xl shadow-2xl backdrop-blur-md">
                    <p className="text-[10px] text-accent-gold font-bold uppercase tracking-widest mb-1">{isHub ? 'Nexo Central' : 'Puesto de Avanzada'}</p>
                    <h4 className="font-bold text-sm mb-2">{name}</h4>
                    <p className="text-[11px] text-foreground/60 mb-1">{status}</p>
                </div>
            </div>
        </div>
    );
};

const InfrastructurePage: React.FC = () => {
    return (
        <div className="bg-background-dark text-foreground font-display overflow-y-hidden h-screen">
            <StoreCart />
            <StoreHeader />
            <main className="flex h-[calc(100vh-80px)] overflow-x-auto scroll-smooth snap-x snap-mandatory">
                <section className="flex-none w-[450px] h-full p-8 border-r border-foreground/10 snap-start bg-gradient-to-b from-background-dark to-primary/20">
                    <div className="flex flex-col h-full space-y-8 overflow-y-auto pr-4 hide-scrollbar">
                        <div>
                            <span className="text-accent-gold text-xs font-bold tracking-[0.3em] uppercase mb-2 block">Estado del Sistema: Activo</span>
                            <h1 className="text-4xl font-black leading-tight mb-4">Infraestructura <br/>Global</h1>
                            <p className="text-foreground/60 leading-relaxed">Operamos en la intersección del misticismo egipcio y la tecnología de vanguardia galáctica para crear compañeros terapéuticos sin precedentes.</p>
                        </div>
                        <div className="p-6 rounded-xl space-y-4" style={{ background: 'rgba(80, 0, 130, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent-gold">visibility</span>
                                <h3 className="font-bold text-lg uppercase tracking-wider">Transparencia Radical</h3>
                            </div>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                Cada Critten cuenta con un código estelar único que permite rastrear su origen exacto.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl space-y-4" style={{ background: 'rgba(80, 0, 130, 0.15)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                             <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-neon-blue">verified_user</span>
                                <h3 className="font-bold text-lg uppercase tracking-wider">Producción Ética</h3>
                            </div>
                             <p className="text-sm text-foreground/70 leading-relaxed">
                                Nuestras fábricas no solo cumplen con los estándares terrestres, sino que aplican el Código de Conducta de la Alianza Galáctica.
                             </p>
                        </div>
                    </div>
                </section>
                <section className="flex-none snap-start relative min-w-[1200px] overflow-hidden group" style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(80, 0, 130, 0.2) 0%, transparent 70%), linear-gradient(rgba(27, 15, 35, 0.9), rgba(27, 15, 35, 0.9)), url(https://i.imgur.com/lZkS8p5.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path></pattern></defs>
                        <rect fill="url(#grid)" height="100%" width="100%"></rect>
                    </svg>
                    <LocationMarker top="42%" left="32%" isHub={true} name="Cairo Galactic Hub" status="Producción: 1.2M/ciclo" />
                    <LocationMarker top="28%" left="24%" isHub={false} name="Flagship: Londres" status="Terranova District A-1" />
                    <LocationMarker top="38%" left="62%" isHub={false} name="Atelier: Tokyo" status="Neo-Shibuya Sector" />
                    <LocationMarker top="35%" left="10%" isHub={false} name="Galería: New York" status="Hudson Spaceport" />
                </section>
            </main>
        </div>
    );
};

export default InfrastructurePage;
