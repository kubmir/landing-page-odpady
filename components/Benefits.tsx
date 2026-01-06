import React from 'react'
import ScrollReveal from './ScrollReveal'

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
    <section id="vyhody" className="section bg-gradient-to-br from-brand-dark-blue via-[#152a3d] to-brand-dark-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-light-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl"></div>
      </div>
      <div className="container relative z-10">
        <ScrollReveal>
          <h2 className="section-title text-white">Prečo si vybrať nás?</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center p-4 sm:p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-brand-light-blue/30 hover:-translate-y-2 backdrop-blur-sm">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-brand-light-blue transition-colors duration-300">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-brand-light-blue group-hover:text-white transition-colors duration-300">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

