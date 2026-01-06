import React from 'react'

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
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Pôsobíme v týchto regiónoch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {regions.map((region, index) => (
            <div 
              key={index}
              className="bg-brand-light-blue/10 p-6 sm:p-8 md:p-10 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border-2 border-brand-light-blue/20"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-gray-800">
                {region.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                {region.areas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

