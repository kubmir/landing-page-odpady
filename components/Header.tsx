'use client'

import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-brand-dark-blue shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-dark-blue/95 backdrop-blur-md shadow-xl' : ''
    }`}>
      <div className="container">
        <nav className="flex justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <a href="/" className="transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo.png" 
                alt="ODPADY24.sk - Čistíme potrubia" 
                className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-300"
                width={200}
                height={60}
              />
            </a>
          </div>
          <div className="hidden md:flex gap-4 lg:gap-6 items-center">
            <a 
              href="#sluzby" 
              className="text-sm lg:text-base text-white hover:text-brand-light-blue transition-all duration-300 relative group"
            >
              Naše služby
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-light-blue group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#vyhody" 
              className="text-sm lg:text-base text-white hover:text-brand-light-blue transition-all duration-300 relative group"
            >
              Prečo si vybrať nás
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-light-blue group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#kontakt" 
              className="text-sm lg:text-base text-white hover:text-brand-light-blue transition-all duration-300 relative group"
            >
              Kontaktujte nás
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-light-blue group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="tel:0903596876" 
              className="text-sm lg:text-base text-brand-light-blue font-semibold hover:text-white whitespace-nowrap px-4 py-2 rounded-lg border border-brand-light-blue/50 hover:bg-brand-light-blue/10 transition-all duration-300"
            >
              +421 903 596 876
            </a>
          </div>
          <div className="md:hidden flex items-center gap-3">
            <a 
              href="tel:0903596876" 
              className="text-base text-brand-light-blue font-semibold hover:text-white whitespace-nowrap transition-colors duration-300"
            >
              0903 596 876
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-light-blue rounded transition-all duration-300 hover:bg-white/10"
              aria-label="Menu"
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-brand-light-blue/20 py-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#sluzby" 
                className="text-base text-white hover:text-brand-light-blue transition-all duration-300 py-2 hover:pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Naše služby
              </a>
              <a 
                href="#vyhody" 
                className="text-base text-white hover:text-brand-light-blue transition-all duration-300 py-2 hover:pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Prečo si vybrať nás
              </a>
              <a 
                href="#kontakt" 
                className="text-base text-white hover:text-brand-light-blue transition-all duration-300 py-2 hover:pl-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

