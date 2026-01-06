'use client'

import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-brand-dark-blue shadow-md sticky top-0 z-50">
      <div className="container">
        <nav className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="ODPADY24.sk - Čistíme potrubia" 
              className="h-12 sm:h-14 md:h-16 w-auto"
              width={200}
              height={60}
            />
          </div>
          <div className="hidden md:flex gap-4 lg:gap-6 items-center">
            <a href="#sluzby" className="text-sm lg:text-base text-white hover:text-brand-light-blue transition-colors">
              Naše služby
            </a>
            <a href="#vyhody" className="text-sm lg:text-base text-white hover:text-brand-light-blue transition-colors">
              Prečo si vybrať nás
            </a>
            <a href="#kontakt" className="text-sm lg:text-base text-white hover:text-brand-light-blue transition-colors">
              Kontaktujte nás
            </a>
            <a href="tel:0903596876" className="text-sm lg:text-base text-brand-light-blue font-semibold hover:text-white whitespace-nowrap">
              +421 903 596 876
            </a>
          </div>
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:0903596876" className="text-base text-brand-light-blue font-semibold hover:text-white whitespace-nowrap">
              0903 596 876
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-light-blue rounded"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-light-blue/20 py-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#sluzby" 
                className="text-base text-white hover:text-brand-light-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Naše služby
              </a>
              <a 
                href="#vyhody" 
                className="text-base text-white hover:text-brand-light-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Prečo si vybrať nás
              </a>
              <a 
                href="#kontakt" 
                className="text-base text-white hover:text-brand-light-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

