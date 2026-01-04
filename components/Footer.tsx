import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="container">
        <div className="text-center px-4">
          <p className="text-base sm:text-lg font-bold mb-2">ODPADY24.sk</p>
          <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Rýchle riešenie problémov s kanalizáciou</p>
          <p className="text-sm sm:text-base text-gray-400">
            <a href="tel:0948850491" className="hover:text-white transition-colors min-h-[48px] inline-flex items-center justify-center">
              0948 850 491
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

