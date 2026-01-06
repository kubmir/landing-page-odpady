import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section 
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center"
      style={{
        backgroundImage: 'url(/hero_background.webp)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl animate-fade-in-up">
            ODPADY24.sk
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl animate-fade-in-delay-1">
            Rýchle riešenie problémov s kanalizáciou
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-lg max-w-3xl mx-auto animate-fade-in-delay-2">
            Čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín – profesionálne, spoľahlivo, za férové ceny.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-3">
            <Button href="#kontakt">Objednať zásah</Button>
            <Button variant="secondary" href="#sluzby">Zistiť viac</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

