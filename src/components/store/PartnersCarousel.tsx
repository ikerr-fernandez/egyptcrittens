import React from 'react';

const LOGOS = [
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-3-1.png", alt: "Partner 1" },
{ src: "https://centeia.com/wp-content/uploads/2025/02/MIT-1.png", alt: "MIT" },
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-10.png", alt: "Partner 3" },
{ src: "https://centeia.com/wp-content/uploads/2025/04/LOGO-V2-microsoft.png", alt: "Microsoft" },
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-1-1.png", alt: "Partner 5" },
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-4-1.png", alt: "Partner 6" },
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-5-1.png", alt: "Partner 7" },
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-2-1.png", alt: "Partner 8" },
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-7-1.png", alt: "Partner 9" },
{ src: "https://centeia.com/wp-content/uploads/2024/11/LOGO-V2-6-1.png", alt: "Partner 10" },
{ src: "https://centeia.com/wp-content/uploads/2025/02/Mask-group-2.png", alt: "Partner 11" },
{ src: "https://centeia.com/wp-content/uploads/2025/02/image-14-2.png", alt: "Partner 12" },
{ src: "https://centeia.com/wp-content/uploads/2025/08/LOGO-V2-nubion.png", alt: "Nubion" },
{ src: "https://centeia.com/wp-content/uploads/2025/08/LOGO-V2-mailerfind.png", alt: "Mailerfind" }];


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