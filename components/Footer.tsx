import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-white py-4 sm:py-6">
      <div className="container">
        <div className="text-center px-4">
          <p className="text-xs text-brand-light-blue/70 mt-4 pt-4 border-t border-brand-light-blue/20">
            © {new Date().getFullYear()} ODPADY24.sk. Všetky práva vyhradené.
          </p>
          <p className="text-xs text-brand-light-blue/70 mt-2">
            Powered by <span className="text-brand-light-blue">Biz x Dev s. r. o.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

