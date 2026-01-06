import React from 'react'

export default function Benefits() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Rýchly zásah',
      description: 'počas pracovných dní'
    },
    {
      icon: '🔧',
      title: 'Moderné technológie',
      description: 'najnovšie vybavenie'
    },
    {
      icon: '💶',
      title: 'Transparentné ceny',
      description: 'bez skrytých poplatkov'
    },
    {
      icon: '👷',
      title: 'Profesionálny prístup',
      description: 'skúsený tím'
    }
  ]

  return (
    <section id="vyhody" className="section bg-brand-dark-blue text-white">
      <div className="container">
        <h2 className="section-title text-white">Prečo si vybrať nás?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-brand-light-blue">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

