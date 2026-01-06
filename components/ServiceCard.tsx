import React from 'react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  price: string
  description: string
}

export default function ServiceCard({ icon, title, price, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center h-full flex flex-col">
      <div className="mb-3 sm:mb-4 flex justify-center text-4xl sm:text-5xl text-brand-light-blue">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800 leading-tight">{title}</h3>
      <p className="text-base sm:text-lg md:text-xl font-semibold text-brand-light-blue mb-3 sm:mb-4">{price}</p>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  )
}

