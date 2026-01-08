import React from 'react'
import ScrollReveal from './ScrollReveal'

interface PriceItem {
  service: string
  priceWithoutVat: string
  priceWithVat: string
}

export default function PriceList() {
  const prices: PriceItem[] = [
    {
      service: 'Vysokotlakové čistenie do 12m',
      priceWithoutVat: '120 €',
      priceWithVat: '147,60 €'
    },
    {
      service: 'Vysokotlakové čistenie nad 12m / každý ďalší meter',
      priceWithoutVat: '9 €',
      priceWithVat: '11,07 €'
    },
    {
      service: 'Čistenie elektro-mechanickým prístrojom do vzdialenosti 10m',
      priceWithoutVat: '90 €',
      priceWithVat: '110,70 €'
    },
    {
      service: 'Čistenie elektro-mechanickým prístrojom nad 10m čistenia / každý ďalší meter',
      priceWithoutVat: '9 €',
      priceWithVat: '11,07 €'
    },
    {
      service: 'TV monitoring tlačnou kamerou do 10m / hodinu',
      priceWithoutVat: '120 €',
      priceWithVat: '147,60 €'
    },
    {
      service: 'TV monitoring tlačnou kamerou nad 10m / každý ďalší meter',
      priceWithoutVat: '7 €',
      priceWithVat: '8,61 €'
    },
    {
      service: 'Vysokotlakové čistenie rín a odkvapov / jednopodlažný dom',
      priceWithoutVat: '80 €',
      priceWithVat: '98,40 €'
    },
    {
      service: 'Vysokotlakové čistenie dažďové zvody',
      priceWithoutVat: '60 €',
      priceWithVat: '73,80 €'
    },
    {
      service: 'Doprava do 50km',
      priceWithoutVat: '25 €',
      priceWithVat: '30,75 €'
    },
    {
      service: 'Doprava nad 50km',
      priceWithoutVat: 'cena dohodou',
      priceWithVat: 'cena dohodou'
    }
  ]

  return (
    <section id="cennik" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col items-center mb-8 sm:mb-10">
            <h2 className="section-title">Cenník služieb</h2>
            <p className="text-center text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Cenník služieb / pracovné dni v čase od 7:00h - 16:30h
            </p>
            <a
              href="/CENNIK.pdf"
              download="CENNIK.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark-blue text-white font-semibold rounded-lg hover:bg-[#0a1620] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 group"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Stiahnuť cenník v PDF</span>
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-lg rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                  <thead className="bg-gradient-to-r from-brand-dark-blue to-[#152a3d]">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-bold text-white uppercase tracking-wider"
                      >
                        Typ služby / zásahu
                      </th>
                      <th
                        scope="col"
                        className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold text-white uppercase tracking-wider"
                      >
                        Cena bez DPH
                      </th>
                      <th
                        scope="col"
                        className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-bold text-white uppercase tracking-wider"
                      >
                        Cena s DPH (23%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {prices.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors duration-200"
                      >
                        <td className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-900 font-medium">
                          {item.service}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-center text-sm sm:text-base text-brand-dark-blue font-semibold">
                          {item.priceWithoutVat}
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-center text-sm sm:text-base text-brand-orange font-semibold">
                          {item.priceWithVat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark-blue mb-3 sm:mb-4">
              Príplatky
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">•</span>
                <span>Havarijné výjazdy, práce po 16:00, víkendy a sviatky</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">•</span>
                <span>Dimenzie kanalizácie nad 300mm</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">•</span>
                <span>V závislosti od zanesenia kanalizácie</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange mr-2">•</span>
                <span>Hodinová sadzba</span>
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

