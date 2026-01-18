'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CONSENT_COOKIE_NAME = 'odpady24_cookie_consent'
const CONSENT_EXPIRY_DAYS = 365
const OPEN_EVENT_NAME = 'cookieConsentOpen'

export type ConsentStatus = 'pending' | 'accepted' | 'rejected'

interface CookieConsentProps {
  onConsentChange?: (consent: ConsentStatus) => void
}

export function getConsentStatus(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending'
  
  const consent = localStorage.getItem(CONSENT_COOKIE_NAME)
  if (consent === 'accepted') return 'accepted'
  if (consent === 'rejected') return 'rejected'
  return 'pending'
}

export function setConsentStatus(status: 'accepted' | 'rejected'): void {
  if (typeof window === 'undefined') return
  
  localStorage.setItem(CONSENT_COOKIE_NAME, status)
  
  // Also set a cookie for server-side access if needed
  const expiryDate = new Date()
  expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS)
  document.cookie = `${CONSENT_COOKIE_NAME}=${status}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
  
  // Update Google Consent Mode v2
  updateGoogleConsentMode(status === 'accepted')
  
  // Dispatch custom event for other components to react
  window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: status }))
}

export function openCookieConsent(): void {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(OPEN_EVENT_NAME))
}

export function resetCookieConsent(): void {
  if (typeof window === 'undefined') return

  localStorage.removeItem(CONSENT_COOKIE_NAME)
  // Expire the cookie as well
  document.cookie = `${CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`

  // Update Google Consent Mode v2 (default denied until user chooses)
  updateGoogleConsentMode(false)

  // Notify listeners + reopen banner
  window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: 'pending' as const }))
  openCookieConsent()
}

function updateGoogleConsentMode(granted: boolean): void {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': granted ? 'granted' : 'denied',
      'ad_storage': granted ? 'granted' : 'denied',
      'ad_user_data': granted ? 'granted' : 'denied',
      'ad_personalization': granted ? 'granted' : 'denied',
    })
  }
}

function clearGACookies(): void {
  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const cookieName = cookie.split('=')[0].trim()
    if (cookieName.startsWith('_ga') || cookieName.startsWith('_gid') || cookieName.startsWith('_gat')) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`
    }
  }
}

export default function CookieConsent({ onConsentChange }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getConsentStatus()
    if (consent === 'pending') {
      setShowBanner(true)
      // Delay visibility for animation
      setTimeout(() => setIsVisible(true), 100)
    }
  }, [])

  useEffect(() => {
    const handleOpen = () => {
      setShowBanner(true)
      // Delay visibility for animation
      setTimeout(() => setIsVisible(true), 50)
    }

    window.addEventListener(OPEN_EVENT_NAME, handleOpen)
    return () => window.removeEventListener(OPEN_EVENT_NAME, handleOpen)
  }, [])

  const handleAccept = () => {
    setConsentStatus('accepted')
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
    onConsentChange?.('accepted')
  }

  const handleReject = () => {
    setConsentStatus('rejected')
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
    onConsentChange?.('rejected')
    
    // Clear any existing GA cookies when rejected
    clearGACookies()
  }

  if (!showBanner) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-brand-dark-blue border-t border-gray-700 shadow-2xl">
        <div className="container py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Text content */}
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">
                Používame cookies
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Táto webová stránka používa súbory cookies na analytické účely (Google Analytics), 
                ktoré nám pomáhajú zlepšovať naše služby. Tieto cookies zbierajú anonymné údaje 
                o tom, ako návštevníci používajú našu stránku.{' '}
                <Link 
                  href="/ochrana-osobnych-udajov"
                  className="text-brand-light-blue hover:underline"
                >
                  Viac informácií
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-3 text-sm font-medium text-gray-300 bg-transparent border border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200 order-2 sm:order-1"
              >
                Odmietnuť
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 text-sm font-medium text-white bg-brand-orange rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg order-1 sm:order-2"
              >
                Prijať všetky
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
