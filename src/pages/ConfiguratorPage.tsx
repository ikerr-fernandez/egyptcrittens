import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import StoreCart from '../components/store/StoreCart';
import { ConfiguredPlushie } from '../types';

const ConfiguratorPage: React.FC = () => {
    const { setPage, addToCart } = useAppContext();
    const [config, setConfig] = useState<ConfiguredPlushie>({
        childName: '',
        plushieName: '',
        color: 'Gálactico',
        density: 3,
        relics: ['Corona Galáctica'],
    });

    const staticImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBze58wsQoAoYjmfU7AaesaEtN4G8wsBN0mLsH-eywbV7NIOgtyqHJkG6dAqm2F9hzgCPnRKeMACcZZO8nk7-StA295xc3xebJZsjQPjczM71i_FNKGm0i9v9JSOQyPxS6qWU5OFQH_JSVo_4dxsO5_NCMYesJSAWSZml87R726RrkEMA-PSjNMUZvORTMY1_ZRshRwrEbIeNowNT44HmemLsfQVpGNAIUwxxbna1ikpqZu2HQNbUMJsRcVkmVfb4eP9TACP1VlcuI';

    const colors = [
        { name: 'Gálactico', hex: '#500082' },
        { name: 'Azul Nilo', hex: '#00CED1' },
        { name: 'Solar', hex: '#FF4500' },
        { name: 'Anubis', hex: '#1A1A1A' },
    ];

    const relics = ['Collar Ankh', 'Corona Galáctica'];

    const handleConfigChange = (field: keyof ConfiguredPlushie, value: string | number | string[]) => {
        setConfig(prev => ({...prev, [field]: value}));
    };

    const toggleRelic = (relic: string) => {
        setConfig(prev => {
            const newRelics = prev.relics.includes(relic)
                ? prev.relics.filter(r => r !== relic)
                : [...prev.relics, relic];
            return { ...prev, relics: newRelics };
        });
    }
    
    const handleAddToCart = () => {
        if (!config.plushieName) {
            alert("Por favor, dale un nombre a tu Critten antes de añadirlo al carrito.");
            return;
        }
        addToCart({
            id: `config-${Date.now()}`,
            name: config.plushieName,
            price: 189,
            image: staticImage,
            description: `${config.color}, ${config.relics.join(', ')}. Para ${config.childName || 'un niño especial'}.`,
        });
    };

    return (
        <div className="bg-deep-space text-foreground min-h-screen font-display">
            <StoreCart />
             <header className="flex items-center justify-between px-12 py-6 z-10">
                <div onClick={() => setPage('hero')} className="flex items-center gap-3 cursor-pointer">
                    <div className="text-egyptian-gold">
                        <span className="material-symbols-outlined text-4xl">change_history</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-extrabold tracking-widest uppercase">Egypt Crittens</h1>
                        <p className="text-[10px] text-egyptian-gold/80 tracking-[0.3em] uppercase">Peluches Galácticos</p>
                    </div>
                </div>
                 <nav className="hidden md:flex items-center gap-10">
                    <button onClick={() => setPage('configurator')} className="text-sm font-semibold hover:text-egyptian-gold transition-colors cursor-pointer">Configurador</button>
                    <button onClick={() => setPage('catalog')} className="text-sm font-semibold hover:text-egyptian-gold transition-colors opacity-60 cursor-pointer">Colección</button>
                </nav>
                 <div className="flex items-center gap-6">
                    <button onClick={() => setPage('checkout')} className="bg-primary/40 border border-primary/60 p-2 rounded-lg">
                        <span className="material-symbols-outlined">person</span>
                    </button>
                </div>
            </header>

            <main className="flex flex-col lg:flex-row h-[calc(100vh-104px)] overflow-hidden">
                <section className="flex-1 relative flex items-center justify-center p-8 lg:p-12">
                    <div className="absolute w-[500px] h-[500px] rounded-full opacity-30" style={{boxShadow: '0 0 80px 20px rgba(80, 0, 130, 0.4)'}}></div>
                    <div className="relative group cursor-grab active:cursor-grabbing animate-float">
                        <div className="w-[450px] h-[450px] bg-gradient-to-br from-primary/10 to-transparent rounded-full flex items-center justify-center p-8">
                           <img alt="Vista previa del peluche galáctico" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(80,0,130,0.5)] rounded-lg" src={staticImage}/>
                        </div>
                    </div>
                </section>
                
                <section className="w-full lg:w-[480px] flex flex-col gap-6 p-4 lg:p-0 lg:pr-12 lg:pb-12">
                     <div className="p-8 rounded-xl flex flex-col gap-6 h-full overflow-y-auto hide-scrollbar" style={{ background: 'rgba(42, 23, 54, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(181, 141, 206, 0.2)' }}>
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Esencia Divina</h2>
                            <p className="text-sm opacity-70">Asigna un nombre y alma a tu compañero celestial.</p>
                        </div>
                        <div className="space-y-4">
                            <ConfigInput label="Nombre del Niño" placeholder="¿A quién protegerá?" value={config.childName} onChange={(e) => handleConfigChange('childName', e.target.value)} />
                            <ConfigInput label="Nombre del Peluche" placeholder="Ej. Anubis Moonpaw" value={config.plushieName} onChange={(e) => handleConfigChange('plushieName', e.target.value)} />
                        </div>
                        <div className="space-y-4">
                             <label className="text-xs uppercase tracking-widest text-egyptian-gold font-bold">Tono Celestial</label>
                             <div className="flex gap-4">
                                {colors.map(c => (
                                    <button key={c.name} onClick={() => handleConfigChange('color', c.name)} className={`w-10 h-10 rounded-full transition-all relative ring-2 ${config.color === c.name ? 'ring-egyptian-gold' : 'ring-transparent hover:ring-foreground/20'}`} style={{ backgroundColor: c.hex }}>
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] opacity-60 whitespace-nowrap">{c.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                         <div className="space-y-4 pt-4">
                            <label className="text-xs uppercase tracking-widest text-egyptian-gold font-bold">Reliquias Sagradas</label>
                            <div className="grid grid-cols-2 gap-3">
                                {relics.map(relic => (
                                     <button key={relic} onClick={() => toggleRelic(relic)} className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors border ${config.relics.includes(relic) ? 'bg-primary/20 border-primary/40' : 'bg-foreground/5 hover:bg-foreground/10 border-foreground/10'}`}>
                                        <span className="material-symbols-outlined text-egyptian-gold">{relic === 'Collar Ankh' ? 'star' : 'local_florist'}</span>
                                        <span className="text-xs font-medium">{relic}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                         <div className="mt-auto pt-6 border-t border-foreground/10">
                             <button onClick={handleAddToCart} className="w-full bg-gradient-to-r from-egyptian-gold to-[#B8860B] text-accent-foreground font-black py-4 rounded-lg flex items-center justify-center gap-3 uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                                Añadir al Carrito Galáctico
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

const ConfigInput: React.FC<{label: string, placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}> = ({label, placeholder, value, onChange}) => (
     <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-widest text-egyptian-gold font-bold">{label}</label>
        <input className="w-full bg-background-dark/50 border border-primary/40 rounded-lg px-4 py-3 focus:ring-1 focus:ring-egyptian-gold focus:border-egyptian-gold outline-none text-foreground transition-all" placeholder={placeholder} type="text" value={value} onChange={onChange}/>
    </div>
)

export default ConfiguratorPage;
