import React from 'react'
import ScrollReveal from './ScrollReveal'

export default function Regions() {
  const regions = [
    {
      title: 'Pobočka stredné Slovensko',
      areas: 'Banská Bystrica · Zvolen · Krupina · Šahy · Detva · Levice · Žiar nad Hronom'
    },
    {
      title: 'Pobočka západné Slovensko',
      areas: 'Bratislava · Nitra · Trnava · Senec · Pezinok'
    }
  ]

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Pôsobíme v týchto regiónoch</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {regions.map((region, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div 
                className="bg-brand-light-blue/10 p-6 sm:p-8 md:p-10 rounded-xl text-center shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-brand-light-blue/20 hover:border-brand-light-blue/40 group hover:-translate-y-2"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-gray-800 group-hover:text-brand-dark-blue transition-colors duration-300">
                  {region.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {region.areas}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

