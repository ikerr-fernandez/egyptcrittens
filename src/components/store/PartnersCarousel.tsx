import React from 'react';

const LOGOS = [
  { src: "/logos/csic.png", alt: "CSIC" },
  { src: "/logos/shopify.png", alt: "Shopify" },
  { src: "/logos/ministerio.png", alt: "Ministerio de Ciencia" },
  { src: "/logos/parla.png", alt: "Ayuntamiento de Parla" },
  { src: "/logos/correos.png", alt: "Correos" },
  { src: "/logos/cel.png", alt: "Cel" },
];


const PartnersCarousel: React.FC = () => {
  return (
    <section
      className="w-full py-12 md:py-16 bg-inherit"
      aria-label="Carrusel de imágenes">

      <p className="text-center text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 mb-10">
        Nuestros Partners
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee">
          {[...LOGOS, ...LOGOS].map((logo, i) =>
          <div
            key={i}
            className="flex-shrink-0 px-6 sm:px-8 md:px-10 flex items-center justify-center">

              <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110" />

            </div>
          )}
        </div>
      </div>
    </section>);

};

export default PartnersCarousel;