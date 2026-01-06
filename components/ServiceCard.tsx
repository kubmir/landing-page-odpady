import React from 'react'
import ScrollReveal from './ScrollReveal'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  price: string
  description: string
  delay?: number
}

export default function ServiceCard({ icon, title, price, description, delay = 0 }: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 text-center h-full flex flex-col group border border-gray-100 hover:border-brand-light-blue/30 hover:-translate-y-2">
        <div className="mb-3 sm:mb-4 flex justify-center text-4xl sm:text-5xl text-brand-light-blue group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800 leading-tight group-hover:text-brand-dark-blue transition-colors duration-300">{title}</h3>
        <p className="text-base sm:text-lg md:text-xl font-semibold text-brand-light-blue mb-3 sm:mb-4 group-hover:text-brand-orange transition-colors duration-300">{price}</p>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{description}</p>
      </div>
    </ScrollReveal>
  )
}

