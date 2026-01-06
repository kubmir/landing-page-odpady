import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section 
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/hero_background.png)'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
            ODPADY24.sk
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Rýchle riešenie problémov s kanalizáciou
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
            Čistenie kanalizácií, krtkovanie, monitoring potrubí a čistenie rín – profesionálne, spoľahlivo, za férové ceny.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button href="#kontakt">Objednať zásah</Button>
            <Button variant="secondary" href="#sluzby">Zistiť viac</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

