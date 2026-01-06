import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-dark-blue to-black text-white py-6 sm:py-8 border-t border-brand-light-blue/10">
      <div className="container">
        <div className="text-center px-4">
          <p className="text-xs sm:text-sm text-brand-light-blue/70 mt-4 pt-4 border-t border-brand-light-blue/20 transition-colors duration-300">
            © {new Date().getFullYear()} ODPADY24.sk. Všetky práva vyhradené.
          </p>
          <p className="text-xs sm:text-sm text-brand-light-blue/70 mt-2">
            Powered by <span className="text-brand-light-blue hover:text-white transition-colors duration-300">Biz x Dev s. r. o.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

