import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import StoreCart from '../components/store/StoreCart';

const CheckoutPage: React.FC = () => {
    const { cart, total, clearCart, setPage } = useAppContext();
    const [isSubmitted, setSubmitted] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', address: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.address) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        const newOrderId = `EC-${Math.floor(Math.random() * 9000) + 1000}`;
        setOrderId(newOrderId);
        
        const order = {
            orderId: newOrderId,
            items: cart,
            total,
            customer: formData,
            date: new Date().toISOString(),
        };

        const orders = JSON.parse(localStorage.getItem('egyptCrittensOrders') || '[]');
        orders.push(order);
        localStorage.setItem('egyptCrittensOrders', JSON.stringify(orders));

        clearCart();
        setSubmitted(true);
    };

    if (isSubmitted) {
        return (
             <div className="relative min-h-screen bg-[radial-gradient(circle_at_50%_50%,#2a1736_0%,#0d0712_100%)] text-foreground flex flex-col items-center justify-center p-4">
                 <div className="text-center space-y-10 max-w-2xl">
                     <div className="relative inline-block mx-auto">
                        <div className="absolute inset-0 bg-accent-gold/20 blur-[80px] rounded-full"></div>
                        <div className="relative size-32 md:size-40 bg-accent-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                            <span className="material-symbols-outlined text-6xl md:text-7xl text-accent-foreground leading-none font-bold">check_circle</span>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-accent-gold font-mono text-sm tracking-widest">
                            ORDEN: #{orderId}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold">¡Pedido Confirmado!</h2>
                        <p className="text-xl text-foreground/70 max-w-lg mx-auto leading-relaxed">
                            Tu pedido ha sido registrado. Recibirás una confirmación por correo electrónico en breve.
                        </p>
                    </div>
                     <button onClick={() => setPage('catalog')} className="px-8 py-4 rounded-lg bg-primary text-foreground font-bold hover:bg-primary/80 transition-all flex items-center justify-center gap-2 mx-auto">
                        Volver a la Colección
                        <span className="material-symbols-outlined">home</span>
                    </button>
                 </div>
             </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[radial-gradient(circle_at_50%_50%,#2a1736_0%,#0d0712_100%)] text-foreground">
            <StoreCart />
             <header className="flex items-center justify-between px-6 py-4 md:px-20 border-b border-foreground/5 bg-background-dark/40 backdrop-blur-md sticky top-0 z-50">
                 <div onClick={() => setPage('hero')} className="flex items-center gap-3 cursor-pointer">
                    <div className="size-8 text-accent-gold"><svg fill="currentColor" viewBox="0 0 48 48"><path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" /></svg></div>
                    <h1 className="text-xl font-extrabold tracking-tight">EGYPT CRITTENS</h1>
                </div>
            </header>
            <main className="flex items-center justify-center py-12 px-4">
                <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/30 text-accent-gold text-[10px] font-bold uppercase tracking-widest mb-4">Paso Final</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Finalizar Compra</h2>
                            <p className="text-foreground/60 mt-4 text-lg">Completa tus datos para recibir tu peluche terapéutico.</p>
                        </div>
                        <div className="p-8 rounded-xl space-y-6" style={{ background: 'rgba(42, 23, 54, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(80, 0, 130, 0.3)' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               <CheckoutInput label="Nombre Completo" name="name" value={formData.name} onChange={handleInputChange} icon="person" placeholder="Ej. Amenhotep Silva" />
                               <CheckoutInput label="Correo Electrónico" name="email" value={formData.email} onChange={handleInputChange} icon="alternate_email" placeholder="usuario@galaxia.com" type="email" />
                            </div>
                            <div>
                                <label className="text-foreground/80 text-sm font-semibold ml-1">Dirección de Envío</label>
                                <div className="relative mt-2">
                                    <span className="material-symbols-outlined absolute left-4 top-5 text-primary/60">location_on</span>
                                    <textarea name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-egypt-void/50 border border-primary/30 rounded-lg py-4 pl-12 pr-4 text-foreground focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all outline-none placeholder:text-foreground/20 resize-none" placeholder="Av. de las Pirámides, Sector Giza-X..." rows={3}></textarea>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-foreground/5">
                                <button type="submit" className="flex w-full items-center justify-center gap-3 bg-accent-gold hover:bg-[#b8952d] text-accent-foreground font-extrabold text-lg py-5 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                    <span>Confirmar Pedido</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="lg:col-span-5 hidden lg:block">
                         <div className="p-8 rounded-xl sticky top-24 overflow-hidden" style={{ background: 'rgba(42, 23, 54, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(80, 0, 130, 0.3)' }}>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-accent-gold">shopping_basket</span> Resumen del Carrito
                            </h3>
                             <div className="space-y-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <div className="size-16 rounded-lg bg-egypt-void overflow-hidden border border-foreground/5"><img className="w-full h-full object-cover" src={item.image} alt={item.name} /></div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm">{item.name}</h4>
                                            <p className="text-xs text-foreground/50">x{item.quantity}</p>
                                            <span className="text-accent-gold font-bold text-sm">{item.price.toFixed(2)} €</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="space-y-3 pt-6 border-t border-foreground/5">
                                    <div className="flex justify-between text-sm"><span className="text-foreground/50">Subtotal</span><span>{total.toFixed(2)} €</span></div>
                                    <div className="flex justify-between text-sm"><span className="text-foreground/50">Envío Interestelar</span><span className="text-emerald-400">Gratis</span></div>
                                    <div className="flex justify-between text-xl font-extrabold pt-3 border-t border-foreground/10 text-accent-gold"><span>Total</span><span>{total.toFixed(2)} €</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const CheckoutInput: React.FC<{label: string, icon: string, [key: string]: any}> = ({ label, icon, ...props }) => (
    <div className="flex flex-col gap-2">
        <label className="text-foreground/80 text-sm font-semibold ml-1">{label}</label>
        <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">{icon}</span>
            <input className="w-full bg-egypt-void/50 border border-primary/30 rounded-lg py-4 pl-12 pr-4 text-foreground focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all outline-none placeholder:text-foreground/20" {...props} />
        </div>
    </div>
);

export default CheckoutPage;
