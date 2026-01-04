import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
  const services = [
    {
      icon: '🌧️',
      title: 'Čistenie rín a odkvapových rúr',
      price: 'od 80 € bez DPH',
      description: 'Profesionálne čistenie odkvapov a drenáže'
    },
    {
      icon: '🔑',
      title: 'Krtkovanie',
      price: 'od 90 € bez DPH',
      description: 'Rýchle odstránenie upchatia'
    },
    {
      icon: '💧',
      title: 'Čistenie kanalizácií vysokotlakovým strojom',
      price: 'od 120 € bez DPH',
      description: 'Účinné čistenie potrubia vysokotlakovou technológiou'
    },
    {
      icon: '📹',
      title: 'Monitoring potrubí',
      price: 'od 120 € bez DPH',
      description: 'Presná diagnostika kamerou'
    }
  ]

  return (
    <section id="sluzby" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Naše služby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              price={service.price}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

