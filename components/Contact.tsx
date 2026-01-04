import React from 'react'
import Button from './Button'

export default function Contact() {

  return (
    <section id="kontakt" className="section bg-blue-600 text-white">
      <div className="container">
        <h2 className="section-title text-white">Kontaktujte nás</h2>
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
              Máte problém s odtokom? Zavolajte nám alebo vyplňte online formulár – sme pripravení pomôcť!
            </p>
            <a 
              href="tel:0948850491" 
              className="text-xl sm:text-2xl font-bold hover:underline inline-block mb-3 sm:mb-4 min-h-[48px] flex items-center justify-center"
            >
              📞 0948 850 491
            </a>
            <p className="text-base sm:text-lg">Volajte nonstop: 0948 850 491</p>
          </div>

          <form action="/contact.php" method="POST" className="bg-white text-gray-800 p-5 sm:p-6 md:p-8 rounded-lg shadow-xl">
            <div className="mb-5 sm:mb-6">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Meno a priezvisko *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[48px]"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[48px]"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Telefón
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent min-h-[48px]"
              />
            </div>

            <div className="mb-5 sm:mb-6">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Správa *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
              />
            </div>

            <Button type="submit" variant="primary">
              Odoslať správu
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

