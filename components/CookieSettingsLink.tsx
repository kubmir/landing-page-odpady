'use client'

import { resetCookieConsent } from '@/components/CookieConsent'

export default function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => resetCookieConsent()}
      className="text-xs sm:text-sm text-brand-light-blue/70 hover:text-brand-light-blue transition-colors duration-300"
    >
      Nastavenia cookies
    </button>
  )
}

