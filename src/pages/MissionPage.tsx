import React from 'react';
import StoreCart from '../components/store/StoreCart';
import { useAppContext } from '../contexts/AppContext';

const MissionPage: React.FC = () => {
    const { setPage } = useAppContext();
    const sections = [
        {
            subtitle: 'Nuestra Misión Galáctica',
            title: <>Sanación a través del <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">vínculo sagrado.</span></>,
            description: 'No somos solo una tienda de peluches. Somos una empresa social comprometida con el bienestar emocional infantil, fusionando la sabiduría ancestral egipcia con terapias de acompañamiento modernas.',
            icon: 'visibility',
        },
        {
            icon: 'child_care',
            title: 'Programa de Adopción',
            description: 'Cada Critten no se "compra", se adopta. Este proceso simbólico crea una conexión profunda entre el niño y su guardián galáctico, facilitando procesos de resiliencia y seguridad emocional.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO9bKCmnCB9d6iqKqI4BQIZmcgTgaFcb4ZofsXP4-DgkfNrQ42KOZ4JILwEOBU1yDOn9Dzhu8mGpPi-gebxwFOiEelwqNgLrv5NFPH9q7UhLdJrvZy0jEo2pDBTMxU7k3cBpJNVqtcaFspSUj7uvNHywyAyAbkcXx6jkkCHBX9QC4xsINN23iKijfLvKItpUq_wkktL57sRrz82Wf4GM6pE8i0-x2tDbh2XuWDjIKrELrvfP4pptha-yGI1-cBKUI4uG4fGiythr4',
            testimonial: {
                quote: "El Critten me ayuda a no tener miedo por las noches. Siento que me cuida desde las estrellas.",
                author: "Leo, 7 años"
            }
        },
        {
            icon: 'account_balance',
            title: 'Compromiso con la Infancia',
            description: 'Colaboramos activamente con instituciones pediátricas para integrar nuestros Crittens en entornos de recuperación crítica.',
        },
        {
            icon: 'token',
            title: <>¿Listo para cambiar <br/><span className="text-accent-purple">una vida?</span></>,
            description: 'Al unirte a nuestra misión, no solo obtienes un producto premium de diseño galáctico; te conviertes en parte de una red global de apoyo terapéutico infantil.',
            cta: true
        }
    ];

    return (
        <div className="bg-background-dark text-foreground font-display">
            <StoreCart />
             <header className="fixed top-0 left-0 w-full z-50 border-b border-foreground/5 bg-background-dark/80 backdrop-blur-md px-8 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div onClick={() => setPage('hero')} className="flex items-center gap-3 cursor-pointer">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-3xl">change_history</span>
                        </div>
                        <h1 className="text-xl font-extrabold tracking-wider uppercase">Egypt Crittens</h1>
                    </div>
                    <nav className="hidden md:flex items-center gap-10">
                         <button onClick={() => setPage('mission')} className="text-sm font-medium hover:text-accent-purple transition-colors cursor-pointer">Misión</button>
                        <button onClick={() => setPage('catalog')} className="text-sm font-medium hover:text-accent-purple transition-colors cursor-pointer">Colección</button>
                        <button onClick={() => setPage('infrastructure')} className="text-sm font-medium hover:text-accent-purple transition-colors cursor-pointer">Universo</button>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button onClick={() => setPage('configurator')} className="bg-primary hover:bg-primary/80 text-foreground px-6 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105">
                            Adoptar Ahora
                        </button>
                    </div>
                </div>
            </header>
            
            <main className="flex overflow-x-auto snap-x snap-mandatory h-screen hide-scrollbar">
                {sections.map((section, index) => (
                    <section key={index} className="min-w-full h-full snap-start flex-shrink-0 flex flex-col justify-center items-center p-8 md:p-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(80,0,130,0.15)_1px,transparent_0)] [background-size:40px_40px]"></div>
                        {section.icon && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                            <span className="material-symbols-outlined text-[400px] text-accent-purple">{section.icon}</span>
                        </div>}

                        {index === 0 && <div className="max-w-4xl relative z-10">
                            <span className="text-accent-purple font-bold tracking-[0.3em] uppercase text-sm mb-4 block animate-fade-in-up">{section.subtitle}</span>
                            <h2 className="text-6xl md:text-8xl font-black leading-tight mb-8 animate-fade-in-up" style={{ textShadow: '0 0 10px rgba(181, 141, 206, 0.5), 0 0 20px rgba(80, 0, 130, 0.3)', animationDelay: '300ms' }}>{section.title}</h2>
                            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '500ms' }}>{section.description}</p>
                        </div>}

                        {index === 1 && <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                            <div>
                                <h3 className="text-4xl font-bold mb-6">{section.title}</h3>
                                <p className="text-lg leading-relaxed text-foreground/80">{section.description}</p>
                            </div>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-primary/20"><img alt="Conexión adoptiva" className="w-full h-full object-cover" src={section.image} /></div>
                                {section.testimonial && <div className="absolute -bottom-6 -left-6 p-6 rounded-xl max-w-xs" style={{ background: 'rgba(27, 15, 35, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(181, 141, 206, 0.1)' }}>
                                    <p className="italic text-sm text-accent-purple">{section.testimonial.quote}</p>
                                    <p className="text-xs font-bold mt-2">— {section.testimonial.author}</p>
                                </div>}
                            </div>
                        </div>}
                        
                         {index === 2 && <div className="max-w-7xl mx-auto w-full text-center">
                            <h3 className="text-5xl font-black mb-4">{section.title}</h3>
                            <p className="text-foreground/60 max-w-2xl mx-auto">{section.description}</p>
                         </div>}
                         
                         {index === 3 && <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 text-center relative overflow-hidden" style={{ background: 'rgba(27, 15, 35, 0.7)', backdropFilter: 'blur(12px)', border: '1px solid rgba(181, 141, 206, 0.1)' }}>
                            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{section.title}</h3>
                            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">{section.description}</p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <button onClick={() => setPage('catalog')} className="bg-primary hover:bg-primary/80 text-foreground px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-primary/20">Ver Catálogo Critten</button>
                            </div>
                         </div>}
                    </section>
                ))}
            </main>
        </div>
    );
};

export default MissionPage;
