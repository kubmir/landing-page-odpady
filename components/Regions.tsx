import React from 'react'

export default function Regions() {
  const region = {
    title: 'Pobočka stredné Slovensko',
    areas: 'Banská Bystrica · Zvolen · Krupina · Šahy'
  }

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Pôsobíme v týchto regiónoch</h2>
        <div className="flex justify-center">
          <div className="bg-blue-50 p-8 sm:p-10 md:p-12 rounded-lg text-center max-w-2xl w-full shadow-md">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">{region.title}</h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">{region.areas}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

